<script setup>
import StackItem from '../components/StackItem.vue'
import { stackCategories } from '../content/stack.js'

const categories = stackCategories
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
    <!-- Eyebrow + H1 -->
    <header class="max-w-5xl">
      <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
        <span class="mr-2">02</span>Stack
      </p>
      <h1
        class="mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-text sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]"
      >
        The tools I reach for.
      </h1>
      <p class="mt-6 max-w-xl font-sans text-xl leading-snug text-text-soft md:mt-8 md:text-2xl">
        Boring where it matters, sharp where it counts.
      </p>
    </header>

    <!-- Tier legend -->
    <div class="mt-12 flex flex-wrap items-center gap-6 md:mt-16">
      <div class="flex items-center gap-2">
        <span class="inline-block h-1.5 w-1.5 rounded-full bg-text"></span>
        <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-soft">Daily</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-block h-1.5 w-1.5 rounded-full bg-text-soft"></span>
        <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-soft">Comfortable</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="inline-block h-1.5 w-1.5 rounded-full border border-text-mute bg-transparent"></span>
        <span class="font-mono text-[10px] uppercase tracking-[0.2em] text-text-soft">Exposure</span>
      </div>
    </div>

    <!-- Bento · 12-col grid -->
    <section
      class="mt-10 grid grid-cols-1 gap-3 md:mt-14 md:auto-rows-fr md:grid-cols-12"
    >
      <article
        v-for="(cat, i) in categories"
        :key="cat.id"
        class="sm:col-span-6"
        :class="[
          cat.id === 'workspace' ? 'lg:col-span-8' : 'lg:col-span-4',
          { 'lg:row-span-2': cat.span.row === 2 },
        ]"
      >
        <div
          class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-hairline-strong md:p-8"
        >
          <div class="flex h-full flex-col gap-5">
            <header class="flex items-center justify-between">
              <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
                {{ cat.index }} · {{ cat.title }}
              </span>
            </header>

            <h3 class="font-sans text-3xl font-medium tracking-[-0.02em] text-text md:text-[2rem]">
              {{ cat.blurb }}
            </h3>

            <ul class="mt-auto divide-y divide-hairline">
              <StackItem
                v-for="item in cat.items"
                :key="item.name"
                :name="item.name"
                :tier="item.tier"
                :note="item.note"
              />
            </ul>
          </div>
        </div>
      </article>
    </section>

    <!-- Footer caption -->
    <footer class="mt-16 flex flex-col items-start justify-between gap-3 border-t border-hairline pt-8 md:flex-row md:items-center md:gap-6">
      <p class="font-sans text-xl font-medium text-text-soft">
        I'll reach for anything that solves the problem.
      </p>
      <p class="font-sans text-base text-orange-400/50">
        Not limited to this list — happy to pick up new languages, tools, or frameworks as the role requires.
      </p>
    </footer>
  </div>
</template>