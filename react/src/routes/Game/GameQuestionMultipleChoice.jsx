import { useState } from "react"
import styled from "styled-components"

import GameAppBar from "./GameAppBar"
import GameStatus from "./GameStatus"
import { useNavigate ,useParams} from "react-router-dom"
const MultipleChoiceAnswers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`

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

const MultipleChoiceAnswerContainer = styled.div`
  display: flex;
  width: max-content;
  border-radius: 6px;
  overflow: hidden;

  background: #fff;
  outline: ${({ active }) => (active ? "1px solid #90ce5f" : "none")};
  box-shadow: ${({ active }) => (active ? "0px 0px 5px 0px #fff" : "0px 0px 5px 0px rgba(0, 0, 0, 0.25)")};

  font-family: Montserrat;
  font-weight: 500;
`

const MultipleChoiceLetter = styled.div`
  width: 50px;
  background: ${({ active }) => (active ? " #90ce5f" : "#C4C4C4")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`

const MultipleChoiceDescription = styled.div`
  padding: 11px 30px;
  color: #292929;
  font-size: 16px;
  line-height: 20px;
`

function MultipleChoiceAnswer({ letter, description, selectedAnswer, setSelectedAnswer }) {
  const active = selectedAnswer === letter
  return (
    <MultipleChoiceAnswerContainer active={active} onClick={() => setSelectedAnswer(letter)}>
      <MultipleChoiceLetter active={active}>{letter}</MultipleChoiceLetter>
      <MultipleChoiceDescription>{description}</MultipleChoiceDescription>
    </MultipleChoiceAnswerContainer>
  )
}

export default function GameQuestionMultipleChoice({}) {
  const {id}= useParams()
  const [selectedAnswer, setSelectedAnswer] = useState("")
  const nav = useNavigate()
  function submit() {
    nav(`/game-info-video/${id}`)
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
        <MultipleChoiceAnswers>
          <MultipleChoiceAnswer letter="A" description="Usain Aolt" {...{ selectedAnswer, setSelectedAnswer }} />
          <MultipleChoiceAnswer letter="B" description="Usain Aolt" {...{ selectedAnswer, setSelectedAnswer }} />
          <MultipleChoiceAnswer letter="C" description="Usain Aolt" {...{ selectedAnswer, setSelectedAnswer }} />
          <MultipleChoiceAnswer letter="D" description="Usain Aolt" {...{ selectedAnswer, setSelectedAnswer }} />
        </MultipleChoiceAnswers>

        <Actions>
          <BackButton onClick={goBack}>返回題目</BackButton>
          <SubmitButton onClick={submit}>送出答案</SubmitButton>
        </Actions>
      </TaskInfo>
    </Container>
  )
}
