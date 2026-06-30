<script setup>
defineProps({
  name: { type: String, required: true },
  tier: { type: String, default: 'comfortable' }, // 'daily' | 'comfortable' | 'exposure'
  note: { type: String, default: '' },
})
</script>

<template>
  <li class="flex items-center gap-3 py-2">
    <span
      class="inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full"
      :class="{
        'bg-text': tier === 'daily',
        'bg-text-soft': tier === 'comfortable',
        'border border-text-mute bg-transparent': tier === 'exposure',
      }"
      :aria-label="tier"
    ></span>
    <span class="font-sans text-sm text-text md:text-[15px]">{{ name }}</span>
    <span
      v-if="note"
      class="ml-auto font-mono text-[10px] uppercase tracking-[0.18em] text-text-mute"
    >
      {{ note }}
    </span>
  </li>
</template>
