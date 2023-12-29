import React from "react"

import "../../styles/GameCompletion.scss"
import GameAppBar from "./GameAppBar"

function GameCompletion() {
  return (
    <div className="container">
      <GameAppBar/>
      <div className="gameInfo">
        <div className="gameInfo-message">
          <div className="gameInfo-title">所有任務皆已完成!</div>
          <div className="gameInfo-point"> 總積分:</div>
        </div>
        <div className="gameInfo-hint">完成遊戲認證以獲得以下獎勵</div>
        <div className="gameInfo-reward">
            <img src="" alt="icon" />
            <div className="gameInfo-reward-detail">快速通關券{}張</div>
        </div>
      </div>
      <button className="confirm">前往認證</button>
    </div>
  )
}

export default GameCompletion
