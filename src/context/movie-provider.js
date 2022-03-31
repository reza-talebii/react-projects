import React, { useEffect, useState } from "react";
import MovieContext from "./movie-context";
import { getMovie } from "./asyncRequest";

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState(
    JSON.parse(localStorage.getItem("watched")) || []
  );
  const [watchList, setWatchList] = useState(
    JSON.parse(localStorage.getItem("watchList")) || []
  );

  const searchMovie = async (searchTerm) => {
    const resultSearch = await getMovie(searchTerm);
    setMovies(resultSearch);
  };

  const addToWatched = (movie) => {
    setWatched([...watched, movie]);
  };

  const addToWatchList = (movie) => {
    setWatchList([...watchList, movie]);
  };

  const removeWatchMovie = (id, type) => {
    if (type === "watched") {
      setWatched(watched.filter((movie) => movie.id !== id));
    } else {
      setWatchList(watchList.filter((movie) => movie.id !== id));
    }
  };

  const moveMovie = (movie, type) => {
    if (type === "Move-to-watched") {
      setWatchList(watchList.filter((m) => m.id !== movie.id));
      addToWatched(movie);
    } else {
      setWatched(watched.filter((m) => m.id !== movie.id));
      addToWatchList(movie);
    }
  };

  //SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  useEffect(() => {
    localStorage.setItem("watchList", JSON.stringify(watchList));
  }, [watchList]);

  return (
    <MovieContext.Provider
      value={{
        watched,
        watchList,
        movies,
        searchMovie,
        addToWatched,
        addToWatchList,
        removeWatchMovie,
        moveMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
