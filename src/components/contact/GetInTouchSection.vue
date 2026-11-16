<script setup>
import { Mail, MapPin, MessageCircle, Phone } from '@lucide/vue'
import RevealHeading from '../common/RevealHeading.vue'
import inquiryBackground from '../../assets/images/backgrounds/Blue Gradient World Map with Red Wave.png'
import { headerContact } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'
import InquiryForm from './InquiryForm.vue'

const { dictionary } = usePageContent()

const contactMethods = [
  { id: 'phone', labelKey: 'phone', value: headerContact.phoneDisplay, href: headerContact.phoneHref, icon: Phone },
  { id: 'email', labelKey: 'email', value: headerContact.email, href: headerContact.emailHref, icon: Mail },
  { id: 'location', labelKey: 'address', value: headerContact.location, icon: MapPin },
  { id: 'whatsapp', labelKey: 'whatsapp', value: headerContact.phoneDisplay, href: headerContact.whatsappHref, icon: MessageCircle, external: true },
]
</script>

<template>
  <section
    id="contact"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-12 sm:px-6 sm:py-14 lg:px-8 lg:py-16"
    aria-labelledby="contact-title"
  >
    <div class="relative z-10 mx-auto max-w-7xl">
      <header class="mx-auto max-w-4xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wide text-[#EE2329] sm:text-sm">
            {{ dictionary.homeFoundation.contact.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="contact-title"
          class="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl"
          :text="dictionary.homeFoundation.contact.title"
        />
        <p v-reveal class="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#313493] sm:text-base">
          {{ dictionary.homeFoundation.contact.intro }}
        </p>
      </header>

      <div class="mt-7 grid gap-5 lg:mt-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-6">
        <aside v-reveal:image-left class="group relative isolate flex min-h-[25rem] overflow-hidden rounded-2xl bg-[#313493] p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg motion-reduce:transform-none motion-reduce:transition-none sm:p-8">
          <img
            class="absolute inset-0 -z-10 size-full scale-105 object-cover transition-transform duration-700 ease-out group-hover:scale-110 motion-reduce:transition-none"
            :src="inquiryBackground"
            alt=""
            width="1638"
            height="940"
            loading="lazy"
            decoding="async"
            aria-hidden="true"
          />
          <ul class="my-auto grid w-full max-w-[19rem] gap-5 sm:gap-6">
            <li v-for="method in contactMethods" :key="method.id" class="group/item flex min-w-0 items-center gap-3.5 sm:gap-4">
              <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-full bg-white text-[#EE2329] shadow-sm transition duration-300 group-hover/item:scale-105 group-hover/item:bg-red-50 motion-reduce:transform-none motion-reduce:transition-none sm:size-14" aria-hidden="true">
                <component :is="method.icon" :size="23" :stroke-width="2.2" />
              </span>
              <div class="min-w-0 text-white">
                <p class="text-sm font-medium text-white/90">
                  {{ dictionary.homeFoundation.contact[method.labelKey] }}
                </p>
                <a
                  v-if="method.href"
                  class="mt-0.5 block break-words text-sm font-bold leading-5 transition-colors hover:text-sky-100 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:text-base"
                  :href="method.href"
                  :target="method.external ? '_blank' : undefined"
                  :rel="method.external ? 'noreferrer' : undefined"
                >
                  {{ method.value }}
                </a>
                <p v-else class="mt-0.5 break-words text-sm font-bold leading-5 sm:text-base">
                  {{ method.value }}
                </p>
              </div>
            </li>
          </ul>
        </aside>

        <div v-reveal class="rounded-2xl border border-blue-100 bg-white/95 p-5 shadow-sm transition duration-300 hover:shadow-md sm:p-7 lg:p-8">
          <h3 class="text-xl font-bold tracking-tight text-[#313493] sm:text-2xl">
            {{ dictionary.homeFoundation.inquiry.heading }}
          </h3>
          <InquiryForm />
        </div>
      </div>
    </div>
  </section>
</template>
