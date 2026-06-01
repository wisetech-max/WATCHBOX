import { useEffect, useState } from "react";
import { tmdbAPI, imageURL } from "../Services/Tmdb";
import { Link } from "react-router-dom";
import MovieCard from "../Components/MovieCard";

function MovieRow() {
  const [trending, setTrending] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const trendingMovies = await tmdbAPI.trending();
        const popularMovies = await tmdbAPI.popular();
        const nowPlayingMovies = await tmdbAPI.nowPlaying();

        setTrending(trendingMovies || []);
        setPopular(popularMovies || []);
        setNowPlaying(nowPlayingMovies || []);
      } catch (error) {
        console.log("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, []);

  // console.log("API KEY:", import.meta.env.VITE_TMDB_API_KEY);

  const renderMovies = (movies) => {
    return movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);
  };

  const renderMoviesWithLinks = (movies) => {};

  return (
    <div className="space-y-10 px-4 py-6">
      {/* Trending */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-white">Trending Movies</h1>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {renderMovies(trending)}
        </div>
      </section>

      {/* Popular */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-white">Popular Movies</h1>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {renderMovies(popular)}
        </div>
      </section>

      {/* Now Playing */}
      <section>
        <h1 className="text-2xl font-bold mb-4 text-white">Now Playing</h1>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {renderMovies(nowPlaying)}
        </div>
      </section>
    </div>
  );
}

export default MovieRow;
