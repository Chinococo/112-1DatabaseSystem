import styled from "styled-components"

const GameStatusContainer = styled.div`
  margin-top: 20px;
  padding: 0 23px ${(44 - 28) / 2}px;
`

const StatusDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

const StatusDetailsBox = styled.div`
  display: flex;
  padding: 6px 15px;
  flex-direction: column;
  gap: 5px;
  border-radius: 6px;
  background: #aff4c6;
  position: relative;
`

const TimeTitle = styled.div`
  color: #505050;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`

const TimeValue = styled.div`
  color: #505050;
  font-family: "PressStart2P";
  font-size: 24px;
  line-height: 32px;
`

const StatusDetailsBoxPlaceholder = styled(TimeValue)`
  visibility: hidden;
`

const ScoreValue = styled(TimeValue)`
  text-align: end;
  position: absolute;
  right: 15px;
  bottom: 5px;
`

const GameProgress = styled.div`
  margin-top: 20px;
  position: relative;
`

const ProgressLineContainer = styled.div`
  display: flex;
  height: 6px;
  padding: 0 14px;
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const CompletedProgress = styled.div`
  background-color: #aff4c6;
`

const RemainingProgress = styled.div`
  height: 6px;
  background-color: #d9d9d9;
  flex-grow: 1;
`

const ProgressCircleContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const ProgressCircle = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 28px;
  color: #fff;
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`

const ActiveProgressCircle = styled(ProgressCircle)`
  background-color: #aff4c6;
`

const InactiveProgressCircle = styled(ProgressCircle)`
  background-color: #d9d9d9;
`

const ScoreTitle = styled(TimeTitle)`
  text-align: end;
`

const CurrentProgressCircle = styled(ActiveProgressCircle)`
  transform: scale(${44 / 28});
`

export default function GameStatus({ score, timePassed, currentTask, totalTaskCount }) {
  return (
    <>
      <GameStatusContainer>
        <StatusDetails>
          <StatusDetailsBox>
            <TimeTitle>遊戲時間</TimeTitle>
            <TimeValue>
              {Math.floor(timePassed / 60)}:{String(timePassed % 60).padStart(2, "0")}
            </TimeValue>
          </StatusDetailsBox>
          <StatusDetailsBox>
            <ScoreTitle>累計積分</ScoreTitle>
            <ScoreValue>{String(score).padStart(3, "0")}</ScoreValue>
            {/* Invisible placeholder for calculating width */}
            <StatusDetailsBoxPlaceholder>0:00</StatusDetailsBoxPlaceholder>
          </StatusDetailsBox>
        </StatusDetails>

        <GameProgress>
          <ProgressLineContainer>
            <CompletedProgress
              style={{ width: `${((currentTask - 1) / (totalTaskCount - 1)) * 100}%` }}
            ></CompletedProgress>
            <RemainingProgress />
          </ProgressLineContainer>
          <ProgressCircleContainer>
            {[...Array(totalTaskCount).keys()]
              .map(i => i + 1)
              .map(i =>
                i === currentTask ? (
                  <CurrentProgressCircle>{i}</CurrentProgressCircle>
                ) : i < currentTask ? (
                  <ActiveProgressCircle>{i}</ActiveProgressCircle>
                ) : (
                  <InactiveProgressCircle>{i}</InactiveProgressCircle>
                )
              )}
          </ProgressCircleContainer>
        </GameProgress>
      </GameStatusContainer>
    </>
  )
}
