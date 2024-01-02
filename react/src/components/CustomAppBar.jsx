//import MenuIcon from '@mui/icons-material/Menu';
//import ArrowBackIcon from '@mui/icons-material/ArrowBack';
//import App from '../App';
import DrawerContext from "../contexts/DrawerContext"
import Sidebar from "./Sidebar"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
//import Button from '@mui/material/Button';
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import React from "react"
import { useNavigate } from "react-router-dom"
import { styled } from "styled-components"

const NavBarContainer = styled.div`
  background-color: black;
  display: flex;
  height: 65px;
  width: 100%;
  padding: 0 12px;
  justify-content: space-between;
  align-items: center;
`

function CustomAppBar(props) {
  const ctx = React.useContext(DrawerContext)
  const nav = useNavigate()

  function handleDrawerOpen(status) {
    ctx.setDrawerOpen(status)
  }

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed" sx={{ backgroundColor: "black" }}>
      <Sidebar />
      <Toolbar>
        <NavBarContainer>
          {props.left == "profile" ? (
            <div onClick={() => handleDrawerOpen(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <g id="account-circle">
                  <path
                    id="Vector"
                    d="M12.5278 19.2C10.0278 19.2 7.81783 17.92 6.52783 16C6.55783 14 10.5278 12.9 12.5278 12.9C14.5278 12.9 18.4978 14 18.5278 16C17.2378 17.92 15.0278 19.2 12.5278 19.2ZM12.5278 5C13.3235 5 14.0865 5.31607 14.6492 5.87868C15.2118 6.44129 15.5278 7.20435 15.5278 8C15.5278 8.79565 15.2118 9.55871 14.6492 10.1213C14.0865 10.6839 13.3235 11 12.5278 11C11.7322 11 10.9691 10.6839 10.4065 10.1213C9.8439 9.55871 9.52783 8.79565 9.52783 8C9.52783 7.20435 9.8439 6.44129 10.4065 5.87868C10.9691 5.31607 11.7322 5 12.5278 5ZM12.5278 2C11.2146 2 9.91425 2.25866 8.701 2.7612C7.48774 3.26375 6.38535 4.00035 5.45676 4.92893C3.5814 6.8043 2.52783 9.34784 2.52783 12C2.52783 14.6522 3.5814 17.1957 5.45676 19.0711C6.38535 19.9997 7.48774 20.7362 8.701 21.2388C9.91425 21.7413 11.2146 22 12.5278 22C15.18 22 17.7235 20.9464 19.5989 19.0711C21.4743 17.1957 22.5278 14.6522 22.5278 12C22.5278 6.47 18.0278 2 12.5278 2Z"
                    fill="white"
                  ></path>
                </g>
              </svg>
            </div>
          ) : (
            <div onClick={() => nav(-1)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <path
                  d="M16.2446 22.6169C16.4927 22.865 16.8083 23.0002 17.1804 23.0002C17.9245 23.0002 18.522 22.414 18.522 21.6699C18.522 21.2979 18.3641 20.9597 18.1048 20.7004L10.2131 12.989L18.1048 5.30013C18.3641 5.04083 18.522 4.69134 18.522 4.33057C18.522 3.58649 17.9245 3.00024 17.1804 3.00024C16.8083 3.00024 16.4927 3.13553 16.2446 3.38356L7.47351 11.9518C7.15784 12.2449 7.01127 12.6057 7 13.0002C7 13.3948 7.15784 13.7331 7.47351 14.0374L16.2446 22.6169Z"
                  fill="white"
                />
              </svg>
            </div>
          )}
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="84" height="27" viewBox="0 0 84 27" fill="none">
              <g id="Group 1">
                <path
                  id="Vector"
                  d="M53.5113 1.26685H40.0298V3.57544H53.5113V1.26685Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_2"
                  d="M80.8564 1.26685H64.5557V3.57544H80.8564V1.26685Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_3"
                  d="M29.9862 2.71436H16.2639V7.04869H29.9862V2.71436Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_4"
                  d="M27.9434 13.962H26.374V13.0136H29.9821V7.75998H16.2639V13.0136H19.6145V14.1492H16.4258V21.1956H12.797V17.7847H15.5746V12.5311H12.797V11.2665H15.5746V6.01294H3.15604V11.2665H6.91359V12.5311H3.15604V17.7847H6.91359V21.129H0.527832V25.8793H11.651V23.2005H12.797V25.9459H19.8886V23.7579H21.9396V16.1541H22.9071V21.0084V25.9251V25.9334H31.647V21.0084H27.9434V13.962Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_5"
                  d="M30.9329 14.3031H35.3464V8.64187H53.5114V12.8888H56.7416V8.64187V4.12451H30.9287V8.64187H30.9329V14.3031Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_6"
                  d="M82.4673 13.5917H73.4409V12.8887H77.7714V9.34473H63.3889V12.8887H66.7686V13.5917H55.9569V17.1565H55.9901V21.0083H53.8601V25.9999H79.9637V24.1488H82.4964V13.7914H82.4632V13.5917H82.4673ZM75.8283 17.1565V18.0134H73.4368V17.1565H75.8283ZM62.6582 21.5782H66.7645V22.4351H62.6582V21.5782ZM73.4368 21.5782H75.8283V22.4351H73.4368V21.5782ZM66.7686 17.1565V18.0134H62.6623V17.1565H66.7686Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_7"
                  d="M48.9858 20.1514H55.2553V15.1557H48.9858V13.4669H52.8014V9.34473H36.1644V13.4669H42.3177V15.1557H30.1855V20.1514H42.3177V21.0083H32.6145V25.9999H46.5818V23.5706H48.9858V20.1514Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
                <path
                  id="Vector_8"
                  d="M57.68 4.12451V4.88156H57.6177V12.8888H62.654V8.64187H78.4358V12.8888H83.4721V8.64187V4.88156V4.12451H57.68Z"
                  fill="white"
                  stroke="black"
                  strokeMiterlimit="10"
                ></path>
              </g>
            </svg>
          </div>
          <div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <g id="bell-badge">
                <path
                  id="Vector"
                  d="M21.4722 6.5C21.4722 8.43 19.9022 10 17.9722 10C16.0422 10 14.4722 8.43 14.4722 6.5C14.4722 4.57 16.0422 3 17.9722 3C19.9022 3 21.4722 4.57 21.4722 6.5ZM19.4722 11.79C18.9722 11.92 18.4722 12 17.9722 12C14.9422 12 12.4722 9.53 12.4722 6.5C12.4722 5.03 13.0522 3.7 13.9722 2.71C13.6222 2.28 13.0822 2 12.4722 2C11.3722 2 10.4722 2.9 10.4722 4V4.29C7.50217 5.17 5.47217 7.9 5.47217 11V17L3.47217 19V20H21.4722V19L19.4722 17V11.79ZM12.4722 23C13.5822 23 14.4722 22.11 14.4722 21H10.4722C10.4722 22.11 11.3722 23 12.4722 23Z"
                  fill="white"
                ></path>
              </g>
            </svg> */}
          </div>
        </NavBarContainer>
      </Toolbar>
    </AppBar>
    // </Box>
  )
}

export default CustomAppBar
