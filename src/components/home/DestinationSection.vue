<script setup>
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import destinationBackground from '../../assets/images/backgrounds/minimal-blue-world-map-banner.png'
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
      alt=""
      width="2172"
      height="724"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-red-600 sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wider text-red-700 sm:text-sm">
            {{ dictionary.homeFoundation.destinations.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-red-600 sm:w-12" aria-hidden="true"></span>
        </div>
        <h2
          id="destinations-title"
          class="mt-3 text-2xl font-bold leading-tight tracking-tight text-blue-950 sm:text-3xl lg:text-4xl"
        >
          {{ dictionary.homeFoundation.destinations.title }}
        </h2>
        <p class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
          {{ dictionary.homeFoundation.destinations.intro }}
        </p>
      </header>

      <ul class="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:grid-cols-3 sm:gap-4 md:grid-cols-4 xl:grid-cols-7 xl:gap-3">
        <li v-for="destination in destinations" :key="destination.id">
          <RouterLink
            class="group block h-full overflow-hidden rounded-xl border border-sky-100 bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 motion-reduce:transform-none motion-reduce:transition-none"
            :to="{ name: `${locale}-work-visa` }"
            :aria-label="`${dictionary.homeFoundation.destinations.exploreDestination} ${locale === 'bn' ? destination.nameBn : destination.nameEn}`"
          >
            <div class="overflow-hidden">
              <img
                class="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105 group-focus-visible:scale-105 motion-reduce:transition-none"
                :src="destination.image"
                :alt="locale === 'bn' ? destination.altBn : destination.altEn"
                width="640"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="flex min-h-11 items-center justify-between gap-1.5 px-2 py-2 sm:px-2.5">
              <div class="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <span class="shrink-0 text-base leading-none sm:text-lg" aria-hidden="true">
                  {{ destination.flag }}
                </span>
                <span class="truncate text-xs font-semibold text-blue-950 sm:text-sm">
                  {{ locale === 'bn' ? destination.shortNameBn : destination.shortNameEn }}
                </span>
              </div>
              <span
                class="inline-flex size-6 shrink-0 items-center justify-center rounded-full bg-red-600 text-white transition duration-300 group-hover:translate-x-0.5 group-hover:bg-red-700 group-focus-visible:translate-x-0.5 motion-reduce:transform-none motion-reduce:transition-none"
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
          class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border-2 border-red-600 bg-white px-5 py-2.5 text-sm font-semibold text-red-700 transition-colors hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transition-none sm:text-base"
          :to="{ name: `${locale}-contact` }"
        >
          {{ dictionary.homeFoundation.destinations.askAboutOther }}
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
