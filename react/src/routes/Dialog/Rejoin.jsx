import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

import DialogControllContext from "../../contexts/DialogControllContext"
import MemberContext from "../../contexts/MemberContext"
import SelectedActivityContext from "../../contexts/SelectedActivityContext"
import activityDialogBackgroundPath from "../../img/activity-dialog-background.jpg?inline"

const Div0 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 20px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  background: var(--white, #fff);
`

const Div1 = styled.div`
  width: 360px;
  height: 229px;
  border-radius: 32px;
  flex-shrink: 0;
  fill:
    linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%),
    url(<path-to-image>),
    lightgray 50% / cover no-repeat,
    #d9d9d9;
`

const Div4 = styled.div`
  position: absolute;
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
`

const Div6 = styled.div`
  width: 143px;
  height: 20px;
  margin: 15px;
  color: var(--light-backgrond, #292929);
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 900;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div7 = styled.div`
  color: var(--white, #fff);
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Div2 = styled(Div4)`
  width: 96px;
  height: 96px;
  margin-top: 0px;
  margin-left: 123.5px;
  color: #000;
  font-size: 96px;
  line-height: normal;
`

const Div5 = styled(Div4)`
  width: 80px;
  height: 32px;
  margin-top: 185px;
  margin-left: 142px;
  color: var(--white, #fff);
  font-size: 16px;
  line-height: 32px;
  letter-spacing: -0.24px;
`

const Div3 = styled(Div7)`
  position: absolute;
  height: 22px;
  margin-top: 150px;
  margin-left: 105.5px;
  font-size: 48px;
`

const Div8 = styled(Div7)`
  font-size: 20px;
`

export default function Rejoin(props) {
  const nav = useNavigate()
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberCtx = React.useContext(MemberContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: false })
    nav(`/activity/${selectedActivityCtx.activity.id}`)
  }

  return (
    <>
      {/* <div style={{
      "display": "flex", "width": "390px", "padding": "160px 15px 153px 15px", "flexDirection": "column", "justifyContent": "flex-end", "alignItems": "center", background: "var(--background-1, rgba(0, 0, 0, 0.10))",
      "backdrop-filter": "blur(5px)"
    }}> */}
      <Dialog
        open={dialogControllCtx.dialogControll.rejoin}
        TransitionComponent={Transition}
        keepMounted
        //onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              maxWidth: "350px",
              borderRadius: "12px",
              alignItems: "center",
            },
          },
        }}
      >
        <Div0>
          <Div6>即將再次加入活動</Div6>
          <Button
            style={{
              margin: "15px",
              display: "flex",
              padding: "16px 64px",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "6px",
              background: "var(--green, #90CE5F)",
              boxShadow: "0px 1px 0.5px 0px rgba(0, 0, 0, 0.25)",
            }}
            onClick={() => handleClose()}
          >
            <Div8>確認</Div8>
          </Button>
        </Div0>
      </Dialog>
      {/* </div> */}
    </>
  )
}
