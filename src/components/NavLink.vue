<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const props = defineProps({
  to: { type: [String, Object], required: true },
  label: { type: String, required: true },
})

const route = useRoute()

const isActive = computed(() => {
  const target = typeof props.to === 'object' ? props.to.name : props.to
  return route.name === target
})
</script>

<template>
  <router-link
    :to="to"
    class="nav-underline font-sans text-sm font-medium tracking-tight text-text-soft transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-text"
    :class="{ 'is-active text-text': isActive }"
    active-class="text-text"
  >
    {{ label }}
  </router-link>
</template>
