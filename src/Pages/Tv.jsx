import { useEffect, useState } from "react";
import NavBar from "../Components/NavBar";
import MovieRow from "../Components/MovieRow";
import MovieCard from "../Components/MovieCard";
import { tmdbAPI } from "../Services/Tmdb";

function Tv() {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    tmdbAPI.popularTV().then((data) => setTvShows(data));
  }, []);

  return (
    <>
      <NavBar />

      <h1 className="text-3xl font-bold text-white p-6">Popular TV Shows</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 p-6">
        {tvShows.map((tvShow) => (
          <MovieCard key={tvShow.id} movie={tvShow} />
        ))}
      </div>
    </>
  );
}

export default Tv;
