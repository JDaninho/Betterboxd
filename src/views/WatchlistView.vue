<script setup lang="ts">
import { useWatchlistStore } from '../stores/WatchlistStore'
import ResultCard from '../components/ResultCard.vue'

const watchlistStore = useWatchlistStore()
console.log(watchlistStore.state.movies)
</script>

<template>
  <div>
    <h2>Your Watchlist</h2>
    <ul>
      <li v-for="movie in watchlistStore.state.movies" :key="movie.imdbID">
        <ResultCard :movie="movie" />
      </li>
    </ul>
  </div>
</template>
