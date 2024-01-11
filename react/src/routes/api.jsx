import React, { useState } from 'react';

import styled from "styled-components";

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
        window.location.href = '/starting';

        // Handle success, maybe redirect to another page or show a success message
      } else {
        // Handle error, maybe show an error message to the user
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };
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
          <dev><StyledNavLink1 href="/coming-soon">即將上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/">購物車   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/now-showing">登入   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/coming-soon">其他   </StyledNavLink1></dev>
        </ul></p>
      </StyledNav1>
 );
};
  return (
    <>
    <Header />
          <Nav />
    <div><></>
      <label>Email:</label>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

      <label>Sex:</label>
      <input type="text" value={sex} onChange={(e) => setSex(e.target.value)} />

      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br></br>
      <button onClick={handleRegister} >Register</button>
      
    </div>
    <Footer />
        </>
  );
};

export default RegisterForm;