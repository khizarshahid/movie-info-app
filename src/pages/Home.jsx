import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import { searchMovies, getPopularMovies } from "../services/api";
import "../css/Home.css"

const Home = () => {

    const [searchQuery, setSearchQuery] = useState();
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies)
            }
            catch(error){
                setError("Failed to Load movies 😵")
            }
            finally{
                setLoading(false)
            }
        }
        loadPopularMovies()
    }, [])

  const handleSearch = async (event) => {
    event.preventDefault();

    if(!searchQuery.trim()) return;
    if(loading) return;
    setLoading(true);
    try {
      const searchResult = await searchMovies(searchQuery);
      setMovies(searchResult);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Failed to search movies 😵");
    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="Home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          className="search-input"
          placeholder="Search for movies"
          value = {searchQuery}
          onChange = {(event) => setSearchQuery(event.target.value)}
        />

        <button type="submit" className="search-button"> Search</button>

      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? <div className="loading">Loading...</div> :  <div className="movies-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
        ))}
     </div>}
    </div>
  );
};

export default Home;
