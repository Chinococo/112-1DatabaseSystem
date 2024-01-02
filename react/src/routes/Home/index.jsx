import * as bip39 from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import { Keypair } from "@solana/web3.js"
import bs58 from "bs58"
import { Buffer } from "buffer"
import CryptoJS from "crypto-js"
import { derivePath } from "ed25519-hd-key"
import jwt from "jwt-decode"
import React, { useContext, useLayoutEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import storage from "store2"
import { styled } from "styled-components"
import nacl from "tweetnacl"

import {
  apiAuthLogin,
  apiGetMember,
  apiLineOauth2,
  apiMemberCreate,
  apiMemberEdit,
  apiNftGetByMemberId,
  apiNftList,
  apiNfts,
} from "../../components/API"
import CustomAppBar from "../../components/CustomAppBar"
import Sidebar from "../../components/Sidebar"
import ActivityContext from "../../contexts/ActivityContext"
import DialogControllContext from "../../contexts/DialogControllContext"
import FavoriteContext from "../../contexts/FavoriteContext"
import MemberActivityCodeContext from "../../contexts/MemberActivityCodeContext"
import MemberContext from "../../contexts/MemberContext"
import NFTContext from "../../contexts/NFTContext"
import WalletContext from "../../contexts/WalletContext"
import { useFavorite } from "../../hooks/useFavorite"
import { useMemberActivityCode } from "../../hooks/useMemberActivityCode"
import { useNFTs } from "../../hooks/useNFTs"
import BottomPanel from "../../routes/BottomPanel"
import BottonBar from "../BottonBar"
import Callback from "../Callback"
import LinkingLine from "../LinkingLine"
import Discover from "./Discover"
import Wallet from "./Wallet"



function useConstructor() {
  const codeUrl = new URL(window.location.href)
  const line_login_code = codeUrl.searchParams.get("code")
  console.log("line_login_code: ", line_login_code)
  if (line_login_code == null) return ""
  var param = {}
  param["grant_type"] = "authorization_code"
  param["code"] = line_login_code
  param["redirect_uri"] = import.meta.env.VITE_LINE_AUTH_REDIRCT_URI
  param["client_id"] = import.meta.env.VITE_LINE_AUTH_CLIENT_ID //1657626401;
  param["client_secret"] = import.meta.env.VITE_LINE_AUTH_CLIENT_SECRET //"dfd78d67a8d2a2fa48cfe688c23a9f8e";

  return param
}

const fromHexString = hexString => Uint8Array.from(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))

function Home() {
  const apiConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }
  //const param = useConstructor();
  const nav = useNavigate()
  const { fetchMemberActivityCode } = useMemberActivityCode()
  const { fetchNFTs } = useNFTs()
  const memberContext = React.useContext(MemberContext)
  const walletContext = React.useContext(WalletContext)
  const nftCtx = React.useContext(NFTContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)
  const activityCtx = React.useContext(ActivityContext)
  const [isKeyPairCreated, setIsKeyPairCreated] = React.useState(false)
  const [isLoginApiCompleted, setIsLoginApiCompleted] = React.useState(false)
  const [isNftsApiCompleted, setIsNftsApiCompleted] = React.useState(false)
  const { fetchFavorite } = useFavorite()
  const FavoriteCtx = React.useContext(FavoriteContext)
  const [nftList, setNftList] = React.useState([])
  const [memberNftList, setMemberNftList] = React.useState([])


  //get line id and other line information
  React.useEffect(() => {
    const param = useConstructor()
    if (param == "" && walletContext.wallet.solAccount_pubkey === "") {
      nav("/login")
    }

    async function getLineInfo() {
      try {
        const res = await apiLineOauth2(param, apiConfig).then(res => {
          const tokenDecoded = jwt(res.data.id_token)
          let member = {
            line_userId: tokenDecoded.sub,
            line_displayName: tokenDecoded.name,
            line_pictureUrl: tokenDecoded.picture,
            line_email: tokenDecoded.email,
          }
          memberContext.setMember(member)
          storage.set("member", member)
          storage.set("line_userId", tokenDecoded.sub)
          storage.set("line_displayName", tokenDecoded.name)
          storage.set("line_pictureUrl", tokenDecoded.picture)
          console.log("useEffect line_userId else: ", tokenDecoded.sub)
        })
      } catch (error) {
        console.log("apiLineOauth2 FAILED: ", error)
      }
    }
    console.log("nftcontext", nftCtx.NFTList)
    if (param != "") {
      getLineInfo()
    }
  }, [])

  //generate wallet
  React.useEffect(() => {
    if (memberContext.member.line_userId !== null && memberContext.member.line_userId !== "") {
      const digestHexString = CryptoJS.HmacSHA256(memberContext.member.line_userId, "123").toString()

      const u8array = fromHexString(digestHexString)
      const mnemonic = bip39.entropyToMnemonic(u8array, wordlist)

      var solKeypair = ""
      var solAccount_pubkey = ""
      async function getSeed() {
        const seed = await bip39.mnemonicToSeed(mnemonic)

        const seedBuffer = Buffer.from(seed).toString("hex")
        const derivedSeed = derivePath("m/44'/501'/0'/0'", seedBuffer).key
        console.log("derivedSeed: ", derivedSeed)
        const keypair = Keypair.fromSecretKey(nacl.sign.keyPair.fromSeed(derivedSeed).secretKey)
        solKeypair = keypair
        solAccount_pubkey = keypair.publicKey.toString()
        console.log("solAccount_pubkey: ", solAccount_pubkey)

        let wallet = { solKeypair: solKeypair, solAccount_pubkey: solAccount_pubkey.toString(), nfts: [] }
        walletContext.setWallet(wallet)
        storage.set("wallet", wallet)
        setIsKeyPairCreated(true)
      }
      async function getMemberList() {
        try {
          let res = await apiGetMember(memberContext.member.line_userId)
          memberContext.setMember({ ...memberContext.member, ...res.data })
          console.log("IN apiGetMember response: ", res.data)
          console.log("IN apiGetMember memberContext.member: ", memberContext.member)
        } catch (error) {
          console.log("apiMemberList FAILD: ", error)
        }
      }
      getMemberList()
      if (walletContext.wallet.solKeypair == "" || walletContext.wallet.solAccount_pubkey == "") getSeed()
    }
  }, [memberContext.member.line_userId])

  //getnfts
  React.useEffect(() => {
    async function getNfts() {
      fetchNFTs(walletContext.wallet.solAccount_pubkey, nfts => {
        console.log("nfts: ", nfts)
        let wallet = { ...walletContext.wallet, nfts: nfts }
        walletContext.setWallet(wallet)
        storage.set("wallet", wallet)
        setIsNftsApiCompleted(true)
      })
    }
    console.log("walletContext.wallet.nfts: ", walletContext.nfts)
    if (walletContext.wallet.nfts.length == 0) {
      getNfts()
    }

    async function getNftsList() {
      try {
        await apiNftGetByMemberId(memberContext.member.line_userId).then(res => {
          if (res.status === 200) {
            let nftList = []
            console.log("IN apiNftGetByMemberId response: ", res.data)
            res.data.map(object => {
              nftList.push(object)
              console.log("nftList: ", nftList)
            })
            nftCtx.setNFTList(nftList)
            console.log(nftCtx.NFTList)
          }
        })
      } catch (error) {
        console.log("apiNfts FAILED", error)
      }
    }
    getNftsList()
  }, [isKeyPairCreated])

  //login server api
  React.useEffect(() => {
    async function memberCreate() {
      try {
        const res = await apiMemberCreate(
          {
            memberId: `${memberContext.member.line_userId}`,
            name: `${memberContext.member.line_displayName}`,
            cellphone: "",
            email: `${memberContext.member.line_email}`,
          },
          apiConfig,
        )
        console.log("IN apiMemberCreate response: ", res.data)
        if (res.status === 200) {
          serverLogin()
        }
      } catch (error) {
        console.log("memberCreate FAILED: ", error)
      }
    }

    async function serverLogin() {
      try {
        if (walletContext.wallet.solAccount_pubkey !== "" && walletContext.wallet.solAccount_pubkey !== undefined) {
          const res = await apiAuthLogin(
            {
              memberId: `${memberContext.member.line_userId}`,
              name: `${memberContext.member.line_displayName}`,
              cellphone: "911222333",
            },
            apiConfig,
          )
          console.log("IN apiAuthLogin response: ", res.data)
          if (res.status !== 200) {
            memberCreate()
          }
          setIsLoginApiCompleted(true)
          storage.set(`login` + memberContext.member.line_userId, Date().toLocaleString())
        }
      } catch (error) {
        console.log("serverLogin FAILED: ", error)
      }
    }

    if (storage.get(`login` + memberContext.member.line_userId) === null) {
      serverLogin()
    } else if (Date.now() - Date.parse(storage.get(`login` + memberContext.member.line_userId)) > 86400000) {
      serverLogin()
    }
  }, [isKeyPairCreated])

  // set pubkey to server db
  React.useEffect(() => {
    async function putMemberPubkey() {
      if (walletContext.wallet.solAccount_pubkey !== "" && walletContext.wallet.solAccount_pubkey !== undefined) {
        const data = {
          pubkey: walletContext.wallet.solAccount_pubkey,
        }
        apiMemberEdit(memberContext.member.line_userId, data, apiConfig).catch(error => {
          console.log("apiMemberEdit failed: ", error)
        })
      }
    }

    console.log("memberContext.member: ", memberContext.member)

    putMemberPubkey()
  }, [isLoginApiCompleted])

  React.useEffect(() => {
    if (memberContext.member.line_userId !== undefined && memberContext.member.line_userId !== "") {
      fetchMemberActivityCode(memberContext.member.line_userId, list => {
        memberActivityCodeCtx.setMemberActivityCodeList(list)
        storage.set("memberActivityCode", list)
      })
    }
  }, [isLoginApiCompleted])

  React.useEffect(() => {
    if (
      memberContext.member.line_userId !== undefined &&
      memberContext.member.line_userId !== "" &&
      walletContext.wallet.solAccount_pubkey !== "" &&
      walletContext.wallet.solAccount_pubkey !== undefined
    ) {
      nav("/")
    }
  }, [isLoginApiCompleted, isNftsApiCompleted])

  // React.useEffect(() => {
  //   if (walletContext.wallet.solAccount_pubkey === "") {
  //     nav("/login")
  //   }
  // }, [checkWallet])

  const location = useLocation()

  return (
    // <>
    //   {walletContext.wallet.solAccount_pubkey === "" ? <LinkingLine /> :
    <>
      <CustomAppBar left={"profile"} />
      <BottomPanel />
      <Sidebar />
      <BottonBar location={location} />
      {/* </>
      } */}
    </>
  )
}

export default Home
