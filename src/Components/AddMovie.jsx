import React, { useContext } from "react";

import MovieContext from "../context/movie-context";
import ResultCard from "./ResultCard";

const AddMovie = () => {
  const { searchMovie, movies } = useContext(MovieContext);
  const queryInput = React.createRef();

  const searchHandler = (event) => {
    event.preventDefault();
    searchMovie(queryInput.current.value);
    queryInput.current.value = "";
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper" style={{ marginBottom: "1rem" }}>
            <input
              type="text"
              placeholder="search for Movie ..."
              ref={queryInput}
            />

            <button type="submit" onClick={searchHandler} className="btn">
              search
            </button>
          </div>

          {movies.map((movie) => (
            <ResultCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddMovie;
