import React, { useContext } from "react";
import MovieContext from "../context/movie-context";

export const MovieControls = ({ type, movie }) => {
  const { moveMovie, removeWatchMovie } = useContext(MovieContext);

  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveMovie(movie, "Move-to-watched")}
          >
            <i className="fa-fw far fa-eye"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeWatchMovie(movie.id, "watchList")}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}

      {type === "watched" && (
        <>
          <button
            className="ctrl-btn"
            onClick={() => moveMovie(movie, "Move-to-watchList")}
          >
            <i className="fa-fw far fa-eye-slash"></i>
          </button>

          <button
            className="ctrl-btn"
            onClick={() => removeWatchMovie(movie.id, "watched")}
          >
            <i className="fa-fw fa fa-times"></i>
          </button>
        </>
      )}
    </div>
  );
};
