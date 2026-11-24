import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const galleryRoot = path.resolve('src/assets/images/gallery')
const targets = [
  'Airport Team Departure Group Photo.png',
  'CIDB Malaysia Training Classroom.png',
  'Yellow Polo Team in a Modern Office.png',
]

for (const sourceName of targets) {
  const source = path.join(galleryRoot, sourceName)
  const baseName = sourceName
    .replace(/\.png$/i, '')
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')

  for (const [suffix, width, quality] of [['', 1200, 75], ['-mobile', 700, 72]]) {
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality, effort: 6 })
      .toFile(path.join(galleryRoot, `${baseName}${suffix}.webp`))
  }
}

console.log(`Optimized ${targets.length} homepage carousel images for desktop and mobile.`)
