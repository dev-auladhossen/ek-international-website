<script setup>
import { usePageContent } from '../../composables/usePageContent'

const { page } = usePageContent()
</script>

<template>
  <main>
    <h1>{{ page.heading }}</h1>
    <p v-if="page.description">{{ page.description }}</p>
  </main>
</template>