<script setup>
defineProps({
  imageSource: String,
  altName: String,
});
</script>

<template>
  <img
    :src="imageSource"
    :alt="altName"
    loading="lazy"
    class="block h-[50vh] w-full rounded-2xl object-cover shadow-md grayscale"
    style="transform: scale(1) translateZ(0); transform-origin: 17.43% 39%;"
  />
</template>
