<script setup>
import { computed, ref } from 'vue'
import { ArrowRight, BedDouble, Hotel, LayoutGrid, Layers3, Mosque, Plane, Tag, UserRound, UsersRound, Utensils } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import pilgrimagePackages from '../../data/hajjUmrahPackages'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.hajjUmrahPage)
const selectedCategory = ref('all')

const categoryTabs = [
  { id: 'all', labelKey: 'allPackages', icon: LayoutGrid },
  { id: 'umrah', labelKey: 'umrahPackages', icon: Mosque },
  { id: 'hajj', labelKey: 'hajjPackages', icon: Layers3 },
]

const featureCards = [
  { id: 'hotels', titleKey: 'hotelsFeature', descriptionKey: 'hotelsFeatureDescription', icon: 'hotel' },
  { id: 'flights', titleKey: 'flightsFeature', descriptionKey: 'flightsFeatureDescription', icon: 'flight' },
  { id: 'guides', titleKey: 'guidesFeature', descriptionKey: 'guidesFeatureDescription', icon: 'guide' },
  { id: 'meals', titleKey: 'mealsFeature', descriptionKey: 'mealsFeatureDescription', icon: 'meals' },
]

const visiblePackages = computed(() => selectedCategory.value === 'all'
  ? pilgrimagePackages
  : pilgrimagePackages.filter((item) => item.category === selectedCategory.value))

const featureIcons = { hotel: Hotel, flight: Plane, guide: UserRound, meals: Utensils }
</script>

<template>
  <section id="pilgrimage-packages" class="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" aria-labelledby="pilgrimage-packages-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-3xl text-center">
        <p v-reveal class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.packagesEyebrow }}</p>
        <h2 id="pilgrimage-packages-title" v-reveal class="mt-2 font-serif text-2xl font-bold leading-tight text-[#313493] sm:text-3xl lg:text-4xl">{{ copy.packagesTitle }}</h2>
        <p v-reveal class="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{{ copy.packagesIntro }}</p>
      </header>

      <div class="sticky top-[76px] z-30 -mx-4 mt-7 bg-slate-50 px-4 py-3 sm:top-[76px] sm:-mx-6 sm:px-6 lg:top-[88px] lg:-mx-8 lg:px-8" role="tablist" :aria-label="copy.packageCategoriesLabel">
        <div class="flex flex-wrap justify-center gap-2.5">
        <button
          v-for="tab in categoryTabs"
          :key="tab.id"
          v-reveal
          class="inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none sm:px-5"
          :class="selectedCategory === tab.id ? 'bg-[#313493] text-white shadow-md' : 'bg-white text-slate-600 shadow-sm hover:bg-red-50 hover:text-[#EE2329]'"
          type="button"
          role="tab"
          :aria-selected="selectedCategory === tab.id"
          aria-controls="package-list"
          @click="selectedCategory = tab.id"
        >
          <component :is="tab.icon" :size="18" aria-hidden="true" />
          {{ copy[tab.labelKey] }}
        </button>
        </div>
      </div>

      <div class="mt-7 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
        <article v-for="feature in featureCards" :key="feature.id" v-reveal class="group flex min-w-0 flex-col items-center rounded-2xl border border-blue-100 bg-white px-5 py-7 text-center shadow-[0_10px_28px_rgba(49,52,147,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(49,52,147,0.15)] motion-reduce:transform-none motion-reduce:transition-none sm:px-6 sm:py-8">
          <span class="inline-flex size-16 items-center justify-center rounded-full bg-[#313493]/10 text-[#313493] transition-colors group-hover:bg-[#EE2329]/10 group-hover:text-[#EE2329] motion-reduce:transition-none" aria-hidden="true">
            <component :is="featureIcons[feature.icon]" :size="32" :stroke-width="2.4" />
          </span>
          <h3 class="mt-5 text-base font-bold leading-6 text-[#010300] sm:text-lg">{{ copy[feature.titleKey] }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600 sm:text-base">{{ copy[feature.descriptionKey] }}</p>
        </article>
      </div>

      <p class="mx-auto mt-8 w-fit rounded-full bg-[#313493]/10 px-4 py-2 text-sm font-semibold text-[#313493]" role="status" aria-live="polite">
        {{ copy.showing }} {{ copy[categoryTabs.find((tab) => tab.id === selectedCategory)?.labelKey] }}
      </p>

      <TransitionGroup
        id="package-list"
        tag="div"
        class="mt-5 grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3"
        role="tabpanel"
        enter-active-class="transition duration-500 ease-out motion-reduce:transition-none"
        enter-from-class="translate-y-3 opacity-0"
        enter-to-class="translate-y-0 opacity-100"
        leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
        leave-from-class="translate-y-0 opacity-100"
        leave-to-class="translate-y-2 opacity-0"
        move-class="transition-transform duration-300"
      >
        <article v-for="item in visiblePackages" :key="item.id" class="group flex min-w-0 flex-col rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(49,52,147,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(49,52,147,0.16)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6">
          <div class="relative -mx-5 -mt-5 mb-5 h-44 overflow-hidden rounded-t-2xl bg-[#313493] sm:-mx-6 sm:-mt-6 sm:h-48">
            <img class="size-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 motion-reduce:transition-none" :src="item.image" :srcset="`${item.imageMobile} 800w, ${item.image} ${item.imageWidth}w`" sizes="(max-width: 639px) 92vw, (max-width: 1023px) 80vw, 38vw" :alt="copy[item.imageAltKey]" width="1672" height="940" loading="lazy" decoding="async" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#101743]/85 via-[#101743]/20 to-[#101743]/10" aria-hidden="true"></div>
            <span class="absolute right-3 top-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/25 px-3 py-2 text-xs font-bold text-white backdrop-blur-sm sm:right-4 sm:top-4 sm:text-sm">
              <component :is="item.category === 'umrah' ? Mosque : Layers3" :size="18" aria-hidden="true" />
              {{ copy[item.serviceKey] }}
            </span>
            <h3 class="absolute inset-x-4 bottom-4 text-center font-serif text-lg font-bold leading-snug text-white drop-shadow-sm sm:text-xl">{{ copy[item.nameKey] }}</h3>
          </div>

          <div class="space-y-3">
            <div class="flex min-w-0 items-center gap-3">
              <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600" aria-hidden="true"><BedDouble :size="21" :stroke-width="2.2" /></span>
              <h3 class="min-w-0 text-sm font-medium leading-snug text-[#313493] sm:text-base">{{ copy[item.nameKey] }}</h3>
            </div>
            <div class="flex items-center gap-3">
              <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700" aria-hidden="true"><Mosque :size="21" :stroke-width="2.2" /></span>
              <p class="text-sm font-medium text-[#313493] sm:text-base">{{ copy.packageLocation }}</p>
            </div>
          </div>

          <div class="mt-5 rounded-2xl bg-[#313493]/[0.07] px-4 py-3.5">
            <div class="flex items-center justify-between gap-3">
              <span class="inline-flex min-w-0 items-center gap-2 text-xs text-[#172554] sm:text-sm"><Tag :size="17" class="shrink-0 text-[#313493]" aria-hidden="true" />{{ copy[item.priceLabelKey] }}</span>
              <strong class="shrink-0 text-lg font-bold text-[#313493] sm:text-xl">{{ item.price }}</strong>
            </div>
            <div class="mt-3 flex items-center gap-2 border-t border-[#313493]/10 pt-3 text-xs sm:text-sm">
              <UsersRound :size="17" class="shrink-0 text-[#313493]" aria-hidden="true" />
              <span class="font-semibold text-[#172554]">{{ copy.packageInformationLabel }}</span>
              <span class="ml-auto text-right font-bold text-[#313493]">{{ copy.packageInformationCta }}</span>
            </div>
          </div>

          <p v-if="item.category === 'hajj'" class="mt-3 flex-1 text-xs leading-5 text-slate-600 sm:text-sm">{{ copy[item.detailsKey] }}</p>
          <div class="mt-5">
            <RouterLink
              class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#EE2329] px-3 py-2.5 text-xs font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none sm:text-sm"
              :to="{ name: `${locale}-contact` }"
            >
              {{ copy.packageContactCta }} <ArrowRight :size="19" aria-hidden="true" />
            </RouterLink>
          </div>
        </article>
      </TransitionGroup>
    </div>
  </section>
</template>
