import { reactive } from 'vue'
import { type Movie } from '../services/ApiService'

interface WatchlistState {
  movies: Movie[]
}

const state = reactive<WatchlistState>({
  movies: []
})

export const useWatchlistStore = () => {
  const addMovie = (movie: Movie) => {
    if (!state.movies.find((m) => m.imdbID === movie.imdbID)) {
      console.log('pushing movie')
      state.movies.push(movie)
    }
  }

  const removeMovie = (imdbID: string) => {
    state.movies = state.movies.filter((movie) => movie.imdbID !== imdbID)
  }

  return {
    state,
    addMovie,
    removeMovie
  }
}
