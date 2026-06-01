import { useState } from "react";
import NavBar from "../Components/NavBar";
import MovieCard from "../Components/MovieCard";
import { getWatchlist, removeFromWatchlist } from "../Services/watchlist";

function Watchlist() {
  const [movies, setMovies] = useState(() => getWatchlist());

  const handleRemove = (id) => {
    removeFromWatchlist(id);
    setMovies(getWatchlist());
  };

  return (
    <>
      <NavBar />
      <h1 className="text-3xl font-bold text-white p-6">My Watchlist</h1>

      {movies.length === 0 ? (
        <p className="text-gray-400 px-6 text-center mt-10">
          No movies added yet 🎬
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
          {movies.map((movie) => (
            <div key={movie.id} className="relative">
              <MovieCard movie={movie} disableLink />
              <button
                onClick={() => handleRemove(movie.id)}
                className="absolute top-2 right-2 bg-red-600 px-3 py-1 text-sm rounded-lg hover:bg-red-700 transition"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default Watchlist; // ← this line must be here
