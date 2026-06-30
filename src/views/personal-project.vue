<script setup>
import { computed, ref } from 'vue'
import ArchiveGrid from '../components/ArchiveGrid.vue'
import FilterChip from '../components/FilterChip.vue'
import {
  personalProjects,
  personalProjectCategories,
} from '../content/personal-projects.js'

const activeCategory = ref('All')

const filteredProjects = computed(() => {
  if (activeCategory.value === 'All') return personalProjects
  return personalProjects.filter((p) => p.category === activeCategory.value)
})

const counts = computed(() => {
  const map = { All: personalProjects.length }
  for (const p of personalProjects) {
    map[p.category] = (map[p.category] || 0) + 1
  }
  return map
})
</script>

<template>
  <div class="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pt-48 lg:pb-32 lg:pt-56">
    <!-- Hero background -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute inset-0"
        style="background: var(--hero-glow)"
      ></div>
      <div class="beam-bg absolute inset-0 opacity-[0.12] blur-[30px]"></div>
    </div>
    <header class="max-w-5xl">
      <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
        <span class="mr-2">04</span>Personal projects
      </p>
      <h1
        class="mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-text sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]"
      >
        Things I built for the joy of building.
      </h1>
      <p class="mt-6 max-w-2xl font-sans text-base leading-relaxed text-text-soft md:mt-8 md:text-lg">
        Tools, packages, and weekend experiments — most of them free to use. Each one taught me
        something I now reach for daily.
      </p>
    </header>

    <div class="mt-12 flex flex-wrap items-center gap-2 md:mt-16">
      <FilterChip
        v-for="category in personalProjectCategories"
        :key="category"
        :label="category"
        :active="activeCategory === category"
        :count="counts[category] || 0"
        @click="activeCategory = category"
      />
    </div>

    <section class="mt-10 md:mt-12">
      <ArchiveGrid :items="filteredProjects" showComingSoon />
    </section>

    <div
      v-if="filteredProjects.length === 0"
      class="mt-16 rounded-[1.5rem] border border-hairline bg-surface px-8 py-16 text-center"
    >
      <p class="font-sans text-2xl font-medium text-text-soft">
        Nothing in this category — yet.
      </p>
    </div>

    <footer class="mt-16 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-8 md:flex-row md:items-center md:gap-6">
      <p class="font-sans text-xl font-medium text-text-soft">
        More on the way — follow along on GitHub.
      </p>
      <a
        href="https://github.com/msulaimanmisri"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 rounded-full border border-hairline-strong px-4 py-2 font-sans text-xs font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
      >
        @msulaimanmisri
        <svg viewBox="0 0 16 16" fill="none" class="h-2.5 w-2.5" aria-hidden="true">
          <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </footer>
  </div>
</template>
