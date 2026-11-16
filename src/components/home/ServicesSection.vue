<script setup>
import { ArrowRight, BriefcaseBusiness, Landmark } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import services from '../../data/services'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const serviceIcons = { workVisa: BriefcaseBusiness, hajj: Landmark }
</script>

<template>
  <section
    id="services"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    aria-labelledby="services-title"
  >
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wider text-[#EE2329] sm:text-sm">
            {{ dictionary.homeFoundation.services.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="services-title"
          class="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl"
          :text="dictionary.homeFoundation.services.title"
        />
      </header>

      <ul
        class="mt-6 grid gap-4 lg:grid-cols-2 lg:gap-5"
      >
        <li v-for="service in services" :key="service.id" v-reveal>
          <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-200 bg-white/95 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:flex-row">
            <div v-reveal:image-left class="relative h-40 shrink-0 overflow-hidden  sm:h-auto sm:w-[38%] lg:min-h-44">
              <img
                class="size-full object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                :src="service.image"
                :alt="dictionary.homeFoundation.services[service.imageAltKey]"
                width="960"
                height="540"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div class="flex min-w-0 flex-1 items-start gap-3 p-4 sm:gap-3.5 sm:p-4 lg:p-5">
              <span class="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-md bg-[#EE2329] text-white shadow-sm transition duration-300 group-hover:bg-[#B91C1C] group-hover:shadow-md motion-reduce:transition-none" aria-hidden="true">
                <component :is="serviceIcons[service.icon]" :size="19" :stroke-width="2" />
              </span>
              <div class="flex min-w-0 flex-1 flex-col items-start">
                <h3 class="text-base font-bold leading-snug text-[#313493] sm:text-lg">
                  {{ dictionary.homeFoundation.services[service.titleKey] }}
                </h3>
                <p v-reveal class="mt-1 text-sm leading-5 text-slate-700">
                  {{ dictionary.homeFoundation.services[service.descriptionKey] }}
                </p>
                <RouterLink
                  v-reveal
                  class="relative isolate mt-3 inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-[#EE2329] px-4 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] "
                  :to="{ name: `${locale}-${service.routeKey}` }"
                >
                  {{ dictionary.homeFoundation.services[service.ctaKey] }}
                  <ArrowRight :size="16" aria-hidden="true" />
                </RouterLink>
              </div>
            </div>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
