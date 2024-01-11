import styled from "styled-components";
import "../routes/movies.css";

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
          <dev><StyledNavLink1 href="/orderlist">購買清單   </StyledNavLink1></dev>
        </ul></p>
      </StyledNav1>
 );
};

export default function Starting() {
    return (
        <>
          <Header />
          <Nav />
          {/*<VideoList videos={videoData} />*/}
          <h1>即將上映</h1>
          <p>
        <ul style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '200px'}}>
          <dev><StyledNavLink2 href="/moviebooking"> <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg"} />   </StyledNavLink2></dev>
          <dev><StyledNavLink2 href="/moviebooking"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/pHkKbIRoCe7zIFvqan9LFSaQAde.jpg"} />   </StyledNavLink2></dev>
          <dev><StyledNavLink2 href="/moviebooking"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"} />   </StyledNavLink2></dev>
          <dev><StyledNavLink2 href="/moviebooking"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"} />  </StyledNavLink2></dev> 
        </ul>
        <ul style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '200px'}}>
        <dev><StyledNavLink3 href="/"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"} />   </StyledNavLink3></dev>
          <dev><StyledNavLink3 href="/"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/uJYYizSuA9Y3DCs0qS4qWvHfZg4.jpg"} />   </StyledNavLink3></dev>
          <dev><StyledNavLink3 href="/moviebooking"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/65WFr1ZMAbEniIh4jEhbRG9OHHN.jpg"} />   </StyledNavLink3></dev>
          <dev><StyledNavLink3 href="/moviebooking"><img src={"https://www.themoviedb.org/t/p/w220_and_h330_face/kxB9E6fo0ycHzd13oOTHmGa5Njd.jpg"} />   </StyledNavLink3></dev>
        </ul></p>
        
          <Footer />
        </>
    );
   }