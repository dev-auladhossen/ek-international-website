<script setup>
import { ArrowRight, BriefcaseBusiness, ClipboardList, MessageCircle, Plane, UserRoundCheck } from '@lucide/vue'
import sectionBackground from '../../assets/images/backgrounds/ethereal-blue-wave-panorama.png'
import processSteps from '../../data/process'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const stepIcons = {
  consultation: MessageCircle,
  documentation: ClipboardList,
  application: UserRoundCheck,
  travel: Plane,
  departure: BriefcaseBusiness,
}
</script>

<template>
  <section
    id="how-it-works"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8"
    aria-labelledby="process-title"
  >
    <img
      class="absolute inset-0 z-0 size-full object-cover object-center"
      :src="sectionBackground"
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
            {{ dictionary.homeFoundation.process.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-red-600 sm:w-12" aria-hidden="true"></span>
        </div>
        <h2 id="process-title" class="mt-2 text-2xl font-bold leading-tight tracking-tight text-blue-950 sm:text-3xl">
          {{ dictionary.homeFoundation.process.title }}
        </h2>
        <p class="mx-auto mt-2 max-w-2xl text-sm leading-6 text-slate-700 sm:text-base">
          {{ dictionary.homeFoundation.process.intro }}
        </p>
      </header>

      <TransitionGroup
        tag="ol"
        name="process-step"
        appear
        enter-from-class="translate-y-4 opacity-0"
        enter-active-class="transition duration-700 ease-out motion-reduce:transition-none"
        enter-to-class="translate-y-0 opacity-100"
        class="mt-8 grid gap-x-5 gap-y-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
      >
        <li v-for="(step, index) in processSteps" :key="step.id" class="relative">
          <article class="group relative flex h-full min-h-36 flex-col items-center rounded-xl border border-blue-200 bg-white/95 px-4 pb-4 pt-10 text-center shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none">
            <span class="absolute left-1/2 top-0 inline-flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-blue-200 bg-white text-blue-900 shadow-sm transition duration-300 group-hover:border-blue-300 group-hover:text-blue-700 motion-reduce:transition-none" aria-hidden="true">
              <component :is="stepIcons[step.icon]" :size="27" :stroke-width="1.8" />
            </span>
            <span class="absolute left-[calc(50%_-_2.5rem)] top-0 inline-flex size-6 -translate-y-1/2 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white ring-2 ring-white" aria-hidden="true">
              {{ index + 1 }}
            </span>
            <h3 class="text-sm font-bold leading-5 text-blue-950 sm:text-base">
              {{ dictionary.homeFoundation.process[step.titleKey] }}
            </h3>
            <p class="mt-1.5 text-xs leading-5 text-slate-700 sm:text-sm">
              {{ dictionary.homeFoundation.process[step.descriptionKey] }}
            </p>
          </article>

          <span v-if="index < processSteps.length - 1" class="pointer-events-none absolute -right-5 top-7 hidden w-5 items-center text-blue-600 xl:flex" aria-hidden="true">
            <span class="absolute inset-x-0 top-1/2 border-t-2 border-dashed border-blue-400"></span>
            <ArrowRight class="relative ml-auto bg-sky-50" :size="15" :stroke-width="2.5" />
          </span>
        </li>
      </TransitionGroup>
    </div>
  </section>
</template>
