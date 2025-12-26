const fs = require('fs');
const path = require('path');
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const VIDEO_DIR = path.join(process.cwd(), 'public/final/videos');
const OUTPUT_FILE = path.join(process.cwd(), 'data/video-urls.ts');

async function getFiles(dir) {
  const dirents = await fs.promises.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(dirents.map((dirent) => {
    const res = path.resolve(dir, dirent.name);
    return dirent.isDirectory() ? getFiles(res) : res;
  }));
  return Array.prototype.concat(...files);
}

async function uploadVideos() {
  try {
    console.log("Checking Cloudinary config...");
    if (!process.env.CLOUDINARY_API_KEY || !process.env.CLOUDINARY_API_SECRET) {
      throw new Error("Cloudinary API Key or Secret missing in .env");
    }

    // Try to load existing results to skip already uploaded files
    let existingResults = {};
    if (fs.existsSync(OUTPUT_FILE)) {
        try {
            const content = fs.readFileSync(OUTPUT_FILE, 'utf8');
            // Extract the JSON object using regex
            const match = content.match(/VIDEO_URLS = ({[\s\S]*?}) as const;/);
            if (match && match[1]) {
                // Parse the JSON (need to be careful if it's not strict JSON, but our script generates strict JSON)
                // However, the generated file has unquoted keys potentially? No, JSON.stringify produces quoted keys.
                existingResults = JSON.parse(match[1]);
                console.log(`Loaded ${Object.keys(existingResults).length} existing video URLs.`);
            }
        } catch (e) {
            console.warn("Could not parse existing video-urls.ts, starting fresh.");
        }
    }

    const allFiles = await getFiles(VIDEO_DIR);
    const mp4Files = allFiles.filter(f => f.toLowerCase().endsWith('.mp4'));
    const results = existingResults; // Start with existing

    console.log(`Found ${mp4Files.length} videos.`);

    for (const file of mp4Files) {
      const relativePath = path.relative(VIDEO_DIR, file);
      // Create a key that looks like "folder/filename" (no extension)
      // Normalize path separators to forward slashes for consistency
      const key = relativePath.replace(/\\/g, '/').replace(/\.mp4$/i, '');

      if (results[key] && results[key].startsWith('http')) {
          console.log(`Skipping ${relativePath} (already uploaded)`);
          continue;
      }

      console.log(`Processing: ${relativePath}...`);

      try {
        const stats = fs.statSync(file);
        const fileSizeInBytes = stats.size;
        const fileSizeInMB = fileSizeInBytes / (1024 * 1024);

        let result;
        if (fileSizeInMB > 45) {
            console.log(`  File is ${fileSizeInMB.toFixed(2)} MB. Using chunked upload (timeout 20m, 10MB chunks)...`);
            // Wrap upload_large in a Promise to ensure we get the result
            try {
                result = await new Promise((resolve, reject) => {
                    const timeout = setTimeout(() => {
                        reject(new Error("Upload timed out after 20 minutes"));
                    }, 1200000); // 20 minutes

                    cloudinary.uploader.upload_large(file, {
                        resource_type: "video",
                        public_id: `passiflora/${key}`,
                        overwrite: true,
                        chunk_size: 10000000 // 10MB chunks - REQUIRED for files > 100MB
                    }, (error, res) => {
                        clearTimeout(timeout);
                        if (error) reject(error);
                        else resolve(res);
                    });
                });
            } catch (err) {
                console.error(`  Error uploading ${relativePath} (large):`, err.message);
                result = null; // Skip this file
            }
        } else {
            console.log(`  File is ${fileSizeInMB.toFixed(2)} MB. Using standard upload...`);
            try {
                result = await cloudinary.uploader.upload(file, {
                    resource_type: "video",
                    public_id: `passiflora/${key}`,
                    overwrite: true
                });
            } catch (err) {
                 console.error(`  Error uploading ${relativePath} (standard):`, err.message);
                 result = null;
            }
        }

        if (result && result.secure_url) {
            results[key] = result.secure_url;
            console.log(`  Uploaded ${relativePath} -> ${result.secure_url}`);
        } else {
             if (result) console.error(`  Upload completed but secure_url is missing for ${relativePath}. Full result:`, JSON.stringify(result, null, 2));
        }
      } catch (e) {
        console.error(`  Failed to upload ${relativePath}:`, e.message);
      }
    }

    const fileContent = `/**
 * Mapping of local video paths (relative to public/final/videos, without extension)
 * to their hosted Cloudinary URLs.
 */
export const VIDEO_URLS = ${JSON.stringify(results, null, 2)} as const;

export type VideoKey = keyof typeof VIDEO_URLS;
`;

    // Ensure data directory exists
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
    }

    fs.writeFileSync(OUTPUT_FILE, fileContent);
    console.log(`Successfully wrote video URLs to ${OUTPUT_FILE}`);

  } catch (error) {
    console.error("Error in upload script:", error);
    process.exit(1);
  }
}

uploadVideos();
