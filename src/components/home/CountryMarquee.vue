<script setup>
import destinations from '../../data/destinations'
import { usePageContent } from '../../composables/usePageContent'

const { locale } = usePageContent()
</script>

<template>
  <section
    class="overflow-hidden bg-[#313493] py-2 text-white sm:py-2.5"
    :aria-label="locale === 'bn' ? 'ভিসা প্রসেসিংয়ের গন্তব্য দেশসমূহ' : 'Visa processing destinations'"
  >
    <div class="group flex w-max motion-safe:animate-country-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused] motion-reduce:animate-none">
      <ul class="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8" role="list">
        <li v-for="destination in destinations" :key="destination.id" class="flex shrink-0 items-center gap-5 sm:gap-8">
          <span class="flex items-center gap-2">
            <img class="size-6 shrink-0 rounded-full object-cover sm:size-7" :src="destination.flagImage" alt="" width="28" height="28" loading="lazy" decoding="async" aria-hidden="true" />
            <span class="whitespace-nowrap text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
              {{ locale === 'bn' ? destination.shortNameBn : destination.shortNameEn }}
            </span>
          </span>
          <span class="text-xl leading-none sm:text-2xl" aria-hidden="true">✳</span>
        </li>
      </ul>
      <ul class="flex shrink-0 items-center gap-5 pr-5 sm:gap-8 sm:pr-8" role="list" aria-hidden="true">
        <li v-for="destination in destinations" :key="destination.id" class="flex shrink-0 items-center gap-5 sm:gap-8">
          <span class="flex items-center gap-2">
            <img class="size-6 shrink-0 rounded-full object-cover sm:size-7" :src="destination.flagImage" alt="" width="28" height="28" loading="lazy" decoding="async" aria-hidden="true" />
            <span class="whitespace-nowrap text-lg font-bold tracking-tight sm:text-xl lg:text-2xl">
              {{ locale === 'bn' ? destination.shortNameBn : destination.shortNameEn }}
            </span>
          </span>
          <span class="text-xl leading-none sm:text-2xl" aria-hidden="true">✳</span>
        </li>
      </ul>
    </div>
  </section>
</template>
