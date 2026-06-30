<script setup>
defineProps({
  label: { type: String, required: true },
  active: { type: Boolean, default: false },
  count: { type: [Number, String], default: null },
})
</script>

<template>
  <button
    type="button"
    class="group inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
    :class="
      active
        ? 'border-text bg-text text-bg'
        : 'border-hairline bg-transparent text-text-soft hover:border-hairline-strong hover:text-text'
    "
  >
    {{ label }}
    <span
      v-if="count !== null"
      class="font-mono text-[10px] tracking-[0.18em] opacity-70"
    >
      {{ count }}
    </span>
  </button>
</template>
