import React, { useState } from 'react';
import styled from "styled-components";
import Select from 'react-select';
import '../routes/option.css';


document.body.addEventListener('DOMNodeInserted', function (event) {
    if (event.target.nodeName === 'SPAN' && event.target.classList.contains('sc-ellipsis')) {
        event.target.style.display = 'none';
    }
  });
  const StyledHeader = styled.header`
   background-color: #f1f1f1;
   padding: 20px;
   text-align: center;
  `;
  
  const StyledVideoList = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 20px;
   padding: 20px;
  `;
  
  const StyledVideo = styled.div`
   border: 1px solid #ddd;
   padding: 15px;
   text-align: center;
  `;
  
  const StyledFooter = styled.footer`
   background-color: #333;
   color: white;
   padding: 15px;
   text-align: center;
  `;
  
  const Header = () => {
    return (
       <StyledHeader>
         <h1>電影院</h1>
       </StyledHeader>
    );
   };
   
   const Footer = () => {
    return (
       <StyledFooter>
         <p>© 2021 電影院</p>
       </StyledFooter>
    );
   };

   

   const StyledNav1 = styled.nav`
 display: flex;

 background-color: #282c34;
 padding: 10px 20px;
 color: #ffffff;
 font-size: 16px;
`;

const StyledNavLink1 = styled.a`
 color: #ffffff;
 text-decoration: none;
 padding: 5px 10px;

 &:hover {
    background-color: #21252e;
 }
`;
const StyledNavLink2 = styled.a`
 color: #000000;
 text-decoration: none;
 
 margin-right:50px;
 padding: 20px 10px;
 height:100px;
 weight:100px;
 &:hover {
    background-color: #21252e;
 }
`;
const StyledNavLink3 = styled.a`
color: #000000;
text-decoration: none;

margin-right:50px;
padding: 20px 10px;
height:100px;
weight:100px;
&:hover {
   background-color: #21252e;
}
`;

const Nav = () => {
 return (
      <StyledNav1><p>
        <ul style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '700px'}}>
          <dev><StyledNavLink1 href="/starting">首頁   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/now-showing">現正上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/movielist">即將上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/">購物車   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/login">登入   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/option">查詢   </StyledNavLink1></dev>
        </ul></p>
      </StyledNav1>
 );
};
const option = () => {
    const [cinema, setCinema] = useState(null);
    const [movie, setMovie] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [seat, setSeat] = useState(null);
  
    const cinemaOptions = [
      { value: 'cinema1', label: '影城1' },
      { value: 'cinema2', label: '影城2' },
    ];
  
    const movieOptions = [
      { value: 'movie1', label: '影片1' },
      { value: 'movie2', label: '影片2' },
    ];
  
    const dateOptions = [
      { value: 'date1', label: '日期1' },
      { value: 'date2', label: '日期2' },
    ];
  
    const timeOptions = [
      { value: 'time1', label: '場次1' },
      { value: 'time2', label: '場次2' },
    ];

    const seatOptions = [
        { value: 'time1', label: '場次1' },
        { value: 'time2', label: '場次2' },
      ];
  
    const handleRegister = async ()=> {
      // Assuming the actual values to be sent to the API are available in cinema, movie, date, and time states
      const url = 'http://localhost:4000/Register';
      const apiData = {
        Cinema_ssn: cinema.value,
        Cinema_No: movie.value,
        Theater_Name: date.value,
        Seat_Row: time.value,
        Seat_Column: seat.value,  // Replace with the actual value
      };
  
      // Make the API call using axios
      axios.post('YOUR_API_ENDPOINT', apiData)
        .then(response => {
          console.log('API Response:', response.data);
          // Add any additional logic based on the API response if needed
        })
        .catch(error => {
          console.error('API Error:', error);
          // Handle the error appropriately
        });
    };

 return (
    <>
    <Header />
          <Nav />
    <div className="App">
      <Select options={cinemaOptions} onChange={setCinema} placeholder="請選擇影城" />
      <Select options={movieOptions} onChange={setMovie} placeholder="請選擇影片" />
      <Select options={dateOptions} onChange={setDate} placeholder="請選擇日期" />
      <Select options={timeOptions} onChange={setTime} placeholder="請選擇場次" />
      <Select options={seatOptions} onChange={setSeat} placeholder="請選擇場次" />
      <br></br>
      <button onClick={handleRegister}><h>前往訂票</h></button>
    </div>
    <Footer />
        </>
 );
};

export default option;