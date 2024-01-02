import Box from "@mui/material/Box"
import Tab from "@mui/material/Tab"
import Tabs from "@mui/material/Tabs"
import PropTypes from "prop-types"
import { useContext, useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import storage from "store2"
import styled from "styled-components"

import { apiActicityList } from "../../components/API"
import ActivityContext from "../../contexts/ActivityContext"
import DialogControllContext from "../../contexts/DialogControllContext"
import MemberActivityCodeContext from "../../contexts/MemberActivityCodeContext"
import SelectedActivityContext from "../../contexts/SelectedActivityContext"

const Div0 = styled.div`
  width: 100%;
`

const Div1 = styled.div`
  background-color: #292929;
  flex-grow: 1;
`

const Div2 = styled.div`
  padding-top: 64px;
  padding-bottom: 100px;
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  background: #292929;
`

const Div3 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
`

const Div4 = styled.div`
  display: flex;
  padding: 7px 15px;
  align-items: center;
  gap: 20px;
  border-radius: 100px;
  background: #fff;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.25);
`

const Div5 = styled.div`
  width: 17.5px;
  height: 17.5px;
  flex-shrink: 0;
`

const Input0 = styled.input`
  border: none;
  width: 260px;
  flex-shrink: 0;
  color: #808080;
  font-family: Noto Sans TC;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

const Div6 = styled.div`
  display: flex;
  width: 336px;
  padding: 8px 0px 4px 0px;
  align-items: center;
  gap: 8px;
`

const Div7 = styled.div`
  width: 32px;
  height: 32px;
  flex-shrink: 0;
`

const Div9 = styled.div`
  display: flex;
  padding: 4px 0px 0px 27px;
  flex-direction: column;
  align-items: center;
  gap: 12px;
`

const Div10 = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`

const Div11 = styled.div`
  width: 100%;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Div14 = styled.div`
  width: 336px;
  border-radius: 12px;
  aspect-ratio: 16 / 9;
`

const Div15 = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
  overflow: auto;
  scroll-snap-type: x mandatory;

  &::-webkit-slider-thumb {
    display: none;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }
`

const Div17 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  margin: 5px 0px;
`

const Div18 = styled.div`
  width: 224px;
  border-radius: 12px;
`

const Img0 = styled.img`
  border-radius: 12px;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 16 / 9;
`

const Div19 = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  padding: 4px 0px 0px 27px;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  &::-webkit-slider-thumb {
    display: none;
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar {
    display: none;
    -webkit-appearance: none;
  }
`

const Div20 = styled.div`
  width: 278px;
  color: #fff;
  font-family: Montserrat;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Div21 = styled.div`
  color: #dadada;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`

const Div22 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const Div24 = styled.div`
  align-self: stretch;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

// const Div27 = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 16px;
// `

const Div28 = styled.div`
  width: 160px;
  border-radius: 12px;
`

const Div29 = styled.div`
  width: 390px;
  height: 161px;
  padding: 0px 24px 0px 24px;
  display: flex;
  gap: 16px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 27px;
`

const Div27 = styled.div`
  width: 336px;
  border-radius: 12px;
`

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function CustomTabPanel(props) {
  const { children, value, index } = props

  return <Div0 hidden={value !== index}>{children}</Div0>
}

const Div8 = styled(Div11)`
  font-size: 32px;
`

const Div12 = styled(Div11)`
  font-size: 18px;
`

const Div13 = styled(Div15)`
  padding: 0px 0px 0px 24px;
`

const Div16 = styled(Div15)`
  padding: 0px 24px 0px 24px;
`

const Div23 = styled(Div24)`
  color: #fff;
  font-size: 14px;
`

const Div25 = styled(Div24)`
  color: #c4c4c4;
  font-size: 12px;
`

const Div26 = styled(Div15)`
  height: 161px;
`

const Div30 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  margin: 5px 0px;
  padding: 0px 0px 0px 27px;
`

const TextWrap_13count = styled.p`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  max-width: 13.8rem;
  max-height: 2.8rem;
  margin: 0;
`

const TextWrap_TitleCount = styled.p`
  position: relative;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  width: 100%;
  max-width: 20.5rem;
  max-height: 2.8rem;
  margin: 0;
`

export default function Discover() {
  const [tab, setTab] = useState(0)
  const [factivities, setfActivities] = useState([])

  const nav = useNavigate()
  let memberNumberChecked = false
  const [activity, setActivity] = useState(0)
  const dialogControllCtx = useContext(DialogControllContext)
  const memberActivityCodeCtx = useContext(MemberActivityCodeContext)
  const selectedActivityCtx = useContext(SelectedActivityContext)
  const activityCtx = useContext(ActivityContext)

  function selectActivity(key) {
    nav(`/discoverActivity/${key.id}`)

    // selectedActivityCtx.setActivity(key);
    // const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex((obj) => {
    //   return obj.activityId == key.id
    // })
    // if (isActivityJoinedIndex == -1) {
    //   dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true });
    // } else
    //   dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true });
  }

  function selectMerchant(key) {
    nav("/discoverMerchant")
  }

  /**
   * 將以斜線標示的日期字串轉換為橫槓
   *
   * @param {string} str 要被轉換的日期字串
   * @returns {string}
   */
  function convertDateForDash(str) {
    return str.replace(/-/g, "/")
  }

  /**
   * 橫槓標示的日期字串是否位於未來一週內（活動將在一週內開始）
   *
   * @param {string} str 要被轉換的日期字串
   * @returns {boolean}
   */
  function startDateInOneWeek(str) {
    let startTime = new Date(str)
    let today = new Date()
    let nextWeek = new Date(today).setDate(today.getDate() + 7)

    if (startTime >= today && startTime <= nextWeek) {
      return true
    } else {
      return false
    }
  }

  /**
   * 橫槓標示的結束日期字串是否超過今天（活動進行中）
   *
   * @param {string} str 要被轉換的日期字串
   * @returns {boolean}
   */
  function activityInProgress(str) {
    let endTime = new Date(str)
    let today = new Date()

    if (endTime > today) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {
    async function getActicities() {
      try {
        const res = await apiActicityList()
        console.log(res)
        setActivities(res.data)
        setfActivities([res.data[0]])
      } catch {
        console.log("get task failed")
      }
    }
    getActicities()
  }, [])

  return (
    <Div1>
      <Div2>
        {/* <Div3>
          <Div4>
            <Div5>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                  d="M6.5 0.25C8.22391 0.25 9.87721 0.934819 11.0962 2.15381C12.3152 3.37279 13 5.02609 13 6.75C13 8.36 12.41 9.84 11.44 10.98L11.71 11.25H12.5L17.5 16.25L16 17.75L11 12.75V11.96L10.73 11.69C9.59 12.66 8.11 13.25 6.5 13.25C4.77609 13.25 3.12279 12.5652 1.90381 11.3462C0.684819 10.1272 0 8.47391 0 6.75C0 5.02609 0.684819 3.37279 1.90381 2.15381C3.12279 0.934819 4.77609 0.25 6.5 0.25ZM6.5 2.25C4 2.25 2 4.25 2 6.75C2 9.25 4 11.25 6.5 11.25C9 11.25 11 9.25 11 6.75C11 4.25 9 2.25 6.5 2.25Z"
                  fill="black"
                />
              </svg>
            </Div5>
            <Input0 placeholder="搜尋活動名稱、主辦單位"></Input0>
          </Div4>
        </Div3> */}

        {/* <Div6>
          <Div7>
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
              <path
                d="M18.9201 19.42L8.00008 24.5L13.0801 13.58L24.0001 8.49996M16.0001 3.16663C14.2491 3.16663 12.5153 3.5115 10.8976 4.18157C9.27996 4.85163 7.81011 5.83375 6.57199 7.07187C4.07151 9.57235 2.66675 12.9637 2.66675 16.5C2.66675 20.0362 4.07151 23.4276 6.57199 25.928C7.81011 27.1662 9.27996 28.1483 10.8976 28.8184C12.5153 29.4884 14.2491 29.8333 16.0001 29.8333C19.5363 29.8333 22.9277 28.4285 25.4282 25.928C27.9287 23.4276 29.3334 20.0362 29.3334 16.5C29.3334 14.749 28.9885 13.0152 28.3185 11.3975C27.6484 9.77984 26.6663 8.30998 25.4282 7.07187C24.1901 5.83375 22.7202 4.85163 21.1025 4.18157C19.4849 3.5115 17.751 3.16663 16.0001 3.16663ZM16.0001 15.0333C15.6111 15.0333 15.238 15.1878 14.963 15.4629C14.6879 15.7379 14.5334 16.111 14.5334 16.5C14.5334 16.8889 14.6879 17.262 14.963 17.537C15.238 17.8121 15.6111 17.9666 16.0001 17.9666C16.3891 17.9666 16.7621 17.8121 17.0372 17.537C17.3122 17.262 17.4667 16.8889 17.4667 16.5C17.4667 16.111 17.3122 15.7379 17.0372 15.4629C16.7621 15.1878 16.3891 15.0333 16.0001 15.0333Z"
                fill="white"
              />
            </svg>
          </Div7>
          <Div8>發現</Div8>
        </Div6> */}

        {/* <Box sx={{ borderBottom: 0, background: "#76768033", padding: "2px", borderRadius: "8px", minHeight: "33px" }}>
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            textColor="black"
            TabIndicatorProps={{
              style: {
                display: "none",
                minHeight: "33px",
                background: "#76768033",
              },
            }}
            sx={{
              minHeight: "33px",
            }}
          >
            <Tab
              label="活動"
              sx={{
                display: "flex",
                width: "154px",
                minHeight: "33px",
                flexDirection: "column",
                justifyContent: "center",
                padding: "6px 8px",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "bolder",
                letterSpacing: "-0.24px",
                borderRadius: "6.93px 0px 0px 6.93px ",
                border: "0.5px",
                boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                ...(tab === 0 && {
                  color: "var(--label-color-light-primary, #000)",
                  textAlign: "center",
                  padding: "6px 8px",
                  minHeight: "33px",
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  letterSpacing: "-0.24px",
                  borderRadius: "6.93px",
                  background: "#FFF",
                  boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                  width: "169px",
                }),
              }}
            />
            <Tab
              label="主辦方"
              sx={{
                display: "flex",
                padding: "6px 8px",
                width: "154px",
                minHeight: "33px",
                flexDirection: "column",
                justifyContent: "center",
                color: "#FFF",
                textAlign: "center",
                fontFamily: "Montserrat",
                fontSize: "15px",
                fontStyle: "normal",
                fontWeight: "bolder",
                letterSpacing: "-0.24px",
                borderRadius: "0px 6.93px 6.93px 0px",
                border: "0.5px solid rgba(0, 0, 0, 0.04)",
                ...(tab === 1 && {
                  color: "var(--label-color-light-primary, #000)",
                  textAlign: "center",
                  minHeight: "33px",
                  padding: "6px 8px",
                  fontFamily: "Montserrat",
                  fontSize: "15px",
                  fontStyle: "normal",
                  fontWeight: "bolder",
                  letterSpacing: "-0.24px",
                  borderRadius: "6.93px",
                  background: "#FFF",
                  boxShadow: "0px 3px 1px 0px rgba(0, 0, 0, 0.04), 0px 3px 8px 0px rgba(0, 0, 0, 0.12)",
                  width: "169px",
                }),
              }}
            />
          </Tabs>
        </Box> */}
        <CustomTabPanel value={tab} index={0}>
          <Div9 style={{alignItems: "start"}}>
            <p style={{ fontFamily: "PressStart2P", color: "white", fontSize: "2rem" }}>Welcome Back!</p>
          </Div9>
          <Div9>
            <Div10>
              <Div11>精選</Div11>
            </Div10>
            <Div15 style={{ marginBottom: "1rem" }}>
              <Div27>
                <Img0
                  key={activityCtx.activityList[0]?.id}
                  onClick={() => selectActivity(activityCtx.activityList[0])}
                  src={activityCtx.activityList[0]?.picture}
                />
                <Div23>
                  <TextWrap_TitleCount>{activityCtx.activityList[0]?.name}</TextWrap_TitleCount>
                </Div23>
              </Div27>
            </Div15>
            <Div15>
              {activityCtx.activityList.map(obj =>
                startDateInOneWeek(obj.start_at) || activityInProgress(obj.end_at) ? (
                  <Div17 key={obj.id} onClick={() => selectActivity(obj)}>
                    <Div18>
                      {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                    </Div18>
                    <Div23>
                      <TextWrap_13count>{obj.name}</TextWrap_13count>
                      <p style={{ color: "#ababab", fontWeight: "normal", marginTop: "4px", marginBottom: 0 }}>
                        {convertDateForDash(obj.start_at)}~{convertDateForDash(obj.end_at)}
                      </p>
                    </Div23>
                    <Div25>{obj.hoster}</Div25>
                  </Div17>
                ) : null,
              )}
            </Div15>
          </Div9>
          <Div19 style={{ display: "none" }}>
            <Div10>
              <Div20>熱門</Div20>
              <Div21>查看所有</Div21>
            </Div10>
            <Div15>
              {activityCtx.activityList.map(obj =>
                obj.activityType == "熱門" && activityInProgress(obj.end_at) && obj.isActiviated == 1 ? (
                  <Div22 key={obj.id} onClick={() => selectActivity(obj)}>
                    <Div18>
                      {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                    </Div18>
                    <Div23>
                      <TextWrap_13count>{obj.name}</TextWrap_13count>
                      <p style={{ color: "#ababab", fontWeight: "normal", marginTop: "4px", marginBottom: 0 }}>
                        {convertDateForDash(obj.start_at)}~{convertDateForDash(obj.end_at)}
                      </p>
                    </Div23>
                    <Div25>{obj.hoster}</Div25>
                  </Div22>
                ) : null,
              )}
            </Div15>
          </Div19>
          {/* <Div19>
            <Div10>
              <Div20>精選</Div20>
              <Div21>查看所有</Div21>
            </Div10>
            <Div15>
              {activityCtx.activityList.map(obj =>
                obj.activityType == "精選" ? (
                  <Div20 key={obj.id} onClick={() => selectActivity(obj)}>
                    <Div18>
                      {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                    </Div18>
                    <Div23>
                      {obj.name}
                      <br />
                      {convertDate(obj.start_at)}~{convertDate(obj.end_at)}
                    </Div23>
                    <Div25>{obj.hoster}</Div25>
                  </Div20>
                ) : null,
              )}
            </Div15>
          </Div19> */}
          {/* <Div19>
            <Div10>
              <Div20>私人活動</Div20>
              <Div21>查看所有</Div21>
            </Div10>
            <Div15>
              {activityCtx.activityList.map(obj =>
                obj.activityType == "私人" ? (
                  <Div20 key={obj.id} onClick={() => selectActivity(obj)}>
                    <Div18>
                      {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                    </Div18>
                    <Div23>
                      {obj.name}
                      <br />
                      {convertDate(obj.start_at)}~{convertDate(obj.end_at)}
                    </Div23>
                    <Div25>{obj.creator}</Div25>
                  </Div20>
                ) : null,
              )}
            </Div15>
          </Div19> */}
        </CustomTabPanel>
        <CustomTabPanel value={tab} index={1}>
          <Div30>
            <Div10>
              <Div20>精選</Div20>
              <Div21>查看所有</Div21>
            </Div10>
            <Div26>
              {activityCtx.activityList.map(obj => (
                <Div27 key={obj.id} onClick={() => selectActivity(obj)}>
                  <Div28>
                    {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                  </Div28>
                  <Div23>{obj.hoster}</Div23>
                </Div27>
              ))}
            </Div26>
          </Div30>
          <Div30>
            <Div10>
              <Div20>熱門</Div20>
              <Div21>查看所有</Div21>
            </Div10>
            <Div26>
              {activityCtx.activityList.map(obj => (
                <Div27 key={obj.id} onClick={() => selectActivity(obj)}>
                  <Div28>
                    {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> : <Img0 src={obj.picture} />}
                  </Div28>
                  <Div23>{obj.hoster}</Div23>
                </Div27>
              ))}
            </Div26>
          </Div30>
        </CustomTabPanel>
      </Div2>
    </Div1>
  )
}
