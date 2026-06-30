<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Dialog, DialogPanel } from '@headlessui/vue'
import NavLink from './components/NavLink.vue'
import FilmGrain from './components/FilmGrain.vue'

const route = useRoute()
const router = useRouter()
const isOpen = ref(false)

const navLinks = [
  { name: 'about.index', label: 'About' },
  { name: 'stack.index', label: 'Stack' },
  { name: 'project.index', label: 'Work' },
  { name: 'personal-project.index', label: 'Project' },
  { href: 'https://dev.to/msulaimanmisri', label: 'Writing', external: true },
]

// Close mobile menu on route change
watch(
  () => route.fullPath,
  () => {
    isOpen.value = false
  },
)

const prefetch = (name) => {
  try {
    router.resolve({ name })
  } catch (_) {
    /* noop */
  }
}

const close = () => {
  isOpen.value = false
}

// ── Theme ──────────────────────────────────────────────────────────
const userTheme = ref(localStorage.getItem('sulaiman:home-theme') || 'dark')

function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light')
  } else {
    document.documentElement.removeAttribute('data-theme')
  }
}

function toggleTheme() {
  const next = userTheme.value === 'dark' ? 'light' : 'dark'
  userTheme.value = next
  localStorage.setItem('sulaiman:home-theme', next)
  applyTheme(next)
}

// Apply saved theme on load
applyTheme(userTheme.value)
</script>

<template>
  <!-- Floating "Fluid Island" nav -->
  <header
    class="pointer-events-none fixed inset-x-0 top-6 z-40 flex justify-center px-4"
  >
    <nav
      class="pointer-events-auto flex w-max max-w-[calc(100vw-2rem)] items-center gap-4 rounded-full border border-hairline bg-bg/70 px-3 py-2 backdrop-blur-xl md:gap-6 md:px-5 md:py-2.5"
      :class="{ 'border-hairline-strong': isOpen }"
    >
      <!-- Wordmark -->
      <router-link
        :to="{ name: 'home' }"
        class="font-sans text-base font-semibold tracking-tight text-text transition-opacity duration-500 hover:opacity-70 md:text-lg"
      >
        Sulaiman Misri
      </router-link>

      <!-- Desktop nav links -->
      <ul class="hidden items-center gap-7 md:flex">
        <li
          v-for="link in navLinks"
          :key="link.href || link.name"
          @mouseenter="link.name && prefetch(link.name)"
        >
          <a
            v-if="link.external"
            :href="link.href"
            target="_blank"
            rel="noopener noreferrer"
            class="nav-underline font-sans text-sm font-medium tracking-tight text-text-soft transition-colors duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:text-text"
          >
            {{ link.label }}
          </a>
          <NavLink v-else :to="{ name: link.name }" :label="link.label" />
        </li>
      </ul>

      <!-- Desktop CTAs -->
      <div class="hidden items-center gap-2 md:flex">
        <a
          href="https://www.linkedin.com/in/msulaimanmisri/" target="_blank"
          class="group inline-flex items-center gap-2 rounded-full border border-hairline-strong bg-transparent px-4 py-2 font-sans text-xs font-medium text-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-text active:scale-[0.98]"
        >
          Get in touch
          <span
            class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-surface transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
          >
            <svg viewBox="0 0 16 16" fill="none" class="h-2.5 w-2.5" aria-hidden="true">
              <path d="M3 13L13 3M13 3H5M13 3V11" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </span>
        </a>

        <!-- Theme toggle -->
        <button
          type="button"
          @click="toggleTheme"
          class="inline-flex h-8 w-8 items-center justify-center rounded-full border border-hairline bg-transparent transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-hairline-strong active:scale-[0.98] hover:cursor-pointer"
          :aria-label="userTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'"
        >
          <svg v-if="userTheme === 'dark'" viewBox="0 0 24 24" fill="none" class="h-4 w-4 text-text" aria-hidden="true">
            <circle cx="12" cy="12" r="5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <svg v-else viewBox="0 0 24 24" fill="none" class="h-4 w-4 text-text" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <!-- Mobile hamburger that morphs to X -->
      <button
        type="button"
        class="relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-transparent transition-colors duration-300 hover:border-hairline-strong md:hidden"
        :aria-expanded="isOpen"
        aria-label="Toggle navigation menu"
        @click="isOpen = !isOpen"
      >
        <span
          class="absolute h-px w-4 bg-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          :class="isOpen ? 'translate-y-0 rotate-45' : '-translate-y-0.75'"
        ></span>
        
        <span
          class="absolute h-px w-4 bg-text transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
          :class="isOpen ? 'translate-y-0 -rotate-45' : 'translate-y-0.75'"
        ></span>
      </button>
    </nav>
  </header>

  <!-- Fullscreen mobile modal -->
  <Dialog :open="isOpen" @close="close" class="relative z-30 md:hidden">
    <div
      class="fixed inset-0 bg-bg/85 backdrop-blur-3xl"
      aria-hidden="true"
    ></div>

    <div class="fixed inset-0 flex flex-col items-center justify-center px-6">
      <DialogPanel class="flex w-full max-w-md flex-col items-center gap-2">
        <ul class="flex w-full flex-col items-center gap-2">
          <li
            v-for="(link, i) in navLinks"
            :key="link.href || link.name"
            class="w-full text-center"
            :style="{
              transitionDelay: isOpen ? `${100 + i * 80}ms` : '0ms',
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
              transition: 'opacity 700ms cubic-bezier(0.32,0.72,0,1), transform 700ms cubic-bezier(0.32,0.72,0,1)',
            }"
          >
            <a
              v-if="link.external"
              :href="link.href"
              target="_blank"
              rel="noopener noreferrer"
              class="block py-3 font-sans text-4xl font-medium tracking-tight text-text transition-opacity duration-300 hover:opacity-60"
              @click="close"
            >
              {{ link.label }}
            </a>
            <router-link
              v-else
              :to="{ name: link.name }"
              class="block py-3 font-sans text-4xl font-medium tracking-tight text-text transition-opacity duration-300 hover:opacity-60"
              active-class="!opacity-100"
              @click="close"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <div
          class="mt-8 flex w-full flex-col gap-3"
          :style="{
            transitionDelay: isOpen ? `${100 + navLinks.length * 80}ms` : '0ms',
            opacity: isOpen ? 1 : 0,
            transform: isOpen ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 700ms cubic-bezier(0.32,0.72,0,1), transform 700ms cubic-bezier(0.32,0.72,0,1)',
          }"
        >
          <a
            href="https://www.linkedin.com/in/msulaimanmisri/" target="_blank"
            class="block rounded-full border border-hairline-strong px-6 py-3 text-center font-sans text-sm font-medium text-text"
            @click="close"
          >
            Get in touch
          </a>

          <button
            type="button"
            @click="toggleTheme"
            class="block rounded-full border border-hairline-strong px-6 py-3 text-center font-sans text-sm font-medium text-text"
          >
            <span class="inline-flex items-center justify-center gap-2">
              <svg v-if="userTheme === 'dark'" viewBox="0 0 24 24" fill="none" class="h-4 w-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
              </svg>
              <svg v-else viewBox="0 0 24 24" fill="none" class="h-4 w-4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
              {{ userTheme === 'dark' ? 'Light mode' : 'Dark mode' }}
            </span>
          </button>
        </div>
      </DialogPanel>
    </div>
  </Dialog>

  <main class="relative">
    <router-view v-slot="{ Component, route: r }">
      <component :is="Component" :key="r.fullPath" />
    </router-view>
  </main>

  <!-- Fixed film grain -->
  <FilmGrain />
</template>
