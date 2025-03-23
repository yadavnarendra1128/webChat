import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Convert __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const source = path.join(__dirname, "dist");
const destination = path.join(__dirname, "..", "dist");

if (fs.existsSync(source)) {
  fs.rmSync(destination, { recursive: true, force: true }); // Remove existing dist if needed
  fs.renameSync(source, destination); // Move dist
  console.log("✅ Moved 'dist' folder successfully!");
} else {
  console.error("❌ 'dist' folder not found!");
}
