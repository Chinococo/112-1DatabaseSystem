import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
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
  align-self: end;
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

const Subtitle_Date = styled(TitleBlock_subtitleFont)`
  display: flex;
  flex-flow: column;
`
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
  /* height: 368px; */
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
  display: flex;
  flex-direction: row;
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
  width: 100%;
  gap: 10px;
  align-self: stretch;
  border-radius: 6px;
  border: 1px solid #808080;
  background: #fff;
  font-family: Montserrat;
  font-weight: 500;
  line-height: 20px;
  -webkit-min-height: 36px;
  min-width: 90%;
  -webkit-appearance: none;
`

const InfoBlock_InputFont = styled.div`
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
  -webkit-appearance: none;
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
  font-size: 14px;
`

const InfoBlock_ButtonFont = styled.div`
  color: #b3b3b3;
  text-align: center;
  font-family: Montserrat;

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

const ValidateInfo = styled.div`
  color: red;
  justify-self: flex-start;
  width: 100%;
`
const apiConfig = {
  headers: { "Content-Type": "application/x-www-form-urlencoded" },
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function ActivityLoading_newVer(props) {
  const activityCtx = React.useContext(ActivityContext)
  const id = props.key
  const activityIndex = activityCtx.activityList.findIndex(obj => {
    return obj.id == parseInt(id)
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const [enterValue, setEnterValue] = React.useState("")
  const [genderValue, setGenderValue] = React.useState("")
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const memberCtx = React.useContext(MemberContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const { fetchMemberActivityCode } = useMemberActivityCode()
  const [signUpData, setSignUpData] = React.useState({
    name: memberCtx.member.name,
    nickname: memberCtx.member.nickname,
    cellphone: memberCtx.member.cellphone,
    email: memberCtx.member.email,
    birthday: memberCtx.member.birthday,
    age: memberCtx.member.age,
    gender: memberCtx.member.gender,
    group: memberCtx.member.group,
    parish: memberCtx.member.parish,
    accompany1Name: memberCtx.member.accompany1Name,
    accompany1Birthday: memberCtx.member.accompany1Birthday,
    accompany2Name: memberCtx.member.accompany2Name,
    accompany2Birthday: memberCtx.member.accompany2Birthday,
    accompany3Name: memberCtx.member.accompany3Name,
    accompany3Birthday: memberCtx.member.accompany3Birthday,
  })

  React.useEffect(() => {
    setSignUpData({
      name: memberCtx.member.name,
      nickname: memberCtx.member.nickname,
      cellphone: memberCtx.member.cellphone,
      email: memberCtx.member.email,
      birthday: memberCtx.member.birthday,
      gender: memberCtx.member.gender,
      group: memberCtx.member.group,
      parish: memberCtx.member.parish,
      accompany1Name: memberCtx.member.accompany1Name,
      accompany1Birthday: memberCtx.member.accompany1Birthday,
      accompany2Name: memberCtx.member.accompany2Name,
      accompany2Birthday: memberCtx.member.accompany2Birthday,
      accompany3Name: memberCtx.member.accompany3Name,
      accompany3Birthday: memberCtx.member.accompany3Birthday,
    })
  }, [memberCtx.member])

  React.useEffect(() => {
    console.log(signUpData)
  }, [signUpData])

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading_public: false })
  }

  async function submit(data, e) {
    e.preventDefault()
    console.log(signUpData)
    await handleVerified()
  }
  async function handleVerified() {
    let memberData = {
      name: signUpData.name,
      nickname: signUpData.nickname,
      cellphone: signUpData.cellphone,
      email: signUpData.email,
      birthday: signUpData.birthday,
      age: signUpData.age,
      gender: signUpData.gender,
      group: signUpData.group,
      parish: signUpData.parish,
      accompany1Name: signUpData.accompany1Name,
      accompany1Birthday: signUpData.accompany1Birthday,
      accompany2Name: signUpData.accompany2Name,
      accompany2Birthday: signUpData.accompany2Birthday,
      accompany3Name: signUpData.accompany3Name,
      accompany3Birthday: signUpData.accompany3Birthday,
    }

    console.log("報名表送出：", memberData)
    if (selectedActivityCtx.activity.verifyType == "EnterPassCode" && selectedActivityCtx.activity.code == enterValue) {
      //"EnterMemberCode" || "ALLPASS"
      storage.set(`${selectedActivityCtx.activity.id}_memberCodeEnter`, enterValue)
      dialogControllCtx.setDialogControll({
        ...dialogControllCtx.dialogControll,
        joinSuccess: true,
        activityLoading: false,
        activityLoading_public: false,
      })
    } else {
      let data = {
        memberId: `${memberCtx.member.line_userId}`,
        activityId: `${selectedActivityCtx.activity.id}`,
        memberCode: `${enterValue === "" || enterValue === null ? "1234" : enterValue}`,
      }

      try {
        const res = await apiMemberActivityCodeCreate(data, {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })
        if (res.status == 200) {
          storage.set(`${selectedActivityCtx.activity.id}_memberCodeEnter`, enterValue)
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create success.`)
          fetchMemberActivityCode(memberCtx.member.line_userId, memberActivityCodeList => {
            memberActivityCodeCtx.setMemberActivityCodeList(memberActivityCodeList)
            storage.set("memberActivityCode", memberActivityCodeList)
          }) //update memberActivityCode to MemberActivityCodeContext
          dialogControllCtx.setDialogControll({
            ...dialogControllCtx.dialogControll,
            joinSuccess: true,
            activityLoading: false,
            activityLoading_public: false,
          })
        } else {
          console.log(`${selectedActivityCtx.activity.id}_memberCodeEnter create fail.`)
        }
      } catch (error) {
        console.log("apiMemberActivityCodeCreate FAILD: ", error)
      }

      try {
        const res = await apiMemberEdit(memberCtx.member.line_userId, memberData, apiConfig)
        if (res.status == 200) {
          memberCtx.setMember({ ...memberCtx.member, ...memberData })
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
        activityLoading_public: false,
      })
    }
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.activityLoading_public}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              borderRadius: "32px",
            },
          },
        }}
      >
        <MainWapper>
          <TitleBlock>
            <TitleBlock_buttonRow>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={handleClose}
              >
                <rect width="24" height="24" rx="12" fill="white" />
                <path
                  d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
                  fill="black"
                />
              </svg>
            </TitleBlock_buttonRow>
            <TitleBlock_title>
              {id == undefined ? selectedActivityCtx.activity.name : activityCtx.activityList[activityIndex]?.name}
            </TitleBlock_title>
            <TitleBlock_subtitles>
              <Subtitle_Date>
                {id == undefined
                  ? selectedActivityCtx.activity?.venue_info?.hours
                      ?.split(/\s+/)
                      .map(word => <p style={{ marginTop: 0, marginBottom: 0 }}>{word}</p>)
                  : activityCtx.activityList[activityIndex]?.venue_info.hours
                      .split(/\s+/)
                      .map(word => <p style={{ marginTop: 0, marginBottom: 0 }}>{word}</p>)}
              </Subtitle_Date>
              <Subtitle_Location>
                {id == undefined
                  ? selectedActivityCtx.activity.activityLocation
                  : activityCtx.activityList[activityIndex]?.activityLocation}
              </Subtitle_Location>
            </TitleBlock_subtitles>
          </TitleBlock>
          <form onSubmit={handleSubmit(submit)}>
            <InfoBlock>
              <InfoBlock_InfoRows>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>
                    姓名<div style={{ color: "red", marginLeft: "2px" }}>*</div>
                  </InfoBlock_Text>

                  <InfoBlock_Input
                    type="text"
                    defaultValue={signUpData.name}
                    // onChange={e => {
                    //   setSignUpData({ ...signUpData, name: e.target.value })
                    // }}
                    style={{ borderColor: errors.name && "red" }}
                    {...register("name", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, name: e.target.value })
                      },
                      required: true,
                    })}
                  />
                  {errors.name && <ValidateInfo>此欄位為必填</ValidateInfo>}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>暱稱</InfoBlock_Text>
                  <InfoBlock_Input
                    value={signUpData.nickname}
                    onChange={e => {
                      setSignUpData({ ...signUpData, nickname: e.target.value })
                    }}
                  ></InfoBlock_Input>
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>
                    年齡<div style={{ color: "red", marginLeft: "2px" }}>*</div>
                  </InfoBlock_Text>
                  <InfoBlock_Input
                    type="number"
                    defaultValue={signUpData.age}
                    style={{ borderColor: errors.age && "red" }}
                    {...register("age", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, age: e.target.value })
                      },
                      required: true,
                    })}
                  ></InfoBlock_Input>
                  {errors.age && <ValidateInfo>此欄位為必填</ValidateInfo>}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>
                    性別<span style={{ color: "red" }}>*</span>
                  </InfoBlock_Text>
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
                        border: signUpData.gender == "女" ? "2px solid" : "",
                        color: signUpData.gender == "女" ? "black" : "#b3b3b3",
                      }}
                      onClick={() => {
                        setSignUpData({ ...signUpData, gender: "女" })
                      }}
                    >
                      女
                    </InfoBlock_Button>
                    <InfoBlock_Button
                      style={{
                        border: signUpData.gender == "多元" ? "2px solid" : "",
                        color: signUpData.gender == "多元" ? "black" : "#b3b3b3",
                      }}
                      onClick={() => {
                        setSignUpData({ ...signUpData, gender: "多元" })
                      }}
                    >
                      多元
                    </InfoBlock_Button>
                  </InfoBlock_Buttons>
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>
                    電子信箱<div style={{ color: "red", marginLeft: "2px" }}>*</div>
                  </InfoBlock_Text>
                  <InfoBlock_Input
                    type="text"
                    defaultValue={signUpData.email}
                    style={{ borderColor: errors.email && "red" }}
                    {...register("email", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, email: e.target.value })
                      },
                      required: true,
                    })}
                  />
                  {errors.email && <ValidateInfo>此欄位為必填</ValidateInfo>}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>
                    手機號碼<div style={{ color: "red", marginLeft: "2px" }}>*</div>
                  </InfoBlock_Text>
                  <InfoBlock_Input
                    type="text"
                    defaultValue={signUpData.cellphone}
                    style={{ borderColor: errors.cellphone && "red" }}
                    {...register("cellphone", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, cellphone: e.target.value })
                      },
                      required: true,
                    })}
                  />
                  {errors.cellphone && <ValidateInfo>此欄位為必填</ValidateInfo>}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>牧區</InfoBlock_Text>
                  <InfoBlock_Select
                    defaultValue={signUpData.parish}
                    style={{ borderColor: errors.parish && "red" }}
                    {...register("parish", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, parish: e.target.value })
                      },
                    })}
                  >
                    <InfoBlock_SelectFont value="">無</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="星一">星一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="星二">星二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="星三">星三</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="冒一">冒一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="冒二">冒二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="覇一">覇一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="覇二">覇二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="保一">保一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="保二">保二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="保三">保三</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="保四">保四</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="壯一">壯一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="壯二">壯二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="壯三">壯三</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="壯四">壯四</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="壯五">壯五</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大一">大一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大二">大二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大三">大三</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大四">大四</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大五">大五</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大六">大六</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="大七">大七</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="活Hi一">活Hi一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="活Hi二">活Hi二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="活Hi三">活Hi三</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="但一">但一</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="但二">但二</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="但三">但三</InfoBlock_SelectFont>
                  </InfoBlock_Select>
                  {/* {errors.parish && <ValidateInfo>此欄位為必填</ValidateInfo>} */}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>小組</InfoBlock_Text>
                  <InfoBlock_Input
                    type="text"
                    placeholder="若無則不填"
                    defaultValue={signUpData.group}
                    style={{ borderColor: errors.group && "red" }}
                    {...register("group", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, group: e.target.value })
                      },
                    })}
                  ></InfoBlock_Input>
                  {/* {errors.group && <ValidateInfo>此欄位為必填</ValidateInfo>} */}
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人1姓名</InfoBlock_Text>
                  <InfoBlock_Input
                    placeholder="若無則不填"
                    defaultValue={signUpData.accompany1Name}
                    {...register("accompany1Name", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany1Name: e.target.value })
                      },
                      required: false,
                    })}
                  />
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人1年齡</InfoBlock_Text>
                  <InfoBlock_Input
                    type="number"
                    defaultValue={signUpData.accompany1Birthday}
                    {...register("accompany1Birthday", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany1Birthday: e.target.value })
                      },
                      required: false,
                    })}
                  ></InfoBlock_Input>
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人2姓名</InfoBlock_Text>
                  <InfoBlock_Input
                    placeholder="若無則不填"
                    defaultValue={signUpData.accompany2Name}
                    {...register("accompany2Name", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany2Name: e.target.value })
                      },
                      required: false,
                    })}
                  />
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人2年齡</InfoBlock_Text>
                  <InfoBlock_Input
                    type="number"
                    defaultValue={signUpData.accompany2Birthday}
                    {...register("accompany2Birthday", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany2Birthday: e.target.value })
                      },
                      required: false,
                    })}
                  ></InfoBlock_Input>
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人3姓名</InfoBlock_Text>
                  <InfoBlock_Input
                    placeholder="若無則不填"
                    defaultValue={signUpData.accompany3Name}
                    {...register("accompany3Name", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany3Name: e.target.value })
                      },
                      required: false,
                    })}
                  />
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>陪同人3年齡</InfoBlock_Text>
                  <InfoBlock_Input
                    type="number"
                    defaultValue={signUpData.accompany3Birthday}
                    {...register("accompany3Birthday", {
                      onChange: e => {
                        setSignUpData({ ...signUpData, accompany3Birthday: e.target.value })
                      },
                      required: false,
                    })}
                  ></InfoBlock_Input>
                </InfoBlock_InfoRow>
                <InfoBlock_InfoRow>
                  <InfoBlock_Text>您從哪裡得知這個活動?</InfoBlock_Text>
                  <InfoBlock_Select>
                    <InfoBlock_SelectFont value="none">無</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="Facebook">Facebook</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="Instagram">Instagram</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="親友好友">親友好友</InfoBlock_SelectFont>
                    <InfoBlock_SelectFont value="其他">其他</InfoBlock_SelectFont>
                  </InfoBlock_Select>
                </InfoBlock_InfoRow>
              </InfoBlock_InfoRows>
            </InfoBlock>

            <Button
              type="submit"
              // onClick={async () => await handleVerified()}
              style={{
                width: "100%",
                display: "flex",
                padding: "24px 85px",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                gap: "10px",
                alignSelf: "stretch",
                borderRadius: "0px 0px 16px 16px",
                background: "var(--green, #90CE5F)",
              }}
            >
              <ButtonFont>送出報名</ButtonFont>
            </Button>
          </form>
        </MainWapper>
      </Dialog>
    </>
  )
}
