import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const galleryRoot = path.resolve('src/assets/images/gallery')
const files = (await fs.readdir(galleryRoot))
  .filter((file) => file.toLowerCase().endsWith('.png'))
  .sort((a, b) => a.localeCompare(b))

function slugify(value) {
  return value
    .replace(/\.png$/i, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
}

for (const file of files) {
  const source = path.join(galleryRoot, file)
  const name = slugify(file)
  for (const [suffix, width] of [['', 1200], ['-mobile', 700]]) {
    const output = path.join(galleryRoot, `${name}${suffix}.webp`)
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output)
  }
}

const outputFiles = files.length * 2
console.log(`Optimized ${files.length} gallery photos into ${outputFiles} WebP assets.`)
