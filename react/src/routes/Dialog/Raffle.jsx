import DialogControllContext from "../../contexts/DialogControllContext"
import prizeImg from "../../img/7a6ba7e2370dc9f978492aec582e318f.jpg"
import raffleImg from "../../img/61558ff76420ccbff86668b6fbeea307.png"
import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import React from "react"
import styled from "styled-components"

const Div0 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`

const Div3 = styled.div`
  text-shadow: 0px 4px 25px rgba(0, 0, 0, 0.4);
  font-family: Montserrat;
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

const Div5 = styled.div`
  flex: 0.15 1 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div6 = styled.div`
  width: 77.209px;
`

const Img1 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Div7 = styled.div`
  flex: 1 1 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div8 = styled.div`
  width: 300px;
`

const Div9 = styled.div`
  flex: 0.5 1 0;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Div11 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Div14 = styled.div`
  color: #fff;
  font-family: Noto Sans TC;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Div16 = styled.div`
  flex: 1 1 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div17 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 8px;
`

const Input0 = styled.input`
  height: 36px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  background: var(--white, #fff);
`

const Div18 = styled.div`
  color: var(--white, #fff);
  font-family: Noto Sans TC;
  font-size: 20px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;
`

const Div19 = styled.div`
  width: 100%;
  padding: 16px 20px 0 16px;
  display: flex;
  justify-content: space-between;
`

const Div20 = styled.div`
  width: 24px;
  height: 24px;
`

const Div21 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Div22 = styled.div`
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

function RaffleResult() {
  return (
    <>
      <Div0>
        <Div1>
          <Div2>🎉</Div2>
          <Div4>
            恭喜您 黃大明 <br /> 您是這次抽獎的得獎者！
          </Div4>
          <Img0 src={prizeImg}></Img0>
        </Div1>

        <Div5>
          <Div6>
            <Img1 src={raffleImg}></Img1>
          </Div6>
        </Div5>
      </Div0>
    </>
  )
}

function RaffleProcessing(props) {
  //for test
  React.useEffect(() => {
    setTimeout(() => {
      props.setPanelRoute("raffle_result")
    }, 1000)
  }, [])

  return (
    <Div0>
      <Div7>
        <Div8>
          <Img1 src={raffleImg}></Img1>
        </Div8>
      </Div7>
      <Div9>
        <Div10>抽獎中...</Div10>
      </Div9>
    </Div0>
  )
}

function RaffleJoin(props) {
  const [enterValue, setEnterValue] = React.useState("")

  return (
    <Div0>
      <Div12>
        <Div13>加入抽獎顯示為</Div13>
        <Div15>黃大明</Div15>
      </Div12>
      <Div16>
        <Div10>
          或<br />
          修改您的顯示名稱
        </Div10>
        <Div17>
          <Input0
            onChange={e => {
              setEnterValue(e.target.value)
            }}
            type="text"
            placeholder="使用預設名稱as黃大明"
          />
        </Div17>
      </Div16>
      <Button
        onClick={() => {
          props.setPanelRoute("proccessing")
        }}
        style={{
          display: "flex",
          padding: "16px 64px",
          justifyContent: "center",
          borderRadius: "12px",
          background: "#90CE5F",
          boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
        }}
      >
        <Div18>確認加入</Div18>
      </Button>
    </Div0>
  )
}

const Div2 = styled(Div3)`
  color: var(--unnamed, #000);
  font-size: 64px;
`

const Div4 = styled(Div3)`
  color: var(--white, #fff);
  text-align: center;
  font-size: 24px;
`

const Div1 = styled(Div11)`
  flex: 0.85 1 0;
  gap: 32px;
`

const Div12 = styled(Div11)`
  flex: 1 1 0;
`

const Div13 = styled(Div14)`
  font-size: 16px;
`

const Div15 = styled(Div14)`
  margin: 32px 0;
  font-size: 48px;
`

const Div10 = styled(Div22)`
  color: #fff;
`

const Div23 = styled(Div22)`
  color: var(--white, #fff);
`

export default function Raffle() {
  const [panelRoute, setPanelRoute] =
    /** @type {ReturnType<typeof useState<"join_raffle" | "proccessing" | "raffle_result">>} */ (
      React.useState("join_raffle")
    )
  const dialogControllCtx = React.useContext(DialogControllContext)

  function handleClose() {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, raffle: false })
    setPanelRoute("join_raffle")
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.raffle}
        //TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        //aria-labelledby="customized-dialog-title"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              height: "100%",
              borderRadius: "32px",
              alignItems: "center",
              paddingBottom: "48px",
              background: "var(--unnamed, linear-gradient(141deg, #D373BE 0%, #8A64CE 100%))",
            },
          },
        }}
      >
        <Div19>
          <Div20 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </svg>
          </Div20>
          <Div21>
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M33.9833 32.283L27.3 29.9997L25 36.6663L19.8667 26.6663L15 36.6663L12.7 29.9997L6.01666 32.283L10.8833 22.283C9.28333 20.283 8.33333 17.7497 8.33333 14.9997C8.33333 11.9055 9.56249 8.93802 11.7504 6.7501C13.9383 4.56217 16.9058 3.33301 20 3.33301C23.0942 3.33301 26.0616 4.56217 28.2496 6.7501C30.4375 8.93802 31.6667 11.9055 31.6667 14.9997C31.6667 17.7497 30.7167 20.283 29.1167 22.283L33.9833 32.283ZM11.6667 14.9997L16.15 17.233L15.8333 22.233L20 19.4663L24.1667 22.2163L23.8833 17.233L28.3333 14.9997L23.8667 12.7497L24.1667 7.78301L20 10.5163L15.8333 7.74967L16.1167 12.7663L11.6667 14.9997Z"
                  fill="white"
                />
              </svg>
            </div>
            <Div23>活動抽獎區</Div23>
          </Div21>
          <Div20>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M15.07 11.25L14.17 12.17C13.45 12.89 13 13.5 13 15H11V14.5C11 13.39 11.45 12.39 12.17 11.67L13.41 10.41C13.78 10.05 14 9.55 14 9C14 7.89 13.1 7 12 7C11.4696 7 10.9609 7.21071 10.5858 7.58579C10.2107 7.96086 10 8.46957 10 9H8C8 7.93913 8.42143 6.92172 9.17157 6.17157C9.92172 5.42143 10.9391 5 12 5C13.0609 5 14.0783 5.42143 14.8284 6.17157C15.5786 6.92172 16 7.93913 16 9C16 9.88 15.64 10.67 15.07 11.25ZM13 19H11V17H13M12 2C10.6868 2 9.38642 2.25866 8.17317 2.7612C6.95991 3.26375 5.85752 4.00035 4.92893 4.92893C3.05357 6.8043 2 9.34784 2 12C2 14.6522 3.05357 17.1957 4.92893 19.0711C5.85752 19.9997 6.95991 20.7362 8.17317 21.2388C9.38642 21.7413 10.6868 22 12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 6.47 17.5 2 12 2Z"
                fill="white"
              />
            </svg>
          </Div20>
        </Div19>
        {panelRoute == "join_raffle" ? (
          <RaffleJoin setPanelRoute={setPanelRoute} />
        ) : panelRoute == "proccessing" ? (
          <RaffleProcessing setPanelRoute={setPanelRoute} />
        ) : (
          <RaffleResult />
        )}
      </Dialog>
    </>
  )
}
