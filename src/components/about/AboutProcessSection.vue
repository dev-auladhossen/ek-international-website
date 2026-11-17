<script setup>
import { computed } from 'vue'
import { ArrowRight, ClipboardList, FileCheck2, Headset, MessageCircle, UserRoundCheck } from '@lucide/vue'
import RevealHeading from '../common/RevealHeading.vue'
import { aboutProcess } from '../../data/aboutPage'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
const icons = { consultation: MessageCircle, guidance: UserRoundCheck, documentation: ClipboardList, application: FileCheck2, followUp: Headset }
</script>

<template>
  <section class="bg-slate-50 px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="about-process-title">
    <div class="mx-auto max-w-7xl">
      <header class="mx-auto max-w-3xl text-center">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.processEyebrow }}</p>
        <RevealHeading id="about-process-title" class="mt-3 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl" :text="copy.processTitle" />
        <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.processIntro }}</p>
      </header>
      <ol class="mt-9 grid gap-x-4 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <li v-for="(step, index) in aboutProcess" :key="step.id" v-reveal :class="['relative', ['delay-100', 'delay-200', 'delay-300', 'delay-500', 'delay-700'][index]]">
          <article class="flex h-full min-h-48 flex-col items-center rounded-xl bg-white px-4 pb-5 pt-8 text-center shadow-[0_8px_30px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.12)] motion-reduce:transform-none motion-reduce:transition-none">
            <span v-reveal class="relative inline-flex size-12 items-center justify-center rounded-full bg-[#313493] text-white">
              <component :is="icons[step.icon]" :size="23" aria-hidden="true" />
              <span class="absolute -right-2 -top-2 inline-flex size-6 items-center justify-center rounded-full bg-[#EE2329] text-xs font-bold text-white ring-2 ring-white" aria-hidden="true">{{ index + 1 }}</span>
            </span>
            <h3 v-reveal class="mt-4 text-sm font-bold text-slate-900 delay-100 sm:text-base">{{ copy[step.titleKey] }}</h3>
            <p v-reveal class="mt-2 text-sm leading-6 text-slate-700 delay-200">{{ copy[step.descriptionKey] }}</p>
          </article>
          <ArrowRight v-if="index < aboutProcess.length - 1" class="pointer-events-none absolute -right-3 top-12 hidden text-[#313493] xl:block" :size="20" aria-hidden="true" />
        </li>
      </ol>
    </div>
  </section>
</template>
