<script setup>
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import LanguageSwitcher from '../components/common/LanguageSwitcher.vue'
import { usePageContent } from '../composables/usePageContent'

const { pageKey, page, localeConfig } = usePageContent()

useHead({
  title: computed(() => page.value.title),
  htmlAttrs: {
    lang: computed(() => localeConfig.value.htmlLang),
  },
  meta: computed(() => page.value.description
    ? [{ name: 'description', content: page.value.description }]
    : []),
})
</script>

<template>
  <LanguageSwitcher v-if="pageKey !== 'languageSelection'" />
  <slot />
</template>