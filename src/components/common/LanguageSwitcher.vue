<script setup>
import { computed } from "vue";
import { usePageContent } from "../../composables/usePageContent";
import { getLocalizedRouteName, localeOptions } from "../../i18n";

const { dictionary, locale, pageKey } = usePageContent();
const languageLabel = computed(() => dictionary.value.languageSwitcher.label);
</script>

<template>
  <nav
    class="flex shrink-0 items-center gap-1 text-xs font-semibold sm:text-xs lg:text-xs"
    :aria-label="languageLabel"
  >
    <RouterLink
      v-for="option in localeOptions"
      :key="option.code"
      class="inline-flex min-h-8 cursor-pointer items-center rounded px-2 py-1 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-white motion-reduce:transition-none"
      :class="
        locale === option.code
          ? 'bg-white font-bold text-blue-900 hover:bg-white'
          : 'font-medium text-white hover:bg-white/15'
      "
      :to="{ name: getLocalizedRouteName(option.code, pageKey) }"
      :hreflang="option.htmlLang"
      :aria-current="locale === option.code ? 'page' : undefined"
    >
      {{ dictionary.languageShortNames[option.code] }}
    </RouterLink>
  </nav>
</template>
