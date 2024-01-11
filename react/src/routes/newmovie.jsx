import React, { useState } from 'react';

const NewMovie = () => {
  const [movie, setMovie] = useState({
    Type: '',
    Actors: '',
    Rate: '',
    Director: '',
    Name: '',
    Duration: '',
    image: '',
    information: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie((prevMovie) => ({
      ...prevMovie,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = 'http://localhost:5000/AddMovie';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(movie),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        // Handle success, maybe redirect to another page or show a success message
      } else {
        // Handle error, maybe show an error message to the user
        console.error('Failed to add movie. Please try again.');
      }
    } catch (error) {
      console.error('Error adding movie:', error.message);
    }
  };

  return (
    <div>
      <h1>新增電影</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Type">Type:</label>
        <input type="text" id="Type" name="Type" value={movie.Type} onChange={handleChange} />
        <br />
        <label htmlFor="Actors">Actors:</label>
        <input type="text" id="Actors" name="Actors" value={movie.Actors} onChange={handleChange} />
        <br />
        <label htmlFor="Rate">Rate:</label>
        <input type="text" id="Rate" name="Rate" value={movie.Rate} onChange={handleChange} />
        <br />
        <label htmlFor="Director">Director:</label>
        <input type="text" id="Director" name="Director" value={movie.Director} onChange={handleChange} />
        <br />
        <label htmlFor="Name">Name:</label>
        <input type="text" id="Name" name="Name" value={movie.Name} onChange={handleChange} />
        <br />
        <label htmlFor="Duration">Duration:</label>
        <input type="text" id="Duration" name="Duration" value={movie.Duration} onChange={handleChange} />
        <br />
        <label htmlFor="image">Image URL:</label>
        <input type="text" id="image" name="image" value={movie.image} onChange={handleChange} />
        <br />
        <label htmlFor="information">Information:</label>
        <textarea id="information" name="information" value={movie.information} onChange={handleChange} />
        <br />
        <button type="submit">傳送</button>
      </form>
    </div>
  );
};

export default NewMovie;