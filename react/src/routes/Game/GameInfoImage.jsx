import styled from "styled-components"

import background from "../../img/game-info-background.jpg"
import imageQuestion from "../../img/image-question.jpg"
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

const TaskInstruction = styled(Info)`
  padding: 12px 0px;
  line-height: 20px;
  text-align: center;
`

const ImageMaterial = styled.img`
  border-radius: 6px;
  aspect-ratio: 4 / 3;
`

export default function GameInfo1({}) {
  const {id} = useParams()
  const nav = useNavigate()
  function submit() {
    nav(`/game-question-multiple-choice/${id}`)
  }
  return (
    <Container>
      <GameAppBar />
      <GameStatus score={5} timePassed={70} currentTask={2} totalTaskCount={5} />
      <TaskInfo>
        <MarginPlaceholder />
        <ImageMaterial src={imageQuestion} />
        <TaskInstruction>請仔細觀看這張圖片</TaskInstruction>
        <SubmitButton onClick={submit}>前往作答</SubmitButton>
      </TaskInfo>
    </Container>
  )
}
