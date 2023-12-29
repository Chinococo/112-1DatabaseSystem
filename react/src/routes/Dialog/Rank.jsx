import DialogControllContext from "../../contexts/DialogControllContext"
import Dialog from "@mui/material/Dialog"
import React from "react"
import styled from "styled-components"

const Div0 = styled.div`
  width: 100%;
  padding: 16px 20px 0px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Div1 = styled.div`
  width: 24px;
  height: 24px;
`

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  align-items: center;
`

const Div4 = styled.div`
  color: var(--black, var(--unnamed, #000));
  text-align: center;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  letter-spacing: -0.24px;
`

const Div6 = styled.div`
  color: var(--black, var(--unnamed, #000));
  font-family: Montserrat;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 57.5px;
  letter-spacing: -0.24px;
`

const Div7 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const Div8 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  justify-content: end;
`

const Div9 = styled.div`
  text-align: center;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div10 = styled.div`
  width: 52px;
  border-radius: 12px;
`

const Div11 = styled.div`
  width: 100%;
  padding: 16px 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Div13 = styled.div`
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 12px;
  background: var(--white, #fff);
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`

const Div14 = styled.div`
  height: 60px;
  flex: 0.32 1 0;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border-radius: 12px 0 0 12px;
  background: var(--unnamed, linear-gradient(141deg, #d373be 0%, #8a64ce 100%));
`

const Div16 = styled.div`
  flex: 0.78 1 0;
`

const Div17 = styled.div`
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: space-between;
`

const Div18 = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Div19 = styled.div`
  color: var(--light-backgrond, #292929);
  text-align: center;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
`

const Div2 = styled(Div4)`
  font-size: 16px;
  line-height: 20px;
`

const Div5 = styled(Div4)`
  margin: 30px 0;
  font-size: 96px;
  line-height: 57.5px;
`

const Div12 = styled(Div4)`
  font-size: 20px;
  line-height: 20px;
`

const Div15 = styled(Div9)`
  color: var(--white, #fff);
`

export default function Rank() {
  const dialogControllCtx = React.useContext(DialogControllContext)

  //*****for UI layout test******
  const steamScoreList = [
    { name: "綠隊", score: 57839, color: "--green-2, #81BA54" },
    { name: "黃隊", score: 40278, color: "--yellow, #E8C261" },
    { name: "紅隊", score: 25976, color: "--leave, #CE6D5F" },
    { name: "藍隊", score: 25734, color: "--blue-2, #3D79BB" },
  ]
  const teamColorMap = {
    綠隊: "--green-2, #81BA54",
    黃隊: "--yellow, #E8C261",
    紅隊: "--leave, #CE6D5F",
    藍隊: "--blue-2, #3D79BB",
  }
  const mostHighScore = 57839
  const memberScoreList = [
    { name: "Alice Wang", score: 1846, team: "綠隊" },
    { name: "Thomas Lee", score: 1698, team: "黃隊" },
    { name: "張阿華", score: 1654, team: "藍隊" },
    { name: "吳小莉", score: 1654, team: "綠隊" },
    { name: "Jason Huang", score: 9832, team: "藍隊" },
  ]
  //*****************************

  function handleClose() {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rank: false })
  }

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.rank}
        //TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              height: "150%",
              borderRadius: "32px",
              alignItems: "center",
              background: "var(--white, #FFF)",
              gap: "32px",
            },
          },
        }}
      >
        <Div0>
          <Div1 onClick={handleClose}>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M19.5 6.41L18.09 5L12.5 10.59L6.91 5L5.5 6.41L11.09 12L5.5 17.59L6.91 19L12.5 13.41L18.09 19L19.5 17.59L13.91 12L19.5 6.41Z"
                fill="black"
              />
            </svg>
          </Div1>
          <div>
            <Div2>活動積分排行</Div2>
          </div>
          <Div1>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
              <path
                d="M15.57 11.25L14.67 12.17C13.95 12.89 13.5 13.5 13.5 15H11.5V14.5C11.5 13.39 11.95 12.39 12.67 11.67L13.91 10.41C14.28 10.05 14.5 9.55 14.5 9C14.5 7.89 13.6 7 12.5 7C11.9696 7 11.4609 7.21071 11.0858 7.58579C10.7107 7.96086 10.5 8.46957 10.5 9H8.5C8.5 7.93913 8.92143 6.92172 9.67157 6.17157C10.4217 5.42143 11.4391 5 12.5 5C13.5609 5 14.5783 5.42143 15.3284 6.17157C16.0786 6.92172 16.5 7.93913 16.5 9C16.5 9.88 16.14 10.67 15.57 11.25ZM13.5 19H11.5V17H13.5M12.5 2C11.1868 2 9.88642 2.25866 8.67317 2.7612C7.45991 3.26375 6.35752 4.00035 5.42893 4.92893C3.55357 6.8043 2.5 9.34784 2.5 12C2.5 14.6522 3.55357 17.1957 5.42893 19.0711C6.35752 19.9997 7.45991 20.7362 8.67317 21.2388C9.88642 21.7413 11.1868 22 12.5 22C15.1522 22 17.6957 20.9464 19.5711 19.0711C21.4464 17.1957 22.5 14.6522 22.5 12C22.5 6.47 18 2 12.5 2Z"
                fill="black"
              />
            </svg>
          </Div1>
        </Div0>

        <Div3>
          <div>
            <Div5>🏆</Div5>
            <Div6>團隊即時排行</Div6>
          </div>

          <Div7>
            {steamScoreList.map(obj => (
              <Div8>
                <Div9
                  style={{
                    color: `var(${obj.color})`,
                  }}
                >
                  {obj.score}
                </Div9>
                <Div10
                  style={{
                    height: `calc(116px * ${obj.score} / ${mostHighScore})`,
                    background: `var(${obj.color})`,
                  }}
                />
                <Div9
                  style={{
                    color: `var(${obj.color})`,
                  }}
                >
                  {obj.name}
                </Div9>
              </Div8>
            ))}
          </Div7>
        </Div3>

        <Div11>
          <Div12>🏅個人名次即時排行</Div12>
          {memberScoreList.map(obj => (
            <Div13>
              <Div14>
                <Div15>{obj.score}分</Div15>
              </Div14>
              <Div16>
                <Div17>
                  <Div18>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                      <path
                        d="M12.5 19.2C10 19.2 7.79 17.92 6.5 16C6.53 14 10.5 12.9 12.5 12.9C14.5 12.9 18.47 14 18.5 16C17.21 17.92 15 19.2 12.5 19.2ZM12.5 5C13.2956 5 14.0587 5.31607 14.6213 5.87868C15.1839 6.44129 15.5 7.20435 15.5 8C15.5 8.79565 15.1839 9.55871 14.6213 10.1213C14.0587 10.6839 13.2956 11 12.5 11C11.7044 11 10.9413 10.6839 10.3787 10.1213C9.81607 9.55871 9.5 8.79565 9.5 8C9.5 7.20435 9.81607 6.44129 10.3787 5.87868C10.9413 5.31607 11.7044 5 12.5 5ZM12.5 2C11.1868 2 9.88642 2.25866 8.67317 2.7612C7.45991 3.26375 6.35752 4.00035 5.42893 4.92893C3.55357 6.8043 2.5 9.34784 2.5 12C2.5 14.6522 3.55357 17.1957 5.42893 19.0711C6.35752 19.9997 7.45991 20.7362 8.67317 21.2388C9.88642 21.7413 11.1868 22 12.5 22C15.1522 22 17.6957 20.9464 19.5711 19.0711C21.4464 17.1957 22.5 14.6522 22.5 12C22.5 6.47 18 2 12.5 2Z"
                        fill="#292929"
                      />
                    </svg>
                  </Div18>
                  <Div19>{obj.name}</Div19>
                  <Div9
                    style={{
                      color: `${teamColorMap[obj.team]}`,
                    }}
                  >
                    {obj.team}
                  </Div9>
                </Div17>
              </Div16>
            </Div13>
          ))}
        </Div11>
      </Dialog>
    </>
  )
}
