<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { useHead } from "@unhead/vue";
import { ChevronUp } from "@lucide/vue";
import SiteHeader from "../components/layout/SiteHeader.vue";
import { usePageContent } from "../composables/usePageContent";
import { headerContact } from "../data/contact";

const { pageKey, page, localeConfig, dictionary } = usePageContent();
const showBackToTop = ref(false);

function updateBackToTopVisibility() {
  showBackToTop.value = window.scrollY > 300;
}

function scrollToTop() {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
}

useHead({
  title: computed(() => page.value.title),
  htmlAttrs: {
    lang: computed(() => localeConfig.value.htmlLang),
  },
  meta: computed(() =>
    page.value.description
      ? [{ name: "description", content: page.value.description }]
      : [],
  ),
});

onMounted(() => {
  window.addEventListener("scroll", updateBackToTopVisibility, {
    passive: true,
  });
  updateBackToTopVisibility();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", updateBackToTopVisibility);
});
</script>

<template>
  <SiteHeader v-if="pageKey !== 'languageSelection'" />
  <slot />
  <Transition
    enter-active-class="transition duration-300 ease-out"
    enter-from-class="translate-y-2 scale-90 opacity-0"
    enter-to-class="translate-y-0 scale-100 opacity-100"
    leave-active-class="transition duration-200 ease-in"
    leave-from-class="translate-y-0 scale-100 opacity-100"
    leave-to-class="translate-y-2 scale-90 opacity-0"
    mode="out-in"
  >
    <a
      v-if="!showBackToTop && pageKey !== 'languageSelection'"
      key="whatsapp"
      class="group fixed bottom-5 right-5 z-50 isolate inline-flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#20B85A] text-white shadow-md transition duration-700 ease-in-out hover:-translate-y-1 hover:bg-[#159447] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#20B85A] motion-reduce:transition-none sm:bottom-8 sm:right-8"
      :href="headerContact.whatsappHref"
      target="_blank"
      rel="noopener noreferrer"
      :aria-label="`${dictionary.siteHeader.whatsapp}: ${headerContact.whatsappDisplay}`"
    >
      <span class="pointer-events-none absolute inset-0 z-0 rounded-full border-2 border-[#20B85A]/55 motion-safe:animate-ping motion-reduce:animate-none" aria-hidden="true"></span>
      <svg class="relative z-10 size-7 fill-current" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.42ZM12.09 21.8a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35Z" />
      </svg>
    </a>
    <button
      v-else-if="showBackToTop && pageKey !== 'languageSelection'"
      key="back-to-top"
      class="fixed bottom-5 right-5 z-50 inline-flex size-[50px] cursor-pointer items-center justify-center rounded-md bg-[#EE2329] text-white shadow-md transition-colors duration-300 hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-safe:animate-bounce motion-safe:[animation-duration:2.4s] motion-reduce:animate-none motion-reduce:transition-none sm:bottom-8 sm:right-8"
      type="button"
      :aria-label="dictionary.siteHeader.backToTop"
      @click="scrollToTop"
    >
      <ChevronUp :size="22" :stroke-width="2.5" aria-hidden="true" />
    </button>
  </Transition>
</template>
