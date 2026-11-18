import fs from 'node:fs/promises'
import path from 'node:path'
import sharp from 'sharp'

const root = process.cwd()
const sourceRoot = path.join(
  root,
  'verification/image-originals/pre-responsive/src/assets/images',
)
const outputRoot = path.join(root, 'src/assets/images')

const webpAssets = [
  ...[
    'Professional Office Handshake Lounge.jpg',
    'International Travel Office Reception.jpg',
    'Global Career Consultation Meeting.jpg',
  ].map((file) => ({ source: `hero/${file}`, maxWidth: 1600, mobileWidth: 800 })),
  ...[
    'aus', 'cambodia', 'france', 'hungary', 'italy', 'malaysia', 'poland',
    'portugal', 'qatar', 'romania', 'saudi-arabia', 'serbia', 'singapore',
    'uae', 'uk', 'usa', 'turkey',
  ].map((file) => ({
    source: `optimized/destinations/${file}.jpg`,
    maxWidth: 900,
    mobileWidth: 480,
  })),
  {
    source: 'destinations/06_Thailand.jpg',
    maxWidth: 900,
    mobileWidth: 480,
  },
  ...[
    'Blue Flight Path Wallpaper.jpg',
    'Global Careers Take Flight.jpg',
    'minimal-blue-world-map-banner.jpg',
    'worldwide-visa-assistance-banner.png.jpg',
    'Sky Blue World Map Background.jpg',
    'ethereal-blue-wave-panorama.jpg',
    'Minimal FAQ Waves with Question Mark.jpg',
    'Blue Gradient World Map with Red Wave.jpg',
  ].map((file) => ({
    source: `backgrounds/${file}`,
    maxWidth: 1600,
    mobileWidth: 900,
    output: file === 'worldwide-visa-assistance-banner.png.jpg'
      ? 'backgrounds/worldwide-visa-assistance-banner.webp'
      : undefined,
  })),
  ...[
    'Masjid al-Haram at Sunset-5.jpg',
    'Golden Sunset at the Kaaba-1.jpg',
    'Grand Mosque Pilgrimage Corridor-4.jpg',
    'Sunset at the Prophet’s Mosque-3.jpg',
  ].map((file) => ({
    source: `hajj&umrah/${file}`,
    maxWidth: 1600,
    mobileWidth: 800,
  })),
  ...[
    'Confident Construction Worker on Site-1.jpg',
    'Confident Factory Supervisor at Work-2.jpg',
    'Friendly Facility Cleaner with Cart-3.jpg',
    'Elegant Waiter Presenting Garnished Dish-4.jpg',
    'petrol_pump_attendant.jpg',
    'plantation_worker.jpg',
    'warehouse_general_worker.jpg',
  ].map((file) => ({
    source: `jobs/${file}`,
    maxWidth: 1000,
    mobileWidth: 640,
  })),
  ...[
    'Abdul Wadud-Director.jpeg',
    'Hasnat Jahan Suchi-CEO.jpeg',
    'Kasfiya Khanum- MD.jpeg',
    'S.K Faruk Rohani- Chairman.jpeg',
    'SB Sulaiman Khan- Accounts Manager.jpeg',
    'Ananto Islam-Marketing Officer.jpeg',
    'MD. Jahangir Alom Khan-Marketing Manager.jpeg',
    'Chan Mia-Assistant Director.jpeg',
  ].map((file) => ({
    source: `team/${file}`,
    maxWidth: 640,
    mobileWidth: 360,
  })),
  {
    source: 'optimized/office/ek-modern-reception.webp',
    maxWidth: 1600,
    mobileWidth: 800,
  },
  {
    source: 'optimized/hero/consultation-meeting.webp',
    maxWidth: 1600,
    mobileWidth: 800,
  },
  {
    source: 'services/Sunlit Kaaba and Clock Tower.jpg',
    maxWidth: 1600,
    mobileWidth: 900,
  },
  ...[
    'overseas-employment.png',
    'passport-processing.png',
    'travel-visa-processing.png',
    'air-ticket-booking.png',
    'umrah-visa-processing.png',
    'hajj-registration.png',
  ].map((file) => ({
    source: `services/${file}`,
    maxWidth: 752,
    mobileWidth: 480,
    quality: 90,
  })),
  {
    source: 'backgrounds/Thoughtful Bearded Man Cutout.png',
    maxWidth: 640,
    output: 'backgrounds/Thoughtful Bearded Man Cutout.webp',
  },
  {
    source: 'logo/logo-white-bg.png',
    maxWidth: 480,
    output: 'logo/logo-white-bg.webp',
  },
]

const smallFlags = [
  'Italy.png',
  'Malaysia.png',
  'Singapore.png',
  'UAE.png',
  'Saudi-Arabia.png',
  'Cambodia.png',
  'Thailand.png',
  'turkey.png',
].map((file) => ({ source: `destinations/${file}`, width: 128 }))

async function ensureParent(file) {
  await fs.mkdir(path.dirname(file), { recursive: true })
}

async function writeWebp({ source, maxWidth, mobileWidth, output, quality = 84 }) {
  const input = path.join(sourceRoot, source)
  const desktopOutput = path.join(
    outputRoot,
    output ?? source.replace(/\.[^.]+$/, '.webp'),
  )
  await ensureParent(desktopOutput)
  await sharp(input)
    .rotate()
    .resize({ width: maxWidth, withoutEnlargement: true })
    .webp({ quality, alphaQuality: 100, effort: 6 })
    .toFile(desktopOutput)

  let written = [desktopOutput]
  if (mobileWidth) {
    const mobileOutput = desktopOutput.replace(/\.webp$/i, '-mobile.webp')
    await sharp(input)
      .rotate()
      .resize({ width: mobileWidth, withoutEnlargement: true })
      .webp({ quality: Math.min(quality, 90), alphaQuality: 100, effort: 6 })
      .toFile(mobileOutput)
    written.push(mobileOutput)
  }
  return written
}

async function writePngVariant({ source, width }, suffix) {
  const input = path.join(sourceRoot, source)
  const extension = path.extname(source)
  const output = path.join(
    outputRoot,
    source.slice(0, -extension.length) + suffix + extension,
  )
  await ensureParent(output)
  await sharp(input)
    .resize({ width, withoutEnlargement: true })
    .png({ compressionLevel: 9, adaptiveFiltering: true })
    .toFile(output)
  return output
}

const outputs = []
for (const asset of webpAssets) outputs.push(...await writeWebp(asset))
for (const asset of smallFlags) {
  outputs.push(await writePngVariant(asset, '-small'))
}

const bytes = await Promise.all(outputs.map(async (file) => (await fs.stat(file)).size))
console.log(
  `Prepared ${outputs.length} image assets (${(bytes.reduce((sum, size) => sum + size, 0) / 1024 / 1024).toFixed(2)} MB).`,
)
