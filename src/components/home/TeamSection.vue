<script setup>
import { ArrowRight, Phone } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import RevealHeading from '../common/RevealHeading.vue'
import team from '../../data/team'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const featuredTeam = team.slice(0, 4)
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
    <div class="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
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
        class="mx-auto mt-7 grid max-w-6xl grid-cols-1 gap-y-10 sm:mt-9 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-4 lg:gap-y-14"
      >
        <li
          v-for="member in featuredTeam"
          :key="member.id"
          v-reveal
          class="min-w-0"
        >
          <article class="group h-full border-r border-slate-200 px-4 py-1 transition-colors duration-300 last:border-r-0 hover:bg-white/60 motion-reduce:transition-none sm:px-5 lg:px-6">
            <div v-reveal:image-left class="overflow-hidden bg-slate-100">
              <img
                class="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
                :src="member.image"
                :srcset="`${member.imageMobile} 360w, ${member.image} ${member.imageWidth}w`"
                sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, (max-width: 1279px) 28vw, 22vw"
                :alt="memberAlt(member)"
                width="640"
                height="853"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div class="pt-6 sm:pt-8">
              <p class="min-h-5 text-xs font-medium uppercase leading-5 tracking-wide text-[#EE2329] delay-100 sm:text-sm">
                {{ dictionary.homeFoundation.team[member.roleKey] }}
              </p>
              <h3 class="mt-4 whitespace-nowrap text-[clamp(0.875rem,1.45vw,1.5rem)] font-semibold uppercase leading-snug text-[#173F68] delay-200 sm:mt-5">
                {{ memberName(member) }}
              </h3>
              <p class="mt-5 text-sm leading-[1.55] text-slate-700 delay-300 sm:mt-6 sm:text-base">
                {{ dictionary.homeFoundation.team[member.descriptionKey] }}
              </p>
              <a
                v-if="member.phone"
                class="mt-4 inline-flex max-w-full cursor-pointer items-center gap-2 rounded-sm text-sm font-medium text-[#313493] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none"
                :href="member.phone.href"
                :aria-label="memberPhoneLabel(member)"
              >
                <Phone class="shrink-0" :size="16" aria-hidden="true" />
                <span>{{ member.phone.display }}</span>
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
