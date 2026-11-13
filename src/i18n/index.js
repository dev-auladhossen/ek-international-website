import bangla from './bn'
import english from './en'

export const localeOptions = [
  { code: 'en', htmlLang: 'en' },
  { code: 'bn', htmlLang: 'bn-BD' },
]

const localeConfig = Object.fromEntries(
  localeOptions.map((locale) => [locale.code, locale]),
)

export const dictionaries = { en: english, bn: bangla }

export function getLocaleConfig(locale) {
  return localeConfig[locale] ?? localeConfig.en
}

export function getDictionary(locale) {
  return dictionaries[locale] ?? dictionaries.en
}

export function detectLocale(path) {
  const pathLocale = path.split('/').filter(Boolean)[0]
  return dictionaries[pathLocale] ? pathLocale : null
}

export function getLocalizedRouteName(locale, pageKey) {
  const routePageKey = pageKey === 'notFound' ? 'not-found' : pageKey
  return `${locale}-${routePageKey.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`)}`
}