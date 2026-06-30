<script setup>
defineProps({
  projectTitle: String,
  projectDescription: String,
  projectUrl: String,
})
</script>

<template>
  <article
    class="group relative flex h-full flex-col rounded-2xl border border-hairline bg-surface p-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] hover:border-hairline-strong"
  >
    <div class="flex h-full flex-col gap-4">
      <h4 class="font-sans text-lg font-medium leading-snug tracking-tight text-text md:text-[19px]">
        {{ projectTitle }}
      </h4>

      <p class="font-sans text-sm leading-relaxed text-text-soft">
        {{ projectDescription }}
      </p>

      <div class="mt-auto flex items-center gap-2 border-t border-hairline pt-4">
        <a
          v-if="projectUrl"
          :href="projectUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="group/btn inline-flex items-center gap-2 rounded-full border border-hairline-strong px-4 py-2 font-sans text-xs font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
        >
          Visit site
          <span
            class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface-soft transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-px group-hover/btn:scale-105"
          >
            <svg viewBox="0 0 16 16" fill="none" class="h-2.5 w-2.5" aria-hidden="true">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </article>
</template>
