import React from "react";
import { useParams } from "react-router-dom";

function MovieShow({ movies }) {
  const params = useParams();
  console.log(params);

  return (
    <div>
      {/* we use the "movieId" stored in the "params" to render details about the chosen movie. */}
      <h3>{movies[params.movieId].title}</h3>
    </div>
  );
}

export default MovieShow;