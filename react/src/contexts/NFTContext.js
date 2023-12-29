import React from "react";

const NFTContext = React.createContext({
  NFTList: [],
  setNFTList: list => {},
  selectedNFTList:[],
  setSelectedNFTList: list => {},
})

export default NFTContext