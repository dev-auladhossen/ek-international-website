<script setup>
import { computed } from 'vue'
import { ChevronRight, House } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.webp'
import heroBackgroundMobile from '../assets/images/backgrounds/Blue Flight Path Wallpaper-mobile.webp'
import SiteFooter from '../components/layout/SiteFooter.vue'
import RevealHeading from '../components/common/RevealHeading.vue'
import TeamMemberCard from '../components/team/TeamMemberCard.vue'
import team from '../data/team'
import { usePageContent } from '../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const pageCopy = computed(() => dictionary.value.pages.team)
const teamCopy = computed(() => dictionary.value.homeFoundation.team)
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10" aria-labelledby="team-page-title">
      <img class="absolute inset-0 size-full object-cover object-left" :src="heroBackground" :srcset="`${heroBackgroundMobile} 900w, ${heroBackground} 1600w`" sizes="100vw" alt="" aria-hidden="true" width="2172" height="724" loading="eager" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-[#17245C]/45" aria-hidden="true"></div>
      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">{{ pageCopy.heroEyebrow }}</p>
        <h1 id="team-page-title" v-reveal class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">{{ pageCopy.heading }}</h1>
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-8 lg:text-lg">{{ pageCopy.description }}</p>
      </div>
    </section>

    <section class="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="team-directory-title">
      <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
        <header class="mx-auto max-w-3xl text-center">
          <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ teamCopy.eyebrow }}</p>
          <RevealHeading id="team-directory-title" class="mt-3 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl" :text="teamCopy.title" />
          <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ teamCopy.intro }}</p>
        </header>
        <ul class="mx-auto mt-9 grid max-w-6xl 2xl:max-w-[84rem] min-[1920px]:max-w-[96rem] min-[2560px]:max-w-[112rem] grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 2xl:grid-cols-4">
          <li v-for="(member, index) in team" :key="member.id" v-reveal :class="['min-w-0', ['delay-100', 'delay-200', 'delay-300', 'delay-500', 'delay-700'][index % 5]]">
            <TeamMemberCard :member="member" />
          </li>
        </ul>
      </div>
    </section>
  </main>
  <SiteFooter />
</template>
