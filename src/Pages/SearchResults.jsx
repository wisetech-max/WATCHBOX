import { useMovies } from "../Hooks/MovieContext";

function SearchResults() {
  const { movies, loading } = useMovies();

  return (
    <>
      {loading && <p className="text-white p-4">Loading Movies...</p>}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <div key={movie.id} className="text-white">
            <img
              className="rounded-lg"
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w300${movie.poster_path}`
                  : "https://via.placeholder.com/300x450?text=No+Image"
              }
              alt={movie.title}
            />
            <h3 className="mt-2">{movie.title}</h3>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchResults;
