import React, { StrictMode } from "react"
import { Link, Route, Routes } from "react-router-dom"
import storage from "store2"

import { apiActicityList, apiNftView } from "./components/API"
import ActivityContext from "./contexts/ActivityContext"
import DialogControllContext from "./contexts/DialogControllContext"
import DrawerContext from "./contexts/DrawerContext"
import MemberActivityCodeContext from "./contexts/MemberActivityCodeContext"
import MemberContext from "./contexts/MemberContext"
import NFTContext from "./contexts/NFTContext"
import SelectedActivityContext from "./contexts/SelectedActivityContext"
import TaskContext from "./contexts/TaskContext"
import WalletContext from "./contexts/WalletContext"
import { AuthProvider } from "./contexts/auth.jsx"
import { useTasks } from "./hooks/useTasks"
import Activity from "./routes/Activity.jsx"
import BeginningOfGame from "./routes/BeginningOfGame"
import BottomPanel from "./routes/BottomPanel.jsx"
import Callback from "./routes/Callback.jsx"
import Raffle from "./routes/Dialog/Raffle"
import DiscoverActivity from "./routes/DiscoverActivity"
import DiscoverMerchant from "./routes/DiscoverMerchant"
import GameCompletion from "./routes/Game/GameCompletion"
import GameInfoImage from "./routes/Game/GameInfoImage"
import GameInfoText from "./routes/Game/GameInfoText"
import GameInfoVideo from "./routes/Game/GameInfoVideo"
import GameQuestionDigit from "./routes/Game/GameQuestionDigit"
import GameQuestionMultipleChoice from "./routes/Game/GameQuestionMultipleChoice"
import GameQuestionSort from "./routes/Game/GameQuestionSort"
import GameQuestionText from "./routes/Game/GameQuestionText"
import GameQuestionTrueOrFalse from "./routes/Game/GameQuestionTrueOrFalse"
import Home from "./routes/Home"
import LinkingLine from "./routes/LinkingLine.jsx"
import Login from "./routes/Login.jsx"
import Mainmenu from "./routes/Mainmenu.jsx"
import NFTCoupon from "./routes/NFTCoupon"
import NFTInfo from "./routes/NFTInfo"
import Signup from "./routes/Signup.jsx"
import Starting from "./routes/Starting.jsx"
import Task from "./routes/Task.jsx"
import TaskVerify from "./routes/TaskVerify"
import Movielist from "./routes/movielist"
import Option from "./routes/option"
import Bookinglist from "./routes/bookinglist"
import Api from "./routes/api"
import Moviebooking from "./routes/moviebooking"

export default function App() {
  const { fetchAllTasks } = useTasks()
  const [drawerOpen, setDrawerOpen] = React.useState(false)
  const [dialogControll, setDialogControll] = React.useState({
    bottomPanel: false,
    activityLoading: false,
    activityLoading_public: false,
    joinSuccess: false,
    rejoin: false,
    raffle: false,
    rank: false,
    taskCompletedNft: false,
    nftInfo: false,
    nftCouponExchangeCheck: false,
  })
  const [activityList, setActivityList] = React.useState(
    storage.get("activityList") === null ? [] : storage.get("activityList"),
  )
  const [memberActivityCodeList, setMemberActivityCodeList] = React.useState(
    storage.get("memberActivityCode") === null ? [] : storage.get("memberActivityCode"),
  )
  const [tasks, setTasks] = React.useState(storage.get("tasks") === null ? [] : storage.get("tasks"))
  const [allTasks, setAllTasks] = React.useState(storage.get("allTasks") === null ? [] : storage.get("allTasks"))
  const [wallet, setWallet] = React.useState(
    storage.get("wallet") === null ? { solKeypair: "", solAccount_pubkey: "", nfts: [] } : storage.get("wallet"),
  )
  const [nfts, setNfts] = React.useState()
  const [selectedNFTList, setSelectedNFTList] = React.useState()
  const [member, setMember] = React.useState(
    storage.get("member") === null
      ? { line_userId: "", line_displayName: "", line_pictureUrl: "" }
      : storage.get("member"),
  )
  const [activity, setActivity] = React.useState({})

  //get Activities and set each verifyType; get all tasks
  React.useEffect(() => {
    fetchAllTasks(alltasks => {
      setAllTasks(alltasks)
      storage.set("allTasks", alltasks)
    })
    async function getActivities() {
      try {
        var _activityList
        await apiActicityList().then(res => {
          _activityList = res.data
          _activityList.map(object => {
            if (object.code === "" || object.code === null) object.verifyType = "EnterMemberCode"
            else if (object.code === "ALLPASS") object.verifyType = "AllPass"
            else object.verifyType = "EnterPassCode"
          })
          if (_activityList !== undefined && typeof Array.isArray(_activityList))
            _activityList.sort((a, b) => {
              return b.id - a.id
            })
          setActivityList(_activityList)
          storage.set("activityList", _activityList)
        })
      } catch (error) {
        console.log("apiActicityList FAILED", error)
      }
    }
    getActivities()
  }, [])

  return (
    // <StrictMode>
    <AuthProvider>
      <ActivityContext.Provider value={{ activityList: activityList, setActivityList: setActivityList }}>
        <MemberContext.Provider value={{ member: member, setMember: setMember }}>
          <WalletContext.Provider value={{ wallet: wallet, setWallet: setWallet }}>
            <NFTContext.Provider
              value={{
                NFTList: nfts,
                setNFTList: setNfts,
                selectedNFTList: selectedNFTList,
                setSelectedNFTList: setSelectedNFTList,
              }}
            >
              <DrawerContext.Provider value={{ drawerOpen: drawerOpen, setDrawerOpen: setDrawerOpen }}>
                <TaskContext.Provider
                  value={{ tasks: tasks, setTasks: setTasks, allTasks: allTasks, setAllTasks: setAllTasks }}
                >
                  <DialogControllContext.Provider
                    value={{ dialogControll: dialogControll, setDialogControll: setDialogControll }}
                  >
                    <MemberActivityCodeContext.Provider
                      value={{
                        memberActivityCodeList: memberActivityCodeList,
                        setMemberActivityCodeList: setMemberActivityCodeList,
                      }}
                    >
                      <SelectedActivityContext.Provider value={{ activity: activity, setActivity: setActivity }}>
                        <Routes>
                          <Route path="/">
                            <Route index element={<Home />} />
                            <Route path="/activity" element={<Activity />} />
                            <Route path="/bottom-panel" element={<BottomPanel />} />
                            <Route path="/task/:id" element={<Task />} />
                            <Route path="/activity/:id" element={<Activity />} />
                            <Route path="/signup" element={<Signup />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/mainmenu" element={<Mainmenu />} />
                            <Route path="/starting" element={<Starting />} />
                            <Route path="/LinkingLine" element={<LinkingLine />} />
                            <Route path="/callback" element={<Callback />} />
                            <Route path="/discoverActivity/:id" element={<DiscoverActivity />} />
                            <Route path="/discoverMerchant" element={<DiscoverMerchant />} />
                            <Route path="/raffle" element={<Raffle />} />
                            <Route path="/game-info-text/:id" element={<GameInfoText />} />
                            <Route path="/game-info-image/:id" element={<GameInfoImage />} />
                            <Route path="/game-info-video/:id" element={<GameInfoVideo />} />
                            <Route path="/game-question-text/:id" element={<GameQuestionText />} />
                            <Route path="/game-question-multiple-choice/:id" element={<GameQuestionMultipleChoice />} />
                            <Route path="/game-question-sort/:id" element={<GameQuestionSort />} />
                            <Route path="/game-question-true-or-false/:id" element={<GameQuestionTrueOrFalse />} />
                            <Route path="/game-question-digit/:id" element={<GameQuestionDigit />} />
                            <Route path="/task-verify/:id" element={<TaskVerify />} />
                            <Route path="/nft-info" element={<NFTInfo />} />
                            <Route path="/nftCoupon" element={<NFTCoupon />} />
                            <Route path="/BeginningOfGame" element={<BeginningOfGame />} />
                            <Route path="/game-completion" element={<GameCompletion />} />
                            <Route path="/movielist" element={<Movielist />} />
                            <Route path="/option" element={<Option />} />
                            <Route path="/bookinglist" element={<Bookinglist />} />
                            <Route path="/api" element={<Api />} />
                            <Route path="/moviebooking" element={<Moviebooking />} />
                            {/* <Route path="/activityLoading" element={<ActivityLoading />} /> */}
                            {/* <Route path="/JoinSuccess" element={<JoinSuccess />} /> */}
                            {/*
                             * Using path="*"" means "match anything", so this route
                             * acts like a catch-all for URLs that we don't have explicit
                             * routes for.
                             */}
                            <Route path="*" element={<NoMatch />} />
                          </Route>
                        </Routes>
                      </SelectedActivityContext.Provider>
                    </MemberActivityCodeContext.Provider>
                  </DialogControllContext.Provider>
                </TaskContext.Provider>
              </DrawerContext.Provider>
            </NFTContext.Provider>
          </WalletContext.Provider>
        </MemberContext.Provider>
      </ActivityContext.Provider>
    </AuthProvider>
    // </StrictMode>
  )
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  )
}
