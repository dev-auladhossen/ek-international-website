<script setup>
import { computed } from 'vue'
import { ArrowUpRight, ChevronRight, House } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.png'
import GetInTouchSection from '../components/contact/GetInTouchSection.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { usePageContent } from '../composables/usePageContent'
import { officeLocations } from '../data/contact'

const { dictionary, locale } = usePageContent()
const pageCopy = computed(() => dictionary.value.pages.contact)
const contactCopy = computed(() => dictionary.value.homeFoundation.contact)
const primaryOffice = officeLocations[0]
const mapUrl = primaryOffice.mapUrl
const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(primaryOffice.address)}&output=embed&t=m`
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10" aria-labelledby="contact-page-title">
      <img class="absolute inset-0 size-full object-cover object-left" :src="heroBackground" alt="" aria-hidden="true" width="2172" height="724" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-[#17245C]/45" aria-hidden="true"></div>
      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">{{ contactCopy.heroEyebrow || contactCopy.eyebrow }}</p>
        <h1 id="contact-page-title" v-reveal class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">{{ pageCopy.heading }}</h1>
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">{{ contactCopy.intro }}</p>
      </div>
    </section>

    <GetInTouchSection />

    <section class="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="contact-map-title">
      <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
        <header class="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ contactCopy.eyebrow }}</p>
            <h2 id="contact-map-title" v-reveal class="mt-2 font-serif text-2xl font-bold text-slate-900 sm:text-3xl">{{ contactCopy.mapTitle }}</h2>
            <p v-reveal class="mt-2 text-sm text-slate-600 sm:text-base">{{ contactCopy.mapAddress }}</p>
          </div>
          <a v-reveal class="inline-flex min-h-11 w-fit items-center justify-center gap-2 rounded-full bg-[#EE2329] px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#C91D24] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none" :href="mapUrl" target="_blank" rel="noopener noreferrer">
            {{ contactCopy.openMaps }} <ArrowUpRight :size="17" aria-hidden="true" />
          </a>
        </header>
        <div v-reveal:image-left class="overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_12px_32px_rgba(15,23,42,0.12)]">
          <iframe class="h-[300px] w-full sm:h-[380px] lg:h-[460px]" :src="mapEmbedUrl" :title="contactCopy.mapFrameTitle" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  </main>
  <SiteFooter />
</template>
