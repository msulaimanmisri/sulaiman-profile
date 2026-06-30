<script setup>
import { ref, onMounted } from 'vue';
import api from '../../api';

//define state
const posts = ref([]);

//method fetchDataPosts
const fetchDataPosts = async () => {
    await api.get('/api/posts')
        .then(response => {
            posts.value = response.data.data.data
        });
}

onMounted(() => {
    fetchDataPosts();
});
</script>

<template>
  <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="rounded-2xl bg-white p-12 text-center shadow-sm ring-1 ring-slate-200 sm:p-16">
      <h1 class="font-main text-3xl font-extrabold tracking-tight text-slate-800 sm:text-4xl">
        Blog post Index
      </h1>
      <p class="mt-3 text-sm text-slate-500 font-body">
        {{ posts.length }} post(s) loaded
      </p>
    </div>
  </div>
</template>
