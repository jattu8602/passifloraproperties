import fs from "fs";
import path from "path";

export type LocationRow = {
  state: string;
  city: string;
  displayName?: string;
  regionTag?: string;
  mapZoom?: string;
};

export function loadLocationsFromRepo(): LocationRow[] {
  try {
    const csvPath = path.join(process.cwd(), "Docs", "admin_sheet", "Locations.csv");
    const content = fs.readFileSync(csvPath, "utf8");
    const lines = content.split(/\r?\n/).filter(Boolean);
    const header = lines.shift();
    if (!header) return [];
    const cols = header.split(",");
    const out: LocationRow[] = [];
    for (const line of lines) {
      const parts = splitCsv(line);
      const row: any = {};
      cols.forEach((c, i) => (row[c] = parts[i] ?? ""));
      out.push(row as LocationRow);
    }
    return out;
  } catch {
    return [];
  }
}

function splitCsv(line: string): string[] {
  // naive CSV split; sufficient for our simple values
  return line.split(",").map((s) => s.trim());
}
