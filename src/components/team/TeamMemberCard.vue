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
  <article class="group h-full border-r border-slate-200 px-4 py-1 transition-colors duration-300 last:border-r-0 hover:bg-slate-50/70 motion-reduce:transition-none sm:px-5 lg:px-6">
    <div v-reveal:image-left class="overflow-hidden bg-slate-100">
      <img class="aspect-[3/4] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] motion-reduce:transition-none" :src="member.image" :srcset="`${member.imageMobile} 360w, ${member.image} ${member.imageWidth}w`" sizes="(max-width: 639px) 90vw, (max-width: 1023px) 44vw, (max-width: 1279px) 28vw, 22vw" :alt="copy.portraitAlt.replace('{name}', name)" width="640" height="853" loading="lazy" decoding="async" />
    </div>
    <div class="pt-6 sm:pt-8">
      <p v-reveal class="min-h-5 text-xs font-medium uppercase leading-5 tracking-wide text-[#EE2329] delay-100 sm:text-sm">{{ copy[member.roleKey] }}</p>
      <h3 v-reveal class="mt-4 whitespace-nowrap text-[clamp(0.875rem,1.45vw,1.5rem)] font-semibold uppercase leading-snug text-[#173F68] delay-200 sm:mt-5">{{ name }}</h3>
      <p v-reveal class="mt-5 text-sm leading-[1.55] text-slate-700 delay-300 sm:mt-6 sm:text-base">{{ copy[member.descriptionKey] }}</p>
      <a v-if="member.phone" v-reveal class="mt-4 inline-flex max-w-full items-center gap-2 rounded-sm text-sm font-medium text-[#313493] transition-colors hover:text-[#EE2329] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EE2329]" :href="member.phone.href" :aria-label="phoneLabel">
        <Phone :size="16" aria-hidden="true" />
        <span>{{ member.phone.display }}</span>
      </a>
    </div>
  </article>
</template>
