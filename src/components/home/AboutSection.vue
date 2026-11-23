<script setup>
import { ArrowRight, Eye, Handshake, Plane } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import sectionBackground from '../../assets/images/backgrounds/ethereal-blue-wave-panorama.webp'
import sectionBackgroundMobile from '../../assets/images/backgrounds/ethereal-blue-wave-panorama-mobile.webp'
import officeTeam from '../../assets/images/gallery/modern-travel-agency-office-team.webp'
import officeTeamMobile from '../../assets/images/gallery/modern-travel-agency-office-team-mobile.webp'
import aboutFeatures from '../../data/aboutFeatures'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const featureIcons = {
  mission: Plane,
  vision: Eye,
  commitment: Handshake,
}
</script>

<template>
  <section
    id="about"
    class="relative isolate overflow-hidden bg-white px-4 pb-12 pt-4 sm:px-6 sm:pb-14 sm:pt-5 lg:px-8 lg:pb-16 lg:pt-3"
    aria-labelledby="about-title"
  >
    <img
      class="absolute inset-0 z-0 size-full object-cover object-center"
      :src="sectionBackground"
      :srcset="`${sectionBackgroundMobile} 900w, ${sectionBackground} 1600w`"
      sizes="100vw"
      alt=""
      width="2100"
      height="749"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="flex items-center justify-center gap-3">
        <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        <p class="text-center text-xs font-bold uppercase tracking-wide text-[#EE2329] sm:text-sm">
          {{ dictionary.homeFoundation.about.eyebrow }}
        </p>
        <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
      </header>

      <div class="mt-8 grid gap-7 lg:mt-12 lg:grid-cols-2 lg:items-start lg:gap-8 xl:grid-cols-[1.05fr_1fr_0.8fr]">
      <figure v-reveal:image-left class="group relative overflow-hidden rounded-xl shadow-sm">
        <img
          class="aspect-[16/10] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none"
          :src="officeTeam"
          :srcset="`${officeTeamMobile} 800w, ${officeTeam} 1600w`"
          sizes="(max-width: 1023px) 92vw, 34vw"
          :alt="dictionary.homeFoundation.about.imageAlt"
          width="1672"
          height="940"
          loading="lazy"
          decoding="async"
        />
      </figure>

      <div>
        <RevealHeading
          id="about-title"
          class="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:mt-2 lg:text-[1.7rem] lg:leading-[1.1]"
          :text="dictionary.homeFoundation.about.title"
        />
        <p v-reveal class="mt-3 text-sm leading-6 text-[#010300] sm:text-base lg:mt-2 lg:text-[13px] lg:leading-5">
          {{ dictionary.homeFoundation.about.description }}
        </p>
        <p v-reveal class="mt-2 text-sm leading-6 text-[#010300] sm:text-base lg:mt-1 lg:text-[13px] lg:leading-5">
          {{ dictionary.homeFoundation.about.supportingDescription }}
        </p>
        <RouterLink
          v-reveal
          class="mt-4 inline-flex min-h-10 cursor-pointer items-center justify-center gap-2 rounded-md bg-[#EE2329] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transition-none lg:mt-3 lg:min-h-9"
          :to="{ name: `${locale}-about` }"
        >
          {{ dictionary.homeFoundation.about.cta }}
          <ArrowRight :size="16" aria-hidden="true" />
        </RouterLink>
      </div>

      <ul class="grid gap-3 border-t border-slate-300 pt-5 sm:grid-cols-1 lg:col-span-2 xl:col-span-1 xl:border-l xl:border-t-0 xl:py-2 xl:pl-5 xl:pt-2">
        <li v-for="feature in aboutFeatures" :key="feature.id" v-reveal class="flex items-start gap-3 border-b border-sky-200 pb-3 last:border-b-0">
          <span class="flex size-10 shrink-0 items-center justify-center rounded-lg bg-sky-100 text-[#313493]">
            <component
              :is="featureIcons[feature.icon]"
              :size="23"
              :stroke-width="2.2"
              aria-hidden="true"
            />
          </span>
          <span class="min-w-0 pt-0.5">
            <span class="block text-sm font-bold leading-5 text-[#313493]">
              {{ dictionary.homeFoundation.about[feature.titleKey] }}
            </span>
            <span class="mt-0.5 block text-xs leading-4 text-slate-700">
              {{ dictionary.homeFoundation.about[feature.descriptionKey] }}
            </span>
          </span>
        </li>
      </ul>
      </div>
    </div>
  </section>
</template>
