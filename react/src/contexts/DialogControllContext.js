import React from "react"

const DialogControllContext = React.createContext({
  dialogControll: {
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
  },
  setDialogControll: obj => {},
})

export default DialogControllContext
