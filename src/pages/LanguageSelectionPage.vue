<script setup>
import { usePageContent } from '../composables/usePageContent'

const { page } = usePageContent()
</script>

<template>
  <main>
    <h1>{{ page.heading }}</h1>
    <p>{{ page.description }}</p>
    <ul>
      <li>
        <RouterLink :to="{ name: 'en-home' }">
          {{ page.links.en }}
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'bn-home' }" lang="bn-BD">
          {{ page.links.bn }}
        </RouterLink>
      </li>
    </ul>
  </main>
</template>