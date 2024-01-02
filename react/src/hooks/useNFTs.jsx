import { apiNfts } from "../components/API"
import WalletContext from "../contexts/WalletContext"
import React from "react"
import storage from "store2"

export const useNFTs = () => {
  /**
   * fetch NFTs.
   * @param {String} targetSolAccountPubkey input your solAccount_pubkey to get NFTs.
   * @param {function} callbackResult set NFTs list result to your callbackResult function.
   */
  async function fetchNFTs(targetSolAccountPubkey, callbackResult) {
    var nfts = []
    if (targetSolAccountPubkey !== "" && targetSolAccountPubkey !== undefined) {
      try {
        const res = await apiNfts(targetSolAccountPubkey)
        console.log("IN apiNfts response: ", res.data.nfts)
        res.data.nfts.map(oriNftObject => {
          nfts.push({
            address: oriNftObject.address,
            name: oriNftObject.name,
            symbol: oriNftObject.symbol,
            uri: oriNftObject.uri,
            mintAddress: oriNftObject.mintAddress,
          })
        })
        for (let nft of nfts) {
          try {
            const response = await fetch(
              nft.uri
              //{mode: 'no-cors'}
            )
            const json = await response.json()
            nft.uri = json.image
          } catch (error) {
            console.log("nft uri fetch error: ", error)
          }
        }
      } catch (error) {
        console.log("apiNfts response error: ", error)
      }
      callbackResult(nfts)
    }
  }

  return { fetchNFTs }
}
