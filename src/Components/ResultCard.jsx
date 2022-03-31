import React from "react";
import MovieContext from "../context/movie-context";

const ResultCard = ({ movie }) => {
  const { addToWatched, addToWatchList, watched, watchList } =
    React.useContext(MovieContext);

  const isInWatched = watched.find((m) => m.id === movie.id);
  const isInWatchList = watchList.find((m) => m.id === movie.id);

  const addToWatchedHandler = () => addToWatched(movie);

  const addToWatchListHandler = () => addToWatchList(movie);

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.image ? (
          <img src={movie.image} alt={`${movie.title} Poster`} />
        ) : (
          <div className="filler-poster" />
        )}
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <span>{movie.description}</span>
          </h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={isInWatchList || isInWatched}
            onClick={addToWatchListHandler}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={isInWatched}
            onClick={addToWatchedHandler}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
