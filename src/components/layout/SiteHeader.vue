<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  X,
} from "@lucide/vue";
import { RouterLink, useRoute } from "vue-router";
import brandLogo from "../../assets/images/optimized/logo/header-logo.webp";
import { usePageContent } from "../../composables/usePageContent";
import { headerContact, socialPlatforms } from "../../data/contact";
import { primaryNavigation } from "../../data/navigation";
import LanguageSwitcher from "../common/LanguageSwitcher.vue";

const menuOpen = ref(false);
const servicesOpen = ref(false);
const menuButton = ref(null);
const servicesButton = ref(null);
const route = useRoute();
const { dictionary, locale } = usePageContent();

function closeMenu() {
  menuOpen.value = false;
  servicesOpen.value = false;
}

function handleKeydown(event) {
  if (event.key !== "Escape") return;

  if (menuOpen.value) {
    closeMenu();
    menuButton.value?.focus();
    return;
  }

  if (servicesOpen.value) {
    servicesOpen.value = false;
    servicesButton.value?.focus();
  }
}

function closeMenuAndFocus() {
  const shouldRestoreFocus = menuOpen.value;
  closeMenu();
  if (shouldRestoreFocus) menuButton.value?.focus();
}

function setServicesButton(element) {
  servicesButton.value = element;
}

function isActive(item) {
  if (item.id === "home")
    return route.name === `${locale.value}-home` && !route.hash;
  if (item.id === "workVisa") {
    return (
      route.name === `${locale.value}-work-visa` ||
      route.hash === "#destinations"
    );
  }
  if (item.hash)
    return route.name === `${locale.value}-home` && route.hash === item.hash;
  return route.name === `${locale.value}-${item.routeKey}`;
}

onMounted(() => window.addEventListener("keydown", handleKeydown));
onBeforeUnmount(() => window.removeEventListener("keydown", handleKeydown));
</script>

<template>
  <header
    class="sticky top-[-50px] z-40 bg-white sm:top-[-56px] lg:top-[-50px]"
  >
    <div class="h-[50px] bg-blue-900 text-white sm:h-14 lg:h-[50px]">
      <div
        class="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:px-8"
      >
        <div
          class="flex min-w-0 items-center gap-2 text-xs font-medium sm:gap-3 sm:text-sm lg:gap-4"
        >
          <a
            class="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            :href="headerContact.phoneHref"
          >
            <Phone :size="14" aria-hidden="true" />
            <span>{{ headerContact.phoneDisplay }}</span>
          </a>
          <span
            class="hidden h-4 border-l border-white/50 sm:inline-block"
            aria-hidden="true"
          ></span>
          <a
            class="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            :href="headerContact.emailHref"
            :aria-label="headerContact.email"
          >
            <Mail :size="17" aria-hidden="true" />
            <span class="hidden sm:inline">{{ headerContact.email }}</span>
          </a>
          <span
            class="hidden h-4 border-l border-white/50 sm:inline-block"
            aria-hidden="true"
          ></span>
          <span class="hidden min-w-0 items-center gap-1.5 md:inline-flex">
            <MapPin class="shrink-0" :size="15" aria-hidden="true" />
            <span class="truncate">{{ headerContact.location }}</span>
          </span>
        </div>

        <div class="flex shrink-0 items-center gap-3 lg:gap-4">
          <div
            class="hidden items-center gap-5 text-sm font-medium xl:flex"
            role="group"
            :aria-label="dictionary.siteHeader.socialLinksLabel"
          >
            <span
              v-for="(platform, index) in socialPlatforms"
              :key="platform.id"
              class="inline-flex items-center cursor-pointer rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <span class="sr-only">{{
                dictionary.siteHeader.socialLinks[platform.id]
              }}</span>
              <svg
                v-if="platform.id === 'instagram'"
                class="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7Zm0 2h10c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3Zm11.5 1.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"
                />
              </svg>
              <svg
                v-else-if="platform.id === 'facebook'"
                class="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.09 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.03 1.79-4.7 4.53-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.89v2.26h3.32l-.53 3.49h-2.79V24C19.61 23.09 24 18.1 24 12.07Z"
                />
              </svg>
              <svg
                v-else
                class="size-4 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z"
                />
              </svg>
            </span>
          </div>
          <span
            class="hidden h-4 border-l border-white/50 sm:inline-block"
            aria-hidden="true"
          ></span>
          <LanguageSwitcher />
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-2 px-4 sm:px-6 lg:h-[88px] lg:gap-5 lg:px-8"
    >
      <RouterLink
        class="shrink-0 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700"
        :to="{ name: `${locale}-home` }"
        @click="closeMenu"
      >
        <img
          class="h-auto w-16 object-contain sm:w-20 lg:w-28"
          :src="brandLogo"
          alt="EK International"
          fetchpriority="high"
          width="512"
          height="375"
        />
      </RouterLink>

      <nav
        id="primary-navigation"
        class="absolute left-0 right-0 top-full hidden border-b border-slate-200 bg-white px-4 py-3 shadow-lg lg:static lg:block lg:flex-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none"
        :class="{ '!block': menuOpen }"
        :aria-label="dictionary.homeFoundation.navigation.label"
      >
        <ul
          class="flex flex-col gap-1 lg:flex-row lg:items-center lg:justify-center lg:gap-2 xl:gap-4"
        >
          <li
            v-for="item in primaryNavigation"
            :key="item.id"
            class="relative"
            @mouseenter="item.submenu && (servicesOpen = true)"
            @mouseleave="item.submenu && (servicesOpen = false)"
          >
            <RouterLink
              v-if="!item.submenu"
              class="relative flex min-h-11 cursor-pointer items-center gap-1 whitespace-nowrap rounded-md px-3 text-base font-semibold transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 motion-reduce:transition-none lg:min-h-[88px] lg:rounded-none lg:px-1 lg:text-xs xl:text-sm lg:before:absolute lg:before:inset-x-0 lg:before:top-0 lg:before:h-[3px] lg:before:origin-center lg:before:scale-x-0 lg:before:bg-red-600 lg:before:content-[''] lg:before:transition-transform lg:before:duration-300 lg:hover:before:scale-x-100 lg:focus-visible:before:scale-x-100 lg:motion-reduce:before:transition-none"
              :class="
                isActive(item)
                  ? 'text-red-700 lg:before:scale-x-100'
                  : 'text-blue-950'
              "
              :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }"
              :aria-current="isActive(item) ? 'page' : undefined"
              @click="closeMenuAndFocus"
            >
              {{ dictionary.homeFoundation.navigation[item.labelKey] }}
            </RouterLink>

            <template v-else>
              <button
                :ref="setServicesButton"
                class="relative flex min-h-11 w-full cursor-pointer items-center justify-between gap-1 whitespace-nowrap rounded-md px-3 text-left text-base font-semibold transition-colors duration-300 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 motion-reduce:transition-none lg:min-h-[88px] lg:w-auto lg:justify-center lg:rounded-none lg:px-1 lg:text-xs xl:text-sm lg:before:absolute lg:before:inset-x-0 lg:before:top-0 lg:before:h-[3px] lg:before:origin-center lg:before:scale-x-0 lg:before:bg-red-600 lg:before:content-[''] lg:before:transition-transform lg:before:duration-300 lg:hover:before:scale-x-100 lg:focus-visible:before:scale-x-100 lg:motion-reduce:before:transition-none"
                :class="
                  isActive(item)
                    ? 'text-red-700 lg:before:scale-x-100'
                    : 'text-blue-950'
                "
                type="button"
                aria-controls="work-visa-submenu"
                aria-haspopup="true"
                :aria-expanded="servicesOpen"
                :aria-current="isActive(item) ? 'page' : undefined"
                @click="servicesOpen = !servicesOpen"
              >
                {{ dictionary.homeFoundation.navigation[item.labelKey] }}
                <ChevronDown
                  class="transition-transform duration-200 motion-reduce:transition-none"
                  :class="servicesOpen ? 'rotate-180' : ''"
                  :size="15"
                  aria-hidden="true"
                />
              </button>

              <Transition
                enter-active-class="transition duration-250 ease-out motion-reduce:transition-none"
                enter-from-class="-translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-1 opacity-0"
              >
                <ul
                  v-if="servicesOpen"
                  id="work-visa-submenu"
                  class="mt-1 grid gap-1 rounded-lg border border-slate-200 border-b-4 border-b-red-600 bg-white p-2 shadow-xl lg:absolute lg:left-0 lg:top-full lg:z-50 lg:mt-0 lg:min-w-64"
                >
                  <li v-for="subitem in item.submenu" :key="subitem.id">
                    <RouterLink
                      class="block min-h-12 cursor-pointer whitespace-nowrap rounded-md border-b border-slate-200 px-3 py-3 text-sm font-medium text-blue-950 transition-colors duration-200 hover:bg-red-50 hover:text-red-700 focus-visible:bg-red-50 focus-visible:outline-2 focus-visible:outline-red-700 motion-reduce:transition-none last:border-b-0 xl:text-sm"
                      :to="{
                        name: `${locale}-${subitem.routeKey}`,
                        hash: subitem.hash,
                      }"
                      @click="closeMenuAndFocus"
                    >
                      {{
                        dictionary.homeFoundation.navigation[subitem.labelKey]
                      }}
                    </RouterLink>
                  </li>
                </ul>
              </Transition>
            </template>
          </li>
        </ul>
      </nav>

      <div class="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 lg:ml-1">
        <a
          class="group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full text-blue-950 transition-colors hover:text-red-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-red-700 motion-reduce:transition-none sm:gap-3"
          :href="headerContact.phoneHref"
          :aria-label="`${dictionary.siteHeader.callUsNow}: ${headerContact.phoneDisplay}`"
        >
          <span
            class="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-red-700 text-white transition-colors group-hover:bg-red-800 sm:size-14"
            aria-hidden="true"
          >
            <PhoneCall :size="22" :stroke-width="1.8" />
          </span>
          <span class="hidden flex-col text-left leading-tight sm:flex">
            <span class="text-sm font-medium text-slate-600">{{
              dictionary.siteHeader.callUsNow
            }}</span>
            <span
              class="whitespace-nowrap text-base font-semibold text-blue-950 xl:text-lg"
              >{{ headerContact.phoneDisplay }}</span
            >
          </span>
        </a>
        <button
          ref="menuButton"
          class="inline-flex size-11 cursor-pointer items-center justify-center rounded-md border border-slate-300 text-blue-950 transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700 motion-reduce:transition-none lg:hidden"
          type="button"
          aria-controls="primary-navigation"
          :aria-expanded="menuOpen"
          :aria-label="
            menuOpen
              ? dictionary.siteHeader.closeMenu
              : dictionary.siteHeader.openMenu
          "
          @click="menuOpen = !menuOpen"
        >
          <X v-if="menuOpen" :size="21" aria-hidden="true" />
          <Menu v-else :size="21" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
</template>
