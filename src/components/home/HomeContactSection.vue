<script setup>
import { Clock3, Mail, MapPin, Phone } from '@lucide/vue'
import RevealHeading from '../common/RevealHeading.vue'
import inquiryBackground from '../../assets/images/backgrounds/Blue Gradient World Map with Red Wave.png'
import { headerContact, officeLocations, socialPlatforms } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'
import InquiryForm from '../contact/InquiryForm.vue'

const { dictionary } = usePageContent()
const contact = () => dictionary.value.homeFoundation.contact
const contactItems = [
  { id: 'hotline', labelKey: 'officeHotline', value: headerContact.phoneDisplay, href: headerContact.phoneHref, icon: Phone },
  { id: 'email', labelKey: 'email', value: headerContact.email, href: headerContact.emailHref, icon: Mail },
  { id: 'location', labelKey: 'address', value: officeLocations[0].address, href: officeLocations[0].mapUrl, icon: MapPin, external: true },
  { id: 'hours', labelKey: 'officeHours', value: headerContact.officeHours, icon: Clock3 },
]
</script>

<template>
  <section id="contact" class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16" aria-labelledby="home-contact-title">
    <div class="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-4xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wide text-[#EE2329] sm:text-sm">{{ contact().eyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading id="home-contact-title" class="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl" :text="contact().title" />
        <p v-reveal class="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#313493] sm:text-base">{{ contact().intro }}</p>
      </header>

      <div class="mt-7 grid gap-5 lg:mt-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        <aside v-reveal:image-left class="group relative isolate flex min-h-[25rem] overflow-hidden rounded-2xl bg-[#313493] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
          <img class="absolute inset-0 -z-10 size-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none" :src="inquiryBackground" alt="" width="1638" height="940" loading="lazy" decoding="async" aria-hidden="true" />
          <div class="my-auto w-full">
            <ul class="grid gap-5 sm:gap-6">
              <li v-for="item in contactItems" :key="item.id" class="group/item flex min-w-0 items-center gap-3.5 sm:gap-4">
                <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#EE2329] shadow-sm transition duration-300 group-hover/item:scale-105 group-hover/item:bg-red-50 motion-reduce:transform-none motion-reduce:transition-none sm:size-14" aria-hidden="true">
                  <component :is="item.icon" :size="23" :stroke-width="2.2" />
                </span>
                <div class="min-w-0 text-white">
                  <p class="text-sm font-medium text-white/90">{{ contact()[item.labelKey] }}</p>
                  <a v-if="item.href" class="mt-0.5 block break-words text-sm font-bold leading-5 transition-colors hover:text-sky-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base" :href="item.href" :target="item.external ? '_blank' : undefined" :rel="item.external ? 'noopener noreferrer' : undefined">{{ item.value }}</a>
                  <p v-else class="mt-0.5 break-words text-sm font-bold leading-5 sm:text-base">{{ item.value }}</p>
                </div>
              </li>
            </ul>

            <div class="mt-6">
              <h3 class="text-sm font-semibold text-white sm:text-base">{{ contact().followUs }}</h3>
              <div class="mt-3 flex flex-wrap gap-3" role="group" :aria-label="contact().followUs">
                <component v-for="platform in socialPlatforms" :is="platform.href ? 'a' : 'span'" :key="platform.id" class="inline-flex size-10 items-center justify-center rounded-full border border-white/35 text-white transition duration-300 hover:-translate-y-1 hover:border-white hover:bg-white hover:text-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none" :href="platform.href" :target="platform.href ? '_blank' : undefined" :rel="platform.href ? 'noopener noreferrer' : undefined" :role="platform.href ? undefined : 'img'" :aria-label="dictionary.siteHeader.socialLinks[platform.id]" :title="dictionary.siteHeader.socialLinks[platform.id]">
                  <svg v-if="platform.id === 'facebook'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" /></svg>
                  <svg v-else-if="platform === 'youtube'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
                  <svg v-else-if="platform === 'linkedin'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6v7h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5V9Z" /></svg>
                  <svg v-else class="size-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
                </component>
              </div>
            </div>
          </div>
        </aside>

        <div v-reveal class="rounded-2xl border border-blue-100 bg-white/95 p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-7 lg:p-8">
          <h3 class="text-xl font-bold tracking-tight text-[#313493] sm:text-2xl">{{ dictionary.homeFoundation.inquiry.heading }}</h3>
          <InquiryForm />
        </div>
      </div>
    </div>
  </section>
</template>
