<script setup lang="ts">
import { ref } from 'vue'
import apiService from '../services/ApiService'

const emit = defineEmits(['fetchMovie', 'search'])

const query = ref('')
const page = ref('1')

async function fetchMovie() {
  try {
    const result = await apiService.searchMovies(query.value, page.value)
    if (result.Response === 'True') {
      emit('search', result)
    } else {
      console.error('No movies found')
    }
  } catch (error) {
    console.error('Error fetching movie:', error)
  }
}
</script>

<template>
  <div class="search-bar">
    <input type="text" v-model="query" placeholder="Search..." />
    <button @click="fetchMovie">Click me!</button>
  </div>
</template>
