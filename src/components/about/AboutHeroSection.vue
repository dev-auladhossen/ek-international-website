<script setup>
import { computed } from "vue";
import { ChevronRight, House } from "@lucide/vue";
import { RouterLink } from "vue-router";
import heroBackground from "../../assets/images/backgrounds/Blue Flight Path Wallpaper.jpg";
import { usePageContent } from "../../composables/usePageContent";

const { dictionary, locale } = usePageContent();
const copy = computed(() => dictionary.value.aboutPage);
</script>

<template>
  <section
    class="relative isolate flex min-h-[calc(100svh-126px)] items-center overflow-hidden bg-[#313493] px-4 py-7 text-white sm:min-h-[calc(100svh-140px)] sm:px-6 sm:py-9 lg:min-h-[calc(100svh-138px)] lg:px-8 lg:py-10"
    aria-labelledby="about-hero-title"
  >
    <img
      class="absolute inset-0 size-full object-cover object-left"
      :src="heroBackground"
      alt=""
      aria-hidden="true"
      width="2172"
      height="724"
      fetchpriority="high"
      decoding="async"
    />
    <div class="absolute inset-0 bg-[#17245C]/45" aria-hidden="true"></div>
    <div
      class="relative mx-auto flex max-w-5xl flex-col items-center text-center"
    >
      <nav
        v-reveal
        class="mb-5 flex items-center gap-2 text-sm text-white/75 sm:mb-6"
        :aria-label="copy.breadcrumbLabel"
      >
        <RouterLink
          class="inline-flex items-center gap-2 rounded-sm transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          :to="{ name: `${locale}-home` }"
        >
          <House :size="15" aria-hidden="true" />{{ copy.home }}
        </RouterLink>
        <ChevronRight :size="15" aria-hidden="true" />
        <span aria-current="page" class="font-semibold text-white">{{
          copy.breadcrumbAbout
        }}</span>
      </nav>
      <p
        v-reveal
        class="inline-flex rounded-sm bg-[#EE2329] px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-white sm:text-sm"
      >
        {{ copy.heroEyebrow }}
      </p>
      <h1
        id="about-hero-title"
        v-reveal
        class="mt-3 max-w-4xl font-serif text-3xl font-bold leading-[1.08] tracking-tight text-white sm:mt-4 sm:text-4xl lg:text-5xl"
      >
        {{ copy.heroTitle }}
      </h1>
      <p
        v-reveal
        class="mt-4 max-w-3xl text-sm leading-6 text-white/85 sm:mt-5 sm:text-lg sm:leading-8 lg:text-lg"
      >
        {{ copy.heroDescription }}
      </p>
    </div>
  </section>
</template>
