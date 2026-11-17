<script setup>
import { computed } from 'vue'
import { Phone, Send } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { usePageContent } from '../../composables/usePageContent'
import { headerContact } from '../../data/contact'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.aboutPage)
const callNumber = `+880 ${headerContact.phoneDisplay.slice(1)}`
</script>

<template>
  <section id="about-contact" class="w-full bg-[#C91D24] px-4 py-14 text-center text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="about-contact-title">
    <div class="mx-auto flex w-full max-w-7xl flex-col items-center gap-6">
      <div class="max-w-4xl">
        <h2 id="about-contact-title" v-reveal class="font-serif text-xl font-bold leading-tight text-white sm:text-2xl lg:text-3xl">{{ copy.contactTitle }}</h2>
        <p v-reveal class="mt-4 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{{ copy.contactDescription }}</p>
      </div>
      <div class="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
        <RouterLink v-reveal class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-bold text-[#313493] shadow-md transition duration-300 hover:-translate-y-1 hover:bg-[#AA1820] hover:text-white hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:px-8 sm:text-base" :to="{ name: `${locale}-contact` }">
          <Send :size="17" aria-hidden="true" /> {{ dictionary.homeFoundation.inquiry.heading }}
        </RouterLink>
        <a v-reveal class="inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-full border-2 border-white/80 bg-transparent px-7 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#010300] hover:shadow-lg active:translate-y-0 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none sm:w-auto sm:px-8 sm:text-base" :href="headerContact.phoneHref" :aria-label="`${dictionary.siteHeader.callNow}: ${callNumber}`">
          <Phone :size="17" aria-hidden="true" /> {{ copy.callUs }}: {{ callNumber }}
        </a>
      </div>
    </div>
  </section>
</template>
