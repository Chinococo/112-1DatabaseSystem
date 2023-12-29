import DialogControllContext from "../../contexts/DialogControllContext"
import MemberContext from "../../contexts/MemberContext"
import SelectedActivityContext from "../../contexts/SelectedActivityContext"
import activityDialogBackgroundPath from "../../img/activity-dialog-background.jpg?inline"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Div0 = styled.div`
  width: 100%;
  position: relative;
`

const Div1 = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%);
`

const Div2 = styled.div`
  position: relative;
  z-index: 1;
  margin: 15px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div3 = styled.div`
  font-size: 96px;
`

const Div4 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
`

const Div5 = styled.div`
  color: white;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
`

const Div6 = styled.div`
  margin: 90px 0;
  color: var(--light-backgrond, #292929);
  font-family: Noto Sans TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Div7 = styled.div`
  color: var(--leave, #ce6d5f);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div8 = styled.div`
  text-align: center;
`

const Div9 = styled.div`
  color: var(--white, #fff);
  font-family: Noto Sans TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function JoinSuccess_newVer_team(props) {
  const nav = useNavigate()
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberCtx = React.useContext(MemberContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  const handleClose = () => {
    // dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, joinSuccess: false });
    // nav(`/activity/${selectedActivityCtx.activity.id}`);
  }

  const backgrond = {
    display: "flex",
    width: "360px",
    paddingBottom: "0px",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  }

  return (
    <>
      <Dialog
        //open={dialogControllCtx.dialogControll.joinSuccess}
        open={false}
        TransitionComponent={Transition}
        keepMounted
        //onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              borderRadius: "32px",
              alignItems: "center",
              paddingBottom: "48px",
            },
          },
        }}
      >
        <Div0
          style={{
            backgroundImage: `url("${window.location.origin}${activityDialogBackgroundPath}")`,
          }}
        >
          <Div1 />
          <Div2>
            <Div3>🎉</Div3>
            <Div4>{memberCtx.member.line_displayName}</Div4>
            <Div5>您已加入</Div5>
          </Div2>
        </Div0>
        <Div6>
          <div
          // style={{
          //   margin: "90px 0",
          //   color: "var(--light-backgrond, #292929)",
          //   fontFamily: "Noto Sans TC",
          //   fontSize: "16px",
          //   fontWeight: "700",
          //   lineHeight: "22px",
          //   letterSpacing: "-0.408px",
          // }}
          >
            您將以
          </div>
          <Div7>紅隊</Div7>
          <Div8>
            的身份參與，
            <br />
            請一起努力爭取團隊積分排行！
          </Div8>
        </Div6>
        <Button
          onClick={() => handleClose()}
          style={{
            display: "flex",
            padding: "16px 64px",
            justifyContent: "center",
            borderRadius: "12px",
            background: "#90CE5F",
            boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Div9>好，知道了</Div9>
        </Button>
      </Dialog>
    </>
  )
}
