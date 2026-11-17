<script setup>
defineProps({
  as: { type: String, default: 'h2' },
  text: { type: String, required: true },
  revealMode: { type: String, default: 'up' },
})
</script>

<template>
  <component :is="as" v-bind="$attrs" v-reveal:[revealMode]>
    {{ text }}
  </component>
</template>
