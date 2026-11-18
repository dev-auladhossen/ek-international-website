<script setup>
import { ArrowRight, BriefcaseBusiness, Clock3, ContactRound, IdCard, Mail, MapPin, Mosque, Phone, Plane, UsersRound } from '@lucide/vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import footerLogo from '../../assets/images/logo/logo-white-bg.png'
import { headerContact, officeLocations, socialPlatforms } from '../../data/contact'
import { footerQuickNavigation } from '../../data/navigation'
import services from '../../data/services'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const newsletterSubmitted = ref(false)
const footerSocials = ['facebook', 'instagram', 'youtube', 'linkedin'].map((id) =>
  socialPlatforms.find((platform) => platform.id === id),
)
const copyrightYear = new Date().getFullYear()
const footer = () => dictionary.value.homeFoundation.footer
const contact = () => dictionary.value.homeFoundation.contact
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
  <footer class="bg-[#313493] text-white">
    <div class="mx-auto grid max-w-[1310px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1920px] gap-10 px-4 py-12 sm:px-6 sm:py-14 lg:grid-cols-[1.15fr_0.8fr_0.9fr_1.25fr] lg:gap-12 lg:px-8 lg:py-16">
      <div class="min-w-0">
        <RouterLink
          class="inline-flex cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          :to="{ name: `${locale}-home` }"
        >
          <img
            class="h-auto w-16 object-contain sm:w-20"
            :src="footerLogo"
            :alt="dictionary.homeFoundation.navigation.brand"
            width="1420"
            height="1108"
            loading="lazy"
          />
        </RouterLink>
        <p class="mt-4 max-w-sm text-xs leading-5 text-white/80 sm:text-sm sm:leading-6">
          {{ footer().companyDescription }}
        </p>
        <div class="mt-6 flex items-center gap-2.5" role="group" :aria-label="dictionary.siteHeader.socialLinksLabel">
          <component
            :is="platform?.href ? 'a' : 'span'"
            v-for="platform in footerSocials"
            :key="platform.id"
            class="inline-flex size-10 items-center justify-center rounded-full border border-white/25 text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none"
            :href="platform.href"
            :target="platform.href ? '_blank' : undefined"
            :rel="platform.href ? 'noopener noreferrer' : undefined"
            :role="platform.href ? undefined : 'img'"
            :aria-label="dictionary.siteHeader.socialLinks[platform.id]"
            :title="dictionary.siteHeader.socialLinks[platform.id]"
          >
            <svg v-if="platform.id === 'facebook'" class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" /></svg>
            <svg v-else-if="platform.id === 'youtube'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
            <svg v-else-if="platform.id === 'linkedin'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6v7h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5V9Z" /></svg>
            <svg v-else class="size-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
          </component>
        </div>
      </div>

      <nav :aria-label="footer().quickLinksNavLabel">
        <h2 class="flex items-center gap-2.5 text-base font-semibold text-white sm:text-lg"><span class="h-1 w-8 rounded-full bg-[#EE2329]" aria-hidden="true"></span>{{ footer().quickLinksTitle }}</h2>
        <ul class="mt-5 grid gap-3.5">
          <li v-for="item in footerQuickNavigation" :key="item.id">
            <RouterLink class="group/link inline-flex items-center gap-2.5 text-sm text-white/80 transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none" :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }">
              <ArrowRight class="size-4 shrink-0 text-[#EE2329] transition-transform duration-300 group-hover/link:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
              {{ dictionary.homeFoundation.navigation[item.labelKey] }}
            </RouterLink>
          </li>
        </ul>
      </nav>

      <nav :aria-label="footer().servicesNavLabel">
        <h2 class="flex items-center gap-2.5 text-base font-semibold text-white sm:text-lg"><span class="h-1 w-8 rounded-full bg-[#EE2329]" aria-hidden="true"></span>{{ footer().servicesTitle }}</h2>
        <ul class="mt-5 grid gap-3.5">
          <li v-for="service in services" :key="service.id" class="inline-flex items-center gap-2.5 text-sm text-white/80">
            <component :is="serviceIcons[service.icon]" class="size-4 shrink-0 text-[#EE2329]" aria-hidden="true" />
            {{ dictionary.servicesPage[service.titleKey] }}
          </li>
        </ul>
      </nav>

      <section aria-labelledby="footer-contact-title">
        <h2 id="footer-contact-title" class="flex items-center gap-2.5 text-base font-semibold text-white sm:text-lg"><span class="h-1 w-8 rounded-full bg-[#EE2329]" aria-hidden="true"></span>{{ dictionary.homeFoundation.navigation.contactUs }}</h2>
        <ul class="mt-5 grid gap-4">
          <li class="flex items-start gap-3 text-sm text-white/80">
            <MapPin class="mt-0.5 size-4 shrink-0 text-[#EE2329]" aria-hidden="true" />
            <a class="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" :href="officeLocations[0].mapUrl" target="_blank" rel="noopener noreferrer">{{ officeLocations[0].address }}</a>
          </li>
          <li class="flex items-start gap-3 text-sm text-white/80">
            <Phone class="mt-0.5 size-4 shrink-0 text-[#EE2329]" aria-hidden="true" />
            <div><span class="block text-xs text-white/60">{{ contact().officeHotline }}</span><a class="font-semibold text-white transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" :href="headerContact.phoneHref">{{ headerContact.phoneDisplay }}</a></div>
          </li>
          <li class="flex items-start gap-3 text-sm text-white/80">
            <Mail class="mt-0.5 size-4 shrink-0 text-[#EE2329]" aria-hidden="true" />
            <a class="break-all transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" :href="headerContact.emailHref">{{ headerContact.email }}</a>
          </li>
          <li class="flex items-start gap-3 text-sm text-white/80">
            <Clock3 class="mt-0.5 size-4 shrink-0 text-[#EE2329]" aria-hidden="true" />
            <div><span class="block text-xs text-white/60">{{ contact().officeHours }}</span>{{ headerContact.officeHours }}</div>
          </li>
        </ul>
      </section>
    </div>

    <section class="border-t border-white/15 bg-[#292A7D] px-4 py-7 sm:px-6 lg:px-8" aria-labelledby="footer-newsletter-title">
      <div class="mx-auto flex max-w-[1310px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1920px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 id="footer-newsletter-title" class="text-base font-semibold text-white sm:text-lg">{{ footer().newsletterTitle }}</h2>
          <p class="mt-1 text-sm text-white/75">{{ footer().newsletterIntro }}</p>
        </div>
        <form class="flex w-full max-w-xl flex-col gap-2 sm:flex-row" @submit.prevent="newsletterSubmitted = true">
          <label class="sr-only" for="footer-newsletter-email">{{ footer().newsletterEmailLabel }}</label>
          <input id="footer-newsletter-email" class="min-h-12 min-w-0 flex-1 rounded-full border border-white/25 bg-white/10 px-5 text-sm text-white outline-none placeholder:text-white/60 focus-visible:ring-2 focus-visible:ring-[#EE2329]" type="email" name="email" autocomplete="email" :placeholder="footer().newsletterEmailPlaceholder" required />
          <button class="inline-flex min-h-12 cursor-pointer items-center justify-center rounded-full bg-[#EE2329] px-7 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none" type="submit">{{ footer().newsletterButton }}</button>
        </form>
      </div>
      <p v-if="newsletterSubmitted" class="mx-auto mt-2 max-w-[1310px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1920px] text-xs text-white/80" role="status">{{ footer().newsletterNotConnected }}</p>
    </section>

    <div class="bg-[#010300] px-4 py-4 text-white sm:px-6 lg:px-8">
      <div class="mx-auto flex max-w-[1310px] 2xl:max-w-[1440px] min-[1920px]:max-w-[1600px] min-[2560px]:max-w-[1920px] flex-col gap-2 text-xs text-white/75 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <p>{{ footer().copyright.replace('{year}', copyrightYear) }}</p>
        <p>
          Developed by
          <a class="font-semibold text-white transition-colors hover:text-[#EE2329] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" href="https://neondigitalsolution.com" target="_blank" rel="noopener noreferrer">Neon Digital Solutions</a>
        </p>
      </div>
    </div>
  </footer>
</template>
