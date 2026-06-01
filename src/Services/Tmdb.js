const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
import axios from "axios";

export const tmdbAPI = {
  trending: async () => {
    const response = await fetch(
      `${BASE_URL}/trending/movie/week?api_key=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  },
  popular: async () => {
    const response = await fetch(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  },
  nowPlaying: async () => {
    const response = await fetch(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`,
    );
    const data = await response.json();
    return data.results;
  },
  movieDetails: async (id) => {
    const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
    const data = await response.json();
    return data;
  },
  popularTV: async () => {
    const res = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
    const data = await res.json();
    return data.results;
  },
  anime: async () => {
    const res = await fetch(
      `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16&with_original_language=ja&sort_by=popularity.desc`,
    );
    const data = await res.json();
    return data.results;
  },
};

export const getMovieTrailer = async (movieId) => {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`,
  );

  const data = await response.json();

  return data.results.find(
    (video) => video.type === "Trailer" && video.site === "YouTube",
  );
};

export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
  );

  const data = await response.json();
  return data.results;
};
export const imageURL = "https://image.tmdb.org/t/p/w500";
