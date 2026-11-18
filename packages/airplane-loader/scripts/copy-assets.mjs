import { copyFile, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const packageRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const mediaDirectory = resolve(packageRoot, "dist/assets");
await mkdir(mediaDirectory, { recursive: true });
await copyFile(
  resolve(packageRoot, "src/assets/plane-loader-reference.mp4"),
  resolve(mediaDirectory, "plane-loader-reference.mp4"),
);
await copyFile(resolve(packageRoot, "src/assets/airplane.png"), resolve(mediaDirectory, "airplane.png"));
await copyFile(resolve(packageRoot, "src/assets/sky-background.jpg"), resolve(mediaDirectory, "sky-background.jpg"));
await copyFile(resolve(packageRoot, "src/styles.css"), resolve(packageRoot, "dist/styles.css"));
