<script setup>
import { computed } from 'vue'
import { ClipboardCheck, Headset, MessageCircle, UserRoundCheck } from '@lucide/vue'
import RevealHeading from '../common/RevealHeading.vue'
import { commitmentValues } from '../../data/aboutPage'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
const icons = { guidance: UserRoundCheck, documentation: ClipboardCheck, communication: MessageCircle, assistance: Headset }
</script>

<template>
  <section class="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="commitment-title">
    <div class="mx-auto max-w-[1500px] min-[1920px]:max-w-[1800px] min-[2560px]:max-w-[2000px]">
      <header class="mx-auto max-w-4xl text-center">
        <p v-reveal class="text-sm font-bold uppercase tracking-[0.08em] text-[#EE2329]">{{ copy.commitmentEyebrow }}</p>
        <RevealHeading id="commitment-title" class="mt-3 font-serif text-3xl font-bold leading-tight text-slate-900 sm:text-4xl lg:text-5xl" :text="copy.commitmentTitle" />
        <p v-reveal class="mt-4 text-base leading-7 text-slate-600 sm:text-lg">{{ copy.commitmentIntro }}</p>
      </header>
      <ul class="mt-9 grid gap-4 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4 lg:gap-5">
        <li v-for="(value, index) in commitmentValues" :key="value.id" v-reveal :class="['min-w-0', ['delay-100', 'delay-200', 'delay-300', 'delay-500'][index]]">
          <article class="h-full rounded-3xl bg-slate-100 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
            <span v-reveal class="inline-flex size-14 items-center justify-center rounded-2xl bg-white text-[#313493]"><component :is="icons[value.icon]" :size="24" :stroke-width="2.2" aria-hidden="true" /></span>
            <h3 v-reveal class="mt-4 text-sm font-bold leading-snug text-slate-950 delay-100 sm:text-base">{{ copy[value.titleKey] }}</h3>
            <p v-reveal class="mt-2 text-sm leading-5 text-slate-600 delay-200">{{ copy[value.descriptionKey] }}</p>
          </article>
        </li>
      </ul>
    </div>
  </section>
</template>
