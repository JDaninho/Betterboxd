import axios from 'axios'

const apiKey = import.meta.env.VITE_API_KEY
const baseUrl = import.meta.env.VITE_BASE_URL

export interface Movie {
  Title: string
  Year: string
  imdbID: string
  Type: string
  Poster: string
}

export interface SearchResponse {
  Search: Movie[]
  totalResults: string
  Response: string
}

const apiService = {
  async getMovie(title: string, page: string): Promise<SearchResponse> {
    const response = await axios.get(baseUrl, {
      params: {
        s: title,
        page: page,
        apikey: apiKey
      }
    })
    return response.data
  }
}

export default apiService
