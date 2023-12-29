import DrawerContext from "../contexts/DrawerContext"
import MemberContext from "../contexts/MemberContext"
import WalletContext from "../contexts/WalletContext"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import React from "react"
import { useNavigate } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

const Div0 = styled.div`
  display: flex;
  padding: 48px 29px 42px 32px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`

const Div1 = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Div2 = styled.div`
  display: flex;
  align-items: center;
  margin-top: 32px;
`

const Div3 = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 80px;
  background: gray;
  margin-right: 11px;
`

const Img0 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 80px;
`

const Div4 = styled.div`
  width: 126px;
  color: #000;
  font-family: Press Start 2P;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: capitalize;
`

const Div5 = styled.div`
  height: 29px;
  weight: 130px;
  margin-top: 32px;
`

const Div7 = styled.div`
  color: #c4c4c4;
  font-famil: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
`

const Div9 = styled.div`
  width: 169px;
  height: 24px;
  margin-top: 32px;
`

const Div10 = styled.div`
  width: 24px;
  height: 24px;
  display: inline-block;
  vertical-align: middle;
`

const Div11 = styled.div`
  margin-left: 24px;
  color: #000;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: inline-block;
  white-space: nowrap;
  vertical-align: middle;
`

const Div12 = styled.div`
  width: 185px;
  height: 24px;
  margin-top: 16px;
`

const Div13 = styled.div`
  width: 165px;
  height: 24px;
  margin-top: 16px;
`

const Div6 = styled(Div7)`
  font-size: 24px;
  margin-right: 5px;
`

const Div8 = styled(Div7)`
  font-size: 16px;
`

const Div14 = styled(Div11)`
  width: 65px;
  height: 20px;
`

export default function Sidebar() {
  const drawerContext = React.useContext(DrawerContext)
  const memberContext = React.useContext(MemberContext)
  const walletContext = React.useContext(WalletContext)

  const nav = useNavigate()

  function handleDrawerOpen(status) {
    drawerContext.setDrawerOpen(status)
  }

  return (
    <Drawer anchor="left" open={drawerContext.drawerOpen} onClose={() => handleDrawerOpen(false)}>
      <Box role="presentation" onKeyDown={() => handleDrawerOpen(false)} open={true}>
        <Div0>
          <Div1 onClick={() => handleDrawerOpen(false)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <g id="x">
                <path
                  id="x"
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="black"
                />
              </g>
            </svg>
          </Div1>
          <Div2>
            <Div3>
              <Img0 src={memberContext.member.line_pictureUrl} />
            </Div3>
            <Div4>{memberContext.member.line_displayName}</Div4>
          </Div2>
          <Div5>
            <Div6>{walletContext.wallet.nfts.length}</Div6>
            <Div8>個數位資產</Div8>
          </Div5>
          {/* <div style={{
            "height": "29px", "weight": "130px",
            "marginTop": "8px",
          }}>
            <div style={{ "color": "#C4C4C4", "fontFamil": "Montserrat", "fontSize": "24px", "fontStyle": "normal", "fontWeight": "700", "lineHeight": "normal", "marginRight": "5px", display: "inline-block" }}>
              21</div>
            <div style={{ "color": "#C4C4C4", "fontFamil": "Montserrat", "fontSize": "16px", "fontStyle": "normal", "fontWeight": "700", "lineHeight": "normal", display: "inline-block" }}>
              Following
            </div>
          </div> */}
          {/* <Div9>
            <Div10>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="account-circle">
                  <path
                    id="account-circle"
                    d="M12 19.2C9.5 19.2 7.29 17.92 6 16C6.03 14 10 12.9 12 12.9C14 12.9 17.97 14 18 16C16.71 17.92 14.5 19.2 12 19.2ZM12 5C12.7956 5 13.5587 5.31607 14.1213 5.87868C14.6839 6.44129 15 7.20435 15 8C15 8.79565 14.6839 9.55871 14.1213 10.1213C13.5587 10.6839 12.7956 11 12 11C11.2044 11 10.4413 10.6839 9.87868 10.1213C9.31607 9.55871 9 8.79565 9 8C9 7.20435 9.31607 6.44129 9.87868 5.87868C10.4413 5.31607 11.2044 5 12 5ZM12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                    fill="black"
                  />
                </g>
              </svg>
            </Div10>
            <Div11>用戶資訊</Div11>
          </Div9> */}
          {/* <Div12>
            <Div10>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="ticket">
                  <path
                    id="ticket"
                    d="M15.58 16.8L12 14.5L8.42 16.8L9.5 12.68L6.21 10L10.46 9.74L12 5.8L13.54 9.74L17.79 10L14.5 12.68M20 12C20 10.89 20.9 10 22 10V6C22 4.89 21.1 4 20 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V10C3.11 10 4 10.9 4 12C4 12.5304 3.78929 13.0391 3.41421 13.4142C3.03914 13.7893 2.53043 14 2 14V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V14C21.4696 14 20.9609 13.7893 20.5858 13.4142C20.2107 13.0391 20 12.5304 20 12Z"
                    fill="black"
                  />
                </g>
              </svg>
            </Div10>
            <Div11>已儲存活動管理</Div11>
          </Div12> */}
          {/* <Div13>
            <Div10>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="Follower">
                  <path
                    id="Follower"
                    d="M18 16H14V18H18V20L21 17L18 14V16ZM11 4C8.8 4 7 5.8 7 8C7 10.2 8.8 12 11 12C13.2 12 15 10.2 15 8C15 5.8 13.2 4 11 4ZM11 14C6.6 14 3 15.8 3 18V20H12.5C12.2 19.2 12 18.4 12 17.5C12 16.3 12.3 15.2 12.9 14.1C12.3 14.1 11.7 14 11 14Z"
                    fill="black"
                  />
                </g>
              </svg>
            </Div10>
            <Div11>會員管理</Div11>
          </Div13> */}
          <Div13
            onClick={() => {
              storage.clear()
              nav("/login")
            }}
          >
            <Div10>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <g id="logout">
                  <path
                    id="logout"
                    d="M14.08 15.59L16.67 13H7V11H16.67L14.08 8.41L15.5 7L20.5 12L15.5 17L14.08 15.59ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V9.67L19 7.67V5H5V19H19V16.33L21 14.33V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.89 3.89 3 5 3H19Z"
                    fill="black"
                  />
                </g>
              </svg>
            </Div10>
            <Div14>登出</Div14>
          </Div13>
        </Div0>
      </Box>
    </Drawer>
  )
}
