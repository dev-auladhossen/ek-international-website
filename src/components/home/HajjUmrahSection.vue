<script setup>
import { ArrowRight, Headset, IdCard, MessageCircle, Package, Plane } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import sectionBackground from '../../assets/images/backgrounds/ethereal-blue-wave-panorama.png'
import pilgrimageImage from '../../assets/images/services/Sunlit Kaaba and Clock Tower.png'
import hajjFeatures from '../../data/hajjFeatures'
import { headerContact } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const featureIcons = {
  package: Package,
  travel: Plane,
  visa: IdCard,
  support: Headset,
}
</script>

<template>
  <section
    id="hajj-umrah"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    aria-labelledby="hajj-title"
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

    <div class="relative z-10 mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-6">
      <Transition
        appear
        enter-from-class="translate-y-4 opacity-0"
        enter-active-class="transition duration-700 ease-out motion-reduce:transition-none"
        enter-to-class="translate-y-0 opacity-100"
      >
        <div>
          <p class="text-xs font-bold uppercase tracking-wide text-red-700 sm:text-sm">
            {{ dictionary.homeFoundation.hajjUmrah.eyebrow }}
          </p>
          <span class="mt-2 block h-0.5 w-11 bg-red-600" aria-hidden="true"></span>
          <h2 id="hajj-title" class="mt-3 max-w-xl text-2xl font-bold leading-tight tracking-tight text-blue-950 sm:text-3xl lg:text-4xl">
            {{ dictionary.homeFoundation.hajjUmrah.title }}
          </h2>
          <p class="mt-3 max-w-xl text-sm leading-6 text-blue-950 sm:text-base sm:leading-6">
            {{ dictionary.homeFoundation.hajjUmrah.description }}
          </p>

          <ul class="mt-5 grid grid-cols-2 gap-y-4 sm:grid-cols-4 lg:mt-6">
            <li v-for="(feature, index) in hajjFeatures" :key="feature.id" class="group relative flex flex-col items-center px-2 text-center">
              <span class="inline-flex size-12 items-center justify-center rounded-2xl border border-blue-100 bg-white/90 text-blue-900 shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-md motion-reduce:transform-none motion-reduce:transition-none" aria-hidden="true">
                <component :is="featureIcons[feature.icon]" :size="24" :stroke-width="1.8" />
              </span>
              <span class="mt-1.5 max-w-24 text-xs font-semibold leading-4 text-blue-950 sm:text-[13px]">
                {{ dictionary.homeFoundation.hajjUmrah[feature.titleKey] }}
              </span>
              <span v-if="index < hajjFeatures.length - 1" class="pointer-events-none absolute right-0 top-5 hidden h-10 border-r border-blue-300 lg:block" aria-hidden="true"></span>
            </li>
          </ul>

          <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <RouterLink
              class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md bg-red-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-red-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transform-none motion-reduce:transition-none"
              :to="{ name: `${locale}-hajj-umrah` }"
            >
              {{ dictionary.homeFoundation.hajjUmrah.packagesCta }}
              <ArrowRight :size="17" aria-hidden="true" />
            </RouterLink>
            <a
              class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-md border border-blue-900 bg-white/80 px-5 py-2.5 text-sm font-semibold text-blue-950 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700 motion-reduce:transform-none motion-reduce:transition-none"
              :href="headerContact.whatsappHref"
              target="_blank"
              rel="noreferrer"
              :aria-label="dictionary.homeFoundation.hajjUmrah.inquireCta"
            >
              <MessageCircle :size="17" aria-hidden="true" />
              {{ dictionary.homeFoundation.hajjUmrah.inquireCta }}
            </a>
          </div>
        </div>
      </Transition>

      <div class="group relative min-h-60 overflow-hidden rounded-tl-[4rem] rounded-br-2xl rounded-tr-2xl rounded-bl-2xl shadow-md sm:min-h-80 lg:min-h-[25rem] lg:rounded-l-[13rem] lg:rounded-tr-2xl">
        <img
          class="absolute inset-0 size-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          :src="pilgrimageImage"
          :alt="dictionary.homeFoundation.hajjUmrah.imageAlt"
          width="1672"
          height="940"
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
</template>
