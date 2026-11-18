<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ChevronDown } from '@lucide/vue'

const props = defineProps({
  modelValue: { type: String, default: '' },
  options: { type: Array, required: true },
  placeholder: { type: String, required: true },
  label: { type: String, required: true },
  name: { type: String, required: true },
  required: { type: Boolean, default: false },
  buttonClass: { type: String, default: '' },
  menuClass: { type: String, default: '' },
  leading: { type: Object, default: null },
  id: { type: String, required: true },
})

const emit = defineEmits(['update:modelValue'])
const root = ref(null)
const isOpen = ref(false)
const activeIndex = ref(0)
const selectedOption = computed(() => props.options.find((option) => option.value === props.modelValue))

function closeMenu() {
  isOpen.value = false
}

function chooseOption(option) {
  emit('update:modelValue', option.value)
  closeMenu()
}

function openMenu(direction = 1) {
  if (!props.options.length) return
  const selectedIndex = props.options.findIndex((option) => option.value === props.modelValue)
  activeIndex.value = selectedIndex >= 0 ? selectedIndex : direction < 0 ? props.options.length - 1 : 0
  isOpen.value = true
}

function handleKeydown(event) {
  if (event.key === 'ArrowDown') {
    event.preventDefault()
    if (!isOpen.value) openMenu(1)
    else activeIndex.value = (activeIndex.value + 1) % props.options.length
  } else if (event.key === 'ArrowUp') {
    event.preventDefault()
    if (!isOpen.value) openMenu(-1)
    else activeIndex.value = (activeIndex.value - 1 + props.options.length) % props.options.length
  } else if (event.key === 'Home' && isOpen.value) {
    event.preventDefault()
    activeIndex.value = 0
  } else if (event.key === 'End' && isOpen.value) {
    event.preventDefault()
    activeIndex.value = props.options.length - 1
  } else if ((event.key === 'Enter' || event.key === ' ') && isOpen.value) {
    event.preventDefault()
    chooseOption(props.options[activeIndex.value])
  } else if (event.key === 'Escape' && isOpen.value) {
    event.preventDefault()
    closeMenu()
  } else if (event.key === 'Tab' && isOpen.value) {
    closeMenu()
  }
}

function handleDocumentPointer(event) {
  if (!root.value?.contains(event.target)) closeMenu()
}

onMounted(() => document.addEventListener('pointerdown', handleDocumentPointer))
onBeforeUnmount(() => document.removeEventListener('pointerdown', handleDocumentPointer))
</script>

<template>
  <div ref="root" class="relative w-full min-w-0">
    <select class="pointer-events-none absolute left-0 top-0 size-px opacity-0" :name="name" :value="modelValue" :required="required" tabindex="-1" aria-hidden="true">
      <option value="" disabled>{{ placeholder }}</option>
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>

    <button
      :id="id"
      class="flex min-h-12 w-full min-w-0 cursor-pointer items-center gap-3 rounded-xl border border-blue-200 bg-white/80 px-3 py-3 text-left text-sm text-[#243E61] transition-colors hover:border-blue-300 focus:border-[#313493] focus:outline-none focus:ring-2 focus:ring-[#313493]/20"
      :class="buttonClass"
      type="button"
      role="combobox"
      aria-haspopup="listbox"
      :aria-label="label"
      :aria-expanded="isOpen"
      :aria-controls="`${id}-options`"
      :aria-required="required ? 'true' : undefined"
      :aria-activedescendant="isOpen ? `${id}-option-${activeIndex}` : undefined"
      @click="isOpen ? closeMenu() : openMenu()"
      @keydown="handleKeydown"
    >
      <component :is="leading" v-if="leading" class="size-5 shrink-0" :size="20" aria-hidden="true" />
      <span class="min-w-0 flex-1 truncate" :class="selectedOption ? 'text-[#101F4F]' : 'text-[#243E61]'">{{ selectedOption?.label ?? placeholder }}</span>
      <ChevronDown class="size-4 shrink-0 transition-transform duration-200" :class="isOpen ? 'rotate-180' : ''" :size="18" aria-hidden="true" />
    </button>

    <Transition
      enter-active-class="transition duration-150 ease-out motion-reduce:transition-none"
      enter-from-class="-translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-100 ease-in motion-reduce:transition-none"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="-translate-y-1 opacity-0"
    >
      <ul v-if="isOpen" :id="`${id}-options`" class="absolute left-0 right-0 top-full z-40 mt-1 max-h-56 w-full max-w-full overflow-x-hidden overflow-y-auto rounded-xl border border-blue-200 bg-white p-1 shadow-lg" :class="menuClass" role="listbox" :aria-label="label">
        <li v-for="(option, index) in options" :id="`${id}-option-${index}`" :key="option.value" class="min-w-0">
          <button class="block min-h-10 w-full min-w-0 cursor-pointer rounded-lg px-3 py-2 text-left text-sm leading-5 text-[#313493] [overflow-wrap:anywhere] transition-colors hover:bg-blue-50 focus-visible:bg-blue-50 focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[#313493]" :class="[activeIndex === index ? 'bg-blue-50' : '', modelValue === option.value ? 'font-semibold' : 'font-normal']" type="button" role="option" :aria-selected="modelValue === option.value" @mouseenter="activeIndex = index" @mousedown.prevent @click="chooseOption(option)">
            {{ option.label }}
          </button>
        </li>
      </ul>
    </Transition>
  </div>
</template>
