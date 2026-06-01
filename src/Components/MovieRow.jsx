import { useEffect, useState } from "react";
import { tmdbAPI } from "../Services/Tmdb";
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

  const renderMovies = (movies) =>
    movies.map((movie) => <MovieCard key={movie.id} movie={movie} />);

  return (
    <div className="space-y-10 px-3 sm:px-4 md:px-8 lg:px-12 py-6">
      {/* Trending */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Trending Movies
        </h1>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          {renderMovies(trending)}
        </div>
      </section>

      {/* Popular */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Popular Movies
        </h1>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          {renderMovies(popular)}
        </div>
      </section>

      {/* Now Playing */}
      <section>
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-white">
          Now Playing
        </h1>

        <div className="flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto pb-4 scrollbar-hide scroll-smooth">
          {renderMovies(nowPlaying)}
        </div>
      </section>
    </div>
  );
}

export default MovieRow;
