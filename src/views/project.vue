<script setup>
import { computed, ref } from 'vue'
import ArchiveGrid from '../components/ArchiveGrid.vue'
import FilterChip from '../components/FilterChip.vue'
import { clients, clientSectors } from '../content/clients.js'

const activeSector = ref('All')

const filteredClients = computed(() => {
  if (activeSector.value === 'All') return clients
  return clients.filter((c) => c.sector === activeSector.value)
})

const counts = computed(() => {
  const map = { All: clients.length }
  for (const c of clients) {
    map[c.sector] = (map[c.sector] || 0) + 1
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
        style="background: radial-gradient(55% 55% at 50% 40%, rgba(250,250,250,0.04) 0%, transparent 100%)"
      ></div>
      <div class="beam-bg absolute inset-0 opacity-[0.12] blur-[30px]"></div>
    </div>
    <header class="max-w-5xl">
      <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute motion-reveal">
        <span class="mr-2">03</span>Work
      </p>
      <h1
        class="mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-text motion-reveal sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]"
      >
        Engagements, end to end.
      </h1>
      <p class="mt-6 max-w-2xl font-sans text-base leading-relaxed text-text-soft motion-reveal md:mt-8 md:text-lg">
        From small shops to ministries and multinational brands — selected engagements from the
        last decade. Filter by sector.
      </p>
    </header>

    <div class="mt-12 flex flex-wrap items-center gap-2 md:mt-16">
      <FilterChip
        v-for="sector in clientSectors"
        :key="sector"
        :label="sector"
        :active="activeSector === sector"
        :count="counts[sector] || 0"
        @click="activeSector = sector"
      />
    </div>

    <section class="mt-10 motion-reveal md:mt-12">
      <ArchiveGrid :items="filteredClients" />
    </section>

    <div
      v-if="filteredClients.length === 0"
      class="mt-16 rounded-[1.5rem] border border-hairline bg-surface px-8 py-16 text-center"
    >
      <p class="font-sans text-2xl font-medium text-text-soft">
        Nothing in this sector — yet.
      </p>
    </div>
  </div>
</template>
