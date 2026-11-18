<script setup>
import { computed } from 'vue'
import { BriefcaseBusiness, ChevronsRight, IdCard, ListChecks, MessageCircle, Plane } from '@lucide/vue'
import workVisaSteps from '../../data/workVisaProcessSteps'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.workVisaPage)
const icons = { consultation: MessageCircle, documentation: ListChecks, visa: IdCard, travel: Plane, job: BriefcaseBusiness }
</script>

<template>
  <section class="relative isolate overflow-hidden bg-gradient-to-b from-sky-50 via-white to-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16" aria-labelledby="work-visa-process-title">
    <div class="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-sky-100/70 [clip-path:polygon(0_62%,16%_46%,34%_78%,52%_54%,72%_82%,88%_52%,100%_70%,100%_100%,0_100%)]" aria-hidden="true"></div>
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-5xl text-center">
        <div v-reveal class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#EE2329] sm:text-sm">{{ copy.processEyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
        </div>
        <h2 id="work-visa-process-title" v-reveal class="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#101F4F] sm:text-3xl lg:text-4xl">
          {{ copy.processTitleLead }} <span class="text-blue-600">{{ copy.processTitleAccent }}</span>
        </h2>
        <p v-reveal class="mt-2 text-sm leading-6 text-slate-600 sm:text-base lg:text-lg">{{ copy.processIntro }}</p>
      </header>

      <ol class="mt-7 grid gap-3 sm:grid-cols-2 lg:mt-9 lg:grid-cols-3 xl:grid-cols-5 xl:gap-3">
        <li v-for="(step, index) in workVisaSteps" :key="step.id" v-reveal class="relative min-w-0">
          <article class="group relative flex h-full min-h-[12.5rem] flex-col items-center overflow-hidden rounded-2xl border border-white bg-white/95 px-3 pb-6 pt-3 text-center shadow-[0_5px_16px_rgba(49,52,147,0.1)] transition duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_10px_22px_rgba(49,52,147,0.16)] motion-reduce:transform-none motion-reduce:transition-none sm:min-h-[13rem] sm:px-3.5">
            <span class="absolute left-2 top-1 inline-flex size-8 items-center justify-center rounded-full bg-[#EE2329] text-xs font-bold text-white shadow-sm sm:size-9 sm:text-sm" aria-hidden="true">0{{ index + 1 }}</span>
            <span class="inline-flex size-[3.5rem] items-center justify-center rounded-full border border-sky-200 bg-sky-100/90 text-blue-700 transition duration-300 group-hover:scale-105 group-hover:bg-sky-200 motion-reduce:transform-none motion-reduce:transition-none sm:size-[3.75rem]" aria-hidden="true">
              <component :is="icons[step.icon]" :size="31" :stroke-width="1.8" />
            </span>
            <h3 class="relative z-10 mt-1.5 text-sm font-extrabold leading-4 text-[#101F4F] sm:text-[15px] sm:leading-[1.15]">{{ copy[step.titleKey] }}</h3>
            <p class="relative z-10 mt-1.5 text-[11px] leading-[1.3] text-slate-700 sm:text-xs sm:leading-4">{{ copy[step.descriptionKey] }}</p>
            <span class="pointer-events-none absolute inset-x-0 bottom-0 h-7 bg-sky-100/90 [clip-path:polygon(0_72%,16%_82%,34%_76%,52%_87%,71%_77%,88%_84%,100%_74%,100%_100%,0_100%)] transition-colors duration-300 group-hover:bg-sky-200/90 motion-reduce:transition-none" aria-hidden="true"></span>
          </article>
          <span v-if="index < workVisaSteps.length - 1" class="pointer-events-none absolute -right-3 top-[43%] z-20 hidden items-center text-sky-400 xl:flex" aria-hidden="true">
            <ChevronsRight :size="25" :stroke-width="3" />
          </span>
        </li>
      </ol>
    </div>
  </section>
</template>
