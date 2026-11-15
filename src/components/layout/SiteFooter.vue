<script setup>
import { ArrowRight, Plane } from '@lucide/vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import footerBackground from '../../assets/images/backgrounds/Blue World Map Flight Banner.png'
import footerLogo from '../../assets/images/logo/logo-white-bg.png'
import { socialPlatforms } from '../../data/contact'
import { footerBottomNavigation, footerQuickNavigation, footerServiceNavigation } from '../../data/navigation'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary, locale } = usePageContent()
const copyrightYear = new Date().getFullYear()
const newsletterSubmitted = ref(false)
</script>

<template>
  <footer class="relative isolate overflow-hidden bg-[#001d59] px-4 pb-10 pt-16 text-white sm:px-6 sm:pb-12 sm:pt-16 lg:px-8 lg:pb-6 lg:pt-16">
    <img
      class="absolute inset-0 -z-10 size-full object-cover object-[center_95%]"
      :src="footerBackground"
      alt=""
      width="2170"
      height="900"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />
    <div class="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-24 bg-[#001d59]" aria-hidden="true"></div>

    <div class="relative z-10 mx-auto max-w-7xl">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.95fr_0.95fr_0.9fr_0.55fr] lg:gap-6">
        <div>
          <RouterLink
            class="inline-flex cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            :to="{ name: `${locale}-home` }"
          >
            <img
              class="h-auto w-24 object-contain sm:w-24"
              :src="footerLogo"
              :alt="dictionary.homeFoundation.navigation.brand"
              width="512"
              height="375"
              loading="lazy"
            />
          </RouterLink>
          <p class="mt-4 text-base font-medium leading-7 text-white">
            {{ dictionary.homeFoundation.footer.brandLine }}<br />
            {{ dictionary.homeFoundation.footer.serviceLine }}
          </p>

          <div class="mt-5 flex items-center gap-2.5" role="group" :aria-label="dictionary.siteHeader.socialLinksLabel">
            <span
              v-for="platform in socialPlatforms"
              :key="platform.id"
              class="inline-flex size-11 items-center justify-center rounded-full border border-white/20 text-white transition duration-300 hover:scale-110 hover:border-white hover:bg-white hover:text-red-600 motion-reduce:transform-none motion-reduce:transition-none"
              role="img"
              :aria-label="dictionary.siteHeader.socialLinks[platform.id]"
              :title="dictionary.siteHeader.socialLinks[platform.id]"
            >
              <svg v-if="platform.id === 'facebook'" class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z" />
              </svg>
              <svg v-else-if="platform.id === 'instagram'" class="size-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
              </svg>
              <svg v-else class="size-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
              </svg>
            </span>
          </div>
        </div>

        <nav :aria-label="dictionary.homeFoundation.footer.servicesNavLabel">
          <h2 class="text-lg font-semibold text-white">{{ dictionary.homeFoundation.footer.servicesTitle }}</h2>
          <ul class="mt-4 grid gap-3">
            <li v-for="item in footerServiceNavigation" :key="item.id">
              <RouterLink
                class="group/link inline-flex items-center gap-2.5 text-sm text-white transition-colors duration-300 hover:text-red-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }"
              >
                <Plane class="size-4 shrink-0 text-red-600 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-white motion-reduce:transition-none" aria-hidden="true" />
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <nav :aria-label="dictionary.homeFoundation.footer.quickLinksNavLabel">
          <h2 class="text-lg font-semibold text-white">{{ dictionary.homeFoundation.footer.quickLinksTitle }}</h2>
          <ul class="mt-4 grid gap-3">
            <li v-for="item in footerQuickNavigation" :key="item.id">
              <RouterLink
                class="group/link inline-flex items-center gap-2.5 text-sm text-white transition-colors duration-300 hover:text-red-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
                :to="{ name: `${locale}-${item.routeKey}` }"
              >
                <Plane class="size-4 shrink-0 text-red-600 transition-transform duration-300 group-hover/link:translate-x-1 group-hover/link:text-white motion-reduce:transition-none" aria-hidden="true" />
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
              </RouterLink>
            </li>
          </ul>
        </nav>

        <div class="lg:-translate-x-16 lg:max-w-[19rem]">
          <h2 class="text-lg font-semibold text-white">{{ dictionary.homeFoundation.footer.newsletterTitle }}</h2>
          <p class="mt-4 text-sm leading-6 text-white/90">{{ dictionary.homeFoundation.footer.newsletterIntro }}</p>
          <form class="mt-5" @submit.prevent="newsletterSubmitted = true">
            <label class="sr-only" for="footer-newsletter-email">{{ dictionary.homeFoundation.footer.newsletterEmailLabel }}</label>
            <div class="flex min-h-12 items-stretch bg-white p-1">
              <input
                id="footer-newsletter-email"
                class="min-w-0 flex-1 bg-transparent px-3 text-sm text-blue-950 outline-none placeholder:text-slate-500 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-700"
                type="email"
                name="email"
                autocomplete="email"
                :placeholder="dictionary.homeFoundation.footer.newsletterEmailPlaceholder"
                required
              />
              <button
                class="inline-flex w-11 shrink-0 cursor-pointer items-center justify-center text-red-600 transition duration-300 hover:bg-red-600 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 motion-reduce:transition-none"
                type="submit"
                :aria-label="dictionary.homeFoundation.footer.newsletterSubmit"
              >
                <ArrowRight :size="19" aria-hidden="true" />
              </button>
            </div>
            <p class="mt-2 text-xs leading-4 text-white/70">{{ dictionary.homeFoundation.footer.newsletterNotice }}</p>
            <p v-if="newsletterSubmitted" class="mt-2 text-xs leading-4 text-white" role="status">
              {{ dictionary.homeFoundation.footer.newsletterNotConnected }}
            </p>
          </form>
        </div>
      </div>

      <div class="mt-10 flex flex-col gap-4 border-t border-white/20 pt-5 sm:flex-row sm:items-center sm:justify-between lg:mt-12">
        <p class="text-sm text-white/90">
          {{ dictionary.homeFoundation.footer.copyright.replace('{year}', copyrightYear) }}
        </p>
        <nav :aria-label="dictionary.homeFoundation.footer.bottomNavLabel">
          <ul class="flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <li v-for="item in footerBottomNavigation" :key="item.id">
              <RouterLink
                class="text-white transition-colors duration-300 hover:text-red-500 focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white motion-reduce:transition-none"
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
