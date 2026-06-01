import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import MovieRow from "../Components/MovieRow";
import MovieCard from "../Components/MovieCard";
import { tmdbAPI } from "../Services/Tmdb";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    tmdbAPI.popular().then((data) => setMovies(data));
  }, []);

  return (
    <>
      <NavBar />

      <h1 className="text-3xl font-bold text-white p-6">Popular Movies</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
}

export default Movies;
