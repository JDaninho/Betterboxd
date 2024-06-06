<script setup lang="ts">
import { type Movie } from '../services/ApiService'

defineProps<{
    movie: Movie
}>()
</script>

<template>
  <div class="card">
    <p>{{ movie.Title }}</p>
    <p>{{ movie.Type }}</p>
    <p>{{ movie.Year }}</p>
    <img :src="movie.Poster" v-if="movie.Poster !== 'N/A'" />
  </div>
</template>
