<script setup>
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import destinationBackground from '../../assets/images/backgrounds/minimal-blue-world-map-banner.webp'
import destinationBackgroundMobile from '../../assets/images/backgrounds/minimal-blue-world-map-banner-mobile.webp'
import destinations from '../../data/destinations'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
</script>

<template>
  <section
    id="destinations"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    aria-labelledby="destinations-title"
  >
    <img
      class="absolute inset-0 z-0 size-full object-cover object-center"
      :src="destinationBackground"
      :srcset="`${destinationBackgroundMobile} 900w, ${destinationBackground} 1600w`"
      sizes="100vw"
      alt=""
      width="2172"
      height="724"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wider text-[#EE2329] sm:text-sm">
            {{ dictionary.homeFoundation.destinations.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="destinations-title"
          class="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl"
          :text="dictionary.homeFoundation.destinations.title"
        />
        <p v-reveal class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
          {{ dictionary.homeFoundation.destinations.intro }}
        </p>
      </header>

      <ul class="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-7 xl:gap-3">
        <li v-for="destination in destinations" :key="destination.id" v-reveal>
          <RouterLink
            class="group block h-full overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#313493] motion-reduce:transform-none motion-reduce:transition-none"
            :to="{ name: `${locale}-work-visa` }"
            :aria-label="`${dictionary.homeFoundation.destinations.exploreDestination} ${dictionary.destinationsPage.countryNames[destination.id]}`"
          >
            <div class="relative overflow-hidden ">
              <img
                v-reveal:image-left
                class="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                :src="destination.image"
                :srcset="`${destination.imageMobile} 480w, ${destination.image} 900w`"
                sizes="(max-width: 639px) 46vw, (max-width: 767px) 31vw, (max-width: 1279px) 23vw, 14vw"
                :alt="`${dictionary.destinationsPage.imageAltPrefix} ${dictionary.destinationsPage.countryNames[destination.id]}`"
                width="640"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="flex min-h-11 items-center justify-between gap-1.5 px-2 py-2 sm:px-2.5">
              <div class="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <img
                  class="size-6 shrink-0 rounded-full object-cover"
                  :src="destination.flagImage"
                  alt=""
                  width="24"
                  height="24"
                  loading="lazy"
                  decoding="async"
                  aria-hidden="true"
                />
                <span class="truncate text-xs font-semibold text-[#313493] sm:text-sm">
                  {{ dictionary.destinationsPage.cardCountryNames[destination.id] || dictionary.destinationsPage.countryNames[destination.id] }}
                </span>
              </div>
              <span
                class="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-[#EE2329] text-white transition duration-300 group-hover:translate-x-0.5 group-hover:bg-[#B91C1C] group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
                aria-hidden="true"
              >
                <ArrowRight :size="14" :stroke-width="2.5" />
              </span>
            </div>
          </RouterLink>
        </li>
      </ul>

      <div class="mt-7 flex justify-center sm:mt-8">
        <RouterLink
          v-reveal
          class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-[#EE2329] bg-[#EE2329] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:border-[#B91C1C] hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] sm:text-base"
          :to="{ name: `${locale}-destinations` }"
        >
          {{ dictionary.homeFoundation.destinations.viewAllDestinations }}
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
