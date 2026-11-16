<script setup>
import { ref } from 'vue'
import { ChevronDown, Send } from '@lucide/vue'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const submitted = ref(false)
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

    <label class="relative block">
      <span class="sr-only">{{ dictionary.homeFoundation.inquiry.serviceLabel }}</span>
      <select
        class="peer min-h-11 w-full cursor-pointer appearance-none rounded-lg border border-slate-300 bg-white px-3 pr-9 text-sm text-[#313493] outline-none transition hover:border-blue-300 focus:border-[#313493] focus:ring-2 focus:ring-[#313493]/20 motion-reduce:transition-none"
        name="service"
        required
      >
        <option value="" disabled selected hidden></option>
        <option value="work-visa">{{ dictionary.homeFoundation.inquiry.workVisaOption }}</option>
        <option value="hajj-umrah">{{ dictionary.homeFoundation.inquiry.hajjUmrahOption }}</option>
        <option value="other">{{ dictionary.homeFoundation.inquiry.otherOption }}</option>
      </select>
      <span class="pointer-events-none absolute inset-y-0 left-3 inline-flex items-center text-sm text-[#313493] peer-valid:hidden">
        {{ dictionary.homeFoundation.inquiry.serviceLabel }} <span class="ml-1 text-[#EE2329]">*</span>
      </span>
      <ChevronDown class="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[#313493]" :size="16" aria-hidden="true" />
    </label>

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
