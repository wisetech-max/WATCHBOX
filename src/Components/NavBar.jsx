import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { searchMovies } from "../Services/Tmdb";
import { useMovies } from "../Hooks/MovieContext";

function NavBar() {
  const { setMovies, setLoading, loading } = useMovies();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      setLoading(true);

      const results = await searchMovies(query);

      setMovies(results);

      // Navigate after saving results
      navigate("/search");
    } catch (err) {
      console.error(err);
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#1d232a] shadow-md w-full rounded-xl border border-[#2a323c]">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-2xl font-bold text-white">WatchBox</h1>
        </Link>

        {/* Nav Links */}
        <div className="hidden lg:flex gap-10 text-gray-300 font-medium">
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
          <Link to="/tv">TV Shows</Link>
          <Link to="/anime">Anime</Link>
          <Link to="/watchlist">Watchlist</Link>
        </div>

        {/* Search */}
        <div className="flex items-center gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search movies..."
            className="bg-[#2a323c] text-white px-4 py-2 rounded-full w-64"
          />

          <button
            onClick={handleSearch}
            disabled={loading}
            className="bg-indigo-500 text-white px-5 py-2 rounded-full disabled:opacity-50"
          >
            {loading ? "Searching..." : "Search"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
