import React, { useState } from 'react';

const MySQLConnectionTest = () => {
  const [result, setResult] = useState('');

  const testMySQLConnection = async () => {
    try {
      const response = await fetch('http://localhost:4000/test_mysql_connection', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setResult(data.message);
      } else {
        setResult(`Error: ${response.statusText}`);
      }
    } catch (error) {
      setResult(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>MySQL Connection Test</h1>
      <button onClick={testMySQLConnection}>Test Connection</button>
      <div id="result" style={{ marginTop: '20px' }}>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default MySQLConnectionTest;
