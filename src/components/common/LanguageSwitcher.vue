<script setup>
import { computed } from 'vue'
import { usePageContent } from '../../composables/usePageContent'
import { getLocalizedRouteName, localeOptions } from '../../i18n'

const { dictionary, locale, pageKey } = usePageContent()
const languageLabel = computed(() => dictionary.value.languageSwitcher.label)
</script>

<template>
  <nav :aria-label="languageLabel">
    <RouterLink
      v-for="option in localeOptions"
      :key="option.code"
      :to="{ name: getLocalizedRouteName(option.code, pageKey) }"
      :hreflang="option.htmlLang"
      :aria-current="locale === option.code ? 'page' : undefined"
    >
      {{ dictionary.languageNames[option.code] }}
    </RouterLink>
  </nav>
</template>