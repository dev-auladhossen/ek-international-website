<script setup>
import AboutCommitmentSection from '../components/about/AboutCommitmentSection.vue'
import AboutContactSection from '../components/about/AboutContactSection.vue'
import AboutHeroSection from '../components/about/AboutHeroSection.vue'
import AboutProcessSection from '../components/about/AboutProcessSection.vue'
import AboutServicesSection from '../components/about/AboutServicesSection.vue'
import AboutStorySection from '../components/about/AboutStorySection.vue'
import AboutTeamSection from '../components/about/AboutTeamSection.vue'
import SiteFooter from '../components/layout/SiteFooter.vue'
</script>

<template>
  <main class="min-w-0 overflow-x-clip">
    <AboutHeroSection />
    <AboutStorySection />
    <AboutServicesSection />
    <AboutProcessSection />
    <AboutTeamSection />
    <AboutCommitmentSection />
    <AboutContactSection />
  </main>
  <SiteFooter />
</template>
