<script setup>
import { ArrowRight, Globe2, Plane } from '@lucide/vue'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import footerLogo from '../../assets/images/logo/logo-white-bg.png'
import { footerBottomNavigation, footerQuickNavigation, footerServiceNavigation } from '../../data/navigation'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const newsletterSubmitted = ref(false)
const footerSocials = ['facebook', 'instagram']
const copyrightYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-[#313493] px-4 py-10 text-white sm:px-6 sm:py-12 lg:px-8 lg:pb-6 lg:pt-10">
    <div class="mx-auto max-w-[1310px]">
      <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-2">
        <div>
          <RouterLink
            class="inline-flex cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            :to="{ name: `${locale}-home` }"
          >
            <img
              class="h-auto w-24 object-contain sm:w-28"
              :src="footerLogo"
              :alt="dictionary.homeFoundation.navigation.brand"
              width="1420"
              height="1108"
              loading="lazy"
            />
          </RouterLink>
          <p class="mt-3 text-sm font-medium leading-6 text-white sm:text-base">
            {{ dictionary.homeFoundation.footer.brandLine }}<br />
            {{ dictionary.homeFoundation.footer.serviceLine }}
          </p>

          <div class="mt-5 flex items-center gap-2.5" role="group" :aria-label="dictionary.siteHeader.socialLinksLabel">
            <span
              class="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white/90 transition duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none"
              role="img"
              :aria-label="dictionary.siteHeader.socialLinks.website"
              :title="dictionary.siteHeader.socialLinks.website"
            >
              <Globe2 :size="19" aria-hidden="true" />
            </span>
            <span
              v-for="platform in footerSocials"
              :key="platform"
              class="inline-flex size-10 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-[#EE2329] motion-reduce:transform-none motion-reduce:transition-none"
              role="img"
              :aria-label="dictionary.siteHeader.socialLinks[platform]"
              :title="dictionary.siteHeader.socialLinks[platform]"
            >
              <svg v-if="platform === 'facebook'" class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
              </svg>
              <svg v-else class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
            </span>
          </div>
        </div>

        <nav :aria-label="dictionary.homeFoundation.footer.servicesNavLabel">
          <h2 class="text-base font-semibold text-white sm:text-lg">{{ dictionary.homeFoundation.footer.servicesTitle }}</h2>
          <ul class="mt-4 grid gap-4">
            <li v-for="item in footerServiceNavigation" :key="item.id">
              <RouterLink
                class="group/link inline-flex items-center gap-2.5 text-sm text-white transition-colors duration-300 hover:text-[#EE2329] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }"
              >
                <Plane class="size-4 shrink-0 text-[#EE2329] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-white motion-reduce:transition-none" aria-hidden="true" />
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <nav :aria-label="dictionary.homeFoundation.footer.quickLinksNavLabel">
          <h2 class="text-base font-semibold text-white sm:text-lg">{{ dictionary.homeFoundation.footer.quickLinksTitle }}</h2>
          <ul class="mt-4 grid gap-4">
            <li v-for="item in footerQuickNavigation" :key="item.id">
              <RouterLink
                class="group/link inline-flex items-center gap-2.5 text-sm text-white transition-colors duration-300 hover:text-[#EE2329] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                :to="{ name: `${locale}-${item.routeKey}` }"
              >
                <Plane class="size-4 shrink-0 text-[#EE2329] transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-white motion-reduce:transition-none" aria-hidden="true" />
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div>
          <h2 class="text-base font-semibold text-white sm:text-lg">{{ dictionary.homeFoundation.footer.newsletterTitle }}</h2>
          <p class="mt-4 max-w-xs text-sm leading-6 text-white/95">
            {{ dictionary.homeFoundation.footer.newsletterIntro }}
          </p>
          <form class="mt-5 max-w-[19rem]" @submit.prevent="newsletterSubmitted = true">
            <label class="sr-only" for="footer-newsletter-email">{{ dictionary.homeFoundation.footer.newsletterEmailLabel }}</label>
            <div class="flex min-h-11 items-stretch bg-white p-1">
              <input
                id="footer-newsletter-email"
                class="min-w-0 flex-1 bg-transparent px-3 text-sm text-[#313493] outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#313493]"
                type="email"
                name="email"
                autocomplete="email"
                :placeholder="dictionary.homeFoundation.footer.newsletterEmailPlaceholder"
                required
              />
              <button
                class="inline-flex w-10 shrink-0 cursor-pointer items-center justify-center text-[#EE2329] transition duration-300 hover:bg-[#B91C1C] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none"
                type="submit"
                :aria-label="dictionary.homeFoundation.footer.newsletterSubmit"
              >
                <ArrowRight :size="18" aria-hidden="true" />
              </button>
            </div>
            <p v-if="newsletterSubmitted" class="mt-2 text-xs leading-4 text-white/90" role="status">
              {{ dictionary.homeFoundation.footer.newsletterNotConnected }}
            </p>
          </form>
        </div>
      </div>

      <div class="mx-auto mt-10 flex max-w-[1310px] flex-col gap-4 border-t border-white/15 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
        <p class="text-sm text-white">
          {{ dictionary.homeFoundation.footer.copyright.replace('{year}', copyrightYear) }}
        </p>
        <nav :aria-label="dictionary.homeFoundation.footer.bottomNavLabel">
          <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li v-for="item in footerBottomNavigation" :key="item.id">
              <RouterLink
                class="text-white transition-colors duration-300 hover:text-[#EE2329] focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                :to="{ name: `${locale}-${item.routeKey}` }"
              >
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
              </RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
