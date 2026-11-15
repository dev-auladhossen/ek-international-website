<script setup>
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
</script>

<template>
  <section id="about" class="mx-auto grid max-w-7xl gap-8 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8" aria-labelledby="about-title">
    <div>
      <h2 id="about-title" class="text-3xl font-bold tracking-tight text-slate-950">{{ dictionary.homeFoundation.about.title }}</h2>
      <p class="mt-4 leading-7 text-slate-700">{{ dictionary.homeFoundation.about.contentPending }}</p>
    </div>
    <div class="flex min-h-56 items-center justify-center rounded-2xl border border-dashed border-slate-400 bg-slate-50 p-8 text-center text-slate-600" role="img" :aria-label="dictionary.homeFoundation.shared.imagePending">{{ dictionary.homeFoundation.shared.imagePending }}</div>
  </section>
</template>
