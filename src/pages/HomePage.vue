<script setup>
import HomeContactSection from "../components/home/HomeContactSection.vue";
import AboutSection from "../components/home/AboutSection.vue";
import DestinationSection from "../components/home/DestinationSection.vue";
import FAQSection from "../components/home/FAQSection.vue";
import HajjUmrahSection from "../components/home/HajjUmrahSection.vue";
import HeroCarousel from "../components/home/HeroCarousel.vue";
import CountryMarquee from "../components/home/CountryMarquee.vue";
import ProcessSection from "../components/home/ProcessSection.vue";
import ServicesSection from "../components/home/ServicesSection.vue";
import TeamSection from "../components/home/TeamSection.vue";
import SiteFooter from "../components/layout/SiteFooter.vue";

</script>

<template>
  <main>
    <HeroCarousel />
    <CountryMarquee />
    <DestinationSection />
    <TeamSection />
    <AboutSection />
    <ServicesSection />
    <ProcessSection />
    <HajjUmrahSection />
    <FAQSection />
    <HomeContactSection />
  </main>

  <SiteFooter />
</template>
