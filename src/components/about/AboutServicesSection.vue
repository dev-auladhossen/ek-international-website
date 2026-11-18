<script setup>
import { computed } from 'vue'
import { BriefcaseBusiness, FileText, Landmark, Plane } from '@lucide/vue'
import RevealHeading from '../common/RevealHeading.vue'
import { aboutServices } from '../../data/aboutPage'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
const icons = { employment: BriefcaseBusiness, visa: FileText, travel: Plane, hajj: Landmark }
</script>

<template>
  <section id="about-services" class="bg-slate-50 px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="about-services-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-3xl text-center">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.servicesEyebrow }}</p>
        <RevealHeading id="about-services-title" class="mt-3 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl" :text="copy.servicesTitle" />
        <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.servicesIntro }}</p>
      </header>

      <ul class="mt-9 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <li v-for="(service, index) in aboutServices" :key="service.id" v-reveal :class="['min-w-0', ['delay-100', 'delay-200', 'delay-300', 'delay-500'][index]]">
          <article class="group h-full rounded-xl bg-white p-5 shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
            <span v-reveal class="inline-flex size-11 items-center justify-center rounded-xl bg-[#313493]/10 text-[#313493] transition-colors group-hover:bg-[#313493] group-hover:text-white"><component :is="icons[service.icon]" :size="22" aria-hidden="true" /></span>
            <h3 v-reveal class="mt-4 text-base font-bold leading-snug text-slate-900 delay-100 sm:text-lg">{{ copy[service.titleKey] }}</h3>
            <p v-reveal class="mt-2 text-sm leading-6 text-slate-600 delay-200">{{ copy[service.descriptionKey] }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
