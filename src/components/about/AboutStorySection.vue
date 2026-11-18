<script setup>
import { computed } from 'vue'
import { ArrowRight, Eye, Target } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { aboutImages } from '../../data/aboutPage'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
</script>

<template>
  <section class="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="who-we-are-title">
    <div class="mx-auto grid max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem] items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <figure v-reveal:image-left class="relative mx-auto w-full max-w-2xl lg:mx-0">
        <span class="absolute -left-3 -top-3 h-1/3 w-1/3 rounded-tl-2xl bg-[#313493]/10 sm:-left-4 sm:-top-4" aria-hidden="true"></span>
        <span class="absolute -bottom-3 -right-3 h-1/3 w-1/3 rounded-br-2xl bg-[#EE2329]/10 sm:-bottom-4 sm:-right-4" aria-hidden="true"></span>
        <img class="relative aspect-[4/3] w-full rounded-xl object-cover shadow-xl" :src="aboutImages.whoWeAre" :srcset="`${aboutImages.whoWeAreMobile} 800w, ${aboutImages.whoWeAre} 1600w`" sizes="(max-width: 1023px) 92vw, 50vw" :alt="copy.whoWeAreImageAlt" width="1200" height="900" loading="lazy" decoding="async" />
      </figure>
      <div class="min-w-0">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.whoWeAreEyebrow }}</p>
        <h2 id="who-we-are-title" v-reveal class="mt-3 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl">{{ copy.whoWeAreTitle }}</h2>
        <span class="mt-4 block h-1 w-16 rounded-full bg-[#EE2329]" aria-hidden="true"></span>
        <p v-reveal class="mt-6 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.whoWeAreParagraphOne }}</p>
        <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.whoWeAreParagraphTwo }}</p>
        <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.whoWeAreParagraphThree }}</p>
        <RouterLink v-reveal class="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#EE2329] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C91D24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329]" :to="{ name: `${locale}-contact` }">
          {{ copy.contactUs }} <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>

    <div class="mx-auto mt-16 grid max-w-5xl gap-5 md:mt-20 md:grid-cols-2 md:gap-7">
      <article v-reveal class="rounded-xl bg-slate-50 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.2)] motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
        <span v-reveal class="inline-flex size-11 items-center justify-center rounded-xl bg-[#313493]/10 text-[#313493]"><Target :size="21" aria-hidden="true" /></span>
        <h3 v-reveal class="mt-4 font-serif text-xl font-bold text-slate-900 delay-100">{{ copy.missionTitle }}</h3>
        <p v-reveal class="mt-2 text-sm leading-6 text-slate-600 delay-200 sm:text-base">{{ copy.missionDescription }}</p>
      </article>
      <article v-reveal class="rounded-xl bg-slate-50 p-6 shadow-[0_12px_32px_rgba(15,23,42,0.14)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(15,23,42,0.2)] motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
        <span v-reveal class="inline-flex size-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-600"><Eye :size="21" aria-hidden="true" /></span>
        <h3 v-reveal class="mt-4 font-serif text-xl font-bold text-slate-900 delay-100">{{ copy.visionTitle }}</h3>
        <p v-reveal class="mt-2 text-sm leading-6 text-slate-600 delay-200 sm:text-base">{{ copy.visionDescription }}</p>
      </article>
    </div>
  </section>
</template>
