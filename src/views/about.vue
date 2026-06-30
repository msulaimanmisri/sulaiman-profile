<script setup>
const focusAreas = [
  'Architecture',
  'System design',
  'API platforms',
  'Performance',
  'Mentoring',
]

const principles = [
  'Boring tech for critical paths.',
  'Measure before optimizing.',
  'Architecture is a team sport.',
]
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
    <!-- Eyebrow + H1 -->
    <header class="max-w-5xl">
      <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute motion-reveal">
        <span class="mr-2">01</span>About
      </p>
      <h1
        class="mt-6 font-sans text-5xl font-medium leading-[1.02] tracking-[-0.04em] text-text motion-reveal sm:text-6xl md:mt-8 md:text-7xl lg:text-[5.5rem]"
      >
        Ten years of building software that ships —
        <span class="text-text-soft">and software that lasts.</span>
      </h1>
    </header>

    <!-- Editorial split: bio prose left, focus areas right -->
    <div class="mt-16 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-8 lg:gap-16">
      <div class="md:col-span-7 motion-reveal">
        <div class="space-y-5 font-sans text-base leading-relaxed text-text-soft md:text-lg md:leading-[1.75]">
          <p>
            Sulaiman is a Senior Software Engineer and Software Architect based in Kuala Lumpur.
            He works hands-on — writing the code, drawing the diagrams, sitting in the stand-ups
            — and at the same time shapes the architecture behind the systems that run for years
            after the launch party is over.
          </p>
          <p>
            Over a decade he has shipped e-commerce platforms, learning management systems,
            enterprise applications, and public-sector websites — for ministries, multinational
            brands, universities, and one-person shops alike. The brief is always different;
            the underlying craft is the same.
          </p>
          <p>
            He specializes in PHP, Laravel, Tailwind CSS, Alpine.js, and Vue.js, and holds
            additional depth across infrastructure, performance, and team-scale engineering.
            <span class="font-medium text-text">This website is a testament to his
            craft, built on Vue 3 and Tailwind v4.</span>
          </p>
          <p>
            Outside of work, Sulaiman mentors individuals interested in WordPress and web
            development — both in-person and online — and has spoken at official WordPress
            gatherings in Malaysia.
          </p>
        </div>
      </div>

      <aside class="md:col-span-5 md:pl-4 motion-reveal">
        <div class="sticky top-32">
          <p class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
            Focus areas
          </p>
          <ul class="mt-4 space-y-3">
            <li
              v-for="(area, i) in focusAreas"
              :key="area"
              class="flex items-center gap-4 border-b border-hairline pb-3 last:border-b-0"
            >
              <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <span class="font-sans text-2xl font-medium tracking-tight text-text">
                {{ area }}
              </span>
            </li>
          </ul>
        </div>
      </aside>
    </div>

    <!-- Image gallery -->
    <section class="mt-20 md:mt-28 motion-reveal">
      <div class="flex gap-3 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 md:grid-cols-4 sm:gap-3 md:gap-4">
        <div class="shrink-0 w-[80vw] snap-center sm:w-auto sm:snap-none overflow-hidden rounded-[1.5rem] bg-surface">
          <img
            src="/images/lead-1.jpg"
            alt="Sulaiman portrait"
            class="aspect-3/4 w-full origin-center object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
          />
        </div>
        <div class="shrink-0 w-[80vw] snap-center sm:w-auto sm:snap-none overflow-hidden rounded-[1.5rem] bg-surface">
          <img
            src="/images/lead-2.jpg"
            alt="Sulaiman portrait"
            class="aspect-3/4 w-full origin-center object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
          />
        </div>
        <div class="shrink-0 w-[80vw] snap-center sm:w-auto sm:snap-none overflow-hidden rounded-[1.5rem] bg-surface">
          <img
            src="/images/sulaiman-lead-dev.jpg"
            alt="Sulaiman working"
            class="aspect-3/4 w-full origin-center object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
          />
        </div>
        <div class="shrink-0 w-[80vw] snap-center sm:w-auto sm:snap-none overflow-hidden rounded-[1.5rem] bg-surface">
          <img
            src="/images/sulaiman-devops.png"
            alt="Sulaiman devops"
            class="aspect-3/4 w-full origin-center object-cover transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:scale-[1.03]"
          />
        </div>
      </div>
    </section>

    <!-- Asymmetrical Bento -->
    <section class="mt-20 grid grid-cols-1 gap-3 md:mt-28 md:grid-cols-12 motion-reveal-stagger is-revealed">
      <!-- A · What I do (wide) -->
      <article class="md:col-span-8 md:row-span-2" :style="{ '--stagger-delay': '0ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong md:p-9">
          <div class="flex h-full flex-col gap-6">
            <header class="flex items-center justify-between">
              <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
                A · What I do
              </span>
            </header>
            <p class="font-sans text-3xl font-medium leading-[1.15] tracking-[-0.02em] text-text md:text-4xl">
              I take fuzzy briefs and turn them into systems that survive contact with reality —
              and the engineers who'll inherit them.
            </p>
            <p class="font-sans text-base leading-relaxed text-text-soft md:text-[17px]">
              Architecture reviews, hands-on implementation, performance audits, hiring loops,
              and stakeholder communication. I work best when I can move between the whiteboard
              and the editor in the same afternoon.
            </p>
          </div>
        </div>
      </article>

      <!-- B · Where -->
      <article class="md:col-span-4" :style="{ '--stagger-delay': '80ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong">
          <div class="flex h-full flex-col gap-4">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
              B · Where
            </span>
            <p class="font-sans text-3xl font-medium tracking-tight text-text md:text-4xl">
              Kuala Lumpur
            </p>
            <p class="font-sans text-sm text-text-soft">
              Hybrid/Remote · GMT+8
            </p>
          </div>
        </div>
      </article>

      <!-- C · Languages -->
      <article class="md:col-span-4" :style="{ '--stagger-delay': '160ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong">
          <div class="flex h-full flex-col gap-3">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
              C · Languages
            </span>
            <p class="font-sans text-7xl font-medium leading-none tracking-[-0.03em] text-text">
              4
            </p>
            <p class="font-mono text-xs text-text-soft">
              PHP · JS · Bash · SQL
            </p>
          </div>
        </div>
      </article>

      <!-- D · Philosophy (tall) -->
      <article class="md:col-span-4 md:row-span-2" :style="{ '--stagger-delay': '240ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong md:p-8">
          <div class="flex h-full flex-col gap-6">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
              D · Philosophy
            </span>
            <h3 class="font-sans text-3xl font-medium leading-tight tracking-tight text-text md:text-4xl">
              Push often, Push early. Break things, but learn them well.
            </h3>
            
          </div>
        </div>
      </article>

      <!-- E · Speaking -->
      <article class="md:col-span-4 md:row-span-2" :style="{ '--stagger-delay': '320ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong">
          <div class="flex h-full flex-col gap-3">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
              E · Speaking
            </span>
            <p class="font-sans text-3xl font-medium tracking-tight text-text md:text-4xl">
              Talks
            </p>
            <ul class="space-y-1 font-sans text-sm text-text-soft">
              <li>· WordCamp Malaysia </li>
              <li>· WP Malaysia Meetup </li>
              <li>· Local dev community events </li>
              <li>· Internal sharing session </li>
            </ul>
          </div>
        </div>
      </article>

      <!-- F · Mentoring -->
      <article class="md:col-span-4 md:row-span-2" :style="{ '--stagger-delay': '400ms' }">
        <div class="group relative h-full rounded-[1.5rem] border border-hairline bg-surface p-7 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong">
          <div class="flex h-full flex-col gap-3">
            <span class="font-mono text-[10px] font-medium uppercase tracking-[0.2em] text-text-mute">
              F · Mentoring
            </span>
            <p class="font-sans text-7xl font-medium leading-none tracking-[-0.03em] text-text">
              1,200 +
            </p>
            <p class="font-sans text-sm text-text-soft">
              Developers mentored in WordPress &amp; web engineering since 2015 (online, in-person &amp; training).
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>
