import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React, { useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

import Html5QrcodePlugin from "../components/Html5QrcodePlugin"
import ActivityContext from "../contexts/ActivityContext"
import DialogControllContext from "../contexts/DialogControllContext"
import FavoriteContext from "../contexts/FavoriteContext"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import SelectedActivityContext from "../contexts/SelectedActivityContext"
import { useFavorite } from "../hooks/useFavorite"
import { useTasks } from "../hooks/useTasks"
import ActivityLoading from "./Dialog/ActivityLoading"
import ActivityLoading_newVer from "./Dialog/ActivityLoading_Public"
import JoinSuccess from "./Dialog/JoinSuccess"
import JoinSuccess_newVer_team from "./Dialog/JoinSuccess_newVer_team"
import Rejoin from "./Dialog/Rejoin"

const Div0 = styled.div`
  margin: 16px 0px 0px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`

const Div1 = styled.div`
  font-size: 32px;
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: -0.24px;
`

const Div2 = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`

const Div3 = styled.div`
  color: #c4c4c4;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: -0.24px;
`

const Div4 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 0 23px;
  column-gap: 20px;
  row-gap: 4px;
`

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const Img0 = styled.img`
  width: 100%;
  aspect-ratio: 16 / 9;
  border-radius: 12px;
  object-fit: cover;
`

const Div6 = styled.div`
  font-size: 13px;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div7 = styled.div`
  overflow: auto;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
`

const Div8 = styled.div`
  width: 100%;
`

const Div9 = styled.div`
  padding: 24px 27px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Div10 = styled.div`
  color: #c4c4c4;
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div11 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 8px;
  border-radius: 8px;
  background: #ebebeb;
`

const Div12 = styled.div`
  font-family: Montserrat;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.24px;
`

const Div13 = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  justify-content: center;
`

const Div14 = styled.div`
  display: flex;
  margin: 24px 24px 0px;
  justify-content: space-between;
  align-items: center;
`

const Div15 = styled.div`
  color: #000;
  text-align: center;
  font-family: PressStart2P;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-transform: uppercase;
`

const Div16 = styled.div`
  align-items: center;
  height: 36px;
  margin: 0px 24px;
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
  height: auto;
  background-color: #8e8e93;
  margin: 5px 0;
`

const Line = styled.div`
  width: 0.971px;
  height: 18px;
  flex-shrink: 0;
  border-radius: 0.5px;
  opacity: 0.3;
  background: #8e8e93;
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

function JoinActivityPanel() {
  const nav = useNavigate()
  let memberNumberChecked = false
  let [storeActivities, setStoreActivities] = React.useState([])
  const [id, setId] = useState(0)
  const activityCtx = React.useContext(ActivityContext)

  const memberCtx = React.useContext(MemberContext)
  const [activity, setActivity] = React.useState({})
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const FavoriteCtx = React.useContext(FavoriteContext)
  const { fetchFavorite } = useFavorite()

  React.useEffect(() => {
    console.log("memberContext.member.line_userId: ", memberCtx.member.line_userId)
    if (memberCtx.member.line_userId !== null && memberCtx.member.line_userId !== "") {
      async function getFavorite() {
        fetchFavorite(memberCtx.member.line_userId, favorites => {
          FavoriteCtx.setFavoriteList(favorites)
          storage.set("favorites", favorites)
          var arr = []
          favorites.forEach(function (favorite) {
            arr.push(activityCtx.activityList.find(activity => activity.id === favorite))
          })
          setStoreActivities(arr)
          console.log("arr: ", arr)
        })
      }
      getFavorite()
    }
  }, [memberCtx.member])

  function selectActivity(key, id) {
    console.log("button click")
    console.log("id: ", id)
    setId(id)
    // console.log("props.act: ", props.act)
    const activityIndex = activityCtx.activityList.findIndex(obj => {
      return obj.id == parseInt(id)
    })
    console.log("activityIndex: ", activityIndex)
    console.log("button click")
    // console.log("props.act: ", props.act)
    selectedActivityCtx.setActivity(activityCtx.activityList[activityIndex])
    console.log("selectedActivityCtx: ", selectedActivityCtx.activity)
    const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
      return obj.activityId == activityCtx.activityList[activityIndex].id
    })
    if (isActivityJoinedIndex == -1) {
      if (selectedActivityCtx.activity.publish == 0) {
        dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
      } else {
        dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading_public: true })
      }
      console.log(dialogControllCtx.dialogControll)
    } else {
      dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
    }
  }

  return (
    <>
      <ActivityLoading_newVer key={id} />
      <Div0>
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="32" viewBox="0 0 33 32" fill="none">
          <g id="ticket">
            <path
              id="Vector"
              d="M21.2734 22.4L16.5001 19.3334L11.7267 22.4L13.1667 16.9067L8.78008 13.3334L14.4467 12.9867L16.5001 7.73337L18.5534 12.9867L24.2201 13.3334L19.8334 16.9067M27.1667 16C27.1667 14.52 28.3667 13.3334 29.8334 13.3334V8.00004C29.8334 6.52004 28.6334 5.33337 27.1667 5.33337H5.83341C5.12617 5.33337 4.44789 5.61433 3.9478 6.11442C3.4477 6.61452 3.16675 7.2928 3.16675 8.00004V13.3334C4.64675 13.3334 5.83341 14.5334 5.83341 16C5.83341 16.7073 5.55246 17.3856 5.05237 17.8857C4.55227 18.3858 3.87399 18.6667 3.16675 18.6667V24C3.16675 24.7073 3.4477 25.3856 3.9478 25.8857C4.44789 26.3858 5.12617 26.6667 5.83341 26.6667H27.1667C27.874 26.6667 28.5523 26.3858 29.0524 25.8857C29.5525 25.3856 29.8334 24.7073 29.8334 24V18.6667C29.1262 18.6667 28.4479 18.3858 27.9478 17.8857C27.4477 17.3856 27.1667 16.7073 27.1667 16Z"
              fill="black"
            />
          </g>
        </svg>
        <Div1>已儲存的活動</Div1>
      </Div0>
      <Div2>
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
          <g id="history">
            <path
              id="Vector"
              d="M11.7502 6.66667H10.5002V10.8333L14.0668 12.95L14.6668 11.9417L11.7502 10.2083V6.66667ZM11.3335 2.5C9.34437 2.5 7.43672 3.29018 6.03019 4.6967C4.62367 6.10322 3.8335 8.01088 3.8335 10H1.3335L4.6335 13.3583L8.00016 10H5.50016C5.50016 8.4529 6.11474 6.96917 7.20871 5.87521C8.30267 4.78125 9.7864 4.16667 11.3335 4.16667C12.8806 4.16667 14.3643 4.78125 15.4583 5.87521C16.5522 6.96917 17.1668 8.4529 17.1668 10C17.1668 11.5471 16.5522 13.0308 15.4583 14.1248C14.3643 15.2188 12.8806 15.8333 11.3335 15.8333C9.72516 15.8333 8.26683 15.175 7.21683 14.1167L6.0335 15.3C7.39183 16.6667 9.25016 17.5 11.3335 17.5C13.3226 17.5 15.2303 16.7098 16.6368 15.3033C18.0433 13.8968 18.8335 11.9891 18.8335 10C18.8335 8.01088 18.0433 6.10322 16.6368 4.6967C15.2303 3.29018 13.3226 2.5 11.3335 2.5Z"
              fill="#C4C4C4"
            ></path>
          </g>
        </svg>
        <Div3>最近參加</Div3>
      </Div2>
      <Div2>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <g id="tray-arrow-down">
            <path
              id="Vector"
              d="M10.0173 17.868L8.85733 16.812C4.73733 13.076 2.01733 10.604 2.01733 7.58799C2.01733 5.11599 3.95333 3.18799 6.41733 3.18799C7.80933 3.18799 9.14533 3.83599 10.0173 4.85199C10.8893 3.83599 12.2253 3.18799 13.6173 3.18799C16.0813 3.18799 18.0173 5.11599 18.0173 7.58799C18.0173 10.604 15.2973 13.076 11.1773 16.812L10.0173 17.868Z"
              fill="#C4C4C4"
            />
          </g>
        </svg>
        <Div3>收藏捷徑</Div3>
      </Div2>
      <Div4>
        {storeActivities.map(
          (actObj, index) =>
            actObj?.isActiviated == 1  && (
              //<Link to={`/activityLoading/${index}`} key={id} style={{ color: "black", textDecoration: "none" }}>
              <Div5
                key={actObj?.id}
                onClick={() => {
                  //selectActivity(index)
                  selectActivity(actObj, actObj?.id)
                }}
              >
                {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={actObj?.picture} />}
                <Div6>{actObj?.name}</Div6>
              </Div5>
            ),
            //</Link>
        )}
      </Div4>
    </>
  )
}

let stopScan = false

function QRCodePanel({ setPanelRoute }) {
  const videoRef = useRef()
  //const videoRef = React.createRef()
  const [qrS, setQrS] = useState()
  const nav = useNavigate()
  const location = useLocation()
  const { fetchTasks } = useTasks()
  const [isScannerPause, setIsScannerPause] = React.useState(false)
  const [scanedData, setScanedData] = React.useState("")
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const activityCtx = React.useContext(ActivityContext)

  const closeCam = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: true,
    })
    stream.getTracks().forEach(function (track) {
      track.stop()
      track.enabled = false
    })
    videoRef.current.stop()
  }

  const onNewScanResult = (decodedText, decodedResult, html5QrCode) => {
    console.log("decodedText:", decodedText)

    let resultStr = String(decodedText)
    if (resultStr.includes("/activity/")) {
      console.log("decodedResult:", decodedResult)
      let ActivityId = resultStr.replace("/activity/", "")
      if (parseInt(ActivityId) != NaN) {
        const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
          return obj.activityId == parseInt(ActivityId)
        })
        const activityIndex = activityCtx.activityList.findIndex(obj => {
          return obj.id == parseInt(ActivityId)
        })
        if (isActivityJoinedIndex == -1 && activityIndex != -1) {
          selectedActivityCtx.setActivity(activityCtx.activityList[activityIndex])
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
          console.log("NOT REGISTER ACTIVITY!")
          videoRef.current.stop()
        } else if (activityIndex != -1) {
          selectedActivityCtx.setActivity(activityCtx.activityList[activityIndex])
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
          videoRef.current.stop()
        } else {
          console.log("PLEASE check your text, promise it is available")
        }
        html5QrCode.stop()
        html5QrCode.clear()
      }
    } else if (resultStr.includes("/task/")) {
      let TaskId = resultStr.replace("/task/", "")
      console.log("TaskId:", TaskId)
      if (parseInt(TaskId) != NaN) {
        console.log("parseInt(TaskId) != NaN")
        let targetActivityIndex = -1
        for (let activity of activityCtx.activityList) {
          let taskIds = activity.taskId //object list
          taskIds = taskIds.replaceAll("{", "")
          taskIds = taskIds.replaceAll("}", "")
          taskIds = taskIds.split(",")
          if (taskIds.includes(TaskId)) {
            targetActivityIndex = activity.id
            fetchTasks(parseInt(activityCtx.activityList[targetActivityIndex].id))
            break
          }
        }
        console.log("targetActivityIndex: ", targetActivityIndex)
        if (targetActivityIndex != -1) {
          //fetchTasks(parseInt(activityCtx.activityList[targetActivityIndex].id))
          let isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
            return obj.activityId == parseInt(activityCtx.activityList[targetActivityIndex].id)
          })
          //if (isActivityJoinedIndex != -1) {
          console.log("in /task/ isActivityJoinedIndex != -1 ...")
          //fetchTasks(parseInt(activityCtx.activityList[targetActivityIndex].id))
          setTimeout(() => {
            nav(`/task/${parseInt(TaskId)}`)
          }, 600)
          html5QrCode.stop()
          html5QrCode.clear()
          //videoRef.current.stop()
          console.log("after nav")
          //}
        }
      }
    }
  }

  return (
    <Div7>
      {/* <video style={{ flexGrow: "1", width: "100%" }} id="html5-qrcode" ref={videoRef} autoPlay muted playsInline /> */}
      <Div8>
        {scanedData == ""
          ? dialogControllCtx.dialogControll.bottomPanel == true && (
              <Html5QrcodePlugin fps={10} qrbox={250} disableFlip={false} qrCodeSuccessCallback={onNewScanResult} />
            )
          : null}
      </Div8>
      {/* <video id="video" autoplay muted playsinline></video>
      <canvas id="canvas"></canvas> */}
      {/* {scanedData == "" ?
        <div
          style={{
            flexGrow: "1",
            width: "100%",
            flex: "0.5 1 0"
          }}
        >
          <QrReader
            ref={videoRef}
            ViewFinder={ScanOverlay}
            scanDelay={1000}
            onResult={
              (result, error) => {
                if (!!result) {
                  handleScan(result?.text)
                  //setResult(result?.text);
                }

                if (!!error) {
                  handleError(error);
                  //console.info(error);
                }
              }
            }
            videoStyle={{ objectFit: "cover" }}
            constraints={{ facingMode: "environment" }}
          />
        </div>
        :
        null
      } */}
      <Div9>
        <Div10>Or</Div10>
        <Div11 onClick={() => setPanelRoute("join_activity")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g id="ticket">
              <path
                id="Vector"
                d="M16.08 16.8L12.5 14.5L8.92 16.8L10 12.68L6.71 10L10.96 9.74L12.5 5.8L14.04 9.74L18.29 10L15 12.68M20.5 12C20.5 10.89 21.4 10 22.5 10V6C22.5 4.89 21.6 4 20.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V10C3.61 10 4.5 10.9 4.5 12C4.5 12.5304 4.28929 13.0391 3.91421 13.4142C3.53914 13.7893 3.03043 14 2.5 14V18C2.5 18.5304 2.71071 19.0391 3.08579 19.4142C3.46086 19.7893 3.96957 20 4.5 20H20.5C21.0304 20 21.5391 19.7893 21.9142 19.4142C22.2893 19.0391 22.5 18.5304 22.5 18V14C21.9696 14 21.4609 13.7893 21.0858 13.4142C20.7107 13.0391 20.5 12.5304 20.5 12Z"
                fill="black"
              ></path>
            </g>
          </svg>
          <Div12>選擇已儲存的活動</Div12>
        </Div11>
      </Div9>
    </Div7>
  )
}

function EnterPINPanel({ setPanelRoute }) {
  const [pin, setPin] = useState("")
  const nav = useNavigate()
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const activityCtx = React.useContext(ActivityContext)
  const dialogControllCtx = React.useContext(DialogControllContext)

  function EnterPin(pin) {
    let resultStr = String(pin)
    const activityIndex = activityCtx.activityList.findIndex(({ code }) => code == pin)

    if (activityIndex !== -1) {
      selectedActivityCtx.setActivity(activityCtx.activityList[activityIndex])
      const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(({ code }) => code == pin)

      if (isActivityJoinedIndex !== -1) {
        if (selectedActivityCtx.activity.publish == 0) {
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
        } else {
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading_public: true })
        }
        console.log(dialogControllCtx.dialogControll)
      } else {
        dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
      }
    } else if (resultStr.includes("/activity/")) {
      let ActivityId = resultStr.replace("/activity/", "")
      if (parseInt(ActivityId) != NaN) {
        const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
          return obj.activityId == parseInt(ActivityId)
        })
        const registerActivityIndex = activityCtx.activityList.findIndex(obj => {
          return obj.id == parseInt(ActivityId)
        })
        selectedActivityCtx.setActivity(activityCtx.activityList[registerActivityIndex])
        console.log("activity: ", activityCtx.activityList[registerActivityIndex])
        console.log("selectedActivityCtx: ", selectedActivityCtx.activity)
        console.log("dialogControllCtx: ", dialogControllCtx.dialogControll)
        if (isActivityJoinedIndex == -1) {
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
          console.log("NOT REGISTER ACTIVITY!")
          console.log("dialogControllCtx: ", dialogControllCtx.dialogControll)
        } else {
          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
        }
      }
      dialogControllCtx.setDialogControll({
        ...dialogControllCtx.dialogControll,
        joinSuccess: true,
        activityLoading: false,
      })
    } else if (resultStr.includes("/task/")) {
      let TaskId = resultStr.replace("/task/", "")
      console.log("TaskId:", TaskId)
      if (parseInt(TaskId) != NaN) {
        let targetActivityIndex = -1
        for (let activity of activityCtx.activityList) {
          let taskIds = activity.taskId //object list
          taskIds = taskIds.replaceAll("{", "")
          taskIds = taskIds.replaceAll("}", "")
          taskIds = taskIds.split(",")
          console.log("taskIds:", taskIds, " || type: ", typeof taskIds)
          if (taskIds.includes(TaskId)) {
            targetActivityIndex = activity.id
            break
          }
        }
        if (targetActivityIndex != -1) {
          let isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
            return obj.activityId == parseInt(activityCtx.activityList[targetActivityIndex].id)
          })
          if (isActivityJoinedIndex != -1) {
            nav(`/task/${TaskId}`)
          }
        }
      }

      dialogControllCtx.setDialogControll({
        ...dialogControllCtx.dialogControll,
        joinSuccess: true,
        activityLoading: false,
      })
    }
  }

  return (
    <Div7>
      <Div13>
        {/* https://stackoverflow.com/a/67388472/11077662 */}
        <input
          placeholder="PIN"
          style={{
            ...{
              fontFamily: "Montserrat",
              fontSize: "48px",
              fontWeight: "700",
              letterSpacing: "-0.24px",
              border: 0,
              textAlign: "center",
              width: "100%",
            },
            ...(pin.length == 0 ? { color: "#DADADA" } : {}),
          }}
          value={pin}
          onChange={event => setPin(event.target.value)}
          onKeyDown={({ key }) => {
            if (key == "Enter") {
              //alert(pin)
              EnterPin(pin)
            }
          }}
        />
      </Div13>
      <Div9>
        <Div10>Or</Div10>
        <Div11 onClick={() => setPanelRoute("join_activity")}>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <g id="ticket">
              <path
                id="Vector"
                d="M16.08 16.8L12.5 14.5L8.92 16.8L10 12.68L6.71 10L10.96 9.74L12.5 5.8L14.04 9.74L18.29 10L15 12.68M20.5 12C20.5 10.89 21.4 10 22.5 10V6C22.5 4.89 21.6 4 20.5 4H4.5C3.96957 4 3.46086 4.21071 3.08579 4.58579C2.71071 4.96086 2.5 5.46957 2.5 6V10C3.61 10 4.5 10.9 4.5 12C4.5 12.5304 4.28929 13.0391 3.91421 13.4142C3.53914 13.7893 3.03043 14 2.5 14V18C2.5 18.5304 2.71071 19.0391 3.08579 19.4142C3.46086 19.7893 3.96957 20 4.5 20H20.5C21.0304 20 21.5391 19.7893 21.9142 19.4142C22.2893 19.0391 22.5 18.5304 22.5 18V14C21.9696 14 21.4609 13.7893 21.0858 13.4142C20.7107 13.0391 20.5 12.5304 20.5 12Z"
                fill="black"
              ></path>
            </g>
          </svg>
          <Div12>選擇已儲存的活動</Div12>
        </Div11>
      </Div9>
    </Div7>
  )
}

export default function BottomPanel() {
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const activityCtx = React.useContext(ActivityContext)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const [panelRoute, setPanelRoute] =
    /** @type {ReturnType<typeof useState<"join_activity" | "scan_qr_code" | "enter_pin">>} */ (
      useState("join_activity")
    )
  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, bottomPanel: false })
  }

  return (
    <Dialog
      open={dialogControllCtx.dialogControll.bottomPanel}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      //aria-describedby="alert-dialog-slide-description"
      aria-labelledby="customized-dialog-title"
      //fullWidth="true"
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            margin: "24px 0px 0px 0px",
            width: "100%",
            top: "70px",
            bottom: "0px",
            position: "absolute",
            borderRadius: "32px 32px 0px 0px",
            gap: "24px",
          },
        },
      }}
    >
      <ActivityLoading />
      <JoinSuccess />
      <Rejoin />

      <JoinSuccess_newVer_team />
      <Div14>
        <Link
          //to="/"
          onClick={handleClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <g id="close">
              <path
                id="Vector"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="black"
              ></path>
            </g>
          </svg>
        </Link>
        <Div15>Join Activity</Div15>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <g id="help-circle">
            <path
              id="Vector"
              d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
              fill="black"
            ></path>
          </g>
        </svg>
      </Div14>
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
        <Line></Line>
        {panelRoute == "scan_qr_code" || panelRoute == "enter_pin" ? <Div18></Div18> : null}
        <Div17
          style={{
            ...(panelRoute == "enter_pin"
              ? {
                  borderRadius: "6.93px",
                  border: "0.5px solid rgba(0, 0, 0, 0.04)",
                  background: "#FFF",
                  boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                }
              : {}),
          }}
          onClick={() => setPanelRoute("enter_pin")}
        >
          輸入 PIN 碼
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
          ...(panelRoute == "join_activity" ? { paddingBottom: "24px", gap: "24px" } : {}),
        }}
      >
        {panelRoute == "join_activity" ? (
          <JoinActivityPanel />
        ) : panelRoute == "scan_qr_code" ? (
          <QRCodePanel setPanelRoute={setPanelRoute} />
        ) : (
          <EnterPINPanel setPanelRoute={setPanelRoute} />
        )}
      </div>
    </Dialog>
  )
}
