import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieListComponent = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get('http://localhost:4000/GetMovie');

        if (response.status === 200 && response.data.status === 'success') {
          setMovies(response.data.movies);
        } else {
          console.error('请求失败');
        }
      } catch (error) {
        console.error('发生错误:', error.message);
      }
    };

    getMovies();
  }, []);

  return (
    <div>
      <h1>电影列表</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.Movie_ID}>
            Movie_ID: {movie.Movie_ID}, Name: {movie.Name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieListComponent;
