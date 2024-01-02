import styled from "styled-components"

import background from "../../img/game-info-background.jpg"
import GameAppBar from "./GameAppBar"
import GameStatus from "./GameStatus"
import { useNavigate, useParams } from "react-router-dom"

const Container = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  padding: 0 22px 77px;
  background-image: url(${background});

  display: flex;
  flex-direction: column;
`

const MarginPlaceholder = () => <div />

const TaskInfo = styled.div`
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  justify-content: space-between;
`

const Info = styled.div`
  background: rgba(255, 255, 255, 0.8);
  border-radius: 12px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`

const SubmitButton = styled.div`
  padding: 16px 0;
  border-radius: 6px;
  background: var(--green, #90ce5f);
  color: #fff;
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;
`

const TextMaterial = styled(Info)`
  padding: 60px 30px;
  font-style: normal;
`

const TaskInstruction = styled(Info)`
  padding: 12px 0px;
  line-height: 20px;
  text-align: center;
`

export default function GameInfo1({}) {
  const {id} = useParams()
  const nav = useNavigate()
  function submit() {
    nav(`/game-question-text/${id}`)
  }
  return (
    <Container>
      <GameAppBar />
      <GameStatus score={50} timePassed={30} currentTask={1} totalTaskCount={5} />
      <TaskInfo>
        <MarginPlaceholder />
        <TextMaterial>
          {
            "當你踏上這條道路\n風在耳邊輕輕呼嘯\n你的心跳與每一步都漸漸加快，不停加快\n早晨的露水在腳下輕輕閃現\n什麼是我?\n一場自然的比賽，每個人皆可參加。"
          }
        </TextMaterial>
        <TaskInstruction>請試著解讀這段謎語</TaskInstruction>
        <SubmitButton onClick={submit}>前往作答</SubmitButton>
      </TaskInfo>
    </Container>
  )
}
