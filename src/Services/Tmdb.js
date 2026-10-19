import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
});

const fetchMovies = async (endpoint) => {
  try {
    if (!API_KEY) {
      throw new Error("TMDb API key is missing. Check your .env file.");
    }

    const response = await api.get(endpoint, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results ?? [];
  } catch (error) {
    console.error(
      `Error fetching ${endpoint}:`,
      error.response?.status,
      error.response?.data ?? error.message,
    );

    throw error;
  }
};

export const tmdbAPI = {
  trending: () => fetchMovies("/trending/movie/week"),

  popular: () => fetchMovies("/movie/popular"),

  nowPlaying: () => fetchMovies("/movie/now_playing"),
};

export const getMovieTrailer = async (movieId) => {
  try {
    const response = await api.get(`/movie/${movieId}/videos`, {
      params: {
        api_key: API_KEY,
      },
    });

    return response.data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
  } catch (error) {
    console.error("Error fetching movie trailer:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await api.get("/search/movie", {
      params: {
        api_key: API_KEY,
        query,
      },
    });

    return response.data.results ?? [];
  } catch (error) {
    console.error("Error searching movies:", error);
    throw error;
  }
};

export const imageURL = "https://image.tmdb.org/t/p/w500";
