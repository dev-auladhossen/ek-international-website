<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { ArrowRight, ChevronLeft, ChevronRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { usePageContent } from '../../composables/usePageContent'
import heroSlides from '../../data/heroSlides'

const { dictionary, locale } = usePageContent()
const activeIndex = ref(0)
const pointerInside = ref(false)
const focusInside = ref(false)
const pageVisible = ref(true)
const reducedMotion = ref(false)
const activeSlide = computed(() => heroSlides[activeIndex.value])
const renderedSlides = computed(() => [activeSlide.value])
const isPaused = computed(
  () =>
    pointerInside.value ||
    focusInside.value ||
    !pageVisible.value ||
    reducedMotion.value,
)

let autoplayTimer
let motionPreference

function clearAutoplay() {
  if (!autoplayTimer) return
  window.clearTimeout(autoplayTimer)
  autoplayTimer = undefined
}

function scheduleAutoplay() {
  clearAutoplay()
  if (isPaused.value) return

  autoplayTimer = window.setTimeout(() => {
    activeIndex.value = (activeIndex.value + 1) % heroSlides.length
    scheduleAutoplay()
  }, 2000)
}

function goToSlide(index) {
  activeIndex.value = (index + heroSlides.length) % heroSlides.length
  scheduleAutoplay()
}

function moveSlide(direction) {
  goToSlide(activeIndex.value + direction)
}

function routeTarget(routeKey, hash) {
  return {
    name: `${locale.value}-${routeKey}`,
    hash: hash || undefined,
  }
}

function getSlideLabel(index) {
  return dictionary.value.homeFoundation.carousel.slideLabel
    .replace('{current}', String(index + 1))
    .replace('{total}', String(heroSlides.length))
}

function handleFocusOut(event) {
  if (!event.currentTarget.contains(event.relatedTarget)) {
    focusInside.value = false
  }
}

function handleVisibilityChange() {
  pageVisible.value = document.visibilityState === 'visible'
}

function handleMotionPreferenceChange(event) {
  reducedMotion.value = event.matches
}

watch(isPaused, (paused) => {
  if (paused) clearAutoplay()
  else scheduleAutoplay()
})

onMounted(() => {
  motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)')
  reducedMotion.value = motionPreference.matches
  motionPreference.addEventListener('change', handleMotionPreferenceChange)
  pageVisible.value = document.visibilityState === 'visible'
  document.addEventListener('visibilitychange', handleVisibilityChange)
  scheduleAutoplay()
})

onBeforeUnmount(() => {
  clearAutoplay()
  document.removeEventListener('visibilitychange', handleVisibilityChange)
  motionPreference?.removeEventListener('change', handleMotionPreferenceChange)
})
</script>

<template>
  <section
    class="relative isolate min-h-[620px] overflow-hidden bg-blue-950 text-white sm:min-h-[560px] lg:min-h-[540px] xl:min-h-[600px]"
    role="region"
    aria-roledescription="carousel"
    aria-labelledby="hero-title"
    :aria-label="dictionary.homeFoundation.carousel.regionLabel"
    @mouseenter="pointerInside = true"
    @mouseleave="pointerInside = false"
    @focusin="focusInside = true"
    @focusout="handleFocusOut"
  >
    <TransitionGroup
      tag="div"
      class="absolute inset-0"
      appear
      enter-active-class="transition-opacity duration-800 ease-in-out motion-reduce:transition-none"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-700 ease-in-out motion-reduce:transition-none"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <article
        v-for="slide in renderedSlides"
        :key="slide.id"
        class="absolute inset-0"
        role="group"
        aria-roledescription="slide"
        :aria-label="getSlideLabel(slide.copyIndex)"
        :aria-hidden="slide.id !== activeSlide.id"
        :inert="slide.id !== activeSlide.id"
      >
        <img
          class="absolute inset-0 size-full object-cover"
          :class="slide.imagePosition"
          :src="slide.image"
          :alt="dictionary.homeFoundation.carousel[slide.altKey]"
          :width="slide.width"
          :height="slide.height"
          :loading="slide.copyIndex === 0 ? 'eager' : 'lazy'"
          :fetchpriority="slide.copyIndex === 0 ? 'high' : 'auto'"
          decoding="async"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-950/75 to-blue-950/30 sm:to-blue-950/15"
          aria-hidden="true"
        ></div>
        <div
          class="relative mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pb-20 pt-12 sm:min-h-[560px] sm:px-12 lg:min-h-[540px] lg:px-16 xl:min-h-[600px]"
        >
          <TransitionGroup
            tag="div"
            class="max-w-full sm:max-w-[70%] md:max-w-[58%] lg:max-w-[48%] xl:max-w-[46%]"
            appear
            enter-active-class="transition-all duration-700 ease-out motion-reduce:transition-none"
            enter-from-class="translate-y-8 opacity-0 motion-reduce:transform-none"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition-all duration-500 ease-in motion-reduce:transition-none"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-3 opacity-0 motion-reduce:transform-none"
          >
            <p
              key="eyebrow"
              class="delay-100 inline-flex rounded-sm bg-red-600 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white sm:text-sm"
            >
              {{ dictionary.homeFoundation.carousel.slides[slide.copyIndex].eyebrow }}
            </p>
            <h1
              key="heading"
              :id="slide.id === activeSlide.id ? 'hero-title' : undefined"
              class="delay-200 mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              {{ dictionary.homeFoundation.carousel.slides[slide.copyIndex].heading }}
            </h1>
            <p
              key="description"
              class="delay-300 mt-4 max-w-xl text-base leading-7 text-white/95 sm:mt-5 sm:text-lg sm:leading-8"
            >
              {{ dictionary.homeFoundation.carousel.slides[slide.copyIndex].description }}
            </p>
            <div
              key="ctas"
              class="delay-500 mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap"
            >
              <RouterLink
                class="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:text-base"
                :to="routeTarget(slide.primaryRouteKey, slide.primaryHash)"
              >
                {{ dictionary.homeFoundation.carousel.slides[slide.copyIndex].primaryCta }}
                <ArrowRight :size="18" aria-hidden="true" />
              </RouterLink>
              <RouterLink
                class="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-md border-2 border-white/90 bg-blue-950/20 px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none sm:text-base"
                :to="routeTarget('contact')"
              >
                {{ dictionary.homeFoundation.carousel.slides[slide.copyIndex].secondaryCta }}
              </RouterLink>
            </div>
          </TransitionGroup>
        </div>
      </article>
    </TransitionGroup>

    <div
      class="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex items-center justify-between px-4 pb-4 sm:px-6 sm:pb-5 lg:inset-y-0 lg:px-6 lg:pb-0 xl:px-8"
    >
      <button
        class="pointer-events-auto inline-flex size-14 cursor-pointer items-center justify-center rounded-sm bg-transparent text-white drop-shadow-md transition-colors hover:bg-blue-950/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none lg:absolute lg:left-6 lg:top-1/2 lg:-translate-y-1/2 xl:left-8"
        type="button"
        :aria-label="dictionary.homeFoundation.carousel.previous"
        @click="moveSlide(-1)"
      >
        <ChevronLeft :size="42" :stroke-width="2.25" aria-hidden="true" />
      </button>

      <div
        class="pointer-events-auto absolute left-1/2 flex -translate-x-1/2 items-center gap-0.5 sm:gap-1 lg:bottom-5"
        role="group"
        :aria-label="dictionary.homeFoundation.carousel.controlsLabel"
      >
        <button
          v-for="(slide, index) in heroSlides"
          :key="slide.id"
          class="inline-flex size-11 cursor-pointer items-center justify-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          type="button"
          :aria-label="`${dictionary.homeFoundation.carousel.showSlide} ${index + 1}: ${dictionary.homeFoundation.carousel.slides[index].heading}`"
          :aria-pressed="activeIndex === index"
          @click="goToSlide(index)"
        >
          <span
            class="size-3.5 rounded-full border-2 border-white transition-colors motion-reduce:transition-none"
            :class="activeIndex === index ? 'bg-red-600' : 'bg-white/70'"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      <button
        class="pointer-events-auto inline-flex size-14 cursor-pointer items-center justify-center rounded-sm bg-transparent text-white drop-shadow-md transition-colors hover:bg-blue-950/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white motion-reduce:transition-none lg:absolute lg:right-6 lg:top-1/2 lg:-translate-y-1/2 xl:right-8"
        type="button"
        :aria-label="dictionary.homeFoundation.carousel.next"
        @click="moveSlide(1)"
      >
        <ChevronRight :size="42" :stroke-width="2.25" aria-hidden="true" />
      </button>
    </div>
  </section>
</template>
