# Environment Variables

Set these in your `.env.local` when running locally or in your hosting provider:

- GEMINI_API_KEY (or NEXT_PUBLIC_GEMINI_API_KEY)
- ADMIN_PIN
- APPS_SCRIPT_WEBAPP_URL
- CLOUDINARY_CLOUD_NAME
- CLOUDINARY_API_KEY
- CLOUDINARY_API_SECRET

Notes:

- `ADMIN_PIN` must match the Apps Script `ADMIN_PIN`.
- If you expose `NEXT_PUBLIC_GEMINI_API_KEY`, be aware it is visible to the client; prefer server-side only when possible.
