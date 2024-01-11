import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SeatInfoComponent = () => {
  const [seatInfo, setSeatInfo] = useState(null);

  useEffect(() => {
    const getSeatInfo = async () => {
      try {
        const response = await axios.get('http://localhost:4000/RemaingSeats');

        if (response.status === 200) {
          setSeatInfo(response.data);
        } else {
          console.error('请求失败');
        }
      } catch (error) {
        console.error('发生错误:', error.message);
      }
    };

    getSeatInfo();
  }, []);

  return (
    <div>
      <h1>座位信息</h1>
      {seatInfo && seatInfo.status === 'success' && (
        <div>
          <h2>Movies:</h2>
          {seatInfo.movies && seatInfo.movies.length > 0 ? (
            seatInfo.movies.map((movie) => (
              <div key={movie.Movie_ID}>
                <h3>{movie.Name}</h3>
                <p>Type: {movie.Type}</p>
                <p>PlayTime: {movie.PlayTime}</p>
                <p>Director: {movie.Director}</p>
                <p>Actors: {movie.Actors}</p>
                <p>Rate: {movie.Rate}</p>
                <p>Duration: {movie.Duration} minutes</p>
                <p>Remaining Seats: {movie.RemainingSeats}</p>
                <img src={movie.image} alt={movie.Name} style={{ maxWidth: '200px' }} />
                <p>{movie.information}</p>
              </div>
            ))
          ) : (
            <p>No movies available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SeatInfoComponent;
