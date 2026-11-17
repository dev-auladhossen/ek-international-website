<script setup>
import { Mail, MapPin, MessageCircle, Phone } from '@lucide/vue'
import { headerContact } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const mapUrl = 'https://maps.app.goo.gl/6G7QDYx6nbgVAD5u6'
const cards = [
  { id: 'phone', labelKey: 'phone', value: headerContact.phoneDisplay, href: headerContact.phoneHref, icon: Phone },
  { id: 'email', labelKey: 'email', value: headerContact.email, href: headerContact.emailHref, icon: Mail, accent: true },
  { id: 'address', labelKey: 'address', valueKey: 'mapAddress', href: mapUrl, icon: MapPin, external: true },
  { id: 'whatsapp', labelKey: 'whatsapp', value: headerContact.whatsappDisplay, href: headerContact.whatsappHref, icon: MessageCircle, external: true },
]
</script>

<template>
  <section class="bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20" :aria-label="dictionary.homeFoundation.contact.title">
    <ul class="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
      <li v-for="card in cards" :key="card.id" v-reveal class="min-w-0">
        <article
          class="group h-full min-h-52 p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(15,23,42,0.14)] motion-reduce:transform-none motion-reduce:transition-none sm:p-7"
          :class="card.accent ? 'bg-[#EE2329] text-white' : 'bg-slate-100 text-[#313493]'"
        >
          <span
            class="inline-flex size-16 items-center justify-center rounded-full transition duration-300 group-hover:scale-105 motion-reduce:transform-none motion-reduce:transition-none"
            :class="card.accent ? 'bg-white text-[#EE2329]' : 'bg-[#EE2329] text-white'"
            aria-hidden="true"
          >
            <component :is="card.icon" :size="30" :stroke-width="1.8" />
          </span>
          <h2 class="mt-6 text-lg font-bold">{{ dictionary.homeFoundation.contact[card.labelKey] }}</h2>
          <a
            class="mt-2 inline-block break-words text-sm leading-6 transition-colors hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 sm:text-base"
            :class="card.accent ? 'text-white' : 'text-slate-600 hover:text-[#EE2329]'"
            :href="card.href"
            :target="card.external ? '_blank' : undefined"
            :rel="card.external ? 'noopener noreferrer' : undefined"
          >
            {{ card.valueKey ? dictionary.homeFoundation.contact[card.valueKey] : card.value }}
          </a>
        </article>
      </li>
    </ul>
  </section>
</template>
