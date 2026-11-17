<script setup>
import { computed } from 'vue'
import { Phone } from '@lucide/vue'
import { usePageContent } from '../../composables/usePageContent'

const props = defineProps({
  member: { type: Object, required: true },
})

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.homeFoundation.team)
const name = computed(() => copy.value[props.member.nameKey])
const phoneLabel = computed(() =>
  copy.value.callTeamMember
    .replace('{name}', name.value)
    .replace('{phone}', props.member.phone.display),
)
</script>

<template>
  <article class="group h-full rounded-3xl bg-slate-100 px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_35px_rgba(15,23,42,0.12)] motion-reduce:transform-none motion-reduce:transition-none sm:px-7 sm:py-8">
    <div v-reveal:image-left class="mx-auto size-32 overflow-hidden rounded-full border-4 border-white bg-white shadow-[0_10px_22px_rgba(15,23,42,0.16)] sm:size-36 lg:size-40">
      <img class="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none" :src="member.image" :alt="copy.portraitAlt.replace('{name}', name)" width="320" height="320" loading="lazy" decoding="async" />
    </div>
    <div class="pt-4">
      <h3 v-reveal class="text-base font-bold leading-snug text-slate-950 delay-100 sm:text-lg">{{ name }}</h3>
      <p v-reveal class="mt-2 text-sm font-medium text-[#313493] delay-200 sm:text-base">{{ copy[member.roleKey] }}</p>
      <p v-reveal class="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-600 delay-300 sm:text-base sm:leading-7">{{ copy[member.descriptionKey] }}</p>
      <a v-if="member.phone" v-reveal class="mt-4 inline-flex max-w-full items-center gap-2 rounded-sm text-sm font-medium text-[#313493] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329]" :href="member.phone.href" :aria-label="phoneLabel">
        <Phone :size="16" aria-hidden="true" />
        <span>{{ member.phone.display }}</span>
      </a>
    </div>
  </article>
</template>
