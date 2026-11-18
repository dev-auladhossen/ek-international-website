<script setup>
import { computed } from 'vue'
import { BriefcaseBusiness, ClipboardCheck, FileText, Files, GraduationCap, Headset, IdCard, Images, SearchCheck } from '@lucide/vue'
import { usePageContent } from '../../composables/usePageContent'

const { dictionary } = usePageContent()
const copy = computed(() => dictionary.value.workVisaPage)
const requiredDocuments = [
  { id: 'passport', titleKey: 'documentPassportTitle', detailKey: 'documentPassportDetail', icon: IdCard },
  { id: 'photographs', titleKey: 'documentPhotoTitle', detailKey: 'documentPhotoDetail', icon: Images },
  { id: 'education-work', titleKey: 'documentEducationTitle', detailKey: 'documentEducationDetail', icon: GraduationCap },
  { id: 'experience', titleKey: 'documentExperienceTitle', detailKey: 'documentExperienceDetail', icon: BriefcaseBusiness },
  { id: 'supporting', titleKey: 'documentSupportingTitle', detailKey: 'documentSupportingDetail', icon: FileText },
]
const assistanceSteps = [
  { id: 'requirements', titleKey: 'documentHelpRequirements', icon: ClipboardCheck },
  { id: 'organize', titleKey: 'documentHelpOrganize', icon: Files },
  { id: 'review', titleKey: 'documentHelpReview', icon: SearchCheck },
  { id: 'support', titleKey: 'documentHelpSupport', icon: Headset },
]
</script>

<template>
  <section class="bg-white px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12" aria-labelledby="work-visa-documents-title">
    <div class="mx-auto max-w-7xl 2xl:max-w-[90rem] min-[1920px]:max-w-[100rem] min-[2560px]:max-w-[120rem]">
      <header class="mx-auto mb-6 max-w-5xl text-center sm:mb-8">
        <div v-reveal class="flex items-center justify-center gap-3">
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-[#EE2329] sm:text-sm">{{ copy.documentsEyebrow }}</p>
          <span class="h-0.5 w-10 bg-[#EE2329] sm:w-14" aria-hidden="true"></span>
        </div>
        <h2 id="work-visa-documents-title" v-reveal class="mt-2 text-xl font-extrabold leading-tight tracking-tight text-[#101F4F] sm:text-2xl lg:text-3xl">
          {{ copy.documentsTitleLead }} <span class="text-blue-600">{{ copy.documentsTitleAccent }}</span>
        </h2>
        <p v-reveal class="mt-1.5 text-xs leading-5 text-slate-600 sm:text-sm sm:leading-6 lg:text-base">{{ copy.documentsIntro }}</p>
      </header>

      <div class="grid gap-4 lg:grid-cols-2 lg:gap-5">
        <article v-reveal class="rounded-2xl border border-blue-100 bg-white p-3 shadow-[0_6px_18px_rgba(49,52,147,0.08)] sm:p-4 lg:p-5">
          <header class="flex items-center gap-3 rounded-xl bg-slate-100/90 px-3 py-2 sm:px-4">
            <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#313493]" aria-hidden="true"><FileText :size="24" :stroke-width="1.8" /></span>
            <h3 class="text-base font-bold leading-tight text-[#101F4F] sm:text-lg">{{ copy.documentsListTitle }}</h3>
          </header>
          <ul class="mt-2 divide-y divide-blue-100 px-1 sm:px-2">
            <li v-for="document in requiredDocuments" :key="document.id" v-reveal class="flex items-center gap-3 py-2 sm:gap-4 sm:py-2.5">
              <span class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#243E61] sm:size-12" aria-hidden="true"><component :is="document.icon" :size="24" :stroke-width="1.7" /></span>
              <div class="min-w-0">
                <h4 class="text-xs font-bold leading-4 text-[#101F4F] sm:text-sm sm:leading-5">{{ copy[document.titleKey] }}</h4>
                <p class="text-xs leading-4 text-slate-700 sm:text-sm sm:leading-5">{{ copy[document.detailKey] }}</p>
              </div>
            </li>
          </ul>
        </article>

        <article v-reveal class="rounded-2xl border border-blue-100 bg-white p-3 shadow-[0_6px_18px_rgba(49,52,147,0.08)] sm:p-4 lg:p-5">
          <header class="flex items-center gap-3 rounded-xl bg-slate-100/90 px-3 py-2 sm:px-4">
            <span class="inline-flex size-10 shrink-0 items-center justify-center rounded-xl bg-white text-[#243E61]" aria-hidden="true"><Headset :size="24" :stroke-width="1.8" /></span>
            <h3 class="text-base font-bold leading-tight text-[#101F4F] sm:text-lg">{{ copy.documentsHelpTitle }}</h3>
          </header>
          <ul class="mt-2 divide-y divide-blue-100 px-1 sm:px-2">
            <li v-for="item in assistanceSteps" :key="item.id" v-reveal class="flex items-center gap-3 py-2.5 sm:gap-4 sm:py-3">
              <span class="inline-flex size-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-[#243E61] sm:size-12" aria-hidden="true"><component :is="item.icon" :size="24" :stroke-width="1.7" /></span>
              <p class="text-xs leading-4 text-[#101F4F] sm:text-sm sm:leading-5">{{ copy[item.titleKey] }}</p>
            </li>
          </ul>
        </article>
      </div>
    </div>
  </section>
</template>
