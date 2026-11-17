<script setup>
import { Clock3, Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from '@lucide/vue'
import { agencyAuthorization, headerContact, officeLocations } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'
import InquiryForm from './InquiryForm.vue'

const { dictionary } = usePageContent()
const contact = () => dictionary.value.homeFoundation.contact

const contactCards = [
  {
    id: 'hotline',
    labelKey: 'officeHotline',
    value: headerContact.phoneDisplay,
    href: headerContact.phoneHref,
    detailKey: 'officeContactNumbers',
    detail: headerContact.officeContactNumbers,
    icon: Phone,
  },
  {
    id: 'whatsapp',
    labelKey: 'agentWhatsApp',
    value: headerContact.whatsappDisplay,
    href: headerContact.whatsappHref,
    icon: MessageCircle,
  },
  {
    id: 'email',
    labelKey: 'email',
    value: headerContact.email,
    href: headerContact.emailHref,
    icon: Mail,
  },
  {
    id: 'office-hours',
    labelKey: 'officeHours',
    value: headerContact.officeHours,
    icon: Clock3,
  },
]

const socialPlatforms = ['facebook', 'youtube', 'linkedin', 'instagram']
</script>

<template>
  <section
    id="contact"
    class="bg-slate-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    aria-labelledby="inquiry-panel-title"
  >
    <div class="mx-auto grid max-w-7xl items-start gap-5 lg:grid-cols-[1.18fr_0.82fr] lg:gap-6">
      <div class="grid min-w-0 gap-4 sm:grid-cols-2">
        <article
          v-for="card in contactCards"
          :key="card.id"
          v-reveal
          class="group min-w-0 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(49,52,147,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#313493]/25 hover:shadow-[0_14px_32px_rgba(49,52,147,0.13)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6"
        >
          <div class="flex min-w-0 items-start gap-4">
            <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#EE2329] transition duration-300 group-hover:bg-[#EE2329] group-hover:text-white motion-reduce:transition-none" aria-hidden="true">
              <component :is="card.icon" :size="23" :stroke-width="1.9" />
            </span>
            <div class="min-w-0">
              <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                {{ contact()[card.labelKey] }}
              </h2>
              <a
                v-if="card.href"
                class="mt-1 block break-words text-sm font-bold leading-5 text-[#010300] transition-colors hover:text-[#EE2329] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] sm:text-base"
                :href="card.href"
                :target="card.id === 'whatsapp' ? '_blank' : undefined"
                :rel="card.id === 'whatsapp' ? 'noopener noreferrer' : undefined"
              >
                {{ card.value }}
              </a>
              <p v-else class="mt-1 break-words text-sm font-bold leading-5 text-[#010300] sm:text-base">
                {{ card.value }}
              </p>
              <p v-if="card.detail" class="mt-1 break-words text-xs leading-5 text-slate-600 sm:text-sm">
                {{ contact()[card.detailKey] }}: {{ card.detail }}
              </p>
            </div>
          </div>
        </article>

        <article
          v-reveal
          class="group min-w-0 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(49,52,147,0.07)] transition duration-300 hover:-translate-y-1 hover:border-[#313493]/25 hover:shadow-[0_14px_32px_rgba(49,52,147,0.13)] motion-reduce:transform-none motion-reduce:transition-none sm:col-span-2 sm:p-6"
        >
          <div class="flex items-start gap-4">
            <span class="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-red-50 text-[#EE2329] transition duration-300 group-hover:bg-[#EE2329] group-hover:text-white motion-reduce:transition-none" aria-hidden="true">
              <MapPin :size="23" :stroke-width="1.9" />
            </span>
            <div class="min-w-0 flex-1">
              <h2 class="text-xs font-semibold uppercase tracking-wide text-slate-500 sm:text-sm">
                {{ contact().address }}
              </h2>
              <ul class="mt-2 grid gap-4 sm:grid-cols-2 sm:gap-5">
                <li v-for="office in officeLocations" :key="office.id" class="min-w-0">
                  <h3 class="text-sm font-bold text-[#010300]">{{ contact()[office.labelKey] }}</h3>
                  <p class="mt-1 break-words text-sm leading-5 text-slate-600">{{ office.address }}</p>
                  <a
                    class="mt-2 inline-flex min-h-8 items-center gap-1.5 text-sm font-semibold text-[#EE2329] transition-colors hover:text-[#B91C1C] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329]"
                    :href="office.mapUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {{ contact().openMaps }} <ArrowUpRight :size="15" aria-hidden="true" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>

        <article v-reveal class="min-w-0 rounded-2xl border border-blue-100 bg-white p-4 shadow-[0_8px_24px_rgba(49,52,147,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(49,52,147,0.13)] motion-reduce:transform-none motion-reduce:transition-none sm:col-span-2 sm:flex sm:items-center sm:justify-between sm:gap-5 sm:px-6 sm:py-4">
          <div class="min-w-0">
            <h2 class="text-sm font-bold text-[#010300]">{{ contact().authorisedLabel }}</h2>
            <p class="mt-1 text-sm leading-5 text-slate-600 sm:text-base">{{ agencyAuthorization.name }}</p>
          </div>
          <div class="mt-4 shrink-0 sm:mt-0">
            <h2 class="text-sm font-bold text-[#313493]">{{ contact().followUs }}</h2>
            <div class="mt-2 flex flex-wrap gap-2.5" role="group" :aria-label="contact().followUs">
            <span
              v-for="platform in socialPlatforms"
              :key="platform"
              class="inline-flex size-9 items-center justify-center rounded-full border border-[#313493]/20 bg-white text-[#313493] transition duration-300 hover:-translate-y-1 hover:border-[#EE2329] hover:bg-[#EE2329] hover:text-white motion-reduce:transform-none motion-reduce:transition-none"
              role="img"
              :aria-label="dictionary.siteHeader.socialLinks[platform]"
              :title="dictionary.siteHeader.socialLinks[platform]"
            >
              <svg v-if="platform === 'facebook'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M13.5 21v-8h2.7l.4-3.1h-3.1v-2c0-.9.3-1.5 1.6-1.5h1.7V3.6c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.1H7.3V13h2.8v8h3.4Z" /></svg>
              <svg v-else-if="platform === 'youtube'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.6V8.4l6.3 3.6-6.3 3.6Z" /></svg>
              <svg v-else-if="platform === 'linkedin'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M5.2 3.4a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1A4 4 0 0 1 16.8 8c4 0 4.7 2.6 4.7 6v7h-3.8v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9.5V9Z" /></svg>
              <svg v-else class="size-5 fill-none stroke-current" viewBox="0 0 24 24" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none" /></svg>
            </span>
            </div>
          </div>
        </article>
      </div>

      <div v-reveal class="min-w-0 rounded-2xl border border-blue-100 bg-white p-5 shadow-[0_8px_24px_rgba(49,52,147,0.08)] sm:p-6 lg:p-7">
        <h2 id="inquiry-panel-title" class="text-xl font-bold tracking-tight text-[#313493] sm:text-2xl">
          {{ dictionary.homeFoundation.inquiry.heading }}
        </h2>
        <p class="mt-2 text-sm leading-6 text-slate-600">
          {{ contact().intro }}
        </p>
        <InquiryForm />
      </div>
    </div>
  </section>
</template>
