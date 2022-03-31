import React, { useContext } from "react";

import MovieContext from "../context/movie-context";
import MovieCard from "./MovieCard";

const WatchList = () => {
  const { watchList: watchListArr } = useContext(MovieContext);

  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchListArr.length}{" "}
            {watchListArr.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watchListArr.length > 0 ? (
          <div className="movie-grid">
            {watchListArr.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

export default WatchList;
