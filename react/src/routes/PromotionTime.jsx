import React, { useState, useEffect } from 'react';

const PromotionTime = () => {
  const [coupon, setCoupon] = useState('');
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    // Fetch coupons when the component mounts
    fetchCoupons();
  }, []);

  const fetchCoupons = async () => {
    const url = 'http://localhost:5000/GetCoupons';
    const data = {
      CustomerID: 'A123456789',
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

        // Set the retrieved coupons to state
        setCoupons(result.coupons);
      } else {
        console.error('Failed to retrieve coupons');
      }
    } catch (error) {
      console.error('Error during coupon retrieval:', error);
    }
  };

  const handleRegister = async () => {
    const url = 'http://localhost:4000/test_Coupons';
    const data = {
      CustomerID_card: 'A123456789',
      Seta_Coupon: coupon,
      Coupon_ID: 'NoDiscount001',
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

        // After registering the coupon, fetch updated coupons
        fetchCoupons();
      } else {
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div>
      <div>
        <h1></h1>
        <ul>
          {coupons.map((coupon, index) => (
            <li key={index}>{coupon}</li>
          ))}
        </ul>
      </div>

      <h1>Coupon</h1>
      <input type="text" value={coupon} onChange={(e) => setCoupon(e.target.value)} />
      <button onClick={handleRegister}>確認</button>
    </div>
  );
};

export default PromotionTime;
