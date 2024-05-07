<script setup>
const props = defineProps({
  title: String,
});
</script>

<template>
  <li class="my-3">{{ title }}</li>
</template>
