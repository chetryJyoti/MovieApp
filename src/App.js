/* eslint-disable jsx-a11y/alt-text */
import { useEffect, useState } from "react";
import "./App.css";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=f4a58261";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  // fun to fetch the data from the api
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search);
  };
//   const movie1 = {
//     Title: "Italian Spiderman",
//     Year: "2007",
//     imdbID: "tt2705436",
//     Type: "movie",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
//   };
  useEffect(() => {
    searchMovies("batman");
  }, []);
  return (
    <div className="app">
      <h1>MovieLand</h1>
      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        ></input>
        <img src={SearchIcon} alt="searchicon" onClick={() => searchMovies(searchTerm)}></img>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
         {
             movies.map((movie)=>(
                 <MovieCard movie={movie}/>
             ))
         }
        </div>
      ) : (
        <div className="empty">
          <h2>No movie found..</h2>
        </div>
      )}
    </div>
  );
};

export default App;
