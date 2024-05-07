<script setup>
const props = defineProps({
  projectTitle: String,
  projectDescription: String,
  projectUrl: String,
});
</script>

<template>
  <div class="card border-0 shadow-sm rounded-3 h-100">
    <div class="card-body">
      <h4 class="text-muted">
        {{ projectTitle }}
      </h4>

      <p class="p-0 text-muted">
        {{ projectDescription }}
      </p>
    </div>

    <div class="card-footer border-top">
      <a :href="projectUrl" target="_blank" class="btn btn-primary btn-stm"
        >Visit Site</a
      >
    </div>
  </div>
</template>
