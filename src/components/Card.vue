<script setup>
defineProps({
  projectTitle: String,
  projectDescription: String,
  projectUrl: String,
});
</script>

<template>
  <div class="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:shadow-md">
    <div class="flex flex-1 flex-col p-6">
      <h4 class="text-lg font-semibold text-slate-800 font-body">
        {{ projectTitle }}
      </h4>

      <p class="mt-3 text-sm leading-6 text-slate-600 font-body">
        {{ projectDescription }}
      </p>
    </div>

    <div class="border-t border-slate-200 bg-slate-50 px-6 py-4">
      <a
        :href="projectUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Visit Site
        <svg class="ml-1.5 h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 010-1.06l7.22-7.22H9.75a.75.75 0 010-1.5h4.5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0V6.97l-7.22 7.22a.75.75 0 01-1.06 0z" clip-rule="evenodd" />
        </svg>
      </a>
    </div>
  </div>
</template>
