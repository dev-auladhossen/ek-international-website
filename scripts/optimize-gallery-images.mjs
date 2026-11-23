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

const optimizedFiles = []
for (const file of files) {
  const source = path.join(galleryRoot, file)
  const name = slugify(file)
  const desktopOutput = path.join(galleryRoot, `${name}.webp`)
  const mobileOutput = path.join(galleryRoot, `${name}-mobile.webp`)
  const outputsAlreadyExist = await Promise.all([desktopOutput, mobileOutput].map(async (output) => {
    try {
      await fs.access(output)
      return true
    } catch {
      return false
    }
  }))
  if (outputsAlreadyExist.every(Boolean)) continue

  for (const [suffix, width] of [['', 1200], ['-mobile', 700]]) {
    const output = path.join(galleryRoot, `${name}${suffix}.webp`)
    await sharp(source)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(output)
  }
  optimizedFiles.push(file)
}

console.log(`Optimized ${optimizedFiles.length} new gallery photos into ${optimizedFiles.length * 2} responsive WebP assets.`)
