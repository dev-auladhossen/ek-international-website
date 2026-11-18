<script setup>
import { computed } from 'vue'
import { Broom, ConciergeBell, Factory, HardHat, Package } from '@lucide/vue'
import jobCategories from '../../data/workVisaJobCategories'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.workVisaPage)
const icons = { hardHat: HardHat, factory: Factory, cleaning: Broom, hospitality: ConciergeBell, general: Package }
const tones = {
  blue: 'bg-sky-100 text-sky-600 border-sky-400',
  purple: 'bg-violet-100 text-violet-600 border-violet-400',
  green: 'bg-green-100 text-green-600 border-green-400',
  red: 'bg-red-100 text-[#EE2329] border-[#EE2329]/60',
  cyan: 'bg-cyan-100 text-cyan-600 border-cyan-500',
}
</script>

<template>
  <section class="bg-gradient-to-b from-sky-50 to-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12" aria-labelledby="job-categories-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto mb-6 max-w-5xl text-center sm:mb-8">
        <div v-reveal class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#EE2329] sm:text-sm">{{ copy.jobsEyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
        </div>
        <h2 id="job-categories-title" v-reveal class="mt-2 text-xl font-extrabold leading-tight tracking-tight text-[#101F4F] sm:text-2xl lg:text-3xl">
          {{ copy.jobsTitleLead }} <span class="text-blue-600">{{ copy.jobsTitleAccent }}</span>
        </h2>
        <p v-reveal class="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">{{ copy.jobsIntro }}</p>
      </header>

      <div class="grid gap-3 md:grid-cols-2 lg:gap-4">
        <article
          v-for="category in jobCategories"
          :key="category.id"
          v-reveal
          class="group relative isolate flex min-h-0 flex-col overflow-hidden rounded-2xl border border-white bg-white shadow-[0_8px_22px_rgba(49,52,147,0.12)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(49,52,147,0.18)] motion-reduce:transform-none motion-reduce:transition-none md:min-h-[190px] md:flex-row md:items-center"
          :class="{ 'md:col-span-2': category.images }"
        >
          <div
            v-if="category.image"
            v-reveal:image-left
            class="relative order-1 h-40 w-full shrink-0 overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[39%] md:[clip-path:polygon(16%_0,100%_0,100%_100%,0_100%)]"
          >
            <img class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none" :src="category.image" :srcset="`${category.imageMobile} 640w, ${category.image} 1000w`" sizes="(max-width: 767px) 90vw, 640px" :alt="copy[category.imageAltKey]" width="640" height="440" loading="lazy" decoding="async" />
            <span class="absolute inset-y-0 left-0 hidden w-1.5 bg-current opacity-75 md:block" :class="tones[category.tone]" aria-hidden="true"></span>
          </div>

          <div
            v-else
            v-reveal:image-left
            class="relative order-1 grid h-40 w-full shrink-0 grid-cols-3 overflow-hidden md:absolute md:inset-y-0 md:right-0 md:h-full md:w-[55%] md:[clip-path:polygon(9%_0,100%_0,100%_100%,0_100%)]"
          >
            <img v-for="image in category.images" :key="image.altKey" class="size-full border-l-2 border-white object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none" :src="image.src" :srcset="`${image.srcMobile} 640w, ${image.src} 1000w`" sizes="(max-width: 767px) 45vw, 480px" :alt="copy[image.altKey]" width="480" height="440" loading="lazy" decoding="async" />
          </div>

          <div class="order-2 flex min-w-0 items-start gap-3 p-4 sm:gap-4 sm:p-5 md:pr-3 lg:gap-5 lg:p-6" :class="category.images ? 'md:w-1/2' : 'md:w-[65%]'">
            <div class="flex shrink-0 items-center gap-3 sm:gap-4">
              <span class="inline-flex size-11 items-center justify-center rounded-xl sm:size-12" :class="tones[category.tone].split(' ').slice(0, 2).join(' ')" aria-hidden="true">
                <component :is="icons[category.icon]" :size="25" :stroke-width="2" />
              </span>
              <span class="hidden h-16 w-px border-l border-dashed md:block" :class="tones[category.tone].split(' ').at(-1)" aria-hidden="true"></span>
            </div>
            <div class="min-w-0">
              <h3 class="text-base font-extrabold leading-tight text-[#101F4F] sm:text-lg lg:text-xl">{{ copy[category.titleKey] }}</h3>
              <p class="mt-1.5 text-xs leading-5 text-slate-700 sm:text-sm sm:leading-5">{{ copy[category.descriptionKey] }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
