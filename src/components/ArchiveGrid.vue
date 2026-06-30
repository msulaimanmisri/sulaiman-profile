<script setup>
defineProps({
  items: { type: Array, required: true },
})
</script>

<template>
  <div class="grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
    <component
      :is="item.url ? 'a' : 'div'"
      v-for="(item, i) in items"
      :key="item.title + i"
      :href="item.url"
      :target="item.url ? '_blank' : undefined"
      :rel="item.url ? 'noopener noreferrer' : undefined"
      class="group relative block rounded-2xl border border-hairline bg-surface p-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] hover:border-hairline-strong hover:bg-surface-soft md:p-6"
    >
      <div class="flex h-full flex-col gap-3">
        <div class="flex items-start justify-between gap-3">
          <h4 class="font-sans text-base font-medium leading-snug tracking-tight text-text md:text-[17px]">
            {{ item.title }}
          </h4>
          <span class="flex-shrink-0 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-mute">
            {{ String(i + 1).padStart(2, '0') }}
          </span>
        </div>

        <p
          v-if="item.description"
          class="font-sans text-sm leading-relaxed text-text-soft"
        >
          {{ item.description }}
        </p>

        <div
          class="mt-auto flex items-center gap-2 pt-2 opacity-0 transition-opacity duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:opacity-100"
        >
          <template v-if="item.url">
            <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-mute">
              Visit
            </span>
            <svg viewBox="0 0 16 16" fill="none" class="h-2.5 w-2.5 text-text-mute" aria-hidden="true">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </template>
          <span v-else class="font-mono text-[10px] uppercase tracking-[0.2em] text-orange-400/50">
            Coming soon
          </span>
        </div>
      </div>
    </component>
  </div>
</template>
