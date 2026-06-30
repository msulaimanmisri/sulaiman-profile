<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'

const navLinks = [
  { name: 'about.index', label: 'About.' },
  { name: 'stack.index', label: 'Stack.' },
  { name: 'project.index', label: 'Project.' },
  { name: 'personal-project.index', label: 'Personal Project.' },
]
</script>

<template>
  <Disclosure as="nav" class="bg-slate-900 text-slate-100 shadow-md">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <router-link
          :to="{ name: 'home' }"
          class="font-main text-2xl font-extrabold tracking-tight text-amber-400 hover:text-amber-300"
        >
          SulaimanMisri.
        </router-link>

        <!-- Desktop nav -->
        <ul class="hidden items-center gap-8 md:flex">
          <li v-for="link in navLinks" :key="link.name" class="font-main text-lg">
            <router-link
              :to="{ name: link.name }"
              class="text-slate-200 transition hover:text-amber-400"
              active-class="text-amber-400"
            >
              {{ link.label }}
            </router-link>
          </li>
        </ul>

        <a
          href="https://github.com/msulaimanmisri"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden rounded-md bg-amber-400 px-4 py-2 font-main text-sm font-bold text-slate-900 shadow-sm transition hover:bg-amber-300 md:inline-flex"
        >
          Follow him at Github
        </a>

        <!-- Mobile menu button -->
        <DisclosureButton
          class="inline-flex items-center justify-center rounded-md p-2 text-slate-200 hover:bg-slate-800 hover:text-amber-400 md:hidden"
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.75"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </DisclosureButton>
      </div>
    </div>

    <!-- Mobile panel -->
    <DisclosurePanel class="border-t border-slate-800 md:hidden">
      <ul class="space-y-1 px-4 pb-4 pt-3">
        <li v-for="link in navLinks" :key="link.name">
          <DisclosureButton
            as="router-link"
            :to="{ name: link.name }"
            class="block rounded-md px-3 py-2 font-main text-lg text-slate-200 hover:bg-slate-800 hover:text-amber-400"
            active-class="text-amber-400"
          >
            {{ link.label }}
          </DisclosureButton>
        </li>
        <li class="pt-2">
          <a
            href="https://github.com/msulaimanmisri"
            target="_blank"
            rel="noopener noreferrer"
            class="block rounded-md bg-amber-400 px-3 py-2 text-center font-main text-sm font-bold text-slate-900 hover:bg-amber-300"
          >
            Follow him at Github
          </a>
        </li>
      </ul>
    </DisclosurePanel>
  </Disclosure>

  <!-- Freelance banner -->
  <div class="border-b border-emerald-200 bg-emerald-50 py-3">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <p class="text-sm text-slate-700">
        Available for Freelance services. My expertise is building Web and Software through Agile Development. Let's Collab!
      </p>
    </div>
  </div>

  <main>
    <router-view></router-view>
  </main>

  <!-- Footer -->
  <footer class="bg-slate-50 py-12">
    <p class="text-center font-main text-base font-bold text-slate-500">
      Crafted Carefully in Kuala Lumpur ❤
    </p>
  </footer>
</template>
