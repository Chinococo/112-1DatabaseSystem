import DialogControllContext from "../../contexts/DialogControllContext"
import TaskContext from "../../contexts/TaskContext"
import Dialog from "@mui/material/Dialog"
import React from "react"
import styled from "styled-components"

const Div0 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`

const Div1 = styled.div`
  font-size: 96px;
`

const Div2 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Img0 = styled.img`
  width: 260px;
  height: 293px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0px 4px 50px 0px rgba(0, 0, 0, 0.5);
`

export default function TaskCompletedNft(props) {
  const taskCtx = React.useContext(TaskContext)
  const dialogControllCtx = React.useContext(DialogControllContext)

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, taskCompletedNft: false })
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.taskCompletedNft}
        //open={true}
        //TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              borderRadius: "32px",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.0)",
            },
          },
        }}
      >
        <Div0>
          <Div1>🎉</Div1>
          <Div2>任務成功</Div2>
          <Img0 src={props.targetTask.pictureUrl}></Img0>
        </Div0>
      </Dialog>
    </>
  )
}
