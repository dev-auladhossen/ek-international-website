<script setup>
import { computed } from 'vue'
import { MessageCircle, Package, Plane } from '@lucide/vue'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.hajjUmrahPage)
const supportItems = [
  { id: 'package-details', titleKey: 'packageDetailsTitle', descriptionKey: 'packageDetailsDescription', icon: Package },
  { id: 'travel-arrangements', titleKey: 'travelPlanningTitle', descriptionKey: 'travelPlanningDescription', icon: Plane },
  { id: 'team-guidance', titleKey: 'teamGuidanceTitle', descriptionKey: 'teamGuidanceDescription', icon: MessageCircle },
]
</script>

<template>
  <section class="bg-white px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16" aria-labelledby="pilgrimage-support-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-3xl text-center">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.supportEyebrow }}</p>
        <h2 id="pilgrimage-support-title" v-reveal class="mt-2 font-serif text-2xl font-bold leading-tight text-[#313493] sm:text-3xl lg:text-4xl">{{ copy.supportTitle }}</h2>
        <p v-reveal class="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{{ copy.supportIntro }}</p>
      </header>

      <ul class="mt-8 grid gap-4 md:grid-cols-3 lg:mt-10 lg:gap-5">
        <li v-for="item in supportItems" :key="item.id" v-reveal class="group rounded-2xl border border-blue-100 bg-slate-50 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#313493]/20 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
          <span class="inline-flex size-12 items-center justify-center rounded-xl bg-[#313493]/10 text-[#313493] transition duration-300 group-hover:bg-[#EE2329] group-hover:text-white motion-reduce:transition-none" aria-hidden="true">
            <component :is="item.icon" :size="23" :stroke-width="1.9" />
          </span>
          <h3 class="mt-4 text-base font-bold text-[#010300] sm:text-lg">{{ copy[item.titleKey] }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ copy[item.descriptionKey] }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>
