import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React from "react"
import { useNavigate } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

import { apiMemberActivityCodeCreate, apiMemberEdit } from "../../components/API"
import ActivityContext from "../../contexts/ActivityContext"
import DialogControllContext from "../../contexts/DialogControllContext"
import MemberActivityCodeContext from "../../contexts/MemberActivityCodeContext"
import MemberContext from "../../contexts/MemberContext"
import SelectedActivityContext from "../../contexts/SelectedActivityContext"
import { useMemberActivityCode } from "../../hooks/useMemberActivityCode"
import activityDialogBackgroundPath from "../../img/activity-dialog-background.jpg?inline"
import Signup from "../Login"

const MainWapper = styled.div`
  flex-direction: column;
  align-items: center;
`

const TitleBlock = styled.div`
  display: flex;
  padding: 20px 22px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 16px 16px 0px 0px;
  background: black;
`

const TitleBlock_buttonRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`

const TitleBlock_title = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
  align-self: stretch;
`

const TitleBlock_subtitles = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`

const TitleBlock_subtitleFont = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px; /* 150% */
`

const Subtitle_Date = TitleBlock_subtitleFont
const Subtitle_Location = TitleBlock_subtitleFont

const InfoBlock = styled.div`
  display: flex;
  padding: 20px 22px 20px 22px;
  flex-direction: column;
  align-items: center;
  gap: 45px;
  background: var(--white, #fff);
`

const InfoBlock_InfoRows = styled.div`
  overflow: auto;
  display: flex;
  height: 368px;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`

const InfoBlock_InfoRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  align-self: stretch;
`

const InfoBlock_Text = styled.div`
  align-self: stretch;
  color: var(--, #000);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: bold;
  line-height: 20px; /* 142.857% */
`

const InfoBlock_Input = styled.input`
  min-height: 36px;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #808080;
  background: #fff;
  font-family: Montserrat;
`

const InfoBlock_InputFont = styled.input`
  color: var(--, #000);
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`

const InfoBlock_Select = styled.select`
  min-height: 36px;
  display: flex;
  padding: 8px 12px;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #808080;
  background: #fff;
`

const InfoBlock_SelectFont = styled.option`
  color: var(--, #000);
  text-align: left;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`

const InfoBlock_Buttons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`

const InfoBlock_Button = styled.div`
  display: flex;
  width: 64px;
  padding: 4px 12px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 24px;
  background: #efefef;
`

const InfoBlock_ButtonFont = styled.div`
  color: #b3b3b3;
  text-align: center;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`

const ButtonFont = styled.div`
  color: var(--white, #fff);

  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px; /* 133.333% */
`
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const apiConfig = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
}
export default function ActivityLoading(props) {
  const [enterValue, setEnterValue] = React.useState("")
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const memberContext = React.useContext(MemberContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const { fetchMemberActivityCode } = useMemberActivityCode()
  const [genderValue, setGenderValue] = React.useState("")
  const [signUpData, setSignUpData] = React.useState({
    name: memberContext.member.name,
    cellphone: memberContext.member.cellphone,
    email: memberContext.member.email,
    birthday: memberContext.member.birthday,
    gender: memberContext.member.gender,
  })

  async function handleVerified() {
    let memberData = {
      name: signUpData.name,
      cellphone: signUpData.cellphone,
      email: signUpData.email,
      birthday: signUpData.birthday,
      gender: signUpData.gender,
    }
    console.log(signUpData)
    if (selectedActivityCtx.activity.verifyType == "EnterPassCode" && selectedActivityCtx.activity.code == enterValue) {
      //"EnterMemberCode" || "ALLPASS"
      storage.set(`${selectedActivityCtx.activity.id}_memberCodeEnter`, enterValue)
      dialogControllCtx.setDialogControll({
        ...dialogControllCtx.dialogControll,
        joinSuccess: true,
        activityLoading: false,
      })
    } else {
      let data = {
        memberId: `${memberContext.member.line_userId}`,
        activityId: `${selectedActivityCtx.activity.id}`,
        memberCode: `${enterValue}`,
      }

      try {
        const res = await apiMemberActivityCodeCreate(data, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        if (res.status == 200) {
          storage.set(`${selectedActivityCtx.activity.id}_memberCodeEnter`, enterValue)
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create success.`)
          fetchMemberActivityCode(memberContext.member.line_userId, memberActivityCodeList => {
            memberActivityCodeCtx.setMemberActivityCodeList(memberActivityCodeList)
            storage.set("memberActivityCode", memberActivityCodeList)
          }) //update memberActivityCode to MemberActivityCodeContext
        } else {
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create fail.`)
        }
      } catch (error) {
        console.log("apiMemberActivityCodeCreate FAILD: ", error)
      }

      try {
        const res = await apiMemberEdit(memberContext.member.line_userId, memberData, apiConfig)
        if (res.status == 200) {
          memberContext.setMember({ ...memberContext.member, ...memberData })
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create success.`)
        } else {
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create fail.`)
        }
      } catch (error) {
        console.log("apiMemberActivityCodeCreate FAILD: ", error)
      }
      dialogControllCtx.setDialogControll({
        ...dialogControllCtx.dialogControll,
        joinSuccess: true,
        activityLoading: false,
      })
    }
  }

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: false })
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.activityLoading}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              borderRadius: "32px",
              alignItems: "center",
            },
          },
        }}
      >
        <MainWapper>
          <TitleBlock>
            <TitleBlock_buttonRow>
              <svg
                onClick={handleClose}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                  fill="white"
                />
              </svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                  fill="white"
                />
              </svg>
            </TitleBlock_buttonRow>
            <TitleBlock_title>元宇宙 YEP</TitleBlock_title>
            <TitleBlock_subtitles>
              <Subtitle_Date>2023/7/5 (三) 10:00 ~ 12:00</Subtitle_Date>
              <Subtitle_Location>Online on Google Meet</Subtitle_Location>
            </TitleBlock_subtitles>
          </TitleBlock>
          <InfoBlock>
            <InfoBlock_InfoRows>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>姓名</InfoBlock_Text>
                <InfoBlock_Input
                  value={memberContext.member.name}
                  onChange={e => {
                    setSignUpData({ ...signUpData, name: e.target.value })
                  }}
                />
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>生日</InfoBlock_Text>
                <InfoBlock_Input
                  value={signUpData.birthday}
                  onChange={e => {
                    setSignUpData({ ...signUpData, birthday: e.target.value })
                  }}
                  style={{ "justify-content": " space-between" }}
                ></InfoBlock_Input>
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>性別</InfoBlock_Text>
                <InfoBlock_Buttons>
                  <InfoBlock_Button
                    style={{
                      border: signUpData.gender == "男" ? "2px solid black" : "",
                      color: signUpData.gender == "男" ? "black" : "#b3b3b3",
                    }}
                    onClick={() => {
                      setSignUpData({ ...signUpData, gender: "男" })
                    }}
                  >
                    男
                  </InfoBlock_Button>
                  <InfoBlock_Button
                    style={{
                      border: signUpData.gender == "女" ? "2px solid black" : "",
                      color: signUpData.gender == "女" ? "black" : "#b3b3b3",
                    }}
                    onClick={() => {
                      setSignUpData({ ...signUpData, gender: "女" })
                    }}
                  >
                    <InfoBlock_ButtonFont>女</InfoBlock_ButtonFont>
                  </InfoBlock_Button>
                  <InfoBlock_Button
                    style={{
                      border: signUpData.gender == "多元" ? "2px solid black" : "",
                      color: signUpData.gender == "多元" ? "black" : "#b3b3b3",
                    }}
                    onClick={() => {
                      setSignUpData({ ...signUpData, gender: "多元" })
                    }}
                  >
                    <InfoBlock_ButtonFont>多元</InfoBlock_ButtonFont>
                  </InfoBlock_Button>
                </InfoBlock_Buttons>
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>電子信箱</InfoBlock_Text>
                <InfoBlock_Input
                  value={signUpData.email}
                  onChange={e => {
                    setSignUpData({ ...signUpData, email: e.target.value })
                  }}
                ></InfoBlock_Input>
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>手機號碼</InfoBlock_Text>
                <InfoBlock_Input
                  value={signUpData.cellphone}
                  onChange={e => {
                    setSignUpData({ ...signUpData, cellphone: e.target.value })
                  }}
                ></InfoBlock_Input>
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>活動ID</InfoBlock_Text>
                <InfoBlock_Input></InfoBlock_Input>
              </InfoBlock_InfoRow>
              <InfoBlock_InfoRow>
                <InfoBlock_Text>請輸入活動邀請碼</InfoBlock_Text>
                <InfoBlock_Input></InfoBlock_Input>
              </InfoBlock_InfoRow>
            </InfoBlock_InfoRows>
          </InfoBlock>
          <Button
            style={{
              width: "100%",
              display: "flex",
              padding: "24px 70px",
              flexDirection: "column",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: "10px",
              alignSelf: "stretch",
              borderRadius: "0px 0px 16px 16px",
              background: "var(--green, #90CE5F)",
            }}
            onClick={async () => await handleVerified()}
          >
            <ButtonFont>送出加入申請</ButtonFont>
          </Button>
        </MainWapper>
      </Dialog>
    </>
  )
}
