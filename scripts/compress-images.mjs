/**
 * One-time image compression script.
 * Compresses images in public/guinness, public/achievemnts2025, and public/gallery
 * that are larger than a threshold, IN-PLACE.
 * Run: node scripts/compress-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, rename, unlink } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

const DIRS = [
  { dir: 'public/guinness',       quality: 82, maxWidth: 1600 },
  { dir: 'public/achievemnts2025', quality: 78, maxWidth: 1200 },
  { dir: 'public/gallery',         quality: 80, maxWidth: 1400 },
];

const SKIP_BELOW_KB = 80; // skip files already small

async function compressDir({ dir, quality, maxWidth }) {
  const absDir = path.join(ROOT, dir);
  let files;
  try { files = await readdir(absDir); } catch { console.log(`  ⚠️  Dir not found: ${dir}`); return; }

  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext)) continue;

    const filePath = path.join(absDir, file);
    const { size } = await stat(filePath);
    const sizeKB = size / 1024;

    if (sizeKB < SKIP_BELOW_KB) {
      console.log(`  ⏭️  Skipping ${file} (${sizeKB.toFixed(0)} KB — already small)`);
      continue;
    }

    const tmpPath = filePath + '.tmp';
    try {
      let pipeline = sharp(filePath).rotate(); // auto-rotate from EXIF

      // get metadata to check dimensions
      const meta = await sharp(filePath).metadata();
      if (meta.width && meta.width > maxWidth) {
        pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true });
      }

      if (ext === '.png') {
        await pipeline.png({ quality, compressionLevel: 9 }).toFile(tmpPath);
      } else {
        await pipeline.jpeg({ quality, mozjpeg: true, progressive: true }).toFile(tmpPath);
      }

      const { size: newSize } = await stat(tmpPath);
      const saving = (((size - newSize) / size) * 100).toFixed(0);
      console.log(`  ✅ ${file}: ${(size/1024).toFixed(0)} KB → ${(newSize/1024).toFixed(0)} KB (${saving}% saved)`);

      await unlink(filePath);
      await rename(tmpPath, filePath);
    } catch (err) {
      console.error(`  ❌ Failed ${file}:`, err.message);
      try { await unlink(tmpPath); } catch {}
    }
  }
}

console.log('🗜️  SmartWheels Image Compressor\n');
for (const config of DIRS) {
  console.log(`📁 ${config.dir}`);
  await compressDir(config);
  console.log('');
}
console.log('✨ Done!');
