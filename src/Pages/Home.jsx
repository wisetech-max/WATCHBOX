import NavBar from "../Components/NavBar";
import HeroBanner from "../Components/HeroBanner";
import { useState } from "react";
import MovieRow from "../Components/MovieRow";
import SearchResults from "./SearchResults";

function Home() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  return (
    <>
      <NavBar setMovies={setMovies} setLoading={setLoading} loading={loading} />
      <HeroBanner />
      <SearchResults movies={movies} loading={loading} />
      <MovieRow />
    </>
  );
}

export default Home;
