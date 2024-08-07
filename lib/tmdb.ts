import axios from 'axios';
import { Movie } from '../types/movie';

const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export async function getPopularMovies() {
  try {
    const response = await axios.get(`${BASE_URL}/movie/popular`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
   
    return response.data.results;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    return [];
  }
}

export async function getMovieDetails(movieId: string): Promise<Movie | null> {
  try {
    const response = await axios.get<Movie>(`${BASE_URL}/movie/${movieId}`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    return null;
  }
}

export async function getSimilarMovies(movieId: string): Promise<Movie[]> {
  try {
    const response = await axios.get<{ results: Movie[] }>(`${BASE_URL}/movie/${movieId}/similar`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        page: 1,
      },
    });
    console.log('response.data.results', response.data.results);
    return response.data.results;
  } catch (error) {
    console.error('Error fetching similar movies:', error);
    return [];
  }
}


export async function searchMovies(query: string, page: number = 1): Promise<Movie[]> {
  try {
    const response = await axios.get<{ results: Movie[] }>(`${BASE_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        language: 'en-US',
        query: query,
        page: page,
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching movies:', error);
    return [];
  }
}