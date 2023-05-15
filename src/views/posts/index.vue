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
    <div class="container mt-5 mb-5">
        <div class="row">
            <div class="col-md-12">
                <div class="card border-0 py-5 rounded-3 shadow-sm">
                    <div class="card-body text-center text-muted">
                        Blog post Index
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>