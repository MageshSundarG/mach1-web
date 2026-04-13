import { copyFile, access } from "node:fs/promises";
import { constants } from "node:fs";
import path from "node:path";

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

try {
  await access(indexPath, constants.F_OK);
  await copyFile(indexPath, fallbackPath);
  console.log("Created SPA fallback: dist/404.html");
} catch (error) {
  console.error("Unable to create SPA fallback.", error);
  process.exitCode = 1;
}
