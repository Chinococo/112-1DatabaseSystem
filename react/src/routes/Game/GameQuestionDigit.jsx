import { useState } from "react"
import useDigitInput from "react-digit-input"
import styled from "styled-components"

import GameAppBar from "./GameAppBar"
import GameStatus from "./GameStatus"
import { useNavigate, useParams } from "react-router-dom"

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

const DigitInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const DigitInput = styled.input`
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  text-align: center;

  width: 50px;
  padding: 18px 15px;
  border: none;
  border-radius: 6px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }
`
export default function GameQuestionDigit({}) {
  const {id} = useParams()
  const [value, onChange] = useState("")
  const digits = useDigitInput({ acceptedCharacters: /^[0-9]$/, length: 6, value, onChange })
  const nav = useNavigate()
  
  function goBack(){
    nav(-1)
  }
  function submit() {
    nav(`/task-verify/${id}`)
  }
  return (
    <Container>
      <GameAppBar />
      <GameStatus score={50} timePassed={30} currentTask={4} totalTaskCount={5} />
      <TaskInfo>
        <MarginPlaceholder />
        <Question>Tom說他早餐吃了吐司？</Question>

        <DigitInputContainer>
          <DigitInput inputMode="numeric" autoFocus {...digits[0]} />
          <DigitInput inputMode="numeric" {...digits[1]} />
          <DigitInput inputMode="numeric" {...digits[2]} />
          <DigitInput inputMode="numeric" {...digits[3]} />
          <DigitInput inputMode="numeric" {...digits[4]} />
          <DigitInput inputMode="numeric" {...digits[5]} />
        </DigitInputContainer>

        <Actions>
          <BackButton onClick={goBack}>返回題目</BackButton>
          <SubmitButton onClick={submit}>送出答案</SubmitButton>
        </Actions>
      </TaskInfo>
    </Container>
  )
}
