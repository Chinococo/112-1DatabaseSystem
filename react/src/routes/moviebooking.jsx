import React, { useState } from 'react';

const RegisterForm = () => {
  const [seatrow, setName] = useState('');
  const [seatcolumn, setSex] = useState('');
  const [playid, setPassword] = useState('');
  const handleRegister = async () => {
    
    const url = 'http://localhost:4000/Transaction';
    const data = {
      Seta_Row: seatrow,
      Seta_Column: seatcolumn,
      Play_ID: playid,
      CustomerID_card:("A123456789") ,
      Coupon_ID:"NoDiscount001",
      TicketType:"學生票",
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
        history.push('http://localhost/starting');
        // Handle success, maybe redirect to another page or show a success message
      } else {
        // Handle error, maybe show an error message to the user
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
    history.push('http://localhost/movielist');
  };

  return (
    <div>
      <div>剩餘座位數</div>
      <label>SeatRow</label>
      <input type="text" value={seatrow} onChange={(e) => setName(e.target.value)} />

      <label>SeatColumn</label>
      <input type="text" value={seatcolumn} onChange={(e) => setSex(e.target.value)} />

      <label>PlayID</label>
      <input type="password" value={playid} onChange={(e) => setPassword(e.target.value)} />
      

      <button onClick={handleRegister} >Sure</button>
    </div>
  );
};

export default RegisterForm;