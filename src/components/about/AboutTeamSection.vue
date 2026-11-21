<script setup>
import { computed } from 'vue'
import { ArrowRight } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import TeamMemberCard from '../team/TeamMemberCard.vue'
import team from '../../data/team'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
const featuredTeam = team.slice(0, 5)
</script>

<template>
  <section class="bg-white px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-24" aria-labelledby="about-team-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-3xl text-center">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.teamEyebrow }}</p>
        <RevealHeading id="about-team-title" class="mt-3 font-serif text-2xl font-bold leading-tight text-slate-900 sm:text-3xl lg:text-4xl" :text="copy.teamTitle" />
        <p v-reveal class="mt-4 text-sm leading-7 text-slate-600 sm:text-base">{{ copy.teamIntro }}</p>
      </header>
      <ul class="mx-auto mt-9 grid max-w-6xl 2xl:max-w-[84rem] min-[1920px]:max-w-[96rem] min-[2560px]:max-w-[112rem] grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-14">
        <li v-for="(member, index) in featuredTeam" :key="member.id" v-reveal :class="['min-w-0', ['delay-100', 'delay-200', 'delay-300', 'delay-500', 'delay-700'][index]]">
          <TeamMemberCard :member="member" />
        </li>
      </ul>
      <div class="mt-8 flex justify-center">
        <RouterLink v-reveal class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#EE2329] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#C91D24] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329]" :to="{ name: `${locale}-team` }">
          {{ copy.teamCta }} <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
