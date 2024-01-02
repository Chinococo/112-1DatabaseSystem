import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

import SelectedActivityContext from "../../contexts/SelectedActivityContext"
import background from "../../img/game-info-background.jpg"

const AppBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 0px 20px 0px;
`

const AppBarTitle = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`
export default function GameAppBar({}) {
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  const navigate = useNavigate()

  function goBackPage() {
    navigate(`/activity/${selectedActivityCtx.activity.id}`)
  }
  return (
    <AppBarContainer>
      <div onClick={goBackPage}>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="home">
            <path id="Vector" d="M9.8 21V14.2941H14.2V21H19.7V12.0588H23L12 2L1 12.0588H4.3V21H9.8Z" fill="white" />
          </g>
        </svg>
      </div>
      <AppBarTitle>500障礙趣味接力</AppBarTitle>
      <div>
        <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g id="pause">
            <path
              id="Vector"
              d="M15 16H13V8H15M11 16H9V8H11M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7362 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2Z"
              fill="white"
            />
          </g>
        </svg>
      </div>
    </AppBarContainer>
  )
}
