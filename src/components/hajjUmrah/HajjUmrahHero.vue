<script setup>
import { computed } from 'vue'
import { ChevronRight, House, Layers3 } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import heroImage from '../../assets/images/hajj&umrah/Masjid al-Haram at Sunset-5.webp'
import heroImageMobile from '../../assets/images/hajj&umrah/Masjid al-Haram at Sunset-5-mobile.webp'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const pageCopy = computed(() => dictionary.value.pages.hajjUmrah)
const copy = computed(() => dictionary.value.hajjUmrahPage)
</script>

<template>
  <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-8 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-10 lg:min-h-[calc(100svh-138px)] lg:px-8" aria-labelledby="hajj-umrah-page-title">
    <img class="absolute inset-0 size-full object-cover object-center" :src="heroImage" :srcset="`${heroImageMobile} 800w, ${heroImage} 1400w`" sizes="100vw" :alt="copy.heroImageAlt" width="1672" height="940" loading="eager" fetchpriority="high" decoding="async" />
    <div class="absolute inset-0 bg-[#101743]/80" aria-hidden="true"></div>
    <div class="absolute inset-0 bg-gradient-to-r from-[#101743]/60 via-transparent to-transparent" aria-hidden="true"></div>

    <div class="relative mx-auto flex w-full max-w-5xl flex-col items-center text-center">
      <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
        <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
          <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
        </RouterLink>
        <ChevronRight :size="15" aria-hidden="true" />
        <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
      </nav>
      <p v-reveal class="inline-flex items-center gap-2 rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm"><Layers3 :size="18" :stroke-width="2.5" aria-hidden="true" />{{ copy.eyebrow }}</p>
      <h1 id="hajj-umrah-page-title" v-reveal class="mt-4 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:text-4xl lg:text-5xl">{{ copy.title }}</h1>
      <p v-reveal class="mt-5 max-w-3xl text-sm leading-6 text-white/90 sm:text-lg sm:leading-8">{{ copy.intro }}</p>
      <figure v-reveal class="mt-6 w-full max-w-3xl rounded-2xl border border-white/25 bg-white/10 px-5 py-4 shadow-sm backdrop-blur-sm sm:mt-8 sm:px-8 sm:py-6">
        <blockquote class="text-sm font-medium italic leading-6 text-white sm:text-base sm:leading-7">
          “{{ copy.verse }}”
        </blockquote>
        <figcaption class="mt-3 text-sm font-bold text-[#EE2329] sm:text-base">
          — {{ copy.verseSource }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
