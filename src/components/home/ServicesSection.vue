<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import allServices from '../../data/services'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.servicesPage)
const services = allServices.filter((service) => service.featured)
</script>

<template>
  <section
    id="services"
    class="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 to-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    aria-labelledby="services-title"
  >
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-4xl text-center">
        <div v-reveal class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.eyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="services-title"
          class="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl"
          :text="copy.title"
        />
        <p v-reveal class="mx-auto mt-3 max-w-3xl text-sm leading-6 text-[#172554] sm:text-base sm:leading-7">
          {{ copy.intro }}
        </p>
      </header>

      <ul class="mt-7 grid gap-4 sm:grid-cols-2 lg:mt-9 xl:grid-cols-4 xl:gap-5">
        <li v-for="service in services" :id="service.id" :key="service.id" v-reveal class="min-w-0 scroll-mt-28">
          <article class="group overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_8px_22px_rgba(49,52,147,0.1)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(49,52,147,0.16)] motion-reduce:transform-none motion-reduce:transition-none">
            <img
              v-reveal:image-left
              class="block h-auto w-full"
              :src="service.image"
              :alt="copy[service.imageAltKey]"
              width="960"
              height="540"
              loading="lazy"
              decoding="async"
            />
          </article>
        </li>
      </ul>

      <div class="mt-7 flex justify-center sm:mt-8">
        <RouterLink
          v-reveal
          class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#EE2329] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none"
          :to="{ name: `${locale}-services` }"
        >
          {{ copy.viewAllServices }} <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
