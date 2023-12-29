import { Dialog } from "@mui/material"
import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import PropTypes from "prop-types"
import React from "react"
import { BiTimeFive } from "react-icons/bi"
import { BsLink45Deg } from "react-icons/bs"
import { FaLocationDot } from "react-icons/fa6"
import { IoMdCall } from "react-icons/io"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

import { apiMemberTaskList, apiTaskList, apiTaskView } from "../components/API"
import ActivityContext from "../contexts/ActivityContext"
import DialogControllContext from "../contexts/DialogControllContext"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import TaskContext from "../contexts/TaskContext"
import { useTasks } from "../hooks/useTasks"
import "../index.css"
import BeginningOfGame from "./BeginningOfGame"
import BottonBar from "./BottonBar"
import Raffle from "./Dialog/Raffle"
import Rank from "./Dialog/Rank"
import ImageViewer from "./ImageViewer"

const Div0 = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 6rem;
`

const Div1 = styled.div`
  background-color: rgba(52, 52, 52, 0.8);
  display: flex;
  height: 232px;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  align-items: end;
`

const Div2 = styled.div`
  position: fixed;
  margin-top: 10px;
  margin-right: 10px;
  padding: 12px;
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  filter: drop-shadow(1px 2px 4px rgba(0, 0, 0, 0.2));
`

const Div3 = styled.div`
  padding: 16px;
  display: flex;
  height: 152px;
  padding-bottom: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  flex-shrink: 0;
`

const Div4 = styled.div`
  color: var(--black, #000);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Div5 = styled.div`
  color: var(--black, #6d6d6d);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  width: 100%;
`

const Div6 = styled.div`
  color: var(--unnamed, #666);
  font-family: Montserrat;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  width: 302px;
`

const Div7 = styled.div`
  display: flex;
  width: 100%;
  height: 16px;
  margin-bottom: 20px;
  align-items: center;
  gap: 16px;
  flex-shrink: 0;
`

const Div8 = styled.div`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

const Div9 = styled.div`
  margin: 0 16px;
  padding: 0px 24px;
  display: flex;
  height: 82px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`

const Div10 = styled.div`
  display: flex;
  width: 72px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 12px;
  background: var(--white, #fff);
`

const Div11 = styled.div`
  width: 40px;
  height: 40px;
`

const Div13 = styled.div`
  display: flex;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Div14 = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`

const Div18 = styled.div`
  padding: 16px;
  flex-direction: column;
  align-items: left;
  align-self: stretch;
  border-radius: 12px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`

const Div15 = styled.div`
  width: 107px;
  height: 102px;
`

const Img0 = styled.img`
  border-radius: 12px 0 0 12px;
  width: 100%;
  min-width: 6.7rem;
  height: 100%;
  object-fit: cover;
`

const Div16 = styled.div`
  color: var(--black, #000);
  text-align: justify;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Checked = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: 1.8rem;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  background: #90ce5f;
  color: #fff;
  margin-right: 30px;
`

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props

  return <Div0 hidden={value !== index}>{children}</Div0>
}

const Div12 = styled(Div16)`
  font-size: 12px;
`

const Div17 = styled(Div16)`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`

const TextWrap_8count = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  max-width: 8rem;
  height: 100%;
  max-height: 2.5rem;
  text-align: -webkit-left;
`

const TextWrap_13count = styled.p`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  max-width: 12rem;
  height: 100%;
  max-height: 2.5rem;
  text-align: -webkit-left;
`

export default function Activity() {
  const [tab, setActiveTab] = React.useState(0)
  const [isZoomed, setIsZoomed] = React.useState(false)

  const { id } = useParams()
  //useTasks(id);// *** update taskCtx.tasks
  const { fetchTasks, fetchAllTasks } = useTasks()
  const dialogControllCtx = React.useContext(DialogControllContext)
  const taskCtx = React.useContext(TaskContext)
  const memberCtx = React.useContext(MemberContext)
  const activityCtx = React.useContext(ActivityContext)
  const activityIndex = activityCtx.activityList.findIndex(obj => {
    return obj.id == parseInt(id)
  })
  const [taskDialogOpen, setTaskDialogOpen] = React.useState(false)
  // const Transition = React.forwardRef(function Transition(props, ref) {
  //   return <Slide direction="up" ref={ref} {...props} />
  // })
  const [taskData, setTaskData] = React.useState({
    id: 0,
    pictureUrl: "",
  })

  const location = useLocation()

  React.useEffect(() => {
    storage.set("selectedActivityId", id)
    // fetchTasks(id)

    fetchAllTasks(alltasks => {
      taskCtx.setAllTasks(alltasks)
      storage.set("allTasks", alltasks)
    })
  }, [])

  React.useEffect(() => {
    let tempId = activityCtx.activityList[activityIndex]?.taskId
      .slice(1, -1)
      .split(",")
      .map(id => parseInt(id))

    let tempTask = taskCtx.allTasks.filter(obj => tempId.includes(obj.id))
    getMemberTaskForThisActivity(tempTask)
  }, [taskCtx.allTasks])

  async function getMemberTaskForThisActivity(tempTask) {
    let memberTasks = []

    try {
      await apiMemberTaskList(memberCtx.member.line_userId, activityIndex)
        .then(res => {
          memberTasks = res.data
        })
        .catch(error => {
          console.log("apiMemberTaskList response error: ", error)
        })
    } catch (error) {
      console.log("getTasks FAILED: ", error)
    }

    tempTask.forEach(element => {
      if (
        memberTasks
          .map(element => {
            return element.taskId
          })
          .includes(element.id)
      )
        element.isChecked = true
      else element.isChecked = false
    })

    taskCtx.setTasks(tempTask)
  }

  const handleChange = (event, newValue) => {
    setActiveTab(newValue)
  }

  const handleClickRaffle = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, raffle: true })
  }

  const handleClickRank = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rank: true })
  }

  const closeTaskDialog = () => {
    setTaskDialogOpen(false)
  }
  const nav = useNavigate()

  const ImageZoom = ({ src, alt }) => {
    const toggleZoom = () => {
      setIsZoomed(!isZoomed)
    }

    return <img src={src} alt={alt} onClick={toggleZoom} className={isZoomed ? "zoomed" : ""} />
  }

  // console.log("all activity data:::::", activityCtx.activityList[activityIndex]?.picture)

  return (
    <>
      <BottonBar location={location} />
      <Raffle />
      <Rank />
      <Div1>
        <img src={activityCtx.activityList[activityIndex]?.picture} height="232" />
        <Div2 onClick={() => nav("/")}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="white" />
            <path
              d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
              fill="black"
            />
          </svg>
        </Div2>
      </Div1>
      <Div3>
        <Div4>{activityCtx.activityList[activityIndex].name}</Div4>
        <Div5>
          {/* 元宇宙 YEP */}
          {activityCtx.activityList[activityIndex].taskIntroduction.split(/\r\n/).map(word => (
            <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
          ))}
        </Div5>
        <Div6>{/* 活動說明活動說明活動說明活動說明活動說明活動說明活動說明活動說明活動說明活動說明 */}</Div6>
        {/* <Div7>
          <Div8>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M16.0973 8.0493C16.0973 3.6034 12.4939 0 8.04863 0C3.6034 0 0 3.6034 0 8.0493C0 12.0659 2.94336 15.3956 6.79093 15.9993V10.3756H4.74775V8.04863H6.79093V6.27577C6.79093 4.25808 7.99296 3.14392 9.83088 3.14392C10.7116 3.14392 11.6326 3.30088 11.6326 3.30088V5.28168H10.6184C9.61892 5.28168 9.30701 5.90215 9.30701 6.53872V8.0493H11.5393L11.1825 10.3762H9.30701V16C13.1546 15.3963 16.0979 12.0666 16.0979 8.0493H16.0973Z"
                fill="black"
              />
            </svg>
          </Div8>
          <Div8>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M8.0979 0C5.92457 0 5.65323 0.01 4.7999 0.048C3.9479 0.088 3.3679 0.222 2.8579 0.42C2.3319 0.624 1.88523 0.898 1.44057 1.34267C0.9959 1.78733 0.721234 2.23333 0.5179 2.76C0.3199 3.27 0.185234 3.85 0.1459 4.702C0.1059 5.55533 0.0979004 5.82667 0.0979004 8C0.0979004 10.1733 0.1079 10.4447 0.1459 11.298C0.1859 12.1493 0.3199 12.73 0.5179 13.24C0.718762 13.7739 1.03363 14.2576 1.44057 14.6573C1.84009 15.0646 2.32383 15.3795 2.8579 15.58C3.36857 15.7773 3.94857 15.9127 4.7999 15.952C5.65323 15.992 5.92457 16 8.0979 16C10.2712 16 10.5426 15.99 11.3959 15.952C12.2472 15.912 12.8279 15.7773 13.3379 15.58C13.8717 15.3789 14.3553 15.0641 14.7552 14.6573C15.1626 14.2579 15.4775 13.7741 15.6779 13.24C15.8752 12.73 16.0106 12.1493 16.0499 11.298C16.0899 10.4447 16.0979 10.1733 16.0979 8C16.0979 5.82667 16.0879 5.55533 16.0499 4.702C16.0099 3.85067 15.8752 3.26933 15.6779 2.76C15.4769 2.22615 15.1621 1.74249 14.7552 1.34267C14.356 0.935094 13.8722 0.620126 13.3379 0.42C12.8279 0.222 12.2472 0.0873333 11.3959 0.048C10.5426 0.008 10.2712 0 8.0979 0ZM8.0979 1.44C10.2332 1.44 10.4879 1.45067 11.3312 1.48733C12.1112 1.524 12.5346 1.65333 12.8159 1.764C13.1906 1.90867 13.4559 2.082 13.7372 2.36133C14.0166 2.64133 14.1899 2.90733 14.3346 3.282C14.4439 3.56333 14.5746 3.98667 14.6099 4.76667C14.6479 5.61067 14.6566 5.864 14.6566 8C14.6566 10.136 14.6466 10.39 14.6072 11.2333C14.5666 12.0133 14.4366 12.4367 14.3266 12.718C14.1964 13.0652 13.9919 13.3796 13.7272 13.6393C13.4687 13.9042 13.1544 14.1082 12.8072 14.2367C12.5272 14.346 12.0972 14.4767 11.3172 14.512C10.4679 14.55 10.2179 14.5587 8.0779 14.5587C5.93723 14.5587 5.68723 14.5487 4.83857 14.5093C4.0579 14.4687 3.6279 14.3387 3.3479 14.2287C3.0005 14.1001 2.68635 13.8953 2.42857 13.6293C2.16095 13.3725 1.95571 13.0578 1.82857 12.7093C1.71857 12.4293 1.58923 11.9993 1.54857 11.2193C1.51857 10.3793 1.5079 10.12 1.5079 7.99C1.5079 5.85933 1.51857 5.59933 1.54857 4.74933C1.58923 3.96933 1.71857 3.54 1.82857 3.26C1.96857 2.88 2.1479 2.62 2.42857 2.33933C2.7079 2.06 2.96857 1.88 3.3479 1.74067C3.6279 1.63 4.04857 1.5 4.82857 1.46C5.67857 1.43 5.92857 1.42 8.0679 1.42L8.0979 1.44ZM8.0979 3.892C7.55843 3.892 7.02424 3.99826 6.52584 4.2047C6.02743 4.41115 5.57457 4.71374 5.19311 5.09521C4.81164 5.47667 4.50905 5.92953 4.3026 6.42794C4.09616 6.92634 3.9899 7.46053 3.9899 8C3.9899 8.53947 4.09616 9.07366 4.3026 9.57206C4.50905 10.0705 4.81164 10.5233 5.19311 10.9048C5.57457 11.2863 6.02743 11.5889 6.52584 11.7953C7.02424 12.0017 7.55843 12.108 8.0979 12.108C9.18741 12.108 10.2323 11.6752 11.0027 10.9048C11.7731 10.1344 12.2059 9.08951 12.2059 8C12.2059 6.91049 11.7731 5.8656 11.0027 5.09521C10.2323 4.32481 9.18741 3.892 8.0979 3.892ZM8.0979 10.6667C6.62457 10.6667 5.43123 9.47333 5.43123 8C5.43123 6.52667 6.62457 5.33333 8.0979 5.33333C9.57123 5.33333 10.7646 6.52667 10.7646 8C10.7646 9.47333 9.57123 10.6667 8.0979 10.6667ZM13.3286 3.73C13.3193 3.97842 13.2141 4.21357 13.0351 4.38605C12.8561 4.55852 12.6172 4.65488 12.3686 4.65488C12.12 4.65488 11.8811 4.55852 11.702 4.38605C11.523 4.21357 11.4178 3.97842 11.4086 3.73C11.4086 3.47539 11.5097 3.23121 11.6897 3.05118C11.8698 2.87114 12.114 2.77 12.3686 2.77C12.6232 2.77 12.8674 2.87114 13.0474 3.05118C13.2274 3.23121 13.3286 3.47539 13.3286 3.73Z"
                fill="black"
              />
            </svg>
          </Div8>
          <Div8>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M7.15795 8.93956C7.43128 9.19956 7.43128 9.62622 7.15795 9.88622C6.89795 10.1462 6.47128 10.1462 6.21128 9.88622C4.91128 8.58622 4.91128 6.47289 6.21128 5.17289L8.57128 2.81289C9.87128 1.51289 11.9846 1.51289 13.2846 2.81289C14.5846 4.11289 14.5846 6.22622 13.2846 7.52622L12.2913 8.51956C12.2979 7.97289 12.2113 7.42622 12.0246 6.90622L12.3379 6.58622C13.1246 5.80622 13.1246 4.53956 12.3379 3.75956C11.5579 2.97289 10.2913 2.97289 9.51128 3.75956L7.15795 6.11289C6.37128 6.89289 6.37128 8.15956 7.15795 8.93956ZM9.03795 6.11289C9.29795 5.85289 9.72461 5.85289 9.98461 6.11289C11.2846 7.41289 11.2846 9.52622 9.98461 10.8262L7.62461 13.1862C6.32461 14.4862 4.21128 14.4862 2.91128 13.1862C1.61128 11.8862 1.61128 9.77289 2.91128 8.47289L3.90461 7.47956C3.89795 8.02622 3.98461 8.57289 4.17128 9.09956L3.85795 9.41289C3.07128 10.1929 3.07128 11.4596 3.85795 12.2396C4.63795 13.0262 5.90461 13.0262 6.68461 12.2396L9.03795 9.88622C9.82461 9.10622 9.82461 7.83956 9.03795 7.05956C8.76461 6.79956 8.76461 6.37289 9.03795 6.11289Z"
                fill="black"
              />
            </svg>
          </Div8>
          <Div8>
            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
              <path
                d="M13.4312 1.33301H2.76449C2.03115 1.33301 1.43782 1.93301 1.43782 2.66634L1.43115 14.6663L4.09782 11.9997H13.4312C14.1645 11.9997 14.7645 11.3997 14.7645 10.6663V2.66634C14.7645 1.93301 14.1645 1.33301 13.4312 1.33301ZM4.76449 5.99967H11.4312C11.7978 5.99967 12.0978 6.29967 12.0978 6.66634C12.0978 7.03301 11.7978 7.33301 11.4312 7.33301H4.76449C4.39782 7.33301 4.09782 7.03301 4.09782 6.66634C4.09782 6.29967 4.39782 5.99967 4.76449 5.99967ZM8.76449 9.33301H4.76449C4.39782 9.33301 4.09782 9.03301 4.09782 8.66634C4.09782 8.29967 4.39782 7.99967 4.76449 7.99967H8.76449C9.13115 7.99967 9.43115 8.29967 9.43115 8.66634C9.43115 9.03301 9.13115 9.33301 8.76449 9.33301ZM11.4312 5.33301H4.76449C4.39782 5.33301 4.09782 5.03301 4.09782 4.66634C4.09782 4.29967 4.39782 3.99967 4.76449 3.99967H11.4312C11.7978 3.99967 12.0978 4.29967 12.0978 4.66634C12.0978 5.03301 11.7978 5.33301 11.4312 5.33301Z"
                fill="black"
              />
            </svg>
          </Div8>
        </Div7> */}
      </Div3>
      {/* <Divider sx={{ margin: "18px" }} /> */}
      {/* <Div9>
        <Div10>
          <Div11>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M19.9999 13.3337H6.66659C5.78253 13.3337 4.93468 13.6848 4.30956 14.31C3.68444 14.9351 3.33325 15.7829 3.33325 16.667V23.3337C3.33325 24.2177 3.68444 25.0656 4.30956 25.6907C4.93468 26.3158 5.78253 26.667 6.66659 26.667H8.33325V33.3337C8.33325 33.7757 8.50885 34.1996 8.82141 34.5122C9.13397 34.8247 9.55789 35.0003 9.99992 35.0003H13.3333C13.7753 35.0003 14.1992 34.8247 14.5118 34.5122C14.8243 34.1996 14.9999 33.7757 14.9999 33.3337V26.667H19.9999L28.3333 33.3337V6.66699L19.9999 13.3337ZM35.8333 20.0003C35.8333 22.8503 34.2333 25.4337 31.6666 26.667V13.3337C34.2166 14.5837 35.8333 17.167 35.8333 20.0003Z"
                fill="black"
              />
            </svg>
          </Div11>
          <Div12>活動通知區</Div12>
        </Div10>
        <Div10 onClick={() => handleClickRaffle()}>
          <Div11>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path
                d="M33.9833 32.283L27.2999 29.9997L24.9999 36.6663L19.8666 26.6663L14.9999 36.6663L12.6999 29.9997L6.0166 32.283L10.8833 22.283C9.28327 20.283 8.33327 17.7497 8.33327 14.9997C8.33327 11.9055 9.56243 8.93802 11.7504 6.7501C13.9383 4.56217 16.9057 3.33301 19.9999 3.33301C23.0941 3.33301 26.0616 4.56217 28.2495 6.7501C30.4374 8.93802 31.6666 11.9055 31.6666 14.9997C31.6666 17.7497 30.7166 20.283 29.1166 22.283L33.9833 32.283ZM11.6666 14.9997L16.1499 17.233L15.8333 22.233L19.9999 19.4663L24.1666 22.2163L23.8833 17.233L28.3333 14.9997L23.8666 12.7497L24.1666 7.78301L19.9999 10.5163L15.8333 7.74967L16.1166 12.7663L11.6666 14.9997Z"
                fill="black"
              />
            </svg>
          </Div11>
          <Div12>活動抽獎區</Div12>
        </Div10>
        <Div10 onClick={() => handleClickRank()}>
          <div style={{ background: `url(${img_p})` }}>
            <img src={img_p} />
          </div>
          <Div12>活動積分排行</Div12>
        </Div10>
      </Div9> */}
      <Box sx={{ borderBottom: 0 }}>
        <Tabs
          value={tab}
          onChange={handleChange}
          textColor="#fff"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            width: "calc(100% - 54px)",
            margin: "auto",
            padding: "2px",
            borderRadius: "8.91px",
            background: "rgba(118, 118, 128, 0.24)",
            marginBottom: "16px",
            marginTop: "36.25px",
          }}
        >
          <Tab
            label="互動遊戲"
            sx={{
              width: "50%",
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
              padding: "6px 8px",
              textAlign: "center",
              ...(tab === 0 && {
                color: "var(--label-color-light-primary, #000)",
                background: "#fff",
                borderRadius: "6.93px",
                border: "0.5px solid rgba(0, 0, 0, 0.04)",
              }),
            }}
          />
          <Tab
            label="會場資訊"
            sx={{
              width: "50%",
              fontFamily: "Montserrat",
              fontSize: "15px",
              fontWeight: "700",
              lineHeight: "20px",
              letterSpacing: "-0.24px",
              padding: "6px 8px",
              textAlign: "center",
              ...(tab === 1 && {
                color: "var(--label-color-light-primary, #000)",
                background: "#fff",
                borderRadius: "6.93px",
                border: "0.5px solid rgba(0, 0, 0, 0.04)",
              }),
            }}
          />
        </Tabs>
      </Box>
      <CustomTabPanel value={tab} index={0}>
        <Div13>
          {taskCtx.tasks.map(({ id, name, pictureUrl, isChecked }) => (
            <>
              <Div14
                style={{ background: isChecked === true ? "#D9D9D9" : "" }}
                key={id}
                onClick={() => {
                  if (isChecked == true) {
                    return
                  }
                  console.log("taskCtx資料啊啊啊啊啊：：：", taskCtx.tasks)
                  setTaskDialogOpen(true)
                  setTaskData({ id: id, pictureUrl: pictureUrl })
                }}
              >
                <Div15>{import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={pictureUrl} />}</Div15>
                <Div17>
                  <Div16>
                    {isChecked === true ? (
                      <TextWrap_8count>{name}</TextWrap_8count>
                    ) : (
                      <TextWrap_13count>{name}</TextWrap_13count>
                    )}
                  </Div16>
                  {isChecked === true ? (
                    <div style={{ display: "flex", alignItems: "center", width: "6.5rem" }}>
                      <Checked>已破關</Checked>
                    </div>
                  ) : (
                    ""
                  )}
                </Div17>
              </Div14>
            </>
          ))}
        </Div13>
      </CustomTabPanel>
      <CustomTabPanel value={tab} index={1}>
        {isZoomed == true && (
          <ImageViewer src={activityCtx.activityList[activityIndex].venue_info.picurl} setIsZoomed={setIsZoomed} />
        )}
        {activityCtx.activityList[activityIndex].venue_info === null ? (
          <>
            <p>線上進行</p>
          </>
        ) : (
          <div style={{ padding: "4%" }}>
            <p>
              <FaLocationDot style={{ marginRight: "2%" }} />
              {activityCtx.activityList[activityIndex].venue_info.location}
            </p>
            <p>
              <IoMdCall style={{ marginRight: "2%" }} />
              {activityCtx.activityList[activityIndex].venue_info.phone}
            </p>
            <p style={{ display: "flex", flexDirection: "row" }}>
              <BiTimeFive style={{ marginRight: "2%", marginTop: "1%" }} />
              <div style={{ display: "flex", flexDirection: "column" }}>
                {activityCtx.activityList[activityIndex].venue_info.hours?.split(/\s+/).map(word => (
                  <p style={{ marginTop: 0, marginBottom: 0 }}>{word}</p>
                ))}
              </div>
            </p>
            <p>
              <BsLink45Deg style={{ marginRight: "2%" }} />
              <a href={activityCtx.activityList[activityIndex].venue_info.url}>
                {activityCtx.activityList[activityIndex].venue_info.url}
              </a>
            </p>
            <ImageZoom
              src={activityCtx.activityList[activityIndex].venue_info.picurl}
              alt={activityCtx.activityList[activityIndex].venue_info.picurl}
            />
          </div>
        )}

        {/* <img src={activityCtx.activityList[activityIndex].venue_info.picurl} sizes="(max-width: 300px) 300px, (max-width: 768px) 768px, 1280px"/> */}
      </CustomTabPanel>
      <Dialog
        open={taskDialogOpen}
        onClose={closeTaskDialog}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              overflowY: "hidden",
              margin: "0px",
              borderRadius: "12px",
              alignItems: "end",
            },
          },
        }}
      >
        <BeginningOfGame onClose={closeTaskDialog} pictureUrl={taskData.pictureUrl} id={taskData.id} />
      </Dialog>
    </>
  )
}
