<script setup>
import { computed, ref } from 'vue'
import { LayoutGrid, Send } from '@lucide/vue'
import { usePageContent } from '../../composables/usePageContent'
import ServiceSelect from '../common/ServiceSelect.vue'

const { dictionary } = usePageContent()
const submitted = ref(false)
const selectedService = ref('')
const serviceOptions = computed(() => [
  { value: 'work-visa', label: dictionary.value.homeFoundation.inquiry.workVisaOption },
  { value: 'hajj-umrah', label: dictionary.value.homeFoundation.inquiry.hajjUmrahOption },
  { value: 'other', label: dictionary.value.homeFoundation.inquiry.otherOption },
])
</script>

<template>
  <form class="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-3.5" @submit.prevent="submitted = true">
    <label class="relative block">
      <span class="sr-only">{{ dictionary.homeFoundation.inquiry.nameLabel }}</span>
      <input
        class="peer min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#313493] outline-none transition hover:border-blue-300 focus:border-[#313493] focus:ring-2 focus:ring-[#313493]/20 motion-reduce:transition-none"
        name="name"
        autocomplete="name"
        placeholder=" "
        required
      />
      <span class="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-sm text-[#313493] peer-not-placeholder-shown:hidden">
        {{ dictionary.homeFoundation.inquiry.nameLabel }} <span class="ml-1 text-[#EE2329]">*</span>
      </span>
    </label>

    <label class="relative block">
      <span class="sr-only">{{ dictionary.homeFoundation.inquiry.phoneLabel }}</span>
      <input
        class="peer min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#313493] outline-none transition hover:border-blue-300 focus:border-[#313493] focus:ring-2 focus:ring-[#313493]/20 motion-reduce:transition-none"
        type="tel"
        name="phone"
        autocomplete="tel"
        placeholder=" "
        required
      />
      <span class="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-sm text-[#313493] peer-not-placeholder-shown:hidden">
        {{ dictionary.homeFoundation.inquiry.phoneLabel }} <span class="ml-1 text-[#EE2329]">*</span>
      </span>
    </label>

    <label class="relative block">
      <span class="sr-only">{{ dictionary.homeFoundation.inquiry.emailLabel }}</span>
      <input
        class="peer min-h-11 w-full rounded-lg border border-slate-300 bg-white px-3 text-sm text-[#313493] outline-none transition hover:border-blue-300 focus:border-[#313493] focus:ring-2 focus:ring-[#313493]/20 motion-reduce:transition-none"
        type="email"
        name="email"
        autocomplete="email"
        placeholder=" "
        required
      />
      <span class="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-sm text-[#313493] peer-not-placeholder-shown:hidden">
        {{ dictionary.homeFoundation.inquiry.emailLabel }} <span class="ml-1 text-[#EE2329]">*</span>
      </span>
    </label>

    <div class="relative min-w-0">
      <span class="sr-only" id="home-inquiry-service-label">{{ dictionary.homeFoundation.inquiry.serviceLabel }}</span>
      <ServiceSelect
        id="home-inquiry-service"
        v-model="selectedService"
        :options="serviceOptions"
        :placeholder="`${dictionary.homeFoundation.inquiry.serviceLabel} *`"
        :label="dictionary.homeFoundation.inquiry.serviceLabel"
        name="service"
        :leading="LayoutGrid"
        :required="true"
        button-class="!min-h-11 !rounded-lg !border-slate-300 !bg-white !px-3 !pr-3 !text-[#313493]"
      />
    </div>

    <label class="relative block sm:col-span-2">
      <span class="sr-only">{{ dictionary.homeFoundation.inquiry.messageLabel }}</span>
      <textarea
        class="peer min-h-24 w-full resize-y rounded-lg border border-slate-300 bg-white p-3 text-sm text-[#313493] outline-none transition hover:border-blue-300 focus:border-[#313493] focus:ring-2 focus:ring-[#313493]/20 motion-reduce:transition-none"
        name="message"
        placeholder=" "
        required
      ></textarea>
      <span class="pointer-events-none absolute left-3 top-3 text-sm text-[#313493] peer-not-placeholder-shown:hidden">
        {{ dictionary.homeFoundation.inquiry.messageLabel }} <span class="ml-1 text-[#EE2329]">*</span>
      </span>
    </label>

    <button
      v-reveal
      class="relative isolate inline-flex min-h-11 w-fit cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-lg bg-[#EE2329] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transform-none  sm:col-span-2"
      type="submit"
    >
      <Send :size="17" aria-hidden="true" />
      {{ dictionary.homeFoundation.inquiry.submit }}
    </button>

    <p class="text-xs leading-4 text-slate-500 sm:col-span-2">
      {{ dictionary.homeFoundation.inquiry.formNotice }}
    </p>
    <p v-if="submitted" class="text-sm leading-5 text-slate-700 sm:col-span-2" role="status">
      {{ dictionary.homeFoundation.inquiry.notConnected }}
    </p>
  </form>
</template>
