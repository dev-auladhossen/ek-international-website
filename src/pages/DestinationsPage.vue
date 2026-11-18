<script setup>
import { computed } from 'vue'
import { ArrowRight, ChevronRight, Globe, Headset, House, UsersRound } from '@lucide/vue'
import RevealHeading from '../components/common/RevealHeading.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { RouterLink } from 'vue-router'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.png'
import destinationBackground from '../assets/images/backgrounds/minimal-blue-world-map-banner.png'
import visaAssistanceBackground from '../assets/images/backgrounds/worldwide-visa-assistance-banner.png.png'
import { usePageContent } from '../composables/usePageContent'
import { destinationDirectory } from '../data/destinations'
import { headerContact } from '../data/contact'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.destinationsPage)
const pageCopy = computed(() => dictionary.value.pages.destinations)
const visaHighlights = [
  { id: 'worldwide', key: 'worldwideVisaAssistance', icon: Globe },
  { id: 'personalized', key: 'personalizedGuidance', icon: UsersRound },
  { id: 'support', key: 'dedicatedVisaSupport', icon: Headset },
]
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section
      class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10"
      aria-labelledby="destinations-page-title"
    >
      <img
        class="absolute inset-0 size-full object-cover object-left"
        :src="heroBackground"
        alt=""
        width="2172"
        height="724"
        fetchpriority="high"
        decoding="async"
        aria-hidden="true"
      />
      <div class="absolute inset-0 bg-[#17245C]/45" aria-hidden="true"></div>

      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">
          {{ copy.eyebrow }}
        </p>
        <RevealHeading
          as="h1"
          id="destinations-page-title"
          class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl"
          :text="copy.title"
        />
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-8 lg:text-lg">
          {{ copy.intro }}
        </p>
      </div>
    </section>

    <section class="relative isolate overflow-hidden bg-sky-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" :aria-label="copy.eyebrow">
      <img class="absolute inset-0 size-full object-cover object-center" :src="destinationBackground" alt="" width="2172" height="724" loading="lazy" decoding="async" aria-hidden="true" />
      <div class="relative mx-auto max-w-[1680px] min-[1920px]:max-w-[1920px] min-[2560px]:max-w-[2200px]">
        <header v-reveal class="mb-6 flex items-center justify-center gap-3 sm:mb-8">
          <span class="h-0.5 w-8 bg-[#EE2329] sm:w-10" aria-hidden="true"></span>
          <p class="text-center text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.popularEyebrow }}</p>
          <span class="h-0.5 w-8 bg-[#EE2329] sm:w-10" aria-hidden="true"></span>
        </header>
        <ul class="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5 lg:gap-4">
          <li v-for="destination in destinationDirectory" :key="destination.id" v-reveal class="min-w-0">
            <article class="group h-full overflow-hidden rounded-2xl border border-sky-100 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
              <div class="overflow-hidden">
                <img
                  v-reveal:image-left
                  class="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                  :src="destination.image"
                  :alt="`${copy.imageAltPrefix} ${copy.countryNames[destination.id]}`"
                  width="640"
                  height="400"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div class="flex min-h-14 items-center justify-center gap-2 px-2.5 py-2 sm:min-h-16 sm:gap-2.5 sm:px-3">
                <img
                  class="size-8 shrink-0 rounded-full border border-slate-200 object-cover shadow-sm sm:size-9"
                  :src="destination.flagImage"
                  alt=""
                  width="36"
                  height="36"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <h2 class="min-w-0 text-center text-xs font-bold leading-5 text-[#101743] sm:text-sm lg:text-base">
                  {{ copy.cardCountryNames[destination.id] || copy.countryNames[destination.id] }}
                </h2>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <section class="px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16" aria-labelledby="visa-processing-title">
      <div class="relative isolate mx-auto min-h-[430px] max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem] overflow-hidden rounded-2xl border border-blue-100 bg-[#EAF6FF] shadow-sm transition-shadow duration-300 hover:shadow-lg motion-reduce:transition-none sm:min-h-[450px] lg:min-h-[410px]">
        <img class="absolute inset-0 size-full object-cover object-[68%_center]" :src="visaAssistanceBackground" alt="" width="1774" height="887" loading="lazy" decoding="async" aria-hidden="true" />
        <div class="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/35 lg:from-white/95 lg:via-white/80 lg:to-transparent" aria-hidden="true"></div>

        <div class="relative flex min-h-[430px] items-center px-5 py-8 sm:min-h-[450px] sm:px-8 lg:min-h-[410px] lg:px-9">
          <div class="max-w-[43rem]">
            <div v-reveal class="flex items-center gap-3">
              <span class="h-0.5 w-8 bg-[#EE2329] sm:w-10" aria-hidden="true"></span>
              <p class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.visaWorldwideEyebrow }}</p>
              <span class="h-0.5 w-8 bg-[#EE2329] sm:w-10" aria-hidden="true"></span>
            </div>
            <h2 id="visa-processing-title" v-reveal class="mt-3 text-3xl font-extrabold leading-[1.02] tracking-tight text-[#313493] sm:text-4xl lg:text-5xl">
              <span class="block">{{ copy.visaWorldwideTitleLead }}</span>
              <span class="block text-[#EE2329]">{{ copy.visaWorldwideTitleAccent }}</span>
            </h2>
            <p v-reveal class="mt-4 max-w-[34rem] text-sm leading-5 text-slate-700 sm:text-base sm:leading-6">
              {{ copy.visaWorldwideDescription }}
            </p>

            <ul class="mt-5 grid max-w-[39rem] gap-3 sm:grid-cols-3 sm:gap-0">
              <li v-for="(highlight, index) in visaHighlights" :key="highlight.id" v-reveal class="relative flex items-center gap-2.5 sm:pr-3 sm:pl-3 first:sm:pl-0">
                <span class="flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[#313493]">
                  <component :is="highlight.icon" :size="24" :stroke-width="2.2" aria-hidden="true" />
                </span>
                <span class="text-xs font-bold leading-4 text-[#313493] sm:text-[13px]">{{ copy[highlight.key] }}</span>
                <span v-if="index < visaHighlights.length - 1" class="absolute right-0 top-1/2 hidden h-10 -translate-y-1/2 border-r border-blue-200 sm:block" aria-hidden="true"></span>
              </li>
            </ul>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <RouterLink
                v-reveal
                class="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#EE2329] px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none"
                :to="{ name: `${locale}-contact` }"
              >
                <Headset :size="19" aria-hidden="true" />
                {{ copy.contactVisaTeam }}
                <ArrowRight :size="18" aria-hidden="true" />
              </RouterLink>
              <a
                v-reveal
                class="group inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[#313493] bg-white/80 px-5 py-2.5 text-sm font-bold text-[#313493] transition duration-300 hover:-translate-y-0.5 hover:bg-[#313493] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#313493] motion-reduce:transform-none motion-reduce:transition-none"
                :href="headerContact.whatsappHref"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="`${copy.whatsappUs}: ${headerContact.whatsappDisplay}`"
              >
                <svg class="size-5 shrink-0 fill-[#20B85A] group-hover:fill-white" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.42ZM12.09 21.8a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>
                {{ copy.whatsappUs }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <SiteFooter />
</template>
