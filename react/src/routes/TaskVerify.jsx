import { useContext, useEffect, useMemo, useState } from "react"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

import { apiMemberTaskCreate } from "../components/API"
import Html5QrcodePlugin from "../components/Html5QrcodePlugin"
import DialogControllContext from "../contexts/DialogControllContext"
import MemberContext from "../contexts/MemberContext"
import SelectedActivityContext from "../contexts/SelectedActivityContext"
import TaskContext from "../contexts/TaskContext"
import WalletContext from "../contexts/WalletContext"
import { useNFTs } from "../hooks/useNFTs"
import TaskCompletedNft from "./Dialog/TaskCompletedNft"

const Div9 = styled.div`
  margin: 5px 16px 48px;
  display: flex;
  padding: 16px 64px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 6px;
  border: 1px solid #90ce5f;
  background-color: white;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
  bottom: 0px;
`

const Div4 = styled.div`
  height: fit-content;
  margin: 0px 16px;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-shrink: 0;
  color: white;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.24px;
`

const Input0 = styled.input`
  font-family: Montserrat;
  font-size: 48px;
  font-weight: 700;
  letter-spacing: -0.24px;
  border: 0;
  text-align: center;
  width: 100%;
  background-color: transparent;
`

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
  color: #90ce5f;
  font-family: Noto Sans TC;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`
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

const CompletedDialogContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;

  &,
  & > * {
    transition: cubic-bezier(0, 0, 0.5, 1.7) 150ms;
  }
`

const CompletedDialog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
`

const CongratulationsText = styled.div`
  color: #fff;
  text-align: center;
  font-family: Montserrat;
  font-size: 54px;
  font-weight: 700;
  line-height: 32px;
  text-shadow: 0 4px 10px #ffe8a3;
`

export default function TaskVerify() {
  const taskContext = useContext(TaskContext)
  const memberContext = useContext(MemberContext)
  const walletContext = useContext(WalletContext)
  const dialogControlContext = useContext(DialogControllContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)
  const [showCompletedDialog, setShowCompletedDialog] = useState(false)
  const [panelRoute, setPanelRoute] = useState(/** @type {"scan_qr_code" | "enter_pass_code"} */ ("scan_qr_code"))
  const [selectedActivityId, setSelectedActivityId] = useState()
  const { id } = useParams()
  const targetTask = useMemo(() => taskContext.allTasks.find(task => task.id === parseInt(id)), [id])

  const { fetchNFTs } = useNFTs()
  const navigate = useNavigate()

  useEffect(() => {
    setSelectedActivityId(storage.get("selectedActivityId"))
  }, [])
  useEffect(() => {
    if (showCompletedDialog)
      setTimeout(() => {
        setShowCompletedDialog(false)

        navigate(`/activity/${selectedActivityId}`)
      }, 2000)
  }, [showCompletedDialog])

  const goBack = () => navigate(`/activity/${selectedActivityId}`)

  async function checkPassCode(passCode, html5QrCode) {
    if (targetTask.qrcode !== String(passCode)) {
      console.log("not pass")
      return
    }
    // html5QrCode.clear()
    try {
      //*** post create memberTask to server, generate NFT. */
      const response = await apiMemberTaskCreate(
        { memberId: memberContext.member["line_userId"], qrcode: String(passCode) },
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } },
      )
      if (response.status !== 200) throw response

      setShowCompletedDialog(true)

      await fetchNFTs(walletContext.wallet.solAccount_pubkey, nfts => {
        console.log("nfts: ", nfts)
        let wallet = { ...walletContext.wallet, nfts: nfts }
        walletContext.setWallet(wallet)
        storage.set("wallet", wallet)
      })
    } catch (error) {
      console.log("apiMemberTaskCreate FAILED: ", error)
    }
  }

  return (
    <>
      <CompletedDialogContainer style={showCompletedDialog ? { zIndex: 100 } : { opacity: 0, zIndex: -1 }}>
        <CompletedDialog style={showCompletedDialog ? {} : { transform: "translateY(100%)" }}>
          <img src={targetTask.pictureUrl === null ? "" : targetTask.pictureUrl} />
          <CongratulationsText>恭喜過關！</CongratulationsText>
        </CompletedDialog>
      </CompletedDialogContainer>
      <Div15>
        <Div5>
          <Div6 onClick={goBack}>
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
        <Div4
          style={{
            ...(targetTask.pictureUrl !== undefined ? { backgroundImage: `url("${targetTask.pictureUrl}")` } : {}),
          }}
        >
          {targetTask.name}
        </Div4>
        <Div16>
          <Div17
            style={{
              ...(panelRoute === "scan_qr_code"
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
          {panelRoute === "scan_qr_code" && panelRoute === "enter_pass_code" ? <Div18></Div18> : null}
          <Div17
            style={{
              ...(panelRoute === "enter_pass_code"
                ? {
                    borderRadius: "6.93px",
                    border: "0.5px solid rgba(0, 0, 0, 0.04)",
                    background: "#FFF",
                    boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                  }
                : {}),
            }}
            onClick={() => setPanelRoute("enter_pass_code")}
          >
            輸入 PASS 碼
          </Div17>
        </Div16>

        <Div0>
          {panelRoute === "scan_qr_code" ? (
            <TaskQRCodePanel setPanelRoute={setPanelRoute} id={id} checkPassCode={checkPassCode} />
          ) : (
            <EnterPassPanel setPanelRoute={setPanelRoute} id={id} checkPassCode={checkPassCode} />
          )}
        </Div0>
        <Div9 onClick={goBack}>
          <Div19>返回遊戲說明</Div19>
        </Div9>
      </Div15>
    </>
  )
}

function TaskQRCodePanel({ checkPassCode }) {
  const onNewScanResult = async (decodedText, decodedResult, html5QrCode) => {
    console.log("decodedText:", decodedText)
    console.log("decodedResult:", decodedResult)

    await checkPassCode(decodedText, html5QrCode)
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

function EnterPassPanel({ checkPassCode }) {
  const [passCode, setPassCode] = useState("")

  return (
    <Div0>
      <Div3>
        {/* https://stackoverflow.com/a/67388472/ */}
        <Input0
          placeholder="PASS"
          style={{ ...(passCode.length === 0 ? { color: "#DADADA" } : {}) }}
          value={passCode}
          onChange={event => setPassCode(event.target.value)}
          onKeyDown={async ({ key }) => key === "Enter" && (await checkPassCode(passCode))}
        />
      </Div3>
      <Div1>
        <Div2></Div2>
      </Div1>
    </Div0>
  )
}
