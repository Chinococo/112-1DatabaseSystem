import * as React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import TaskContext from "../contexts/TaskContext"
import title from "../img/title.png"

export default function BeginningOfGame(props) {
  const navigate = useNavigate()
  const taskCtx = React.useContext(TaskContext)
  const task = taskCtx.tasks.find(item => item.id === props.id)

  React.useEffect(() => {
    console.log("task資料啊啊啊啊:", task)
    console.log("rules::::::", task.taskRules)
    console.log(
      "task.taskRules.replace(/[|]|'/g, '').split(',')::::::",
      task.taskRules.replace(/\[|\]|'/g, "").split(","),
    )
  }, [])

  return (
    <Div>
      <Div2>
        <Img loading="lazt" src={props.pictureUrl} />
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={props.onClose}
          style={{ position: "absolute", top: 0, margin: "1rem" }}
        >
          <rect width="24" height="24" rx="12" fill="white" />
          <path
            d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
            fill="black"
          />
        </svg>
      </Div2>
      <Div4>
        <Div5>
          <Div6>
            <Div7>任務目標</Div7>
            <Div8>
              {task.taskTarget === null
                ? "任務目標"
                : task.taskTarget.split(/\r\n/).map(item => {
                    return <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{item.trim()}</p>
                  })}
            </Div8>
          </Div6>
          <Div9>
            <Div10>任務規則</Div10>
            <Div11>
              <ul>
                {task.taskRules === null
                  ? "任務規則"
                  : task.taskRules
                      .replace(/\[|\]|'/g, "")
                      .split(",")
                      .map(item => {
                        return <li>{item}</li>
                      })}
              </ul>
            </Div11>
          </Div9>
          <Div6>
            <Div7>任務完成判定標準</Div7>
            <Div8>
              {task.taskCompletionCriteria === null
                ? "任務完成判定標準"
                : task.taskCompletionCriteria.split(/\r\n/).map(item => {
                    return <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{item.trim()}</p>
                  })}
            </Div8>
          </Div6>
          <Div9>
            <Div7>任務完成獎勵</Div7>
            <Div8>
              {task.taskRewards === null
                ? "任務完成判定標準"
                : task.taskRewards
                    .split(/\r\n/)
                    .map(word => <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>)}
            </Div8>
          </Div9>
        </Div5>
      </Div4>

      <Button
        disabled={task.isRegistered === 1 ? false : true}
        onClick={() => {
          navigate(`/task-verify/${props.id}`)
        }}
        style={{
          position: "absolute",
          width: "100%",
          bottom: 0,
          background: task.isRegistered === 1 ? "#90ce5f" : "#757575",
          borderRadius: "0px 0px 12px 12px",
        }}
      >
        <Div13>{task.isRegistered === 1 ? "關主驗證" : "無法參加"}</Div13>
      </Button>
    </Div>
  )
}

const Div = styled.div`
  position: relative;
  width: 360px;
  display: flex;
  flex-direction: column;
`

const Div2 = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
`

const Img = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const Img2 = styled.img`
  aspect-ratio: 1;
  position: absolute;
  top: 20px;
  left: 20px;
  width: 24px;
  overflow: hidden;
  align-self: start;
  max-width: 100%;
`

const Div3 = styled.div`
  position: relative;
  color: #fff;
  text-align: center;
  align-self: center;
  margin-top: 4px;
  white-space: nowrap;
  font:
    700 24px/133% Montserrat,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div4 = styled.div`
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  align-self: stretch;
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 0px 0px 12px 12px;
`

const Div5 = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
  overflow-y: scroll;
  height: 400px;
  padding: 30px 32px;
  margin-bottom: 4rem;
`

const Div6 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  flex-direction: column;
`

const Div7 = styled.div`
  color: var(--, #000);
  text-align: left;
  align-self: stretch;
  white-space: nowrap;
  font:
    700 18px/133% Montserrat,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div8 = styled.div`
  align-self: stretch;
  color: var(--, #000);
  margin-top: 8px;
  font:
    500 14px/143% Montserrat,
    sans-serif;
`

const Div9 = styled.div`
  align-items: flex-start;
  align-self: stretch;
  display: flex;
  margin-top: 25px;
  flex-grow: 1;
  flex-direction: column;
`

const Div10 = styled.div`
  color: var(--, #000);
  text-align: left;
  align-self: stretch;
  white-space: nowrap;
  font:
    700 18px/133% Montserrat,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`

const Div11 = styled.div`
  align-self: stretch;
  color: var(--, #000);
  font:
    500 14px/143% Montserrat,
    sans-serif;
`

const Div12 = styled.div`
  color: #fcfcfe;
  text-align: center;
  align-self: center;
  white-space: nowrap;
  margin: 23px 0;
  font:
    700 24px/133% Montserrat,
    sans-serif;
  @media (max-width: 991px) {
    white-space: initial;
  }
`
const Div13 = styled.div`
  color: #fcfcfe;
  width: 96px;
  height: 32px;
  /* H2 */
  font-family: Montserrat;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`
const Button = styled.button`
  display: flex;
  padding: 24px 85px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 0px 0px 12px 12px;
  border: 0px solid #000000;
  color: #fcfcfe;
  text-align: center;
`
