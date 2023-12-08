import React, { useEffect, useState } from 'react';
import MovieListCard from '../components/movie-list-card';
import '../styles/movies.css'

function Movies() {

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ZDJlYTFjNTVhNjExYThkNmZjODViYzUwY2NjZDRhMSIsInN1YiI6IjY1NmYxYzk5MDg1OWI0MDEzOTUzNDZhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.MYzS5udc1N5CL4pje0z6PgZD-c3vj3ityAhL54CGUEQ'
    }
  };

  const [movies, setMovies] = useState<any[]>([]);

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
    .then(response => response.json())
    .then(response => setMovies(response.results))
    .catch(err => console.error(err));
  })
  
 

  return (
    <div className="movie-list">
        {movies.map((movie) => <MovieListCard id={movie.id} title={movie.title} poster_path={movie.poster_path} vote_average={movie.vote_average}/> ) }
        
    </div>
  );
}

export default Movies;