import React from "react";
import { MovieControls } from "./MovieControls";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img src={movie.image} alt={`${movie.title} Poster`} />

      <MovieControls type={type} movie={movie} />
    </div>
  );
};

export default MovieCard;
