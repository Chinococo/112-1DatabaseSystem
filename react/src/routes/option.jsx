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
          <dev><StyledNavLink1 href="/">首頁   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/now-showing">現正上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/coming-soon">即將上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/">購物車   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/now-showing">登入   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/coming-soon">其他   </StyledNavLink1></dev>
        </ul></p>
      </StyledNav1>
 );
};
const option = () => {
 const [cinema, setCinema] = useState(null);
 const [movie, setMovie] = useState(null);
 const [date, setDate] = useState(null);
 const [time, setTime] = useState(null);

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

 const handleSubmit = () => {
    console.log('Selected Cinema:', cinema);
    console.log('Selected Movie:', movie);
    console.log('Selected Date:', date);
    console.log('Selected Time:', time);
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
      <br></br>
      <button onClick={handleSubmit}><h>前往訂票</h></button>
    </div>
    <Footer />
        </>
 );
};

export default option;