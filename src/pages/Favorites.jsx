import React from 'react'
import "../css/Favorites.css"
import { useMovieContext } from '../contexts/MovieContexts'
import MovieCard from '../components/MovieCard'

const Favorites = () => {

  const {favorites} = useMovieContext()
  if(favorites) { return ( 
    <div className='favorites-container'>
      <h2>Favorites Movies</h2>
    <div className="movies-grid">
    {favorites.map((movie) => (
      movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
    ))} </div>
    </div>

  ) }

  return (
    <div className='favorites-empty'>
        <h2>No Favorites Movies Yet</h2>
        <p>Start adding your favorite movies to see them here</p>
    </div>
  )
}

export default Favorites