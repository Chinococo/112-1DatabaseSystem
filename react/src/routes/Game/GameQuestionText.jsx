import styled from "styled-components"

import GameAppBar from "./GameAppBar"
import GameStatus from "./GameStatus"
import { useNavigate ,useParams} from "react-router-dom"
const Container = styled.div`
  width: 100%;
  height: 100vh;
  object-fit: cover;
  padding: 0 22px 77px;
  background: linear-gradient(180deg, #aff4c6 0%, #9747ff 99.99%);

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

const Question = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 260px;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
`

const AnswerInput = styled.input`
  padding: 12px 14px;
  border: none;
  border-radius: 6px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  font-family: Montserrat;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #979797;
  }
`

const Actions = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
`

const ButtonBase = styled.div`
  padding: 13px 34px;
  border-radius: 6px;
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 700;
`

const BackButton = styled(ButtonBase)`
  color: #90ce5f;
  background: #fff;
  border: 1px solid #90ce5f;
`

const SubmitButton = styled(ButtonBase)`
  color: #fff;
  background: var(--green, #90ce5f);
`

export default function GameQuestionText({}) {
  const { id } = useParams()
  const nav = useNavigate()
  function submit() {
    nav(`/game-info-image/${id}`)
  }
  function goBack(){
    nav(-1)
  }
  return (
    <Container>
      <GameAppBar />
      <GameStatus score={50} timePassed={30} currentTask={1} totalTaskCount={5} />
      <TaskInfo>
        <MarginPlaceholder />
        <Question>請猜猜看謎語所形容的物品？</Question>
        <AnswerInput placeholder="請試著解讀這段謎語" />
        <Actions>
          <BackButton onClick={goBack}>返回題目</BackButton>
          <SubmitButton onClick={submit}>送出答案</SubmitButton>
        </Actions>
      </TaskInfo>
    </Container>
  )
}
