import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Movies from "../Pages/Movies";
import Tv from "../Pages/Tv";
import Anime from "../Pages/Anime";
import Watchlist from "../Pages/Watchlist";
import MovieDetails from "../Components/MovieDetails";
import Trailer from "../Components/Trailer";
import SearchResults from "../Pages/SearchResults";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movies/:id" element={<MovieDetails />} />
      <Route path="/tv" element={<Tv />} />
      <Route path="/anime" element={<Anime />} />
      <Route path="/watchlist" element={<Watchlist />} />

      <Route path="/search" element={<SearchResults />} />
    </Routes>
  );
}

export default AppRoutes;
