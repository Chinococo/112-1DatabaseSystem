import AppBar from "@mui/material/AppBar"
import Button from "@mui/material/Button"
import Toolbar from "@mui/material/Toolbar"
import React from "react"
import { useNavigate, useParams } from "react-router-dom"
import storage from "store2"
import { styled } from "styled-components"

import { apiAddFavorite, apiGetFavorite } from "../components/API"
import CustomAppBar from "../components/CustomAppBar"
import ActivityContext from "../contexts/ActivityContext"
import DialogControllContext from "../contexts/DialogControllContext"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import SelectedActivityContext from "../contexts/SelectedActivityContext"
import { useMemberActivityCode } from "../hooks/useMemberActivityCode"
import topImg from "../img/4b1e8231f3568fc8d22149672cd54ca5.jpg"
import HeartIcon from "../img/heart"
import speakerImg from "../img/testphoto.png"
import ActivityLoading from "./Dialog/ActivityLoading"
import ActivityLoadingPublic from "./Dialog/ActivityLoading_Public"
import JoinSuccess from "./Dialog/JoinSuccess"
import Rejoin from "./Dialog/Rejoin"

const Div0 = styled.div`
  width: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`

const Div1 = styled.div`
  color: #fff;
  font-size: 14px;
  font-family: Montserrat;
  font-weight: 700;
`

const Div2 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`

const Div3 = styled.div`
  background: var(--black, #292929);
  padding-bottom: 80px;
  position: relative;
  top: 65px;
`

const Div4 = styled.div`
  position: relative;
  padding-bottom: 56.2%;
`

const Img0 = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
`

const Div5 = styled.div`
  padding: 27px 24px;
  gap: 32px;
  display: flex;
  flex-direction: column;
`

const Div6 = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
`

const Div8 = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;
  gap: 8px;
`

const Div9 = styled.div`
  width: 336px;
  flex-shrink: 0;
  color: var(--white, #fff);
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
`

const Div11 = styled.div`
  display: flex;
  width: 335px;
  height: 20px;
  align-items: center;
  gap: -92px;
`

const Div13 = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Div14 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

const Div15 = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

const Div16 = styled.div`
  flex-shrink: 0;
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`

const Div17 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`

const Div18 = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 10px;
`

const Div19 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
`

const Img1 = styled.img`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
  border-radius: 72px;
`

const Div21 = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 78px;
`

const Div23 = styled.div`
  display: flex;
  gap: 10px;
`

const Div25 = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
`

const Div26 = styled.div`
  display: flex;
  gap: 12px;
`

const Div27 = styled.div`
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 44px;
  background: green;
`

const Div28 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

const Div29 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`

const Div30 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const NavBarContainer = styled.div`
  background-color: black;
  display: flex;
  height: 65px;
  width: 100%;
  padding: 0 12px;
  justify-content: space-between;
  align-items: center;
`

function BottomButtonBar(props) {
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  function buttonClick() {
    console.log("button click")
    console.log("props.act: ", props.act)
    selectedActivityCtx.setActivity(props.act)
    const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
      return obj.activityId == props.act.id
    })
    if (isActivityJoinedIndex == -1) {
      dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
    } else dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
  }

  return (
    <AppBar position="fixed" sx={{ backgroundColor: "black", top: "auto", bottom: 0 }}>
      <Toolbar>
        <NavBarContainer>
          <Div0>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C18.7956 8 19.5587 7.68393 20.1213 7.12132C20.6839 6.55871 21 5.79565 21 5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2C17.2044 2 16.4413 2.31607 15.8787 2.87868C15.3161 3.44129 15 4.20435 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91C19.61 21.91 20.92 20.61 20.92 19C20.92 18.2256 20.6124 17.4829 20.0648 16.9352C19.5171 16.3876 18.7744 16.08 18 16.08Z"
                fill="white"
              />
            </svg>
            <Div1>分享</Div1>
          </Div0>
          <Button
            style={{
              padding: "10px 25px",
              margin: "0 0 50px 0",
              justifyContent: "center",
              alignItems: "center",
              gap: "10px",
              borderRadius: "12px",
              background: "var(--green, #90CE5F)",
              boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
            }}
            disabled={activityCtx.activityList[activityIndex].isRegistered === 1 ? false : true}
            onClick={buttonClick}
          >
            <Div2>{activityCtx.activityList[activityIndex].isRegistered === 1 ? 我要參加 : 無法參加}</Div2>
          </Button>
          <Div0>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                fill="white"
              />
            </svg>
            <Div1>收藏</Div1>
          </Div0>
        </NavBarContainer>
      </Toolbar>
    </AppBar>
  )
}

const Div7 = styled(Div9)`
  font-size: 25px;
  line-height: 25px;
`

const Div10 = styled(Div9)`
  font-size: 16px;
  line-height: 20px;
`

const Div12 = styled(Div16)`
  width: 400px;
`

const Div22 = styled(Div17)`
  width: 44px;
  text-align: center;
`

const Div24 = styled(Div16)`
  display: flex;
  /* height: 70px; */
  /* margin-top: 10px;
  margin-bottom: 10px; */
  flex-direction: column;
  justify-content: center;
`

const Div31 = styled(Div16)`
  flex-shrink: 0;
`

export default function DiscoverActivity() {
  const apiConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }
  const { id } = useParams()
  const activityCtx = React.useContext(ActivityContext)
  const memberCtx = React.useContext(MemberContext)
  const activityIndex = activityCtx.activityList.findIndex(obj => {
    return obj.id == parseInt(id)
  })

  const { fetchMemberActivityCode } = useMemberActivityCode()
  const dialogControllCtx = React.useContext(DialogControllContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const selectedActivityCtx = React.useContext(SelectedActivityContext)

  const [storeActivities, setStoreActivities] = React.useState([])
  const [isFavorite, setIsFavorite] = React.useState(false)
  React.useEffect(() => {
    async function getFavorite() {
      const resp = await apiGetFavorite(memberCtx.member.line_userId).catch(err => console.log(err))
      const temp = JSON.parse(resp.data[0].storeActivities)
      setStoreActivities(temp)
      if (temp.indexOf(parseInt(id)) != -1) setIsFavorite(true)

      await fetchMemberActivityCode(memberCtx.member.line_userId, memberActivityCodeList => {
        memberActivityCodeCtx.setMemberActivityCodeList(memberActivityCodeList)
        storage.set("memberActivityCode", memberActivityCodeList)
      })

      console.log("memberCtx.member.line_userId: ", memberCtx.member.line_userId)
    }
    getFavorite()
  }, [])

  function buttonClick() {
    console.log("button click")
    // console.log("props.act: ", props.act)
    selectedActivityCtx.setActivity(activityCtx.activityList[activityIndex])
    console.log("selectedActivityCtx: ", selectedActivityCtx.activity)
    const isActivityJoinedIndex = memberActivityCodeCtx.memberActivityCodeList.findIndex(obj => {
      return obj.activityId == activityCtx.activityList[activityIndex].id
    })
    console.log("memberActivityCodeCtx.memberActivityCodeList: ", memberActivityCodeCtx.memberActivityCodeList)
    console.log("activityCtx.activityList: ", activityCtx.activityList)
    console.log("isActivityJoinedIndex: ", isActivityJoinedIndex)

    if (isActivityJoinedIndex == -1) {
      if (selectedActivityCtx.activity.publish == 0) {
        dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading: true })
      } else {
        dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, activityLoading_public: true })
      }
      console.log(dialogControllCtx.dialogControll)
    } else {
      dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, rejoin: true })
    }
  }

  async function addFavorite() {
    if (storeActivities != undefined) {
      if (storeActivities.indexOf(parseInt(id)) == -1) {
        storeActivities.push(parseInt(id))
        const data = {
          storeActivities: JSON.stringify(storeActivities),
        }
        const res = await apiAddFavorite(memberCtx.member.line_userId, data, apiConfig).catch(err => console.log(err))
        setIsFavorite(!isFavorite)
        console.log(res.data)
      } else {
        console.log("had")
        const filteredStoreActivities = storeActivities.filter(item => item != parseInt(id))
        const data = {
          storeActivities: JSON.stringify(filteredStoreActivities),
        }
        const res = await apiAddFavorite(memberCtx.member.line_userId, data, apiConfig).catch(err => console.log(err))
        setIsFavorite(!isFavorite)
        console.log(res.data)
      }
    } else {
      console.log("storeActivities == undefined")
    }
  }

  console.log("123:::", activityCtx.activityList[activityIndex])
  return (
    <>
      <ActivityLoading />

      <ActivityLoadingPublic key={id}></ActivityLoadingPublic>

      <JoinSuccess></JoinSuccess>
      <Rejoin />
      <Div3>
        <CustomAppBar />

        <Div4>
          <Img0 src={activityCtx.activityList[activityIndex].picture} />
        </Div4>

        <Div5>
          <Div6>
            <Div7>
              {/* 元宇宙 YEP */}
              {activityCtx.activityList[activityIndex].name}
            </Div7>
          </Div6>

          <Div8>
            <Div10>
              {activityCtx.activityList[activityIndex].venue_info === null
                ? ""
                : activityCtx.activityList[activityIndex].venue_info.hours}
            </Div10>
            <Div11>
              <Div12>{activityCtx.activityList[activityIndex].activityLocation}</Div12>
              {/* <Div13>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M10 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V14M12 12L20 4M20 4V9M20 4H15"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Div13> */}
            </Div11>
          </Div8>

          <Div14>
            <Div15>
              <Div16>活動簡介</Div16>
            </Div15>
            <Div15>
              <Div17>
                {activityCtx.activityList[activityIndex].description.split(/\r\n/).map(word => (
                  <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
                ))}
              </Div17>
            </Div15>
          </Div14>

          <Div14>
            <Div15>
              <Div16>活動特色</Div16>
            </Div15>
            <Div15>
              <Div17>
                {activityCtx.activityList[activityIndex].feature === null
                  ? "活動特色"
                  : activityCtx.activityList[activityIndex].feature
                      .split(/\r\n/)
                      .map(word => <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>)}
              </Div17>
            </Div15>
          </Div14>

          <Div14>
            <Div15>
              <Div16>活動講者</Div16>
            </Div15>
            <Div18>
              <Div19>
                {activityCtx.activityList[activityIndex].speakerPicUrl === null
                  ? ""
                  : JSON.parse(activityCtx.activityList[activityIndex].speakerPicUrl.replace(/'/g, '"')).map(item => {
                      return <Img1 src={item} />
                    })}
              </Div19>
              <Div21>
                {activityCtx.activityList[activityIndex].speaker === null ? (
                  <Div22>無</Div22>
                ) : (
                  JSON.parse(activityCtx.activityList[activityIndex].speaker.replace(/'/g, '"')).map(item => {
                    return <Div22>{item}</Div22>
                  })
                )}
              </Div21>
            </Div18>
          </Div14>

          <Div14>
            <Div14>
              <Div23>
                <Div24>活動單位</Div24>
              </Div23>
            </Div14>

            <Div25>
              <Div26>
                <Img1 src={activityCtx.activityList[activityIndex].hosterPicUrl} />
                <Div28>
                  <Div29>{activityCtx.activityList[activityIndex].hoster}</Div29>
                  <Div17>
                    {activityCtx.activityList[activityIndex].hosterIntroduction.split(/\r\n/).map(word => (
                      <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
                    ))}
                  </Div17>
                </Div28>
              </Div26>
            </Div25>
          </Div14>

          <Div14>
            <Div15>
              <Div24>更多資訊</Div24>
            </Div15>
            <Div15>
              <Div17>
                {activityCtx.activityList[activityIndex].moreInformations === null
                  ? ""
                  : activityCtx.activityList[activityIndex].moreInformations}
              </Div17>
            </Div15>
          </Div14>

          <Div14>
            <Div15>
              <Div31>活動官網</Div31>
            </Div15>
            <Div15>
              <Div17>
                {activityCtx.activityList[activityIndex].announceUrl === null
                  ? ""
                  : activityCtx.activityList[activityIndex].announceUrl}
              </Div17>
            </Div15>
          </Div14>

          {/* <Div30>
            <Div24>更多資訊</Div24>
            <Div15>
              <Div17>
                {activityCtx.activityList[activityIndex].moreInformations === null
                  ? ""
                  : activityCtx.activityList[activityIndex].moreInformations}
              </Div17>
            </Div15>
            <Div31>
              活動官網
              <Div17>
                {activityCtx.activityList[activityIndex].announceUrl === null
                  ? ""
                  : activityCtx.activityList[activityIndex].announceUrl}
              </Div17>
            </Div31>
          </Div30> */}
        </Div5>
      </Div3>
      <AppBar position="fixed" sx={{ backgroundColor: "black", top: "auto", bottom: 0 }}>
        <Toolbar>
          <NavBarContainer>
            <Div0>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12C9 11.76 8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C18.7956 8 19.5587 7.68393 20.1213 7.12132C20.6839 6.55871 21 5.79565 21 5C21 4.20435 20.6839 3.44129 20.1213 2.87868C19.5587 2.31607 18.7956 2 18 2C17.2044 2 16.4413 2.31607 15.8787 2.87868C15.3161 3.44129 15 4.20435 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12C3 12.7956 3.31607 13.5587 3.87868 14.1213C4.44129 14.6839 5.20435 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91C19.61 21.91 20.92 20.61 20.92 19C20.92 18.2256 20.6124 17.4829 20.0648 16.9352C19.5171 16.3876 18.7744 16.08 18 16.08Z"
                  fill="white"
                />
              </svg>
              <Div1>分享</Div1> */}
            </Div0>
            <Button
              style={{
                padding: "10px 25px",
                margin: "0 0 50px 0",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background:
                  activityCtx.activityList[activityIndex].isRegistered === 1 ? "var(--green, #90CE5F)" : "#757575",
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
              }}
              disabled={activityCtx.activityList[activityIndex].isRegistered === 1 ? false : true}
              onClick={buttonClick}
            >
              <Div2>{activityCtx.activityList[activityIndex].isRegistered === 1 ? "我要參加" : "敬請期待"}</Div2>
            </Button>
            <Div0 onClick={addFavorite}>
              {isFavorite == true ? (
                <HeartIcon />
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M12.1 18.55L12 18.65L11.89 18.55C7.14 14.24 4 11.39 4 8.5C4 6.5 5.5 5 7.5 5C9.04 5 10.54 6 11.07 7.36H12.93C13.46 6 14.96 5 16.5 5C18.5 5 20 6.5 20 8.5C20 11.39 16.86 14.24 12.1 18.55ZM16.5 3C14.76 3 13.09 3.81 12 5.08C10.91 3.81 9.24 3 7.5 3C4.42 3 2 5.41 2 8.5C2 12.27 5.4 15.36 10.55 20.03L12 21.35L13.45 20.03C18.6 15.36 22 12.27 22 8.5C22 5.41 19.58 3 16.5 3Z"
                    fill="white"
                  />
                </svg>
              )}
              <Div1>收藏</Div1>
            </Div0>
          </NavBarContainer>
        </Toolbar>
      </AppBar>
    </>
  )
}
