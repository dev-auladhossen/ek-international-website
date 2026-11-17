<script setup>
import { ArrowRight, Phone } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import team from '../../data/team'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const featuredTeam = team.slice(0, 5)
function memberName(member) {
  return dictionary.value.homeFoundation.team[member.nameKey]
}

function memberAlt(member) {
  return dictionary.value.homeFoundation.team.portraitAlt.replace(
    '{name}',
    memberName(member),
  )
}

function memberPhoneLabel(member) {
  return dictionary.value.homeFoundation.team.callTeamMember
    .replace('{name}', memberName(member))
    .replace('{phone}', member.phone.display)
}
</script>

<template>
  <section
    id="team"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    aria-labelledby="team-title"
  >
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wider text-[#EE2329] sm:text-sm">
            {{ dictionary.homeFoundation.team.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="team-title"
          class="mt-3 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl"
          :text="dictionary.homeFoundation.team.title"
        />
        <p v-reveal class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
          {{ dictionary.homeFoundation.team.intro }}
        </p>
      </header>

      <ul
        class="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
      >
        <li
          v-for="member in featuredTeam"
          :key="member.id"
          v-reveal
          class="min-w-0"
        >
          <article
            class="group h-full overflow-hidden rounded-xl border border-sky-100 bg-white/95 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div v-reveal:image-left class="relative overflow-hidden bg-slate-100 ">
              <img
                class="aspect-[4/3] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105 motion-reduce:transition-none"
                :src="member.image"
                :alt="memberAlt(member)"
                width="640"
                height="480"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="min-h-24 px-3 py-3 sm:px-4 sm:py-4">
              <h3 class="text-sm font-bold leading-snug text-[#313493] sm:text-base">
                {{ memberName(member) }}
              </h3>
              <p class="mt-1 text-xs font-semibold text-[#EE2329] sm:text-sm">
                {{ dictionary.homeFoundation.team[member.roleKey] }}
              </p>
              <a
                v-if="member.phone"
                class="mt-1.5 inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-sm text-xs font-medium leading-5 text-[#313493] transition-colors hover:text-[#313493] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493] motion-reduce:transition-none"
                :href="member.phone.href"
                :aria-label="memberPhoneLabel(member)"
              >
                <Phone class="shrink-0" :size="14" aria-hidden="true" />
                <span class="whitespace-nowrap">{{ member.phone.display }}</span>
              </a>
            </div>
          </article>
        </li>
      </ul>

      <div class="mt-7 flex justify-center sm:mt-8">
        <RouterLink
          v-reveal
          class="relative isolate inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-[#EE2329] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329]  sm:text-base"
          :to="{ name: `${locale}-team` }"
        >
          {{ dictionary.homeFoundation.team.fullTeamCta }}
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
