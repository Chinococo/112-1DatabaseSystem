import React from "react"

const WalletContext = React.createContext({
  wallet: { solKeypair: "", solAccount_pubkey: "", nfts: [] },
  setWallet: list => {},
})

export default WalletContext
