<script setup>
import { computed, ref } from 'vue'
import { ArrowDown, ArrowRight, FileCheck2, Globe, Handshake, Headset, LayoutGrid, LoaderCircle, Mail, MessageCircle, Phone, UserRound } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { headerContact } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'
import { sendWeb3Form } from '../../services/web3forms'
import ServiceSelect from '../common/ServiceSelect.vue'
import backgroundImage from '../../assets/images/backgrounds/Sky Blue World Map Background.webp'
import backgroundImageMobile from '../../assets/images/backgrounds/Sky Blue World Map Background-mobile.webp'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.workVisaPage)
const isSubmitting = ref(false)
const statusType = ref('')
const statusMessage = ref('')
const selectedService = ref('')
const openFaq = ref(0)

const benefits = [
  { key: 'inquiryBenefitGuidance', icon: Headset },
  { key: 'inquiryBenefitSupport', icon: FileCheck2 },
  { key: 'inquiryBenefitOpportunities', icon: Globe },
  { key: 'inquiryBenefitJourney', icon: Handshake },
]

const services = [
  { key: 'serviceOverseasEmployment', value: 'Overseas Employment' },
  { key: 'servicePassportProcessing', value: 'Passport Processing' },
  { key: 'serviceTravelVisaProcessing', value: 'Travel Visa Processing' },
  { key: 'serviceAirTicketBooking', value: 'Air Ticket Booking' },
  { key: 'serviceUmrahVisaProcessing', value: 'Umrah Visa Processing' },
  { key: 'serviceHajjRegistration', value: 'Hajj Registration' },
]
const serviceOptions = computed(() => services.map((service) => ({
  value: service.value,
  label: copy.value[service.key],
})))

const inquiryErrorMessages = {
  configuration: 'inquiryConfigurationError',
  network: 'inquiryNetworkError',
  rate_limit: 'inquiryRateLimitError',
  invalid_response: 'inquirySubmissionError',
  submission: 'inquirySubmissionError',
}

const inquiryFaqs = [
  { question: 'inquiryFaqTypesQuestion', answer: 'inquiryFaqTypesAnswer' },
  { question: 'inquiryFaqCountriesQuestion', answer: 'inquiryFaqCountriesAnswer' },
  { question: 'inquiryFaqTravelQuestion', answer: 'inquiryFaqTravelAnswer' },
  { question: 'inquiryFaqTimingQuestion', answer: 'inquiryFaqTimingAnswer' },
  { question: 'inquiryFaqDocumentsQuestion', answer: 'inquiryFaqDocumentsAnswer' },
]

async function submitInquiry(event) {
  if (isSubmitting.value) return

  const form = event.currentTarget
  const fields = Object.fromEntries(new FormData(form).entries())
  isSubmitting.value = true
  statusType.value = ''
  statusMessage.value = ''

  try {
    await sendWeb3Form({
      ...fields,
      subject: 'New Work Visa Inquiry - EK International',
      form_type: 'Work Visa Inquiry',
    })
    form.reset()
    selectedService.value = ''
    statusType.value = 'success'
    statusMessage.value = copy.value.inquirySuccess
  } catch (error) {
    statusType.value = 'error'
    statusMessage.value = copy.value[inquiryErrorMessages[error?.code] ?? 'inquirySubmissionError']
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#eff8ff] px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14" aria-labelledby="work-visa-inquiry-title">
    <img class="absolute inset-0 -z-10 size-full object-cover object-center" :src="backgroundImage" :srcset="`${backgroundImageMobile} 900w, ${backgroundImage} 1600w`" sizes="100vw" alt="" aria-hidden="true" width="1920" height="1080" loading="lazy" decoding="async" />
    <div class="absolute inset-0 -z-10 bg-white/55" aria-hidden="true"></div>

    <div class="mx-auto max-w-6xl 2xl:max-w-[84rem] min-[1920px]:max-w-[96rem] min-[2560px]:max-w-[112rem]">
      <header class="mx-auto max-w-5xl text-center">
        <div v-reveal class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-[0.16em] text-[#EE2329] sm:text-sm">{{ copy.inquiryEyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
        </div>
        <h2 id="work-visa-inquiry-title" v-reveal class="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-[#101F4F] sm:text-3xl lg:text-4xl">
          {{ copy.inquiryTitleLead }} <span class="text-blue-600">{{ copy.inquiryTitleAccent }}</span>
        </h2>
        <p v-reveal class="mx-auto mt-2 max-w-4xl text-sm leading-6 text-[#243E61] sm:text-base">{{ copy.inquiryIntro }}</p>
      </header>

      <ul class="mx-auto mt-7 grid max-w-5xl grid-cols-2 gap-4 sm:mt-8 sm:grid-cols-4 sm:gap-0">
        <li v-for="benefit in benefits" :key="benefit.key" v-reveal class="flex flex-col items-center px-2 text-center sm:border-r sm:border-blue-200 sm:px-4 last:border-r-0">
          <span class="inline-flex size-12 items-center justify-center rounded-xl bg-sky-100 text-blue-600 sm:size-14" aria-hidden="true">
            <component :is="benefit.icon" :size="28" :stroke-width="1.8" />
          </span>
          <p class="mt-2 max-w-40 text-sm font-semibold leading-5 text-[#101F4F] sm:text-base">{{ copy[benefit.key] }}</p>
        </li>
      </ul>

      <div v-reveal class="mt-7 rounded-2xl border border-blue-200 bg-white/90 p-4 shadow-sm backdrop-blur-sm sm:mt-8 sm:p-6 lg:p-8">
        <div class="grid gap-6 lg:grid-cols-2 lg:gap-8">
          <form class="min-w-0 lg:border-r lg:border-blue-200 lg:pr-8" @submit.prevent="submitInquiry">
            <input class="hidden" type="checkbox" name="botcheck" tabindex="-1" autocomplete="off" aria-hidden="true" />
            <h3 class="text-xl font-bold tracking-tight text-[#101F4F] sm:text-2xl">{{ copy.inquiryFormTitle }}</h3>
            <div class="mt-4 grid gap-3 sm:grid-cols-2 sm:gap-4">
              <label class="relative block">
                <span class="sr-only">{{ copy.inquiryName }}</span>
                <UserRound class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#243E61]" :size="20" aria-hidden="true" />
                <input required autocomplete="name" name="name" class="min-h-12 w-full rounded-xl border border-blue-200 bg-white/80 py-3 pl-12 pr-4 text-sm text-[#101F4F] placeholder:text-[#243E61] focus:border-[#313493] focus:outline-none focus:ring-2 focus:ring-[#313493]/20" :placeholder="copy.inquiryName" />
              </label>
              <label class="relative block">
                <span class="sr-only">{{ copy.inquiryEmail }}</span>
                <Mail class="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#243E61]" :size="20" aria-hidden="true" />
                <input required autocomplete="email" name="email" type="email" class="min-h-12 w-full rounded-xl border border-blue-200 bg-white/80 py-3 pl-12 pr-4 text-sm text-[#101F4F] placeholder:text-[#243E61] focus:border-[#313493] focus:outline-none focus:ring-2 focus:ring-[#313493]/20" :placeholder="copy.inquiryEmail" />
              </label>
              <div class="relative min-w-0">
                <span class="sr-only" id="work-visa-inquiry-service-label">{{ copy.inquiryService }}</span>
                <ServiceSelect
                  id="work-visa-inquiry-service"
                  v-model="selectedService"
                  :options="serviceOptions"
                  :placeholder="copy.inquiryService"
                  :label="copy.inquiryService"
                  name="service"
                  :leading="LayoutGrid"
                  :required="true"
                />
              </div>
              <label class="relative block">
                <span class="sr-only">{{ copy.inquiryMessage }}</span>
                <MessageCircle class="pointer-events-none absolute left-4 top-4 text-[#243E61]" :size="20" aria-hidden="true" />
                <textarea required name="message" rows="3" class="min-h-12 w-full resize-y rounded-xl border border-blue-200 bg-white/80 py-3 pl-12 pr-4 text-sm text-[#101F4F] placeholder:text-[#243E61] focus:border-[#313493] focus:outline-none focus:ring-2 focus:ring-[#313493]/20 sm:h-full" :placeholder="copy.inquiryMessage"></textarea>
              </label>
              <div class="sm:col-span-2">
                <button type="submit" :disabled="isSubmitting" class="inline-flex min-h-12 w-full items-center justify-center gap-3 rounded-lg bg-[#EE2329] px-6 py-3 text-base font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] active:translate-y-0 disabled:cursor-wait disabled:opacity-70 motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:min-w-56">
                  {{ isSubmitting ? copy.inquirySending : copy.inquirySubmit }}
                  <LoaderCircle v-if="isSubmitting" class="animate-spin" :size="21" aria-hidden="true" />
                  <ArrowRight v-else :size="21" aria-hidden="true" />
                </button>
                <p v-if="isSubmitting || statusMessage" class="mt-3 text-sm leading-5" :class="statusType === 'success' ? 'text-emerald-700' : statusType === 'error' ? 'text-[#B91C1C]' : 'text-[#243E61]'" role="status" aria-live="polite">{{ isSubmitting ? copy.inquirySending : statusMessage }}</p>
              </div>
            </div>
          </form>

          <div class="min-w-0 space-y-2" :aria-label="copy.inquiryFaqLabel">
            <article v-for="(faq, index) in inquiryFaqs" :key="faq.question" class="overflow-hidden rounded-xl border border-blue-200 bg-white/85 transition-colors duration-300 hover:bg-white">
              <h3>
                <button :id="`work-visa-faq-trigger-${index}`" class="flex min-h-11 w-full items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-sm font-bold leading-5 text-[#101F4F] transition-colors hover:text-[#313493] focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#313493] sm:px-4" type="button" :aria-expanded="openFaq === index" :aria-controls="`work-visa-faq-panel-${index}`" @click="openFaq = openFaq === index ? -1 : index">
                  <span>{{ copy[faq.question] }}</span>
                  <ArrowDown :size="19" class="shrink-0 transition-transform duration-300 ease-in-out motion-reduce:transition-none" :class="openFaq === index ? 'rotate-180 text-[#313493]' : 'text-[#101F4F]'" aria-hidden="true" />
                </button>
              </h3>
              <div :id="`work-visa-faq-panel-${index}`" role="region" :aria-labelledby="`work-visa-faq-trigger-${index}`" class="grid transition-[grid-template-rows,opacity] duration-400 ease-in-out motion-reduce:transition-none" :class="openFaq === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'">
                <div class="overflow-hidden">
                  <p class="px-3 pb-3 text-sm leading-5 text-[#243E61] sm:px-4 sm:pb-4">{{ copy[faq.answer] }}</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

      <nav v-reveal class="mx-auto mt-6 flex w-full flex-col items-center gap-2 rounded-2xl border border-blue-100 bg-white/85 px-3 py-3 shadow-sm backdrop-blur-sm sm:mt-8 sm:w-fit sm:flex-row sm:justify-center sm:gap-2 sm:px-3 sm:py-3" :aria-label="copy.inquiryQuickLinksLabel">
        <a class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#101F4F] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493] sm:w-auto sm:px-3 sm:text-base" :href="headerContact.phoneHref">
          <Phone :size="20" aria-hidden="true" /> {{ copy.inquiryCall }}
        </a>
        <span class="hidden h-7 w-px bg-[#313493]/40 sm:block" aria-hidden="true"></span>
        <a class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-[#101F4F] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493] sm:w-auto sm:px-3 sm:text-base" :href="headerContact.whatsappHref" target="_blank" rel="noopener noreferrer">
          <MessageCircle :size="21" class="text-green-600" aria-hidden="true" /> {{ copy.inquiryWhatsApp }}
        </a>
        <span class="hidden h-7 w-px bg-[#313493]/40 sm:block" aria-hidden="true"></span>
        <RouterLink class="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg bg-[#EE2329] px-4 py-2.5 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:gap-3 sm:px-5 sm:text-base" :to="{ name: `${locale}-contact` }">
          {{ copy.inquiryContact }} <ArrowRight :size="19" aria-hidden="true" />
        </RouterLink>
      </nav>
    </div>
  </section>
</template>
