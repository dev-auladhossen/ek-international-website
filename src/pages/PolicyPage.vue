<script setup>
import { computed } from 'vue'
import { ChevronRight, House } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import SiteFooter from '../components/layout/SiteFooter.vue'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.webp'
import heroBackgroundMobile from '../assets/images/backgrounds/Blue Flight Path Wallpaper-mobile.webp'
import { usePageContent } from '../composables/usePageContent'

const { dictionary, locale, pageKey } = usePageContent()
const pageCopy = computed(() => dictionary.value.pages[pageKey.value])
const copy = computed(() => dictionary.value[pageKey.value === 'terms' ? 'termsPage' : 'privacyPage'])
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10" :aria-labelledby="`${pageKey}-page-title`">
      <img class="absolute inset-0 size-full object-cover object-left" :src="heroBackground" :srcset="`${heroBackgroundMobile} 900w, ${heroBackground} 1600w`" sizes="100vw" alt="" aria-hidden="true" width="2172" height="724" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-[#17245C]/50" aria-hidden="true"></div>
      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">{{ copy.heroEyebrow }}</p>
        <h1 :id="`${pageKey}-page-title`" v-reveal class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">{{ pageCopy.heading }}</h1>
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">{{ pageCopy.description }}</p>
      </div>
    </section>

    <section class="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <article class="mx-auto max-w-5xl">
        <p v-reveal class="mb-8 text-sm text-slate-500">{{ copy.lastUpdated }}</p>
        <ol class="space-y-9 sm:space-y-11">
          <li v-for="(section, index) in copy.sections" :key="section.title" v-reveal>
            <h2 class="font-serif text-2xl font-semibold leading-tight text-[#101F4F] sm:text-3xl">
              <span class="mr-2 text-[#EE2329]">{{ index + 1 }}.</span>{{ section.title }}
            </h2>
            <p v-for="paragraph in section.paragraphs" :key="paragraph" class="mt-4 text-base leading-7 text-[#243E61] sm:text-lg sm:leading-8">{{ paragraph }}</p>
            <ul v-if="section.items" class="mt-4 list-disc space-y-2 pl-6 text-base leading-7 text-[#243E61] sm:text-lg sm:leading-8">
              <li v-for="item in section.items" :key="item">{{ item }}</li>
            </ul>
            <template v-if="section.providers">
              <p class="mt-4 text-base leading-7 text-[#243E61] sm:text-lg sm:leading-8">{{ section.providersIntro }}</p>
              <ul class="mt-4 list-disc space-y-3 pl-6 text-base leading-7 text-[#243E61] sm:text-lg sm:leading-8">
                <li v-for="provider in section.providers" :key="provider.name">
                  <a class="font-semibold text-[#313493] underline decoration-[#EE2329]/60 underline-offset-4 transition-colors hover:text-[#EE2329]" :href="provider.href" target="_blank" rel="noopener noreferrer">{{ provider.name }}</a>
                  — {{ provider.description }}
                </li>
              </ul>
            </template>
          </li>
        </ol>

        <div class="mt-12 rounded-2xl border border-blue-100 bg-sky-50 px-5 py-6 sm:mt-14 sm:px-7">
          <h2 class="font-serif text-xl font-semibold text-[#101F4F] sm:text-2xl">{{ copy.contactTitle }}</h2>
          <p class="mt-2 text-base leading-7 text-[#243E61]">{{ copy.contactDescription }}</p>
          <a class="mt-3 inline-flex rounded-sm font-semibold text-[#313493] underline decoration-[#EE2329]/60 underline-offset-4 transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#313493]" :href="`mailto:${copy.contactEmail}`">{{ copy.contactEmail }}</a>
        </div>
      </article>
    </section>
  </main>
  <SiteFooter />
</template>
