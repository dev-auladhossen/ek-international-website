<script setup>
import { computed } from 'vue'
import { ArrowRight, Plane } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { usePageContent } from '../composables/usePageContent'
import heroBackground from '../assets/images/backgrounds/Global Careers Take Flight.png'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.workVisaPage)
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex h-[calc(100svh-140px)] min-h-[460px] max-h-[700px] items-center overflow-hidden bg-[#313493] px-4 sm:px-6 lg:h-[calc(100svh-210px)] lg:min-h-[460px] lg:px-8" aria-labelledby="work-visa-page-title">
      <img class="absolute inset-0 size-full object-cover object-[68%_center] sm:object-center" :src="heroBackground" alt="" aria-hidden="true" width="1774" height="887" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-gradient-to-r from-[#313493]/90 via-[#313493]/75 to-[#313493]/45 sm:via-[#313493]/60 sm:to-transparent" aria-hidden="true"></div>

      <div class="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center">
        <div class="max-w-[42rem] pb-28 sm:pb-24">
          <p v-reveal class="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white sm:text-sm">
            <Plane class="text-[#EE2329]" :size="22" :stroke-width="2.5" aria-hidden="true" />
            {{ copy.eyebrow }}
          </p>
          <h1 id="work-visa-page-title" v-reveal class="mt-3 text-2xl font-extrabold leading-[1.05] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">
            {{ copy.title }}
          </h1>
          <p v-reveal class="mt-3 max-w-[34rem] text-xs leading-5 text-white/95 sm:mt-4 sm:text-base sm:leading-7 lg:text-lg">
            {{ copy.description }}
          </p>
        </div>
        <div class="absolute inset-x-0 bottom-4 flex flex-col gap-2 sm:bottom-7 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <RouterLink
            v-reveal
            class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#EE2329] px-5 py-2.5 text-sm font-bold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-12 sm:py-3 sm:text-base"
            :to="{ name: `${locale}-home`, hash: '#destinations' }"
          >
            {{ copy.destinationsCta }} <ArrowRight :size="19" aria-hidden="true" />
          </RouterLink>
          <RouterLink
            v-reveal
            class="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-white/90 bg-white/10 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#313493] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:min-h-12 sm:py-3 sm:text-base"
            :to="{ name: `${locale}-contact` }"
          >
            {{ copy.inquiryCta }}
          </RouterLink>
        </div>
      </div>
    </section>
  </main>
</template>
