import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { detectLocale, getDictionary, getLocaleConfig } from '../i18n'

export function usePageContent() {
  const route = useRoute()
  const locale = computed(() => route.meta.locale ?? detectLocale(route.path) ?? 'en')
  const pageKey = computed(() => route.meta.pageKey ?? 'notFound')
  const dictionary = computed(() => getDictionary(locale.value))
  const page = computed(() => pageKey.value === 'languageSelection'
    ? dictionary.value.languageSelection
    : dictionary.value.pages[pageKey.value] ?? dictionary.value.pages.notFound)
  const localeConfig = computed(() => getLocaleConfig(locale.value))

  return { route, locale, pageKey, dictionary, page, localeConfig }
}