<script setup>
import { computed } from 'vue'
import { ArrowRight, MessageCircle } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import ctaImage from '../../assets/images/hajj&umrah/Golden Sunset at the Kaaba-1.jpg'
import { headerContact } from '../../data/contact'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copy = computed(() => dictionary.value.hajjUmrahPage)
</script>

<template>
  <section class="relative isolate overflow-hidden bg-[#313493] px-4 py-14 text-center text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20" aria-labelledby="pilgrimage-cta-title">
    <img class="absolute inset-0 -z-10 size-full object-cover object-center" :src="ctaImage" :alt="copy.ctaImageAlt" width="1672" height="940" loading="lazy" decoding="async" />
    <div class="absolute inset-0 -z-10 bg-[#17245C]/85" aria-hidden="true"></div>
    <div class="relative mx-auto max-w-4xl">
      <h2 id="pilgrimage-cta-title" v-reveal class="font-serif text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">{{ copy.ctaTitle }}</h2>
      <p v-reveal class="mx-auto mt-3 max-w-2xl text-sm leading-6 text-white/85 sm:text-base sm:leading-7">{{ copy.ctaDescription }}</p>
      <div class="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
        <RouterLink v-reveal class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#EE2329] px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#B91C1C] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none" :to="{ name: `${locale}-contact` }">
          {{ copy.ctaContact }} <ArrowRight :size="17" aria-hidden="true" />
        </RouterLink>
        <a v-reveal class="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/80 bg-white/5 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white hover:text-[#313493] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transform-none motion-reduce:transition-none" :href="headerContact.whatsappHref" target="_blank" rel="noopener noreferrer" :aria-label="`${copy.ctaWhatsApp}: ${headerContact.whatsappDisplay}`">
          <MessageCircle :size="17" aria-hidden="true" /> {{ copy.ctaWhatsApp }}
        </a>
      </div>
    </div>
  </section>
</template>
