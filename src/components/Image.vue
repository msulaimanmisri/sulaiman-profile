<script setup>
const props = defineProps({
    imageSource: String,
    altName: String
});
</script>

<template>
    <img :src="imageSource" class="img-fluid rounded-4 shadow" loading="lazy" :alt="altName" style="
            width: 100%;
            height: 50vh;
            object-fit: cover;
            transform: scale(1) translateZ(0);
            transform-origin: 17.43% 39%;
            filter: grayscale(71%);
          " />
</template>