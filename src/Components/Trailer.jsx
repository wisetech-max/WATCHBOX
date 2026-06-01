import { useEffect, useState } from "react";
import { getMovieTrailer } from "../Services/Tmdb";

function Trailer({ movieId }) {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchTrailer = async () => {
      const trailerVideo = await getMovieTrailer(movieId);
      setTrailer(trailerVideo);
    };

    fetchTrailer();
  }, [movieId]);

  if (!trailer) {
    return <p className="text-white">Loading trailer...</p>;
  }

  return (
    <iframe
      className="w-full aspect-video rounded-xl"
      src={`https://www.youtube.com/embed/${trailer.key}`}
      title={trailer.name}
      allowFullScreen
    />
  );
}

export default Trailer;
