<script setup>
import { computed, nextTick, onBeforeUnmount, ref, watch } from 'vue'
import { Building2, ChevronLeft, ChevronRight, Expand, GraduationCap, House, Images, Plane, Share2, UsersRound, X, ZoomIn, ZoomOut } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import SiteFooter from '../components/layout/SiteFooter.vue'
import RevealHeading from '../components/common/RevealHeading.vue'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.webp'
import heroBackgroundMobile from '../assets/images/backgrounds/Blue Flight Path Wallpaper-mobile.webp'
import { usePageContent } from '../composables/usePageContent'
import { galleryPhotos } from '../data/gallery'

const { dictionary, locale } = usePageContent()
const selectedCategory = ref('all')
const activePhotoIndex = ref(-1)
const closeButton = ref(null)
const dialogElement = ref(null)
const zoomed = ref(false)
const shareNotice = ref('')
const slideDirection = ref('slide-next')
let returnFocusElement = null
let previousBodyOverflow = ''
const copy = computed(() => dictionary.value.galleryPage)
const pageCopy = computed(() => dictionary.value.pages.gallery)
const categories = [
  { id: 'all', label: 'allPhotos', icon: Images },
  { id: 'teams', label: 'teams', icon: UsersRound },
  { id: 'training', label: 'training', icon: GraduationCap },
  { id: 'office', label: 'office', icon: Building2 },
  { id: 'travel', label: 'travel', icon: Plane },
]
const visiblePhotos = computed(() =>
  selectedCategory.value === 'all'
    ? galleryPhotos
    : galleryPhotos.filter((photo) => photo.category === selectedCategory.value),
)
const activePhoto = computed(() => visiblePhotos.value[activePhotoIndex.value] ?? null)
const modalOpen = computed(() => activePhotoIndex.value >= 0 && Boolean(activePhoto.value))

function openPhoto(index, event) {
  activePhotoIndex.value = index
  returnFocusElement = event.currentTarget
}

function closePhoto() {
  if (document.fullscreenElement === dialogElement.value) {
    document.exitFullscreen?.().catch(() => {})
  }
  activePhotoIndex.value = -1
  zoomed.value = false
  shareNotice.value = ''
}

function showPreviousPhoto() {
  if (!visiblePhotos.value.length) return
  slideDirection.value = 'slide-previous'
  zoomed.value = false
  activePhotoIndex.value = (activePhotoIndex.value - 1 + visiblePhotos.value.length) % visiblePhotos.value.length
}

function showNextPhoto() {
  if (!visiblePhotos.value.length) return
  slideDirection.value = 'slide-next'
  zoomed.value = false
  activePhotoIndex.value = (activePhotoIndex.value + 1) % visiblePhotos.value.length
}

async function toggleFullscreen() {
  try {
    if (document.fullscreenElement === dialogElement.value) {
      await document.exitFullscreen?.()
    } else {
      await dialogElement.value?.requestFullscreen?.()
    }
  } catch {
    // Fullscreen may be unavailable in embedded or restricted browser contexts.
  }
}

async function sharePhoto() {
  const caption = copy.value[activePhoto.value.captionKey]
  const shareData = { title: pageCopy.value.heading, text: caption, url: window.location.href }
  try {
    if (navigator.share) {
      await navigator.share(shareData)
    } else if (navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(`${caption} — ${window.location.href}`)
      shareNotice.value = copy.value.shareCopied
      window.setTimeout(() => { shareNotice.value = '' }, 2200)
    }
  } catch {
    // Ignore a cancelled native share action.
  }
}

function handleModalKeydown(event) {
  if (event.key === 'Escape') {
    event.preventDefault()
    closePhoto()
  } else if (event.key === 'ArrowLeft') {
    event.preventDefault()
    showPreviousPhoto()
  } else if (event.key === 'ArrowRight') {
    event.preventDefault()
    showNextPhoto()
  } else if (event.key === 'Tab') {
    const controls = document.querySelectorAll('[data-gallery-modal] button:not([disabled])')
    const first = controls[0]
    const last = controls[controls.length - 1]
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault()
      last?.focus()
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault()
      first?.focus()
    }
  }
}

watch(modalOpen, async (isOpen) => {
  if (isOpen) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', handleModalKeydown)
    await nextTick()
    closeButton.value?.focus()
    return
  }

  document.body.style.overflow = previousBodyOverflow
  window.removeEventListener('keydown', handleModalKeydown)
  await nextTick()
  returnFocusElement?.focus()
})

onBeforeUnmount(() => {
  document.body.style.overflow = previousBodyOverflow
  window.removeEventListener('keydown', handleModalKeydown)
})
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10" aria-labelledby="gallery-page-title">
      <img class="absolute inset-0 size-full object-cover object-left" :src="heroBackground" :srcset="`${heroBackgroundMobile} 900w, ${heroBackground} 1600w`" sizes="100vw" alt="" aria-hidden="true" width="2172" height="724" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-[#17245C]/50" aria-hidden="true"></div>
      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">{{ copy.eyebrow }}</p>
        <RevealHeading as="h1" id="gallery-page-title" class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl" :text="pageCopy.heading" />
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">{{ pageCopy.description }}</p>
      </div>
    </section>

    <section class="bg-[#F6F8FC] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" aria-labelledby="gallery-photos-title">
      <div class="mx-auto max-w-[1680px] min-[1920px]:max-w-[1920px] min-[2560px]:max-w-[2200px]">
        <header class="mx-auto mb-7 max-w-3xl text-center sm:mb-9">
          <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.collectionEyebrow }}</p>
          <RevealHeading id="gallery-photos-title" class="mt-2 font-serif text-2xl font-bold leading-tight text-[#313493] sm:text-3xl lg:text-4xl" :text="copy.collectionTitle" />
          <p v-reveal class="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{{ copy.collectionIntro }}</p>
        </header>

        <div class="mb-8 flex flex-wrap items-center justify-center gap-2.5 sm:mb-10 sm:gap-3" role="group" :aria-label="copy.filterLabel">
          <button
            v-for="category in categories"
            :key="category.id"
            type="button"
            class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none sm:px-5"
            :class="selectedCategory === category.id ? 'bg-[#313493] text-white shadow-md' : 'bg-white text-slate-600 shadow-sm hover:bg-red-50 hover:text-[#EE2329]'"
            :aria-pressed="selectedCategory === category.id"
            @click="selectedCategory = category.id"
          >
            <component :is="category.icon" :size="19" :stroke-width="2" aria-hidden="true" />
            {{ copy.categories[category.label] }}
          </button>
        </div>

        <TransitionGroup name="gallery" tag="ul" class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6 xl:grid-cols-4" :aria-label="copy.photoListLabel">
          <li v-for="(photo, index) in visiblePhotos" :key="photo.id" v-reveal class="min-w-0">
            <figure class="group relative isolate aspect-[4/3] overflow-hidden rounded-xl border border-blue-100 bg-[#DCE8F8] shadow-[0_8px_24px_rgba(49,52,147,0.08)] transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_34px_rgba(49,52,147,0.2)] motion-reduce:transform-none motion-reduce:transition-none">
              <button type="button" class="absolute inset-0 size-full cursor-zoom-in text-left outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#313493]" :aria-label="copy.openPhotoLabel.replace('{caption}', copy[photo.captionKey])" @click="openPhoto(index, $event)">
              <img
                class="size-full object-cover transition-transform duration-700 ease-out group-hover:-translate-x-2 group-hover:scale-[1.04] group-focus:-translate-x-2 group-focus:scale-[1.04] motion-reduce:transform-none motion-reduce:transition-none"
                :src="photo.image"
                :srcset="`${photo.imageMobile} ${photo.mobileWidth}w, ${photo.image} ${photo.width}w`"
                sizes="(max-width: 639px) 92vw, (max-width: 1023px) 46vw, (max-width: 1279px) 31vw, 24vw"
                :alt="copy[photo.imageAltKey]"
                width="1200"
                height="900"
                :loading="index < 4 ? 'eager' : 'lazy'"
                decoding="async"
              />
              <div class="pointer-events-none absolute inset-0 translate-x-full bg-gradient-to-l from-[#101743]/90 via-[#26368A]/80 to-[#313493]/45 opacity-0 shadow-[-24px_0_55px_rgba(49,52,147,0.3)] transition-all duration-700 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 motion-reduce:transition-none" aria-hidden="true"></div>
              <span class="pointer-events-none absolute inset-x-5 bottom-5 translate-x-5 text-center text-sm font-semibold leading-6 text-white opacity-0 drop-shadow-md transition-all duration-500 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus:translate-x-0 group-focus:opacity-100 motion-reduce:transition-none sm:inset-x-6 sm:bottom-6 sm:text-base sm:leading-7" aria-hidden="true">
                {{ copy[photo.captionKey] }}
              </span>
              </button>
              <figcaption class="sr-only">{{ copy[photo.captionKey] }}</figcaption>
            </figure>
          </li>
        </TransitionGroup>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="lightbox">
        <div v-if="modalOpen" class="fixed inset-0 z-[100] flex items-center justify-center bg-black/80" @click.self="closePhoto">
          <section ref="dialogElement" data-gallery-modal role="dialog" aria-modal="true" :aria-label="copy.modalLabel" class="lightbox-panel relative flex size-full flex-col items-center justify-center overflow-hidden px-3 pb-24 pt-16 text-white sm:px-12 sm:pb-28 sm:pt-16" @click.self="closePhoto">
            <p class="absolute left-4 top-4 z-20 rounded-md bg-black/35 px-2.5 py-1.5 text-sm font-semibold tracking-wide text-white sm:left-7 sm:top-6 sm:text-base" aria-live="polite">{{ activePhotoIndex + 1 }} / {{ visiblePhotos.length }}</p>

            <div class="absolute right-3 top-3 z-20 flex items-center gap-1.5 sm:right-6 sm:top-5 sm:gap-2">
              <button type="button" class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-black/35 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-10" :aria-label="copy.fullscreen" @click="toggleFullscreen">
                <Expand :size="21" aria-hidden="true" />
              </button>
              <button type="button" class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-black/35 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-10" :aria-label="zoomed ? copy.zoomOut : copy.zoomIn" :aria-pressed="zoomed" @click="zoomed = !zoomed">
                <ZoomOut v-if="zoomed" :size="21" aria-hidden="true" />
                <ZoomIn v-else :size="21" aria-hidden="true" />
              </button>
              <button type="button" class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-black/35 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-10" :aria-label="copy.sharePhoto" @click="sharePhoto">
                <Share2 :size="20" aria-hidden="true" />
              </button>
              <button ref="closeButton" type="button" class="inline-flex size-9 cursor-pointer items-center justify-center rounded-md bg-black/35 text-white transition duration-200 hover:bg-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:size-10" :aria-label="copy.closeModal" @click="closePhoto">
                <X :size="23" aria-hidden="true" />
              </button>
            </div>

            <button type="button" class="absolute left-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/25 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:left-7 sm:size-12" :aria-label="copy.previousPhoto" @click="showPreviousPhoto">
              <ChevronLeft :size="32" aria-hidden="true" />
            </button>

            <div class="flex min-h-0 max-h-full w-full items-center justify-center overflow-hidden">
              <Transition :name="slideDirection" mode="out-in">
                <div :key="activePhoto.id" class="slide-image-frame flex max-h-full max-w-full items-center justify-center overflow-hidden">
                  <img class="max-h-[72svh] max-w-[82vw] object-contain transition-transform duration-300 ease-out motion-reduce:transition-none sm:max-h-[78svh]" :class="zoomed ? 'scale-150 cursor-zoom-out' : 'scale-100 cursor-zoom-in'" :src="activePhoto.image" :srcset="`${activePhoto.imageMobile} ${activePhoto.mobileWidth}w, ${activePhoto.image} ${activePhoto.width}w`" sizes="(max-width: 639px) 82vw, 82vw" :alt="copy[activePhoto.imageAltKey]" :width="activePhoto.width" :height="activePhoto.height" decoding="async" />
                </div>
              </Transition>
            </div>

            <button type="button" class="absolute right-3 top-1/2 z-20 inline-flex size-10 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/25 text-white transition duration-200 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none sm:right-7 sm:size-12" :aria-label="copy.nextPhoto" @click="showNextPhoto">
              <ChevronRight :size="32" aria-hidden="true" />
            </button>

            <footer class="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/75 via-black/40 to-transparent px-4 pb-5 pt-12 text-center text-white sm:px-8 sm:pb-7 sm:pt-16">
              <p class="text-base font-bold leading-6 drop-shadow sm:text-lg sm:leading-7">{{ copy[activePhoto.captionKey] }}</p>
              <p class="mt-1 text-sm font-medium text-white/75">{{ copy.categories[activePhoto.category] }}</p>
              <p v-if="shareNotice" class="mt-2 text-xs font-semibold text-white/85" role="status">{{ shareNotice }}</p>
            </footer>
          </section>
        </div>
      </Transition>
    </Teleport>
  </main>
  <SiteFooter />
</template>

<style scoped>
.gallery-enter-active,
.gallery-leave-active,
.gallery-move {
  transition: opacity 300ms ease, transform 300ms ease;
}

.gallery-enter-from,
.gallery-leave-to {
  opacity: 0;
  transform: translateX(18px);
}

.gallery-leave-active {
  position: absolute;
}

.lightbox-enter-active,
.lightbox-leave-active {
  transition: opacity 250ms ease;
}

.lightbox-enter-active .lightbox-panel,
.lightbox-leave-active .lightbox-panel {
  transition: transform 300ms ease, opacity 300ms ease;
}

.lightbox-enter-from,
.lightbox-leave-to {
  opacity: 0;
}

.lightbox-enter-from .lightbox-panel,
.lightbox-leave-to .lightbox-panel {
  opacity: 0;
  transform: translateY(12px) scale(0.985);
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-previous-enter-active,
.slide-previous-leave-active {
  transition: transform 220ms ease, opacity 220ms ease;
}

.slide-next-enter-from { opacity: 0; transform: translateX(28px); }
.slide-next-leave-to { opacity: 0; transform: translateX(-28px); }
.slide-previous-enter-from { opacity: 0; transform: translateX(-28px); }
.slide-previous-leave-to { opacity: 0; transform: translateX(28px); }

.slide-image-frame {
  max-height: 100%;
}

@media (prefers-reduced-motion: reduce) {
  .gallery-enter-active,
  .gallery-leave-active,
  .gallery-move,
  .lightbox-enter-active,
  .lightbox-leave-active,
  .lightbox-enter-active .lightbox-panel,
  .lightbox-leave-active .lightbox-panel,
  .slide-next-enter-active,
  .slide-next-leave-active,
  .slide-previous-enter-active,
  .slide-previous-leave-active {
    transition-duration: 0.01ms;
  }
}
</style>
