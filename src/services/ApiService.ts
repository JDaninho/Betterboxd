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

export interface MovieDetail {
  Title:      string;
  Year:       string;
  Rated:      string;
  Released:   string;
  Runtime:    string;
  Genre:      string;
  Director:   string;
  Writer:     string;
  Actors:     string;
  Plot:       string;
  Language:   string;
  Country:    string;
  Awards:     string;
  Poster:     string;
  Ratings:    Rating[];
  Metascore:  string;
  imdbRating: string;
  imdbVotes:  string;
  imdbID:     string;
  Type:       string;
  DVD:        string;
  BoxOffice:  string;
  Production: string;
  Website:    string;
  Response:   string;
}

export interface Rating {
  Source: string;
  Value:  string;
}

export interface SearchResponse {
  Search: Movie[]
  totalResults: string
  Response: string
}

const apiService = {
  async searchMovies(title: string, page: string): Promise<SearchResponse> {
    const response = await axios.get(baseUrl, {
      params: {
        s: title,
        page: page,
        apikey: apiKey
      }
    })
    return response.data
  },

  async getMovie(id: string): Promise<MovieDetail> {
    const response = await axios.get(baseUrl, {
      params: {
        i: id,
        apiKey: apiKey
      }
    })
    return response.data
  }
}

export default apiService
