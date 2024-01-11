import React, { useState, useEffect } from 'react';

const MovieScreeningTime = () => {
  const [date, setDate] = useState('');
  const [playTime, setPlayTime] = useState('');
  const [cinemaSsnOptions, setCinemaSsnOptions] = useState([]);
  const [selectedCinemaSsn, setSelectedCinemaSsn] = useState('');
  const [movieIdOptions, setMovieIdOptions] = useState([]);
  const [selectedMovieId, setSelectedMovieId] = useState('');

  // Fetch Cinema_ssn and Movie_ID options
  useEffect(() => {
    const fetchOptions = async () => {
      try {
        // Fetch Cinema_ssn options
        const cinemaSsnResponse = await fetch('');
        const cinemaSsnData = await cinemaSsnResponse.json();
        setCinemaSsnOptions(cinemaSsnData);

        // Fetch Movie_ID options
        const movieIdResponse = await fetch('');
        const movieIdData = await movieIdResponse.json();
        setMovieIdOptions(movieIdData);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, []);

  const handleConfirm = async () => {
    const url = 'http://localhost:4000/AddNewMovieSchedule';
    const data = {
      date,
      PlayTime: playTime,
      Cinema_ssn: selectedCinemaSsn,
      Movie_ID: selectedMovieId,
    };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle success, maybe redirect to another page or show a success message
      } else {
        // Handle error, maybe show an error message to the user
        console.error('Adding movie schedule failed');
      }
    } catch (error) {
      console.error('Error during movie schedule addition:', error);
    }
  };

  return (
    <div>
      <h1>放映時間</h1>
      
      <label>Date:</label>
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />

      <label>PlayTime:</label>
      <input type="time" value={playTime} onChange={(e) => setPlayTime(e.target.value)} />

      <label>Cinema_ssn:</label>
      <select value={selectedCinemaSsn} onChange={(e) => setSelectedCinemaSsn(e.target.value)}>
        {cinemaSsnOptions.map((cinemaSsnOption) => (
          <option key={cinemaSsnOption} value={cinemaSsnOption}>
            {cinemaSsnOption}
          </option>
        ))}
      </select>

      <label>Movie_ID:</label>
      <select value={selectedMovieId} onChange={(e) => setSelectedMovieId(e.target.value)}>
        {movieIdOptions.map((movieIdOption) => (
          <option key={movieIdOption} value={movieIdOption}>
            {movieIdOption}
          </option>
        ))}
      </select>

      <button onClick={handleConfirm}>確認</button>
    </div>
  );
};

export default MovieScreeningTime;