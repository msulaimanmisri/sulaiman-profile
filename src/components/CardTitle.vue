<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <h4 class="text-muted">
    {{ title }}
  </h4>
</template>
