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
  min-height: 100px;

  font-family: Montserrat;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  text-align: center;
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

const AnswerButtonBase = styled.div`
  width: 132px;
  padding: 12px 0;
  border-radius: 6px;

  font-family: Montserrat;
  font-size: 24px;
  line-height: 1;
  font-weight: 700;
  text-align: center;
`

const CorrectButton = styled(AnswerButtonBase)`
  color: #fff;
  background: var(--green, #90ce5f);
`

const WrongButton = styled(AnswerButtonBase)`
  color: #90ce5f;
  background: #fff;
  border: 1px solid #90ce5f;
`

export default function GameQuestionTrueOrFalse({}) {
  const {id} = useParams()
  const nav = useNavigate()
  function submit() {
    nav(`/game-question-digit/${id}`)
  }
  function goBack(){
    nav(-1)
  }
  return (
    <Container>
      <GameAppBar />
      <GameStatus score={50} timePassed={30} currentTask={4} totalTaskCount={5} />
      <TaskInfo>
        <MarginPlaceholder />
        <Question>Tom說他早餐吃了吐司？</Question>

        <Actions>
          <CorrectButton>O</CorrectButton>
          <WrongButton>X</WrongButton>
        </Actions>

        <Actions>
          <BackButton onClick={goBack}>返回題目</BackButton>
          <SubmitButton onClick={submit}>送出答案</SubmitButton>
        </Actions>
      </TaskInfo>
    </Container>
  )
}
