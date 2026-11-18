<script setup>
import { computed } from 'vue'
import { ArrowRight, BriefcaseBusiness, Check, ChevronRight, ContactRound, House, IdCard, Mosque, Phone, Plane, UsersRound } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import SiteFooter from '../components/layout/SiteFooter.vue'
import { usePageContent } from '../composables/usePageContent'
import services from '../data/services'
import heroBackground from '../assets/images/backgrounds/Blue Flight Path Wallpaper.webp'
import heroBackgroundMobile from '../assets/images/backgrounds/Blue Flight Path Wallpaper-mobile.webp'
import assistanceBackground from '../assets/images/services/Sunlit Kaaba and Clock Tower.webp'
import assistanceBackgroundMobile from '../assets/images/services/Sunlit Kaaba and Clock Tower-mobile.webp'
import { headerContact } from '../data/contact'

const { dictionary, locale } = usePageContent()
const pageCopy = computed(() => dictionary.value.pages.services)
const copy = computed(() => dictionary.value.servicesPage)
const serviceIcons = {
  workVisa: BriefcaseBusiness,
  passport: ContactRound,
  travelVisa: IdCard,
  airTicket: Plane,
  umrah: Mosque,
  hajj: UsersRound,
}
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <section class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10" aria-labelledby="services-page-title">
      <img class="absolute inset-0 size-full object-cover object-left" :src="heroBackground" :srcset="`${heroBackgroundMobile} 900w, ${heroBackground} 1600w`" sizes="100vw" alt="" aria-hidden="true" width="2172" height="724" loading="eager" fetchpriority="high" decoding="async" />
      <div class="absolute inset-0 bg-[#17245C]/60" aria-hidden="true"></div>
      <div class="relative mx-auto flex max-w-5xl flex-col items-center text-center">
        <nav v-reveal class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6" :aria-label="dictionary.aboutPage.breadcrumbLabel">
          <RouterLink class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white" :to="{ name: `${locale}-home` }">
            <House :size="15" aria-hidden="true" />{{ dictionary.aboutPage.home }}
          </RouterLink>
          <ChevronRight :size="15" aria-hidden="true" />
          <span aria-current="page" class="font-semibold text-white">{{ pageCopy.heading }}</span>
        </nav>
        <p v-reveal class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm">{{ copy.eyebrow }}</p>
        <h1 id="services-page-title" v-reveal class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl">{{ copy.heroTitle }}</h1>
        <p v-reveal class="mt-4 max-w-3xl text-sm leading-6 text-white/90 sm:mt-5 sm:text-lg sm:leading-8">{{ copy.heroDescription }}</p>
      </div>
    </section>

    <section class="bg-white px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16" aria-labelledby="services-list-title">
      <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
        <header class="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
          <div v-reveal class="flex items-center justify-center gap-2">
            <span class="h-0.5 w-6 bg-[#EE2329]" aria-hidden="true"></span>
            <p class="text-xs font-bold uppercase tracking-[0.14em] text-[#EE2329] sm:text-sm">{{ copy.eyebrow }}</p>
          </div>
          <h2 id="services-list-title" v-reveal class="mt-2 text-2xl font-bold leading-tight text-[#313493] sm:text-3xl lg:text-4xl">{{ copy.catalogTitle }}</h2>
          <p v-reveal class="mt-3 text-sm leading-6 text-slate-600 sm:text-base">{{ copy.catalogIntro }}</p>
        </header>

        <ul class="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <li v-for="service in services" :id="service.id" :key="service.id" v-reveal class="min-w-0 scroll-mt-28">
            <article class="group flex h-full flex-col overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-[0_8px_24px_rgba(49,52,147,0.09)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(49,52,147,0.16)] motion-reduce:transform-none motion-reduce:transition-none">
              <div v-reveal:image-left class="relative overflow-hidden bg-sky-50">
              <img class="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none" :src="service.image" :srcset="`${service.imageMobile} 480w, ${service.image} 752w`" sizes="(max-width: 767px) 92vw, (max-width: 1279px) 46vw, 31vw" :alt="copy[service.imageAltKey]" width="752" height="320" loading="lazy" decoding="async" />
              </div>
              <div class="flex flex-1 flex-col p-5 sm:p-6">
                <div class="flex items-center gap-3">
                  <span class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-sky-100 text-[#313493] transition-colors duration-300 group-hover:bg-[#313493] group-hover:text-white" aria-hidden="true">
                    <component :is="serviceIcons[service.icon]" :size="22" :stroke-width="2.2" />
                  </span>
                  <h3 v-reveal class="text-base font-bold leading-snug text-[#313493] sm:text-lg">{{ copy[service.titleKey] }}</h3>
                </div>
                <p v-reveal class="mt-3 text-sm leading-6 text-slate-700">{{ copy[service.descriptionKey] }}</p>
                <ul class="mt-4 space-y-2" :aria-label="copy.serviceIncludesLabel">
                  <li v-for="featureKey in service.featureKeys" :key="featureKey" v-reveal class="flex items-start gap-2 text-sm leading-5 text-slate-700">
                    <Check :size="17" class="mt-0.5 shrink-0 text-[#EE2329]" :stroke-width="3" aria-hidden="true" />
                    <span>{{ copy[featureKey] }}</span>
                  </li>
                </ul>
                <RouterLink v-reveal class="mt-6 inline-flex min-h-10 w-fit items-center justify-center gap-2 self-center rounded-lg bg-[#313493] px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#313493] motion-reduce:transform-none motion-reduce:transition-none" :to="{ name: `${locale}-contact` }">
                  {{ copy.serviceDetailsCta }} <ArrowRight :size="16" aria-hidden="true" />
                </RouterLink>
              </div>
            </article>
          </li>
        </ul>
      </div>
    </section>

    <section class="bg-white px-4 py-4 sm:px-6 lg:px-8" aria-labelledby="service-assistance-title">
      <div class="relative isolate mx-auto grid min-h-[210px] max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem] items-center gap-5 overflow-hidden rounded-2xl border border-blue-100 px-5 py-6 sm:min-h-[220px] sm:px-8 md:grid-cols-[minmax(0,1fr)_1px_290px] md:gap-8 lg:px-12">
        <img class="absolute inset-0 size-full object-cover object-right" :src="assistanceBackground" :srcset="`${assistanceBackgroundMobile} 900w, ${assistanceBackground} 1600w`" sizes="100vw" :alt="copy.assistanceImageAlt" width="1672" height="941" loading="lazy" decoding="async" />
        <div class="absolute inset-0 bg-gradient-to-r from-sky-50/95 via-sky-50/90 to-sky-50/35" aria-hidden="true"></div>
        <div class="relative z-10">
          <span class="mb-3 block h-1 w-10 rounded-full bg-[#EE2329]" aria-hidden="true"></span>
          <h2 id="service-assistance-title" v-reveal class="max-w-xl text-2xl font-bold leading-tight text-[#313493] sm:text-3xl">{{ copy.assistanceTitle }}</h2>
          <p v-reveal class="mt-2 max-w-xl text-sm leading-6 text-[#172554] sm:text-base">{{ copy.assistanceDescription }}</p>
        </div>
        <span class="relative z-10 hidden h-28 w-px bg-[#313493]/20 md:block" aria-hidden="true"></span>
        <div class="relative z-10 flex w-full flex-col gap-3 sm:flex-row md:flex-col">
          <a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[#EE2329] px-5 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none" :href="headerContact.phoneHref">
            <Phone :size="17" aria-hidden="true" /> {{ copy.callNow }}: {{ headerContact.phoneDisplay }}
          </a>
          <a class="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-green-600 bg-white/90 px-5 py-3 text-sm font-bold text-green-700 transition duration-300 hover:-translate-y-0.5 hover:bg-green-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green-700 motion-reduce:transform-none motion-reduce:transition-none" :href="headerContact.whatsappHref" target="_blank" rel="noopener noreferrer" :aria-label="`${copy.whatsappInquiry}: ${headerContact.whatsappDisplay}`">
            <svg class="size-[18px] fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.42ZM12.09 21.8a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" /></svg>
            {{ copy.whatsappInquiry }}
          </a>
        </div>
      </div>
    </section>

    <SiteFooter />
  </main>
</template>
