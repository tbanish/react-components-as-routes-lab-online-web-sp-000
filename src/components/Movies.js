import React from 'react';
import { movies } from '../data';

const Movies = () => {
  console.log(movies)
  return (
    <div>

      <h1>Movies Page</h1>

      {movies.map(movie =>
        <div className="movie">{movie.title}: {movie.time}min
        <ul>
          {movie.genres.map(genre =>
            <li>{genre}</li>
          )}
        </ul>
        </div>
      )}

    </div>
  );
};

export default Movies;
