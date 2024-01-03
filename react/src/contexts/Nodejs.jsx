import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const url = 'http://localhost:4000/Register';
    const data = {
      Email: email,
      Name: name,
      Sex: sex,
      Register_date: new Date().toISOString().split('T')[0],
      Password: password,
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
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Sex:</label>
      <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default RegisterForm;
