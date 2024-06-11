<script setup lang="ts">
import { ref } from 'vue'
import apiService from '../services/ApiService'
import { type MovieDetail, type Movie } from '../services/ApiService'
import { useRoute } from 'vue-router';
import { onMounted } from 'vue'
import { useWatchlistStore } from '../stores/WatchlistStore';

const route = useRoute()
const movie = ref<MovieDetail>()
const movieId = route.params.movieId.toString();

const { addMovie } = useWatchlistStore();

async function fetchMovie() {
  try {
    const result = await apiService.getMovie(movieId)
    if (result.Response === 'True') {
      movie.value = result 
    } else {
      console.error('No movies found')
    }
  } catch (error) {
    console.error('Error fetching movie:', error)
  }
}

function addToWatchlist() {
  if (movie.value) {
    const movieToAdd: Movie = {
      Title: movie.value.Title,
      Year: movie.value.Year,
      imdbID: movie.value.imdbID,
      Type: movie.value.Type,
      Poster: movie.value.Poster,
    };
    addMovie(movieToAdd);
  }
};

onMounted(() => {
  fetchMovie()
})
</script>

<template>
  <main>
    <p>{{ movie?.Title }}</p>
    <p>This movie is about:</p>
    <p>{{ movie?.Plot }}</p>
    <button @click="addToWatchlist">Add to Watchlist</button>
  </main>
</template>