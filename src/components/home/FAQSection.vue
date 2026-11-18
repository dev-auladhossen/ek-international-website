<script setup>
import { Minus, Plus } from '@lucide/vue'
import { ref } from 'vue'
import RevealHeading from '../common/RevealHeading.vue'
import faqBackground from '../../assets/images/backgrounds/Minimal FAQ Waves with Question Mark.png'
import faqPortrait from '../../assets/images/backgrounds/Thoughtful Bearded Man Cutout.png'
import faqs from '../../data/faqs'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const openFaq = ref(faqs[0]?.id ?? null)

function toggleFaq(id) {
  openFaq.value = openFaq.value === id ? null : id
}
</script>

<template>
  <section
    id="faq"
    class="relative isolate overflow-hidden bg-sky-50 px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-14"
    aria-labelledby="faq-title"
  >
    <img
      class="absolute inset-0 z-0 size-full object-cover object-center"
      :src="faqBackground"
      alt=""
      width="1774"
      height="887"
      loading="lazy"
      decoding="async"
      aria-hidden="true"
    />

    <div class="relative z-10 mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto max-w-4xl text-center">
        <div class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-wide text-[#EE2329] sm:text-sm">
            {{ dictionary.homeFoundation.faq.eyebrow }}
          </p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-12" aria-hidden="true"></span>
        </div>
        <RevealHeading
          id="faq-title"
          class="mt-2 text-2xl font-bold leading-tight tracking-tight text-[#313493] sm:text-3xl lg:text-4xl"
          :text="dictionary.homeFoundation.faq.title"
        />
        <p v-reveal class="mx-auto mt-2 max-w-3xl text-sm leading-6 text-[#313493] sm:text-base">
          {{ dictionary.homeFoundation.faq.intro }}
        </p>
      </header>

      <div class="mt-6 grid items-end gap-4 sm:mt-8 lg:grid-cols-[0.72fr_1.55fr] lg:gap-7">
        <div v-reveal:image-left class="relative mx-auto h-52 w-full max-w-xs overflow-hidden  sm:h-64 lg:mx-0 lg:h-[27rem] lg:max-w-none lg:translate-y-14">
          <img
            class="absolute bottom-0 left-0 z-0 h-full w-full object-contain object-bottom"
            :src="faqPortrait"
            :alt="dictionary.homeFoundation.faq.portraitAlt"
            width="1269"
            height="1239"
            loading="lazy"
            decoding="async"
          />
        </div>

        <ol class="relative z-10 divide-y divide-blue-100 border-y border-blue-100">
          <li v-for="item in faqs" :key="item.id" v-reveal class="py-1">
            <h3>
              <button
                :id="`faq-question-${item.id}`"
                class="group flex min-h-14 w-full cursor-pointer items-center justify-between gap-4 py-3 text-left text-base font-semibold leading-snug text-[#313493] transition-colors duration-200 hover:text-[#313493] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#313493] sm:text-lg lg:text-xl motion-reduce:transition-none"
                type="button"
                :aria-expanded="openFaq === item.id"
                :aria-controls="`faq-answer-${item.id}`"
                @click="toggleFaq(item.id)"
              >
                <span>{{ dictionary.homeFoundation.faq[item.questionKey] }}</span>
                <span class="inline-flex size-8 shrink-0 items-center justify-center rounded-full text-[#313493] transition-colors duration-200 group-hover:text-[#EE2329]" aria-hidden="true">
                  <Minus v-if="openFaq === item.id" :size="22" :stroke-width="2.8" />
                  <Plus v-else :size="22" :stroke-width="2.8" />
                </span>
              </button>
            </h3>

            <div
              :id="`faq-answer-${item.id}`"
              class="grid transition-[grid-template-rows,opacity] duration-500 ease-in-out motion-reduce:transition-none"
              :class="openFaq === item.id ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
              role="region"
              :aria-labelledby="`faq-question-${item.id}`"
              :aria-hidden="openFaq !== item.id"
            >
              <div class="min-h-0 overflow-hidden">
                <p class="pb-4 pr-8 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
                  {{ dictionary.homeFoundation.faq[item.answerKey] }}
                </p>
              </div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  </section>
</template>
