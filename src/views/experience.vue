<script setup>
  import experience from '../content/experience.json'
</script>

<template>
  <div class="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pt-48 lg:pb-32 lg:pt-56">
    <!-- Hero background -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute inset-0" style="background: var(--hero-glow)"></div>
      <div class="beam-bg absolute inset-0 opacity-[0.12] blur-[30px]"></div>
    </div>

    <!-- Eyebrow + H1 -->
    <header class="max-w-5xl">
      <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
        <span class="mr-2">03</span>Professional Experience — Exclude side project
      </p>

      <h1
        class="mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-text sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]">
        Places I've built things.
      </h1>

      <p class="mt-6 max-w-2xl font-sans text-base leading-relaxed text-text-soft md:mt-8 md:text-lg">
        A decade of shipping software — from startups, small business to enterprises.
      </p>
    </header>

    <!-- Experience cards -->
    <section class="mt-14 flex flex-col gap-6 md:mt-20 md:gap-8">
      <article v-for="(entry, i) in experience" :key="i"
        class="group rounded-[1.5rem] border border-hairline bg-surface transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong">

        <div class=" border-hairline p-7">
          <div class="flex flex-col gap-5 md:flex-row md:items-start md:justify-between md:gap-6">
            <div>
              <h2 class="font-sans text-2xl font-medium tracking-tight text-text md:text-3xl">
                {{ entry.title }}
              </h2>
              <p class="mt-1 font-sans text-base text-text-soft md:text-lg">
                {{ entry.company }}
              </p>
            </div>
            <div class="shrink-0 text-left md:text-right">
              <p class="font-mono text-xs font-medium uppercase tracking-[0.15em] text-text-mute">
                {{ entry.from }} — {{ entry.to }}
              </p>
              <p class="mt-0.5 font-mono text-[10px] uppercase tracking-[0.15em] text-text-mute">
                {{ entry.location }}
              </p>
            </div>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
