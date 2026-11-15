<script setup>
import { ArrowRight, Phone } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import team from '../../data/team'
import teamBackground from '../../assets/images/backgrounds/ethereal-blue-wave-panorama.png'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const revealDelays = ['delay-100', 'delay-200', 'delay-300', 'delay-500', 'delay-700']

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
    <img
      class="absolute inset-0 z-0 size-full object-cover object-center"
      :src="teamBackground"
      alt=""
      width="2100"
      height="749"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-3xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-red-600 sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wider text-red-700 sm:text-sm">
            {{ dictionary.homeFoundation.team.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-red-600 sm:w-12" aria-hidden="true"></span>
        </div>
        <h2
          id="team-title"
          class="mt-3 text-2xl font-bold leading-tight tracking-tight text-blue-950 sm:text-3xl lg:text-4xl"
        >
          {{ dictionary.homeFoundation.team.title }}
        </h2>
        <p class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base sm:leading-7">
          {{ dictionary.homeFoundation.team.intro }}
        </p>
      </header>

      <TransitionGroup
        tag="ul"
        class="mt-7 grid grid-cols-2 gap-3 sm:mt-9 sm:gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        appear
        enter-active-class="transition-all duration-700 ease-out motion-reduce:transition-none"
        enter-from-class="translate-y-4 opacity-0 motion-reduce:transform-none"
        enter-to-class="translate-y-0 opacity-100"
      >
        <li
          v-for="(member, index) in team"
          :key="member.id"
          class="min-w-0"
          :class="revealDelays[index] || 'delay-100'"
        >
          <article
            class="group h-full overflow-hidden rounded-xl border border-sky-100 bg-white/95 shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none"
          >
            <div class="overflow-hidden bg-slate-100">
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
              <h3 class="text-sm font-bold leading-snug text-blue-950 sm:text-base">
                {{ memberName(member) }}
              </h3>
              <p class="mt-1 text-xs font-semibold text-red-700 sm:text-sm">
                {{ dictionary.homeFoundation.team[member.roleKey] }}
              </p>
              <a
                v-if="member.phone"
                class="mt-1.5 inline-flex max-w-full cursor-pointer items-center gap-1.5 rounded-sm text-xs font-medium leading-5 text-blue-700 transition-colors hover:text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none"
                :href="member.phone.href"
                :aria-label="memberPhoneLabel(member)"
              >
                <Phone class="shrink-0" :size="14" aria-hidden="true" />
                <span class="whitespace-nowrap">{{ member.phone.display }}</span>
              </a>
            </div>
          </article>
        </li>
      </TransitionGroup>

      <div class="mt-7 flex justify-center sm:mt-8">
        <RouterLink
          class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transition-none sm:text-base"
          :to="{ name: `${locale}-team` }"
        >
          {{ dictionary.homeFoundation.team.fullTeamCta }}
          <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
