import React, { useState, useEffect } from 'react';

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/search/movie?api_key=a218e472ab5ff96002b4f6c69ced75f3&query=godfather")
      .then(response => response.json())
      .then(data => setMovies(data.results));
  }, []);

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie.id} className="movie-card">
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <p>Release Date: {movie.release_date}</p>
          <p>Rating: {movie.vote_average}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
