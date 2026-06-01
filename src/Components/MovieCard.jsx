import { Link } from "react-router-dom";
import { imageURL } from "../Services/Tmdb";

function MovieCard({ movie, disableLink = false }) {
  const cardContent = (
    <div className="w-60 bg-[#1e293b] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300 cursor-pointer">
      <img
        src={
          movie.poster_path
            ? `${imageURL}${movie.poster_path}`
            : "https://via.placeholder.com/300x450?text=No+Image"
        }
        alt={movie.title || "Movie Poster"}
        className="h-96 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="text-white text-lg font-bold">{movie.title}</h2>

        <p className="text-gray-400">
          ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : "N/A"}
        </p>
      </div>
    </div>
  );

  if (disableLink) return cardContent;

  return (
    <Link to={`/movies/${movie.id}`} className="no-underline">
      {cardContent}
    </Link>
  );
}

export default MovieCard;
