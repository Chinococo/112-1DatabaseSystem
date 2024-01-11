import React, { useState } from 'react';
import axios from 'axios';

const MovieTheaterName = () => {
  const generateRandomSsn = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 16; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  const [cinemaSsn, setCinemaSsn] = useState(generateRandomSsn());
  const [cinemaNo, setCinemaNo] = useState('');
  const [theaterName, setTheaterName] = useState('台北信義威秀影城');
  const [seatRow, setSeatRow] = useState('');
  const [seatColumn, setSeatColumn] = useState('');

  const handleConfirm = async () => {
    const url = 'http://localhost:4000/AddCinema';
    const data = {
      Cinema_ssn: cinemaSsn,
      Cinema_No: cinemaNo.trim(),
      Theater_Name: theaterName,
      Seat_Row: seatRow.trim(),
      Seat_Column: seatColumn.trim(),
    };

    try {
      const response = await axios.post(url, data);

      if (response.status === 200) {
        const result = response.data;
        console.log(result);
        // 处理成功，可以重定向到另一个页面或显示成功消息
      } else {
        // 处理错误，可能向用户显示错误消息
        console.error('Adding cinema failed');
      }
    } catch (error) {
      console.error('Error during cinema addition:', error);
    }
  };

  return (
    <div>
      <h1>影廳名稱</h1>
      <label>Cinema SSN:</label>
      <input type="text" value={cinemaSsn} readOnly />
      
      <label>Cinema No:</label>
      <input type="text" value={cinemaNo} onChange={(e) => setCinemaNo(e.target.value)} />

      <label>Theater Name:</label>
      <select value={theaterName} onChange={(e) => setTheaterName(e.target.value)}>
        <option value="台北信義威秀影城">台北信義威秀影城</option>
        <option value="喜滿樂絕色影城">喜滿樂絕色影城</option>
      </select>

      <label>Seat Row:</label>
      <input type="text" value={seatRow} onChange={(e) => setSeatRow(e.target.value)} />

      <label>Seat Column:</label>
      <input type="text" value={seatColumn} onChange={(e) => setSeatColumn(e.target.value)} />

      <button onClick={handleConfirm}>確認</button>
    </div>
  );
};

export default MovieTheaterName;
