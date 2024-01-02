import { useEffect } from "react"
import styled from "styled-components"

const ToastContainer = styled.div`
  position: fixed;
  bottom: 10vh;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100000000000;

  padding: 8px 15px;
  border-radius: var(--spacing-s, 8px);

  background: #fff;
  backdrop-filter: blur(25px);
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);

  transition-duration: 100ms;
`

const ToastMessage = styled.div`
  color: var(--, #000);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
`

export default function CopySuccessToast({ open, setOpen }) {
  useEffect(() => {
    if (open == true) {
      setTimeout(() => setOpen(false), 500)
    }
  }, [open])

  return (
    <ToastContainer style={{ opacity: open ? "0.8" : "0" }}>
      <ToastMessage>已複製至剪貼簿！</ToastMessage>
    </ToastContainer>
  )
}
