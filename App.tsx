import MovieCard from "./components/MovieCard";
import MovieTrailer from "./components/VideoTrailer";
import ThemeToggle from "./components/ThemeComponent";
import GenreFilter from "./components/GenreFilter Component";
import RatingFilter from "./components/RatingFilter Component";
import SortDropdown from "./components/sortDropdown Component";
import SearchBar from "./components/SearchBar Component";
import "./Styles.css";

import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "./redux/movieSlice";
import { RootState } from "./redux/store";
import { AppDispatch } from "./redux/store";



const App: React.FC = ()=> {
  const dispatch = useDispatch<AppDispatch>();
  const {movies, status} = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);
  return(
  <div className="container">
    <h1> Movie Explorer</h1>
    <ThemeToggle/>

    <div className="filters">
      <SearchBar />
      <SortDropdown />
      <RatingFilter />
      <GenreFilter />
    </div>

    <MovieTrailer/>

    {status == "loading" ? (
      <p>Loading Movies....</p>
    ) : (

    <div className="movie-grid">
      {movies.map((movie: {
        id: number;
        title: string;
        image: string;
        description: string;
      }) => (
      <MovieCard
       key = {movie.id}
       title= {movie.title}
       image= {movie.image}
       desc= {movie.description}
       />
      ))}
      </div>
    )}
  </div> 
 );
};

export default App;