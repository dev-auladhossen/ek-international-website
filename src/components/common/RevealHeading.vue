<script setup>
defineProps({
  as: { type: String, default: 'h2' },
  text: { type: String, required: true },
})
</script>

<template>
  <component :is="as" v-bind="$attrs" v-reveal>
    {{ text }}
  </component>
</template>
