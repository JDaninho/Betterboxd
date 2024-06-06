<script setup lang="ts">
import { ref } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import ResultCard from '../components/ResultCard.vue'
import { type Movie, type SearchResponse } from '../services/ApiService'

const movies = ref<Movie[]>([])
const amount = ref('')

function handlesearch(value: SearchResponse) {
  movies.value = value.Search
  amount.value = value.totalResults
}
</script>

<template>
  <main>
    <SearchBar @search="handlesearch" />
    <p>You found {{ amount }} results</p>
    <ResultCard v-for="movie in movies" :key="movie.imdbID" :movie="movie" />
  </main>
</template>
