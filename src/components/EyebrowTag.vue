<script setup>
defineProps({
  label: { type: String, required: true },
})
</script>

<template>
  <span
    class="inline-flex items-center gap-2 rounded-full border border-hairline bg-surface px-3.5 py-1 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-soft"
  >
    <span class="inline-block h-1 w-1 rounded-full bg-text animate-live"></span>
    {{ label }}
  </span>
</template>
