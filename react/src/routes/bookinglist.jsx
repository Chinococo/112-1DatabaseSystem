import React from 'react';
import styled from "styled-components";
import { useState } from 'react';

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

export default function bookinglist() {
   
         
  const [selectedFruit, setSelectedFruit] = useState('電影名稱');
  const [selectedVegs, setSelectedVegs] = useState(['票種']);
  return (
    <>
    <Header />
          <Nav />
          查詢結果
      <label>
        
        電影:
        <select
          value={selectedFruit}
          onChange={e => setSelectedFruit(e.target.value)}
        >
          <option value="可可夜總會">可可夜總會</option>
          <option value="捍衛戰士">捍衛戰士</option>
          <option value="蜘蛛人">蜘蛛人</option>
        </select>
        <div>剩餘票數:</div>
      </label>
      <hr />
      <label>
        票種:
        <select
          multiple={true}
          value={selectedVegs}
          onChange={e => {
            const options = [...e.target.selectedOptions];
            const values = options.map(option => option.value);
            setSelectedVegs(values);
          }}
        >
          <option value="優惠票">優惠票</option>
          <option value="學生票">學生票</option>
          <option value="一般票">一般票</option>
          <option value="敬老票">敬老票</option>
        </select>
      </label>
      <hr />
      <p>電影名稱: {selectedFruit}</p>
      <p>票種: {selectedVegs.join(', ')}</p>
      <button>確認</button>
      
    <Footer />
        </>
  );
}