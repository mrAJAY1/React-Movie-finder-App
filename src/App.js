import "./App.css";
import SearchIcon from "./search.svg";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
// a8f50a5f

const API_URL = "https://www.omdbapi.com?apikey=a8f50a5f";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm] = useState([])
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value)
          }}
          placeholder="search for movies"
        />
        <img src={SearchIcon} alt="search" onClick={() => {
          searchMovies(searchTerm)
        }} />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movies) => (
            <MovieCard movie={movies} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
