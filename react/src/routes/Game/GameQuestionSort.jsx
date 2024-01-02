import { useState } from "react"
import styled from "styled-components"
import { useNavigate ,useParams} from "react-router-dom"
import GameAppBar from "./GameAppBar"
import GameStatus from "./GameStatus"

const SortingAnswerArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 15px;
  width: max-content;
  margin: 0 auto;
`

const SortingChoices = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 8px;
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

const SortingContainerBase = styled.div`
  display: flex;
  border-radius: 6px;
  overflow: hidden;

  font-family: Montserrat;
  font-weight: 500;
  color: #292929;
`

const SortingChoiceContainer = styled(SortingContainerBase)`
  background: ${({ active }) => (active ? " #FFF" : "#DADADA")};
  outline: ${({ active }) => (active ? "1px solid #90ce5f" : "none")};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`

const SortingAnswerContainer = styled(SortingContainerBase)`
  background: #fff;
  outline: 1px solid #90ce5f;
  box-shadow: 0px 0px 5px 0px #fff;
`

const SortingChoiceLetter = styled.div`
  width: 50px;
  background: ${({ active }) => (active ? " #90ce5f" : "#C4C4C4")};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: white;
`

const SortingDescriptionBase = styled.div`
  color: #292929;
  font-size: 16px;
  line-height: 20px;
  text-wrap: nowrap;
  flex-grow: 1;
`

const SortingChoiceDescription = styled(SortingDescriptionBase)`
  padding: 11px 30px;
`

const SortingAnswerDescription = styled(SortingDescriptionBase)`
  padding: 11px 10px 11px 30px;
  display: flex;
  justify-content: space-between;
`

const RemoveOptionButton = styled.div`
  color: #979797;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  width: 20px;
  text-align: right;
`

const EmptyAnswer = styled.div`
  height: 42px;
  border-radius: 6px;
  border: 1px solid #979797;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
`

function SortingAnswer({ description, setSelectedAnswer }) {
  return (
    <SortingAnswerContainer
      onClick={() => setSelectedAnswer(selectedAnswer => selectedAnswer.filter(answer => answer !== description))}
    >
      <SortingChoiceLetter active={true}>?</SortingChoiceLetter>
      <SortingAnswerDescription active={true}>
        {description}
        <RemoveOptionButton>X</RemoveOptionButton>
      </SortingAnswerDescription>
    </SortingAnswerContainer>
  )
}

function SortingChoice({ index, description, selectedAnswer, setSelectedAnswer }) {
  const active = !selectedAnswer.includes(description)

  return (
    <SortingChoiceContainer
      active={active}
      onClick={() => active && setSelectedAnswer([...selectedAnswer, description])}
    >
      <SortingChoiceLetter active={active}>?</SortingChoiceLetter>
      <SortingChoiceDescription active={active}>{description}</SortingChoiceDescription>
    </SortingChoiceContainer>
  )
}

export default function GameQuestionSortingChoice({}) {
  const {id} = useParams()  
  const [selectedAnswer, setSelectedAnswer] = useState([])
  const nav = useNavigate()
  function submit() {
    nav(`/game-question-true-or-false/${id}`)
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

        <SortingAnswerArea>
          <SortingChoices>
            {selectedAnswer.map(answer => (
              <SortingAnswer description={answer} setSelectedAnswer={setSelectedAnswer} />
            ))}
            {[...Array(3 - selectedAnswer.length)].map(() => (
              <EmptyAnswer />
            ))}
          </SortingChoices>

          <SortingChoices>
            <SortingChoice description="宇智波佐助" {...{ selectedAnswer, setSelectedAnswer }} />
            <SortingChoice description="春野櫻" {...{ selectedAnswer, setSelectedAnswer }} />
            <SortingChoice description="漩渦鳴人" {...{ selectedAnswer, setSelectedAnswer }} />
          </SortingChoices>
        </SortingAnswerArea>

        <Actions>
          <BackButton onClick={goBack}>返回題目</BackButton>
          <SubmitButton onClick={submit}>送出答案</SubmitButton>
        </Actions>
      </TaskInfo>
    </Container>
  )
}
