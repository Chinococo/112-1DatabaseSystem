import AppBar from "@mui/material/AppBar"
import React, { useContext, useLayoutEffect, useState } from "react"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { styled } from "styled-components"

import ActivityContext from "../contexts/ActivityContext"
import DialogControllContext from "../contexts/DialogControllContext"
import FavoriteContext from "../contexts/FavoriteContext"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import NFTContext from "../contexts/NFTContext"
import WalletContext from "../contexts/WalletContext"
import { useFavorite } from "../hooks/useFavorite"
import { useMemberActivityCode } from "../hooks/useMemberActivityCode"
import { useNFTs } from "../hooks/useNFTs"
import BottomPanel from "../routes/BottomPanel"
import Discover from "./Home/Discover"
import Wallet from "./Home/Wallet"

export default function BottonBar({ location }) {
  const [activeTabName, setActiveTabName] = useState("")
  const [temp, setTemp] = React.useState({})
  const DialogControllCtx = useContext(DialogControllContext)

  const params = useParams()
  const nav = useNavigate()

  React.useEffect(() => {
    if (location.state != null) setActiveTabName(location.state)
    else if (Object.keys(params).length === 0) setActiveTabName("發現")
    console.log("location.state: ", location.state)
  }, [])

  React.useEffect(() => {
    console.log("location.state: ", location.state)
    setTemp(location.state)
    if (DialogControllCtx.dialogControll.nftInfo == true) setActiveTabName("錢包")
  }, [DialogControllCtx.dialogControll])

  React.useEffect(() => {
    if (activeTabName == "發現" || activeTabName == "錢包") nav("/", { state: activeTabName })
  }, [activeTabName])

  return (
    <>
      {activeTabName === "發現" && <Discover />}
      {activeTabName === "錢包" && <Wallet temp={temp != {} && temp} />}
      <AppBar position="fixed" sx={{ backgroundColor: "black", top: "auto", bottom: 0 }}>
        <NavBarContainer>
          <NavBarItem
            activeTabName={activeTabName}
            setActiveTabName={setActiveTabName}
            tabName="發現"
            iconPathD="M7.25 17.25L10.45 10.45L17.25 7.25L14.05 14.05L7.25 17.25ZM12.25 11.35C12.0113 11.35 11.7824 11.4448 11.6136 11.6136C11.4448 11.7824 11.35 12.0113 11.35 12.25C11.35 12.4887 11.4448 12.7176 11.6136 12.8864C11.7824 13.0552 12.0113 13.15 12.25 13.15C12.4887 13.15 12.7176 13.0552 12.8864 12.8864C13.0552 12.7176 13.15 12.4887 13.15 12.25C13.15 12.0113 13.0552 11.7824 12.8864 11.6136C12.7176 11.4448 12.4887 11.35 12.25 11.35ZM12.25 2.25C13.5632 2.25 14.8636 2.50866 16.0768 3.0112C17.2901 3.51375 18.3925 4.25035 19.3211 5.17893C20.2497 6.10752 20.9862 7.20991 21.4888 8.42317C21.9913 9.63642 22.25 10.9368 22.25 12.25C22.25 14.9022 21.1964 17.4457 19.3211 19.3211C17.4457 21.1964 14.9022 22.25 12.25 22.25C10.9368 22.25 9.63642 21.9913 8.42317 21.4888C7.20991 20.9862 6.10752 20.2497 5.17893 19.3211C3.30357 17.4457 2.25 14.9022 2.25 12.25C2.25 9.59784 3.30357 7.0543 5.17893 5.17893C7.0543 3.30357 9.59784 2.25 12.25 2.25ZM12.25 4.25C10.1283 4.25 8.09344 5.09285 6.59315 6.59315C5.09285 8.09344 4.25 10.1283 4.25 12.25C4.25 14.3717 5.09285 16.4066 6.59315 17.9069C8.09344 19.4071 10.1283 20.25 12.25 20.25C14.3717 20.25 16.4066 19.4071 17.9069 17.9069C19.4071 16.4066 20.25 14.3717 20.25 12.25C20.25 10.1283 19.4071 8.09344 17.9069 6.59315C16.4066 5.09285 14.3717 4.25 12.25 4.25Z"
          />

          <Div0
            style={{ display: "none" }}
            onClick={() => {
              DialogControllCtx.setDialogControll({ ...DialogControllCtx.dialogControll, bottomPanel: true })
            }}
          >
            <Div2>
              <Div3>
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                  <g id="cube-scan">
                    <path
                      id="Vector"
                      d="M42.5 55V50H50V42.5H55V51.25C55 52.225 54.6 53.1 53.85 53.85C53.1 54.6 52.225 55 51.25 55H42.5ZM17.5 55H8.75C7.775 55 6.9 54.6 6.15 53.85C5.4 53.1 5 52.225 5 51.25V42.5H10V50H17.5V55ZM42.5 5H51.25C52.225 5 53.1 5.4 53.85 6.15C54.6 6.9 55 7.775 55 8.75V17.5H50V10H42.5V5ZM17.5 5V10H10V17.5H5V8.75C5 7.775 5.4 6.9 6.15 6.15C6.9 5.4 7.775 5 8.75 5H17.5ZM32.5 43.125L42.5 37.375V25.9L32.5 31.65V43.125ZM30 27.3L40 21.575L30 15.7L20 21.575L30 27.3ZM17.5 37.375L27.5 43.125V31.65L17.5 25.9V37.375ZM45.575 18.975C46.825 19.775 47.5 20.85 47.5 22.275V38.075C47.5 39.5 46.825 40.575 45.575 41.375L31.875 49.325C30.625 50.125 29.375 50.125 28.125 49.325L14.425 41.375C13.175 40.575 12.5 39.5 12.5 38.075V22.275C12.5 20.85 13.175 19.775 14.425 18.975L28.125 11.025C28.75 10.7 29.375 10.55 30 10.55C30.625 10.55 31.25 10.7 31.875 11.025L45.575 18.975Z"
                      fill="white"
                    ></path>
                  </g>
                </svg>
              </Div3>
            </Div2>
            <Div4>加入</Div4>
          </Div0>

          <NavBarItem
            activeTabName={activeTabName}
            setActiveTabName={setActiveTabName}
            tabName="錢包"
            iconPathD="M17 3H7C4.79 3 3 4.79 3 7V17C3 19.21 4.79 21 7 21H19C20.11 21 21 20.11 21 19V9C21 7.9 20.11 7 19 7V5C19 3.9 18.11 3 17 3ZM17 5V7H7C6.27 7 5.59 7.2 5 7.54V7C5 5.9 5.9 5 7 5M15.5 15.5C14.67 15.5 14 14.83 14 14C14 13.17 14.67 12.5 15.5 12.5C16.33 12.5 17 13.17 17 14C17 14.83 16.33 15.5 15.5 15.5Z"
          />
        </NavBarContainer>
      </AppBar>
    </>
  )
}

function NavBarItem({ tabName, activeTabName, setActiveTabName, iconPathD }) {
  const isActive = tabName === activeTabName

  return (
    <Div0 onClick={() => setActiveTabName(tabName)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path id="Vector" d={iconPathD} fill={isActive ? "white" : "#979797"} />
      </svg>
      <Div1
        style={{
          color: isActive ? "white" : "#808080",
        }}
      >
        {tabName}
      </Div1>
    </Div0>
  )
}

const NavBarContainer = styled.div`
  width: 100%;
  height: 65px;
  padding: 0 12px;
  background-color: black;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 48px;

  position: sticky;
  bottom: 0;
`

const Div0 = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const Div1 = styled.div`
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
`

const Div2 = styled.div`
  height: 24px;
  width: 100%;
  position: relative;
`

const Div3 = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  width: 80px;
  height: 80px;
  border-radius: 12px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Div4 = styled.div`
  color: #808080;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
`
