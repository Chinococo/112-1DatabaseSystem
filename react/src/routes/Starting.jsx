import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../routes/movies.css";
import movies from "../routes/movies.json";
import { useNavigate } from "react-router-dom";

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

const Nav = () => {
 return (
      <StyledNav1><p>
        <ul style={{ display: 'flex', justifyContent: 'space-between', marginLeft: '700px'}}>
          <dev><StyledNavLink1 href="/starting">首頁   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/movielist">現正上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/movielist">即將上映   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/shoppingcar">購物車   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/login">登入   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/option">查詢   </StyledNavLink1></dev>
          <dev><StyledNavLink1 href="/orderlist">購買清單   </StyledNavLink1></dev>
        </ul></p>
      </StyledNav1>
 );
};
 
 const VideoList = ({ videos }) => {
  return (
     <StyledVideoList>
       {videos.map((video, index) => (
         <StyledVideo key={index}>
           <h3>{video.title}</h3>
           <p>{video.description}</p>
         </StyledVideo>
       ))}
     </StyledVideoList>
  );
 };
 const videoData = [
  {
     title: '影片1',
     description: '影片1的簡介',
  },
  {
     title: '影片2',
     description: '影片2的簡介',
  },
  {
    title: '影片3',
    description: '影片3的簡介',
 },
 {
  title: '影片4',
  description: '影片4的簡介',
},
  // 其他影片數據...
 ];
 const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
 };
 
 const VideoCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
  };
  return (
    <div className="App">
    <Slider {...settings}>
      {movies.map((movie) => (
        <div className="wrap">
          <img src={movie.url} />
        </div>
      ))}
    </Slider>
  </div>
  );
 };

 export default function Starting() {
  return (
      <>
        <Header />
        <Nav />
        {/*<VideoList videos={videoData} />*/}
        <VideoCarousel /> {/* 將 VideoCarousel 元件放在這裡 */}
        <Footer />
      </>
  );
 }