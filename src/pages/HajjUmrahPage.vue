<script setup>
import HajjUmrahHero from '../components/hajjUmrah/HajjUmrahHero.vue'
import PackageCatalog from '../components/hajjUmrah/PackageCatalog.vue'
import PilgrimageSupportSection from '../components/hajjUmrah/PilgrimageSupportSection.vue'
import PilgrimageContactCta from '../components/hajjUmrah/PilgrimageContactCta.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <HajjUmrahHero />
    <PackageCatalog />
    <PilgrimageSupportSection />
    <PilgrimageContactCta />
  </main>
  <SiteFooter />
</template>
