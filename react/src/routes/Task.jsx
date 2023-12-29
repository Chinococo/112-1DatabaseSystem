import { apiMemberTaskCreate } from "../components/API"
import Html5QrcodePlugin from "../components/Html5QrcodePlugin"
import ActivityContext from "../contexts/ActivityContext"
import DialogControllContext from "../contexts/DialogControllContext"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import TaskContext from "../contexts/TaskContext"
import WalletContext from "../contexts/WalletContext"
import { useNFTs } from "../hooks/useNFTs"
import TaskCompletedNft from "./Dialog/TaskCompletedNft"
import Button from "@mui/material/Button"
import Fab from "@mui/material/Fab"
import QrScanner from "qr-scanner"
import React, { useEffect, useLayoutEffect, useRef, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

const Div0 = styled.div`
  overflow: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const Div1 = styled.div`
  padding: 24px 27px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Div3 = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Div4 = styled.div`
  background: var(--bluebackground, linear-gradient(141deg, #64cece 0%, #7393d3 100%));
  display: flex;
  flex-direction: column;
  height: 100vh;
`

const Div5 = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Div6 = styled.div`
  width: 24px;
  margin: 17px 26px;
  height: 24px;
`

const Div7 = styled.div`
  text-align: center;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div9 = styled.div`
  height: 1000px;
  margin: 0px 16px;
  background-color: white;
  display: flex;
  flex-direction: column;
  gap: 32px;
`

const Div11 = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`

const Div12 = styled.div`
  color: #000;
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`

const Div14 = styled.div`
  color: var(--white, #fff);
  font-family: Noto Sans TC;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Div15 = styled.div`
  background: var(--bluebackground, linear-gradient(141deg, #64cece 0%, #7393d3 100%));
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

const Div16 = styled.div`
  height: 36px;
  margin: 16px 24px;
  padding: 4px;
  background-color: rgba(118, 118, 128, 0.12);
  border-radius: 8px;
  display: flex;
  flex-shrink: 0;
`

const Div17 = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 700;
`

const Div18 = styled.div`
  width: 1px;
  background-color: #8e8e93;
  margin: 9px 0;
`

const Div19 = styled.div`
  color:#90CE5F;
  font-family: Noto Sans TC;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  `
const apiConfig = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
}

function TaskQRCodePanel({ setPanelRoute, id }) {
  const videoRef = useRef()
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const taskCtx = React.useContext(TaskContext)
  const memberCtx = React.useContext(MemberContext)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const [isMemberTaskCreateSuccess, setIsMemberTaskCreateSuccess] = React.useState(false)

  // useLayoutEffect(() => {
  //   let mediaStream = null
  //   let qrScanner = null

  //     ; (async () => {
  //       const { offsetWidth: width, offsetHeight: height } = videoRef.current
  //       mediaStream = await navigator.mediaDevices.getUserMedia({ video: { width, height, facingMode: "environment" } })
  //       videoRef.current.srcObject = mediaStream
  //       videoRef.current.onloadedmetadata = videoRef.current.play

  //       qrScanner = new QrScanner(videoRef.current, result => {
  //         //*** check input that is matched. */
  //         let resultStr = String(result)
  //         const targrtTaskIndex = taskCtx.allTasks.findIndex((obj) => {
  //           return obj.id == parseInt(id)
  //         })
  //         const matchQrcode = taskCtx.allTasks[targrtTaskIndex].qrcode == resultStr ? true : false;
  //         console.log("matchQrcode: ", matchQrcode)

  //         if (matchQrcode) {
  //           //*** post create memberTask to server, genarate NFT. */
  //           const body = {
  //             "memberId": memberCtx.member["line_userId"],
  //             "qrcode": resultStr
  //           }

  //           try {
  //             apiMemberTaskCreate(body, apiConfig)
  //               .then(res => {
  //                 if (res.status == 200) {
  //                   setIsMemberTaskCreateSuccess(true);
  //                   //tasksReload();
  //                   dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, taskCompletedNft: true });
  //                 }
  //               }).catch(error => {
  //                 console.log("apiMemberTaskCreate response error: ", error);
  //               })
  //           } catch (error) {
  //             console.log("apiMemberTaskCreate FAILD: ", error);
  //           }
  //           qrScanner.pause()
  //         }
  //       })

  //       qrScanner.start()
  //     })()

  //   return () => {
  //     if (mediaStream) for (const track of mediaStream.getTracks()) track.stop()
  //     if (mediaStream) qrScanner.destroy()
  //   }
  // }, [])

  const onNewScanResult = (decodedText, decodedResult, html5QrCode) => {
    // handle decoded results here
    //setScanedData(decodedText)
    console.log("decodedText:", decodedText)
    console.log("decodedResult:", decodedResult)
    let resultStr = String(decodedText)
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == +id
    })
    const matchQrcode = taskCtx.allTasks[targrtTaskIndex].qrcode == resultStr ? true : false
    console.log("matchQrcode: ", matchQrcode)

    if (matchQrcode) {
      //*** post create memberTask to server, genarate NFT. */
      const body = {
        memberId: memberCtx.member["line_userId"],
        qrcode: resultStr,
      }

      try {
        apiMemberTaskCreate(body, apiConfig)
          .then(res => {
            if (res.status == 200) {
              setIsMemberTaskCreateSuccess(true)
              //tasksReload();
              dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, taskCompletedNft: true })
            }
          })
          .catch(error => {
            console.log("apiMemberTaskCreate response error: ", error)
          })
      } catch (error) {
        console.log("apiMemberTaskCreate FAILD: ", error)
      }
    }
    html5QrCode.stop()
    html5QrCode.clear()
  }

  return (
    <Div0>
      {/* <video style={{ height: "100%", width: "100%" }} id="html5-qrcode" ref={videoRef} /> */}
      <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
      <Div1>
        <Div2></Div2>
      </Div1>
    </Div0>
    
  )
}

function EnterPassPanel({ setPanelRoute, id }) {
  const [pass, setPass] = useState("")
  const [isMemberTaskCreateSuccess, setIsMemberTaskCreateSuccess] = React.useState(false)
  const taskCtx = React.useContext(TaskContext)
  const memberCtx = React.useContext(MemberContext)
  const walletCtx = React.useContext(WalletContext)
  const dialogControllCtx = React.useContext(DialogControllContext)

  const { fetchNFTs } = useNFTs()

  function EnterPass(pass) {
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    const matchQrcode = taskCtx.allTasks[targrtTaskIndex].qrcode == String(pass) ? true : false
    if (matchQrcode) {
      //*** post create memberTask to server, genarate NFT. */
      const body = {
        memberId: memberCtx.member["line_userId"],
        qrcode: String(pass),
      }

      try {
        apiMemberTaskCreate(body, apiConfig)
          .then(res => {
            if (res.status == 200) {
              setIsMemberTaskCreateSuccess(true)
              //tasksReload();
              fetchNFTs(walletCtx.wallet.solAccount_pubkey, nfts => {
                console.log("nfts: ", nfts)
                let wallet = { ...walletCtx.wallet, nfts: nfts }
                walletCtx.setWallet(wallet)
                storage.set("wallet", wallet)
                setIsNftsApiCompleted(true)
              })
              dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, taskCompletedNft: true })
            }
          })
          .catch(error => {
            console.log("apiMemberTaskCreate response error: ", error)
          })
      } catch (error) {
        console.log("apiMemberTaskCreate FAILD: ", error)
      }
    } else {
      console.log("not pass")
    }
  }

  return (
    <Div0>
      <Div3>
        {/* https://stackoverflow.com/a/67388472/11077662 */}
        <input
          placeholder="PASS"
          style={{
            ...{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "700",
              letterSpacing: "-0.24px",
              border: 0,
              textAlign: "center",
              width: "100%",
              backgroundColor: "transparent",
            },
            ...(pass.length == 0 ? { color: "#DADADA" } : {}),
          }}
          value={pass}
          onChange={event => setPass(event.target.value)}
          onKeyDown={({ key }) => {
            if (key == "Enter") {
              //alert(pass)
              console.log(pass)
              EnterPass(pass)
            }
          }}
        />
      </Div3>
      <Div1>
        <Div2></Div2>
      </Div1>
    </Div0>
  )
}

const Div2 = styled(Div7)`
  color: #c4c4c4;
  font-size: 15px;
`

const Div8 = styled(Div7)`
  margin: 17px 0px;
  color: var(--white, #fff);
  font-size: 16px;
  font-style: normal;
`

const Div10 = styled(Div12)`
  margin: 32px 32px 0 32px;
`

const Div13 = styled(Div12)`
  margin: 0px 32px;
`

export default function Task() {
  const [page, setPage] = React.useState(
    /** @type {ReturnType<typeof useState<"task_describe" | "task_game" | "task_result" | "task_verify">>} */ "task_describe"
  )

  return (
    <>
      {page == "task_describe" && <TaskDescribe setPage={setPage} />}
      {page == "task_game" && <TaskGame setPage={setPage} />}
      {page == "task_verify" && <TaskVerify setPage={setPage} />}
      {page == "task_result" && <TaskGameResult setPage={setPage} />}
    </>
  )
}

function TaskDescribe({ setPage }) {
  const { id } = useParams()
  const nav = useNavigate()
  const [targetTask, setTargetTask] = React.useState({ pictureUrl: "" })
  const taskCtx = React.useContext(TaskContext)

  const handleClose = () => {
    nav(-1)
  }

  const buttonClick = () => {
    nav(`/game-info-text/${id}`)
  }

  React.useLayoutEffect(() => {
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    setTargetTask(taskCtx.allTasks[targrtTaskIndex])
  }, [])

  return (
    <>
      <Div4>
        <Div5>
          <Div6 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </Div6>
          <Div8>任務說明</Div8>
          <Div6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                fill="white"
              />
            </svg>
          </Div6>
        </Div5>
        <div
          style={{
            ...{
              height: "102px",
              margin: "0px 16px",
              //padding: "4px",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              flexShrink: "0",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
            },
            ...(targetTask.pictureUrl != undefined ? { backgroundImage: `url("${targetTask.pictureUrl}")` } : {}),
          }}
        >
          {targetTask.name}
        </div>
        <Div9>
          <Div10>
            任務目標
            <Div11>
              玩家需要通過完成一系列有趣的障礙接力任務，每個任務都要求玩家在特定情境下克服障礙並順利將接力棒傳遞給下一位隊友。隨著任務的進行，難度和趣味性將不斷提高。
            </Div11>
          </Div10>
          <Div13>
            任務規則
            <Div11>
              每隊由若干名玩家組成，並按照固定順序進行接力。 接力隊伍需在遊戲開始前，自行設計一個有趣的隊名。
              每個任務的障礙和情境將由主持人提前設定，並在比賽開始前進行公佈。
              每位玩家完成任務後，需要用指定的方式將接力棒轉交給下一位隊友，並在指定區域進行交接。
              若在任務過程中違反規則，將會有相應的懲罰或必須重新進行任務。
            </Div11>
          </Div13>
          <Div13>
            任務完成判定標準
            <Div11>
              遊戲的勝利隊伍將根據整體完成所有任務所用的時間來進行排名。完成所有任務所用時間越短的隊伍排名越高。
            </Div11>
          </Div13>
        </Div9>
      </Div4>
      <Fab
        style={{
          margin: "5px 16px 48px",
          display: "flex",
          padding: "16px 64px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "12px",
          background: "var(--green, #90CE5F)",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
          bottom: "0px",
          width: "calc(100% - 32px)",
          position: "absolute",
        }}
        onClick={buttonClick}
      >
        <Div14>開始遊戲</Div14>
      </Fab>
    </>
  )
}

function TaskGame({ setPage }) {
  const { id } = useParams()
  const nav = useNavigate()
  const [targetTask, setTargetTask] = React.useState({ pictureUrl: "" })
  const taskCtx = React.useContext(TaskContext)

  React.useLayoutEffect(() => {
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    setTargetTask(taskCtx.allTasks[targrtTaskIndex])
  }, [])

  const buttonClick = () => {
    setPage("task_result")
  }

  const handleClose = () => {
    nav(-1)
  }

  return (
    <>
      <Div4>
        <Div5>
          <Div6 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </Div6>
          <Div8>遊戲體驗</Div8>
          <Div6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                fill="white"
              />
            </svg>
          </Div6>
        </Div5>
        <div
          style={{
            ...{
              height: "102px",
              margin: "0px 16px",
              //padding: "4px",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              flexShrink: "0",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
            },
            ...(targetTask.pictureUrl != undefined ? { backgroundImage: `url("${targetTask.pictureUrl}")` } : {}),
          }}
        >
          {targetTask.name}
        </div>
        <Div9></Div9>
      </Div4>
      <Fab
        style={{
          margin: "5px 16px 48px",
          display: "flex",
          padding: "16px 64px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "12px",
          background: "var(--green, #90CE5F)",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
          bottom: "0px",
          width: "calc(100% - 32px)",
          position: "absolute",
        }}
        onClick={buttonClick}
      >
        <Div14>任務完成</Div14>
      </Fab>
    </>
  )
}

function TaskGameResult({ setPage }) {
  const { id } = useParams()
  const nav = useNavigate()
  const [targetTask, setTargetTask] = React.useState({ pictureUrl: "" })
  const taskCtx = React.useContext(TaskContext)

  React.useLayoutEffect(() => {
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    setTargetTask(taskCtx.allTasks[targrtTaskIndex])
  }, [])

  const buttonClick = () => {
    setPage("task_verify")
  }

  const handleClose = () => {
    nav(-1)
  }

  return (
    <>
      <Div4>
        <Div5>
          <Div6 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </Div6>
          <Div8>遊戲結果</Div8>
          <Div6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                fill="white"
              />
            </svg>
          </Div6>
        </Div5>
        <div
          style={{
            ...{
              height: "102px",
              margin: "0px 16px",
              //padding: "4px",
              borderRadius: "8px 8px 0 0",
              display: "flex",
              flexShrink: "0",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
            },
            ...(targetTask.pictureUrl != undefined ? { backgroundImage: `url("${targetTask.pictureUrl}")` } : {}),
          }}
        >
          {targetTask.name}
        </div>
        <Div9></Div9>
      </Div4>
      <Fab
        style={{
          margin: "5px 16px 48px",
          display: "flex",
          padding: "16px 64px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          borderRadius: "12px",
          background: "var(--green, #90CE5F)",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
          bottom: "0px",
          width: "calc(100% - 32px)",
          position: "absolute",
        }}
        onClick={buttonClick}
      >
        <Div14>任務完成驗證</Div14>
      </Fab>
    </>
  )
}

function TaskVerify({ setPage }) {
  const { id } = useParams()
  const nav = useNavigate()
  const [targetTask, setTargetTask] = React.useState({ pictureUrl: "" })
  const taskCtx = React.useContext(TaskContext)

  const [panelRoute, setPanelRoute] = /** @type {ReturnType<typeof useState<"scan_qr_code" | "enter_pass">>} */ (
    useState("scan_qr_code")
  )

  React.useLayoutEffect(() => {
    const targrtTaskIndex = taskCtx.allTasks.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    setTargetTask(taskCtx.allTasks[targrtTaskIndex])
  }, [])

  const buttonClick = () => {
    setPage("task_result")
  }

  const handleClose = () => {
    nav(-1)
  }

  return (
    <>
      <TaskCompletedNft targetTask={targetTask} />
      <Div15>
        <Div5>
          <Div6 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </Div6>
          <Div8>任務完成驗證</Div8>
          <Div6>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                fill="white"
              />
            </svg>
          </Div6>
        </Div5>
        <div
          style={{
            ...{
              height: "102px",
              margin: "0px 16px",
              //padding: "4px",
              borderRadius: "8px",
              display: "flex",
              flexShrink: "0",
              color: "white",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              fontFamily: "Montserrat",
              fontSize: "32px",
              fontStyle: "normal",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
            },
            ...(targetTask.pictureUrl != undefined ? { backgroundImage: `url("${targetTask.pictureUrl}")` } : {}),
          }}
        >
          {targetTask.name}
        </div>
        <Div16>
          <Div17
            style={{
              ...(panelRoute == "scan_qr_code"
                ? {
                    borderRadius: "6.93px",
                    border: "0.5px solid rgba(0, 0, 0, 0.04)",
                    background: "#FFF",
                    boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                  }
                : {}),
            }}
            onClick={() => setPanelRoute("scan_qr_code")}
          >
            掃描 QR code
          </Div17>
          {panelRoute == "scan_qr_code" && panelRoute == "enter_pass" ? <Div18></Div18> : null}
          <Div17
            style={{
              ...(panelRoute == "enter_pass"
                ? {
                    borderRadius: "6.93px",
                    border: "0.5px solid rgba(0, 0, 0, 0.04)",
                    background: "#FFF",
                    boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                  }
                : {}),
            }}
            onClick={() => setPanelRoute("enter_pass")}
          >
            輸入 PASS 碼
          </Div17>
        </Div16>

        <div
          style={{
            ...{
              overflow: "auto",
              display: "flex",
              flexDirection: "column",
              flexGrow: 1,
            },
            // ...(panelRoute == "join_activity" ? { paddingBottom: "24px", gap: "24px" } : {}),
          }}
        >
          {panelRoute == "scan_qr_code" ? (
            <TaskQRCodePanel setPanelRoute={setPanelRoute} id={id} />
          ) : (
            <EnterPassPanel setPanelRoute={setPanelRoute} id={id} />
          )}
        </div>
        <Button
          style={{
            margin: "5px 16px 48px",
            display: "flex",
            padding: "16px 64px",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            borderRadius: "6px",
            border:"1px solid #90CE5F",
            backgroundColor: "white",
            boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            bottom: "0px",
          }}
          onClick={buttonClick}
        >
          <Div19>返回遊戲說明</Div19>
        </Button>
      </Div15>
    </>
  )
}
