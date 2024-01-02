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
  color: white;
  font-family: Noto Sans TC;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.408px;
`

const Div5 = styled.div`
  color: white;
  font-family: Montserrat;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.24px;
`

const Div6 = styled.div`
  margin-bottom: 32px;
  color: var(--light-backgrond, #292929);
  font-family: Noto Sans TC;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Div7 = styled.div`
  color: var(--white, #fff);
  white-space: nowrap;
  font-family: Noto Sans TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

export default function JoinSuccess(props) {
  const nav = useNavigate()
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberCtx = React.useContext(MemberContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, joinSuccess: false })
    nav(`/activity/${selectedActivityCtx.activity.id}`)
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.joinSuccess}
        TransitionComponent={Transition}
        keepMounted
        //onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              borderRadius: "12px",
              alignItems: "center",
              padding: "30px 80px",
            },
          },
        }}
      >
        <Div6>恭喜您報名成功！</Div6>
        <Button
          onClick={() => handleClose()}
          style={{
            display: "flex",
            width: "100%",
            padding: "16px 64px",
            justifyContent: "center",
            borderRadius: "12px",
            background: "#90CE5F",
            boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
          }}
        >
          <Div7>確認</Div7>
        </Button>
      </Dialog>
    </>
  )
}
