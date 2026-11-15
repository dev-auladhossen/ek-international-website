<script setup>
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
</script>

<template>
  <section class="bg-slate-900 px-4 py-10 text-white sm:px-6 lg:px-8" aria-labelledby="trust-title">
    <div class="mx-auto max-w-7xl">
      <h2 id="trust-title" class="text-2xl font-semibold">{{ dictionary.homeFoundation.trust.title }}</h2>
      <p class="mt-3 max-w-3xl leading-7 text-slate-200">{{ dictionary.homeFoundation.trust.contentPending }}</p>
    </div>
  </section>
</template>
