<script setup>
defineProps({
  index: { type: String, default: '01' },
  number: { type: String, default: '' },
  label: { type: String, required: true },
  caption: { type: String, default: '' },
  variant: { type: String, default: 'default' }, // 'default' | 'now' | 'reading'
})
</script>

<template>
  <article
    class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong md:p-7"
  >
    <div class="flex h-full flex-col gap-4">
      <header class="flex items-center justify-between">
        <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
          {{ index }}
        </span>
        <span
          v-if="variant === 'now'"
          class="inline-flex items-center gap-1.5 font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-soft"
        >
          <span class="inline-block h-1.5 w-1.5 rounded-full bg-text animate-live"></span>
          Live
        </span>
      </header>

      <div v-if="variant === 'now'" class="flex flex-1 flex-col justify-between gap-4">
        <p class="font-sans text-sm leading-relaxed text-text-soft md:text-[15px]">
          {{ label }}
        </p>
        <footer class="flex items-center justify-between border-t border-hairline pt-4">
          <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-mute">
            Last commit
          </span>
          <span class="font-mono text-xs text-text-soft">{{ caption }}</span>
        </footer>
      </div>

      <div v-else-if="variant === 'reading'" class="flex flex-1 flex-col gap-3">
        <p class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-mute">
          {{ caption || 'Reading' }}
        </p>
        <ul class="space-y-2">
          <li
            v-for="(item, i) in label.split('|')"
            :key="i"
            class="font-sans text-sm text-text-soft"
          >
            — {{ item.trim() }}
          </li>
        </ul>
      </div>

      <div v-else class="flex flex-1 flex-col justify-between gap-4">
        <p class="font-sans text-6xl font-medium leading-none tracking-[-0.03em] text-text md:text-7xl">
          {{ number }}
        </p>
        <p class="font-sans text-sm leading-snug text-text-soft md:text-[15px]">
          {{ label }}
        </p>
        <p
          v-if="caption"
          class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-mute"
        >
          {{ caption }}
        </p>
      </div>
    </div>
  </article>
</template>
