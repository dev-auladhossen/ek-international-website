<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import {
  ArrowRight,
  BriefcaseBusiness,
  ChevronDown,
  ChevronRight,
  CircleHelp,
  Ellipsis,
  Headset,
  House,
  IdCard,
  Images,
  Landmark,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  PhoneCall,
  UsersRound,
  X,
} from "@lucide/vue";
import { RouterLink, useRoute } from "vue-router";
import brandLogo from "../../assets/images/optimized/logo/header-logo.webp";
import { usePageContent } from "../../composables/usePageContent";
import { headerContact } from "../../data/contact";
import { primaryNavigation } from "../../data/navigation";
import LanguageSwitcher from "../common/LanguageSwitcher.vue";

const menuOpen = ref(false);
const isDesktop = ref(false);
const openSubmenu = ref(null);
const menuButton = ref(null);
const submenuButtons = ref({});
const route = useRoute();
const { dictionary, locale } = usePageContent();
const navigationIcons = {
  home: House,
  about: UsersRound,
  services: Layers,
  workVisa: IdCard,
  hajjUmrah: Landmark,
  team: UsersRound,
  contact: Mail,
  more: Ellipsis,
  destinations: MapPin,
  faq: CircleHelp,
  gallery: Images,
};

function closeMenu() {
  menuOpen.value = false;
  openSubmenu.value = null;
}

function handleKeydown(event) {
  if (event.key !== "Escape") return;

  if (menuOpen.value) {
    closeMenu();
    menuButton.value?.focus();
    return;
  }

  if (openSubmenu.value) {
    const activeSubmenu = openSubmenu.value;
    openSubmenu.value = null;
    submenuButtons.value[activeSubmenu]?.focus();
  }
}

function closeMenuAndFocus() {
  const shouldRestoreFocus = menuOpen.value;
  closeMenu();
  if (shouldRestoreFocus) menuButton.value?.focus();
}

function handleNavigationClick(routeKey, hash) {
  const targetRoute = `${locale.value}-${routeKey}`;
  const targetHash = hash || '';
  const isCurrentTarget = route.name === targetRoute && route.hash === targetHash;

  closeMenuAndFocus();
  if (!isCurrentTarget) return;

  window.requestAnimationFrame(() => {
    const target = hash ? document.querySelector(hash) : null;
    const top = target
      ? Math.max(0, target.getBoundingClientRect().top + window.scrollY - 96)
      : 0;
    window.scrollTo({ top, behavior: 'smooth' });
  });
}

function setSubmenuButton(id, element) {
  if (element) submenuButtons.value[id] = element;
  else delete submenuButtons.value[id];
}

function closeSubmenu(id) {
  if (openSubmenu.value === id) openSubmenu.value = null;
}

function toggleSubmenu(id) {
  if (window.matchMedia('(min-width: 1024px)').matches) {
    openSubmenu.value = id;
    return;
  }
  openSubmenu.value = openSubmenu.value === id ? null : id;
}

function isActive(item) {
  if (item.id === "home")
    return route.name === `${locale.value}-home` && !route.hash;
  if (item.id === "services") {
    return route.name === `${locale.value}-services`;
  }
  if (item.id === "more") {
    return (
      route.name === `${locale.value}-destinations` ||
      (route.name === `${locale.value}-home` && ["#destinations", "#faq", "#gallery"].includes(route.hash))
    );
  }
  if (item.id === "workVisa") {
    return route.name === `${locale.value}-work-visa`;
  }
  if (item.hash)
    return route.name === `${locale.value}-home` && route.hash === item.hash;
  return route.name === `${locale.value}-${item.routeKey}`;
}

let desktopMediaQuery;

function updateDesktopState(event) {
  isDesktop.value = event.matches;
}

onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
  desktopMediaQuery = window.matchMedia("(min-width: 1024px)");
  isDesktop.value = desktopMediaQuery.matches;
  desktopMediaQuery.addEventListener("change", updateDesktopState);
});

onBeforeUnmount(() => {
  window.removeEventListener("keydown", handleKeydown);
  desktopMediaQuery?.removeEventListener("change", updateDesktopState);
});
</script>

<template>
  <header
    class="sticky top-[-50px] z-40 overflow-x-clip bg-white sm:top-[-56px] lg:top-[-50px]"
  >
    <div class="h-[50px] bg-[#313493] text-white sm:h-14 lg:h-[50px]">
      <div
        class="mx-auto flex h-full max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem] items-center justify-between gap-2 px-4 sm:px-6 lg:px-8"
      >
        <span class="hidden min-w-0 shrink items-center gap-1.5 text-xs font-semibold sm:inline-flex sm:text-sm" aria-label="Office location">
            <MapPin class="shrink-0" :size="16" aria-hidden="true" />
            <span class="hidden truncate sm:inline">Uttara, Dhaka, Bangladesh</span>
            <span class="sr-only sm:hidden">Uttara, Dhaka, Bangladesh</span>
        </span>
        <div class="ml-auto flex min-w-0 flex-1 items-center justify-between gap-1 text-[11px] font-semibold sm:flex-none sm:justify-start sm:gap-3 sm:text-xs lg:gap-4 lg:text-sm">
          <a class="inline-flex shrink-0 cursor-pointer items-center gap-1.5 rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" :href="headerContact.phoneHref">
            <Phone :size="17" aria-hidden="true" />
            <span>{{ headerContact.phoneDisplay }}</span>
          </a>
          <a class="hidden shrink-0 cursor-pointer items-center gap-1.5 rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:inline-flex" :href="headerContact.whatsappHref" target="_blank" rel="noopener noreferrer" :aria-label="`${dictionary.siteHeader.whatsapp}: ${headerContact.whatsappDisplay}`">
            <svg class="size-5 shrink-0 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.52 3.48A11.86 11.86 0 0 0 12.08 0C5.5 0 .15 5.34.15 11.92c0 2.1.55 4.15 1.6 5.96L.05 24l6.28-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.49-8.42ZM12.09 21.8a9.88 9.88 0 0 1-5.03-1.38l-.36-.21-3.73.98 1-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.27c0-5.45 4.44-9.89 9.9-9.89a9.82 9.82 0 0 1 7 2.9 9.82 9.82 0 0 1 2.9 7c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.8-1.49-1.78-1.66-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.08 4.49.71.3 1.27.49 1.7.62.72.23 1.37.2 1.88.12.57-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.58-.35Z" /></svg>
            <span>{{ dictionary.siteHeader.whatsapp }}</span>
          </a>
          <span class="h-5 border-l border-white/50 sm:h-7" aria-hidden="true"></span>
          <a class="inline-flex min-w-0 shrink cursor-pointer items-center gap-1.5 rounded-sm transition-colors hover:text-blue-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white" :href="headerContact.emailHref" :aria-label="headerContact.email">
            <Mail :size="19" class="shrink-0" aria-hidden="true" />
            <span class="sm:hidden">Email</span>
            <span class="hidden truncate sm:inline lg:hidden">Email</span>
            <span class="hidden truncate lg:inline">{{ headerContact.email }}</span>
          </a>
          <span class="h-5 border-l border-white/50 sm:h-7" aria-hidden="true"></span>
          <LanguageSwitcher />
        </div>
      </div>
    </div>

    <div
      class="mx-auto flex h-[76px] max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem] items-center justify-between gap-2 px-4 sm:px-6 lg:h-[88px] lg:gap-5 lg:px-8"
    >
      <RouterLink
        class="shrink-0 cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493]"
        :to="{ name: `${locale}-home` }"
        @click="closeMenu"
      >
        <img
          class="h-auto w-16 object-contain sm:w-20 lg:w-24"
          :src="brandLogo"
          alt="EK International"
          width="512"
          height="375"
        />
      </RouterLink>

      <nav
        id="primary-navigation"
        class="absolute left-0 right-0 top-full max-h-[calc(100svh-126px)] overflow-x-hidden overflow-y-auto border-b border-slate-200 bg-white px-4 py-3 shadow-lg transition-[transform,opacity] duration-300 ease-in-out motion-reduce:transition-none lg:pointer-events-auto lg:static lg:block lg:max-h-none lg:flex-1 lg:translate-x-0 lg:overflow-visible lg:border-0 lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:transition-none"
        :class="menuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'pointer-events-none translate-x-full opacity-0'"
        :aria-hidden="!menuOpen && !isDesktop"
        :inert="!menuOpen && !isDesktop"
        :aria-label="dictionary.homeFoundation.navigation.label"
      >
        <ul
          class="flex flex-col gap-0 lg:flex-row lg:items-center lg:justify-center lg:gap-2 xl:gap-4"
        >
          <li
            v-for="item in primaryNavigation"
            :key="item.id"
            class="relative border-b border-slate-200 lg:border-0"
            @mouseenter="item.submenu && (openSubmenu = item.id)"
            @mouseleave="item.submenu && closeSubmenu(item.id)"
          >
            <RouterLink
              v-if="!item.submenu"
              class="group relative flex min-h-11 cursor-pointer items-center gap-3 whitespace-nowrap px-3 text-base font-semibold transition-colors duration-300 hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none lg:min-h-[88px] lg:gap-1 lg:rounded-none lg:px-1 lg:text-xs xl:text-sm lg:before:absolute lg:before:inset-x-0 lg:before:top-0 lg:before:h-[3px] lg:before:origin-center lg:before:scale-x-0 lg:before:bg-[#EE2329] lg:before:content-[''] lg:before:transition-transform lg:before:duration-300 lg:hover:before:scale-x-100 lg:focus-visible:before:scale-x-100 lg:motion-reduce:before:transition-none"
              :class=" isActive(item) ? 'bg-red-50 text-[#EE2329] lg:bg-transparent lg:before:scale-x-100' : 'text-[#101F4F] lg:text-[#313493]' "
              :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }"
              :aria-current="isActive(item) ? 'page' : undefined"
              @click="handleNavigationClick(item.routeKey, item.hash)"
            >
              <component :is="navigationIcons[item.id]" class="size-5 shrink-0 lg:hidden" :size="20" :stroke-width="2" aria-hidden="true" />
              <span class="flex-1 lg:flex-none">{{ dictionary.homeFoundation.navigation[item.labelKey] }}</span>
            </RouterLink>

            <template v-else>
              <div class="flex items-center lg:relative">
                <RouterLink
                  class="group relative flex min-h-11 flex-1 cursor-pointer items-center gap-3 whitespace-nowrap px-3 text-base font-semibold transition-colors duration-300 hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none lg:min-h-[88px] lg:flex-none lg:gap-1 lg:rounded-none lg:px-1 lg:text-xs xl:text-sm lg:before:absolute lg:before:inset-x-0 lg:before:top-0 lg:before:h-[3px] lg:before:origin-center lg:before:scale-x-0 lg:before:bg-[#EE2329] lg:before:content-[''] lg:before:transition-transform lg:before:duration-300 lg:hover:before:scale-x-100 lg:focus-visible:before:scale-x-100 lg:motion-reduce:before:transition-none"
                  :class="isActive(item) ? 'bg-red-50 text-[#EE2329] lg:bg-transparent lg:before:scale-x-100' : 'text-[#101F4F] lg:text-[#313493]'"
                  :to="{ name: `${locale}-${item.routeKey}`, hash: item.hash }"
                  :aria-current="isActive(item) ? 'page' : undefined"
                  @click="handleNavigationClick(item.routeKey, item.hash)"
                >
                  <component :is="navigationIcons[item.id]" class="size-5 shrink-0 lg:hidden" :size="20" :stroke-width="2" aria-hidden="true" />
                  <span class="flex-1 lg:flex-none">{{ dictionary.homeFoundation.navigation[item.labelKey] }}</span>
                </RouterLink>
                <button
                  :ref="(element) => setSubmenuButton(item.id, element)"
                  class="inline-flex size-11 cursor-pointer items-center justify-center rounded-md text-[#313493] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none lg:size-5 lg:rounded-none"
                  type="button"
                  :aria-controls="`${item.id}-submenu`"
                  aria-haspopup="true"
                  :aria-expanded="openSubmenu === item.id"
                  :aria-label="dictionary.homeFoundation.navigation[item.labelKey]"
                  @click="toggleSubmenu(item.id)"
                >
                  <ChevronRight class="lg:hidden" :size="18" aria-hidden="true" />
                  <ChevronDown class="hidden transition-transform duration-200 motion-reduce:transition-none lg:block" :class="openSubmenu === item.id ? 'rotate-180' : ''" :size="15" aria-hidden="true" />
                </button>
              </div>

              <Transition
                enter-active-class="transition duration-250 ease-out motion-reduce:transition-none"
                enter-from-class="-translate-y-1 opacity-0"
                enter-to-class="translate-y-0 opacity-100"
                leave-active-class="transition duration-200 ease-in motion-reduce:transition-none"
                leave-from-class="translate-y-0 opacity-100"
                leave-to-class="-translate-y-1 opacity-0"
              >
                <ul
                  v-if="openSubmenu === item.id"
                  :id="`${item.id}-submenu`"
                  class="ml-8 mt-1 grid gap-0 border-l-2 border-[#313493]/15 pl-2 lg:absolute lg:left-0 lg:top-full lg:z-50 lg:ml-0 lg:mt-0 lg:min-w-64 lg:gap-1 lg:rounded-lg lg:border lg:border-slate-200 lg:border-b-4 lg:border-b-[#EE2329] lg:bg-white lg:p-2 lg:pl-2 lg:shadow-xl"
                >
                  <li v-for="subitem in item.submenu" :key="subitem.id">
                    <RouterLink
                      class="flex min-h-11 cursor-pointer items-center gap-3 whitespace-nowrap border-b border-slate-200 px-3 py-2.5 text-sm font-semibold text-[#101F4F] transition-colors duration-200 hover:bg-red-50 hover:text-[#EE2329] focus-visible:bg-red-50 focus-visible:outline-2 focus-visible:outline-[#EE2329] motion-reduce:transition-none last:border-b-0 lg:block lg:min-h-12 lg:rounded-md lg:px-3 lg:py-3 lg:font-medium lg:text-[#313493] xl:text-sm"
                      :to="{
                        name: `${locale}-${subitem.routeKey}`,
                        hash: subitem.hash,
                      }"
                      @click="handleNavigationClick(subitem.routeKey, subitem.hash)"
                    >
                      <component :is="navigationIcons[subitem.id]" class="size-5 shrink-0 lg:hidden" :size="20" aria-hidden="true" />
                      {{ dictionary.homeFoundation.navigation[subitem.labelKey] }}
                    </RouterLink>
                  </li>
                </ul>
              </Transition>
            </template>
          </li>
        </ul>
        <div class="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 p-3 lg:hidden">
          <Headset class="size-9 shrink-0 text-sky-600" :size="36" :stroke-width="1.8" aria-hidden="true" />
          <div class="min-w-0 flex-1">
            <p class="text-sm font-bold text-[#101F4F]">{{ dictionary.siteHeader.mobileAssistanceTitle }}</p>
            <p class="mt-0.5 text-xs leading-4 text-slate-600">{{ dictionary.siteHeader.mobileAssistanceDescription }}</p>
          </div>
          <RouterLink class="inline-flex min-h-10 shrink-0 items-center gap-1 rounded-full bg-[#EE2329] px-3 text-xs font-bold text-white transition-colors hover:bg-[#B91C1C] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329]" :to="{ name: `${locale}-contact` }" @click="closeMenu">
            {{ dictionary.aboutPage.contactUs }} <ArrowRight :size="15" aria-hidden="true" />
          </RouterLink>
        </div>
      </nav>

      <div class="ml-auto flex shrink-0 items-center gap-1 sm:gap-2 lg:ml-1">
        <a
          class="group inline-flex min-h-11 cursor-pointer items-center justify-center gap-2 rounded-full text-[#313493] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EE2329] motion-reduce:transition-none sm:gap-3"
          :href="headerContact.phoneHref"
          :aria-label="`${dictionary.siteHeader.callUsNow}: ${headerContact.phoneDisplay}`"
        >
          <span
            class="relative isolate inline-flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-[#EE2329] text-white transition-colors group-hover:bg-[#B91C1C]    sm:size-14"
            aria-hidden="true"
          >
            <PhoneCall :size="22" :stroke-width="1.8" />
          </span>
          <span class="hidden flex-col text-left leading-tight sm:flex">
            <span class="text-sm font-medium text-slate-600">{{
              dictionary.siteHeader.callUsNow
            }}</span>
            <span
              class="whitespace-nowrap text-base font-semibold text-[#313493] xl:text-lg"
              >{{ headerContact.phoneDisplay }}</span
            >
          </span>
        </a>
        <button
          ref="menuButton"
          class="inline-flex size-11 cursor-pointer items-center justify-center rounded-md border border-slate-300 text-[#313493] transition-colors hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493] motion-reduce:transition-none lg:hidden"
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
