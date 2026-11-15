<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useHead } from '@unhead/vue'
import { ChevronUp } from '@lucide/vue'
import SiteHeader from '../components/layout/SiteHeader.vue'
import { usePageContent } from '../composables/usePageContent'

const { pageKey, page, localeConfig, dictionary } = usePageContent()
const showBackToTop = ref(false)

function updateBackToTopVisibility() {
  showBackToTop.value = window.scrollY > 300
}

function scrollToTop() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' })
}

useHead({
  title: computed(() => page.value.title),
  htmlAttrs: {
    lang: computed(() => localeConfig.value.htmlLang),
  },
  meta: computed(() => page.value.description
    ? [{ name: 'description', content: page.value.description }]
    : []),
})

onMounted(() => {
  window.addEventListener('scroll', updateBackToTopVisibility, { passive: true })
  updateBackToTopVisibility()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', updateBackToTopVisibility)
})
</script>

<template>
  <SiteHeader v-if="pageKey !== 'languageSelection'" />
  <slot />
  <button
    v-if="showBackToTop && pageKey !== 'languageSelection'"
    class="fixed bottom-5 right-5 z-50 inline-flex size-[60px] cursor-pointer items-center justify-center rounded-md bg-red-600 text-white shadow-md transition-colors hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-safe:animate-bounce motion-reduce:animate-none sm:bottom-8 sm:right-8"
    type="button"
    :aria-label="dictionary.siteHeader.backToTop"
    @click="scrollToTop"
  >
    <ChevronUp :size="28" :stroke-width="2.5" aria-hidden="true" />
  </button>
</template>
