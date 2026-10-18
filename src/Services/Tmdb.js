const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
console.log("API KEY:", API_KEY);

const BASE_URL = "https://api.themoviedb.org/3";
import axios from "axios";

export const tmdbAPI = {
  trending: async () => {
    const res = await axios.get(`${BASE_URL}/trending/movie/week`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  },
  popular: async () => {
    const res = await axios.get(`${BASE_URL}/movie/popular`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
  },
  nowPlaying: async () => {
    const res = await axios.get(`${BASE_URL}/movie/now_playing`, {
      params: { api_key: API_KEY },
    });
    return res.data.results;
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
