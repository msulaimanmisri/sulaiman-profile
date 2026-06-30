<script setup>
import { ref } from 'vue'
import EyebrowTag from '../components/EyebrowTag.vue'
import StatCard from '../components/StatCard.vue'
import now from '../content/now.json'

const featuredProjects = [
  {
    title: 'BacaSekejap',
    description:
      'Two-tier architecture with different load balancing strategies. A lesson in scaling Laravel under real traffic.',
    url: 'https://hantar.sulaimanmisri.com',
    category: 'Laravel',
  },
  {
    title: 'KiraSekarang',
    description:
      'Personal finance management that handles large transaction volumes without breaking a sweat.',
    url: 'https://kirasekarang.com',
    category: 'Laravel',
  },
  {
    title: 'Easy Switch Server',
    description:
      'A simple script to make your life easier to access server.',
    url: 'https://github.com/msulaimanmisri/easy-switch-server',
    category: 'DevOps',
  },
]

const latestWriting = ref([
  { title: 'How I Smashed Image Compression in Laravel Using Node.js', url: 'https://dev.to/msulaimanmisri/how-i-smashed-image-compression-in-laravel-using-nodejs-4pgb' },
  { title: 'SDD is now my go-to when developing a Website / Software', url: 'https://dev.to/msulaimanmisri/sdd-is-now-my-go-to-when-developing-a-website-software-4feh' },
  { title: 'Embracing Agile, Scrum, and Kanban in Project Management: A Personal Journey', url: 'https://dev.to/msulaimanmisri/embracing-agile-scrum-and-kanban-in-project-management-a-personal-journey-54jn' },
])
</script>

<template>
  <div class="relative">
    <!-- ────────────────────────────────────────────────────────────────── -->
    <!-- HERO · Editorial split + Bento                                    -->
    <!-- ────────────────────────────────────────────────────────────────── -->
     <section class="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-40 md:px-8 md:pt-48 lg:pb-32 lg:pt-56">
       <!-- Nightwatch-style hero background -->
       <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
         <div
           class="absolute inset-0"
           style="background: radial-gradient(55% 55% at 50% 40%, rgba(250,250,250,0.04) 0%, transparent 100%)"
         ></div>
         <div class="beam-bg absolute inset-0 opacity-[0.12] blur-[30px]"></div>
       </div>
       <div class="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-8 lg:gap-12">
        <!-- Left: editorial statement -->
        <div class="md:col-span-7 md:pr-4 lg:col-span-7 lg:pr-8">
          <EyebrowTag :label="now.location" class="motion-reveal" />

          <h1
            class="mt-6 font-sans text-[2.75rem] font-medium leading-[1.02] tracking-[-0.04em] text-text motion-reveal sm:text-5xl md:mt-8 md:text-6xl lg:text-[5.5rem]"
          >
            Your next
            Full Stack Engineer
            <span class="text-text-soft">&amp; Architect</span>
          </h1>

          <p
            class="mt-8 max-w-xl font-sans text-lg leading-relaxed text-text-soft motion-reveal md:mt-10 md:text-xl"
          >
            Ten years building production web platforms — from small shops to ministries and
            multinational brands. Equally comfortable writing the code, drawing the architecture,
            and explaining the trade-offs in plain language.
          </p>

          <div class="mt-10 flex flex-wrap items-center gap-3 motion-reveal md:mt-12">
            <a
              href="https://www.linkedin.com/in/msulaimanmisri/" target="_blank"
              class="group inline-flex items-center gap-3 rounded-full border border-hairline-strong bg-transparent px-6 py-3 font-sans text-sm font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
            >
              Get in touch
              <span
                class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105"
              >
                <svg viewBox="0 0 16 16" fill="none" class="h-3 w-3" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </span>
            </a>

          </div>
        </div>

        <!-- Right: bento grid -->
        <div class="grid grid-cols-1 gap-3 md:col-span-5 md:grid-cols-6 lg:col-span-5 motion-reveal-stagger is-revealed">
          <!-- Now card -->
          <div class="md:col-span-6 md:row-span-2" :style="{ '--stagger-delay': '0ms' }">
            <StatCard
              index="01"
              variant="now"
              :label="now.focus"
              :caption="now.projectNiche"
            />
          </div>

          <!-- 10+ stat -->
          <div class="md:col-span-3" :style="{ '--stagger-delay': '80ms' }">
            <StatCard
              index="02"
              number="10+"
              label="Years writing production code"
              caption="Since 2014"
            />
          </div>

          <!-- 40+ stat -->
          <div class="md:col-span-3" :style="{ '--stagger-delay': '160ms' }">
            <StatCard
              index="03"
              number="40+"
              label="Engagements shipped"
              caption="Across sectors"
            />
          </div>

          <!-- Reading -->
          <div class="md:col-span-6" :style="{ '--stagger-delay': '240ms' }">
            <StatCard
              index="04"
              variant="reading"
              :label="now.reading.join(' | ')"
              caption="Last reading"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- ────────────────────────────────────────────────────────────────── -->
    <!-- SELECTED WORK                                                      -->
    <!-- ────────────────────────────────────────────────────────────────── -->
    <section class="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <header class="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
            <span class="mr-2">02</span>Selected work
          </p>
          <h2 class="mt-3 font-sans text-4xl font-medium tracking-tight text-text md:text-5xl">
            Three things I'd build again.
          </h2>
        </div>
        <router-link
          :to="{ name: 'personal-project.index' }"
          class="hidden font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-soft transition-colors duration-500 hover:text-text md:inline-flex md:items-center md:gap-2"
        >
          See all
          <svg viewBox="0 0 16 16" fill="none" class="h-3 w-3" aria-hidden="true">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </router-link>
      </header>

      <div class="grid grid-cols-1 gap-4 md:grid-cols-3 motion-reveal-stagger is-revealed">
        <article
          v-for="(project, i) in featuredProjects"
          :key="project.title"
          class="group relative rounded-[1.5rem] border border-hairline bg-surface p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-[2px] hover:border-hairline-strong md:p-7"
          :style="{ '--stagger-delay': `${i * 80}ms` }"
        >
          <div class="flex h-full flex-col gap-6">
            <header class="flex items-start justify-between gap-4">
              <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="rounded-full border border-hairline px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-[0.18em] text-text-soft">
                {{ project.category }}
              </span>
            </header>

            <div class="flex-1">
              <h3 class="font-sans text-3xl font-medium tracking-[-0.02em] text-text">
                {{ project.title }}
              </h3>
              <p class="mt-3 font-sans text-sm leading-relaxed text-text-soft md:text-[15px]">
                {{ project.description }}
              </p>
            </div>

            <a
              :href="project.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 self-start rounded-full border border-hairline-strong px-4 py-2 font-sans text-xs font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
            >
              Visit
              <svg viewBox="0 0 16 16" fill="none" class="h-2.5 w-2.5" aria-hidden="true">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </a>
          </div>
        </article>
      </div>
    </section>

    <!-- ────────────────────────────────────────────────────────────────── -->
    <!-- LATEST WRITING                                                     -->
    <!-- ────────────────────────────────────────────────────────────────── -->
    <section class="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <header class="mb-10 flex items-end justify-between gap-6 md:mb-14">
        <div>
          <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
            <span class="mr-2">03</span>Notes
          </p>
          <h2 class="mt-3 font-sans text-4xl font-medium tracking-tight text-text md:text-5xl">
            On building software that lasts.
          </h2>
        </div>
        <a
          href="https://dev.to/msulaimanmisri"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-text-soft transition-colors duration-500 hover:text-text md:inline-flex md:items-center md:gap-2"
        >
          All writing
          <svg viewBox="0 0 16 16" fill="none" class="h-3 w-3" aria-hidden="true">
            <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </a>
      </header>

      <ol class="overflow-hidden rounded-[1.25rem] border border-hairline bg-surface motion-reveal-stagger is-revealed">
        <li
          v-for="(post, i) in latestWriting"
          :key="post.url"
          class="border-b border-hairline last:border-b-0"
          :style="{ '--stagger-delay': `${i * 60}ms` }"
        >
          <a
            :href="post.url"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-between gap-6 px-6 py-6 transition-colors duration-500 hover:bg-surface-soft md:px-8 md:py-7"
          >
            <div class="flex items-center gap-6">
              <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="font-sans text-xl font-medium tracking-tight text-text md:text-2xl">
                {{ post.title }}
              </span>
            </div>
            <svg
              viewBox="0 0 16 16"
              fill="none"
              class="h-4 w-4 flex-shrink-0 text-text-mute transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:text-text"
              aria-hidden="true"
            >
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </a>
        </li>
      </ol>
    </section>

    <!-- ────────────────────────────────────────────────────────────────── -->
    <!-- CONTACT STRIP                                                      -->
    <!-- ────────────────────────────────────────────────────────────────── -->
    <section class="relative mx-auto w-full max-w-7xl px-5 pb-24 md:px-8 md:pb-32">
      <div class="overflow-hidden rounded-[1.5rem] border border-hairline bg-surface p-10 text-center md:p-16">
        <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
          <span class="mr-2">04</span>Contact
        </p>
        <h2 class="mx-auto mt-4 max-w-2xl font-sans text-4xl font-medium leading-tight tracking-tight text-text md:text-6xl">
          Have something to build?
        </h2>
        <p class="mx-auto mt-4 max-w-md font-sans text-base leading-relaxed text-text-soft">
          Open for advisory, architecture review, and senior engineering engagements.
        </p>

        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/msulaimanmisri/" target="_blank"
            class="group inline-flex items-center gap-3 rounded-full border border-hairline-strong bg-transparent px-6 py-3 font-sans text-sm font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
          >
            Get in touch
            <span
              class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-surface-soft transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-px group-hover:scale-105"
            >
              <svg viewBox="0 0 16 16" fill="none" class="h-3 w-3" aria-hidden="true">
                <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </span>
          </a>

        </div>
      </div>
    </section>
  </div>
</template>

