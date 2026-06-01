import { useEffect, useState } from "react";
import Trailer from "../Components/Trailer";
import { tmdbAPI, imageURL } from "../Services/Tmdb";

function HeroBanner() {
  const [movie, setMovie] = useState(null);
  const [showTrailer, setShowTrailer] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovie() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=c897eac9f5149eb81fc8ff5a090878b2`,
        );

        const data = await response.json();

        // Get random movie from trending results
        if (!data.results) {
          console.log("TMDB fetch failed:", data);
          return;
        }

        const randomMovie =
          data.results[Math.floor(Math.random() * data.results.length)];

        setMovie(randomMovie);
      } catch (error) {
        console.log(error);
      }
    }

    fetchTrendingMovie();
  }, []);

  // Loading state
  if (!movie) {
    return (
      <div className="min-h-screen bg-[#1d232a] flex items-center justify-center text-white text-3xl">
        Loading Banner...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1d232a] text-white px-6 py-6">
      {/* Main Hero Container */}
      <div className="w-full max-w-7xl mx-auto mt-10 h-[80vh] bg-[#222831] rounded-3xl overflow-hidden shadow-2xl border border-[#2f3845] grid grid-cols-1 lg:grid-cols-2">
        {/* LEFT SIDE - MOVIE IMAGE */}
        <div className="relative h-full">
          <img
            src={
              movie.backdrop_path
                ? `${imageURL}${movie.backdrop_path}`
                : "https://via.placeholder.com/1200x700?text=No+Image"
            }
            alt={movie.title}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Badge */}
          <div className="absolute top-6 left-6 bg-red-600 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
            🔥 Trending Now
          </div>
        </div>

        {/* RIGHT SIDE - DETAILS */}
        <div className="flex flex-col justify-center p-8 lg:p-14 bg-[#222831]">
          {/* Title */}
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {movie.title}
          </h1>

          {/* Ratings */}
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-2xl">⭐</span>

              <span className="text-lg font-semibold">
                {movie.vote_average?.toFixed(1)}/10
              </span>
            </div>

            <div className="text-gray-400">
              {movie.release_date?.split("-")[0]}
            </div>
          </div>

          {/* Description */}
          <p className="text-gray-300 text-lg leading-relaxed mb-8 line-clamp-5">
            {movie.overview}
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              onClick={() => setShowTrailer(true)}
              className="bg-indigo-500 hover:bg-indigo-400 transition px-8 py-4 rounded-full font-semibold text-lg cursor-pointer"
            >
              ▶ Watch Trailer
            </button>

            <button className="border border-gray-600 hover:border-white transition px-8 py-4 rounded-full font-semibold text-lg cursor-pointer">
              + My List
            </button>
          </div>
        </div>
      </div>
      {showTrailer && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative w-full max-w-6xl">
            <button
              onClick={() => setShowTrailer(false)}
              className="absolute -top-12 right-0 text-white text-3xl hover:text-red-500"
            >
              ✕
            </button>

            <Trailer movieId={movie.id} />
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroBanner;
