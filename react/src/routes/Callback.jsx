import { apiAuthLogin, apiLineOauth2, apiMemberCreate, apiNfts } from "../components/API"
import MemberActivityCodeContext from "../contexts/MemberActivityCodeContext"
import MemberContext from "../contexts/MemberContext"
import WalletContext from "../contexts/WalletContext"
import { useMemberActivityCode } from "../hooks/useMemberActivityCode"
import { useNFTs } from "../hooks/useNFTs"
import LinkingLine from "./LinkingLine"
import * as bip39 from "@scure/bip39"
import { wordlist } from "@scure/bip39/wordlists/english"
import { Keypair } from "@solana/web3.js"
import bs58 from "bs58"
import { Buffer } from "buffer"
import CryptoJS from "crypto-js"
import { derivePath } from "ed25519-hd-key"
import jwt from "jwt-decode"
import React from "react"
import { useNavigate } from "react-router-dom"
import storage from "store2"
import nacl from "tweetnacl"

function useConstructor() {
  const codeUrl = new URL(window.location.href)
  const line_login_code = codeUrl.searchParams.get("code")
  if (line_login_code == null) return ""
  var param = {}
  param["grant_type"] = "authorization_code"
  param["code"] = line_login_code
  param["redirect_uri"] = import.meta.env.VITE_LINE_AUTH_REDIRCT_URI
  param["client_id"] = 1657626401
  param["client_secret"] = "dfd78d67a8d2a2fa48cfe688c23a9f8e"

  return param
}

const fromHexString = hexString => Uint8Array.from(hexString.match(/.{1,2}/g).map(byte => parseInt(byte, 16)))

function Callback() {
  const apiConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }
  const param = useConstructor()
  const nav = useNavigate()
  const { fetchMemberActivityCode } = useMemberActivityCode()
  const memberContext = React.useContext(MemberContext)
  const walletContext = React.useContext(WalletContext)
  const memberActivityCodeCtx = React.useContext(MemberActivityCodeContext)

  const [isKeyPairCreated, setIsKeyPairCreated] = React.useState(false)
  const [isLoginApiCompleted, setIsLoginApiCompleted] = React.useState(false)
  const [isNftsApiCompleted, setIsNftsApiCompleted] = React.useState(false)

  const { fetchNFTs } = useNFTs()

  //get line id and other line information
  React.useEffect(() => {
    async function getLineInfo() {
      try {
        const res = await apiLineOauth2(param, apiConfig)
        const tokenDecoded = jwt(res.data.id_token)
        let member = {
          line_userId: tokenDecoded.sub,
          line_displayName: tokenDecoded.name,
          line_pictureUrl: tokenDecoded.picture,
        }
        memberContext.setMember(member)
        storage.set("member", member)
        storage.set("line_userId", tokenDecoded.sub)
        storage.set("line_displayName", tokenDecoded.name)
        storage.set("line_pictureUrl", tokenDecoded.picture)
        console.log("useEffect line_userId else: ", tokenDecoded.sub)
      } catch (error) {
        console.log("apiLineOauth2 FAILED: ", error)
      }
    }
    getLineInfo()
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
      getSeed()
    }
  }, [memberContext.member])

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
    getNfts()
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
            email: "",
          },
          apiConfig
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
            apiConfig
          )
          console.log("IN apiAuthLogin response: ", res.data)
          if (res.status !== 200) {
            memberCreate()
          }
          setIsLoginApiCompleted(true)
        }
      } catch (error) {
        console.log("serverLogin FAILED: ", error)
      }
    }
    serverLogin()
  }, [isKeyPairCreated])

  React.useEffect(() => {
    if (memberContext.member.line_userId !== undefined && memberContext.member.line_userId !== "")
      fetchMemberActivityCode(memberContext.member.line_userId, list => {
        memberActivityCodeCtx.setMemberActivityCodeList(list)
        storage.set("memberActivityCode", list)
      })
  }, [isLoginApiCompleted])

  React.useEffect(() => {
    if (
      memberContext.member.line_userId !== undefined &&
      memberContext.member.line_userId !== "" &&
      walletContext.wallet.solAccount_pubkey !== "" &&
      walletContext.wallet.solAccount_pubkey !== undefined
    )
      nav("/")
  }, [isLoginApiCompleted, isNftsApiCompleted])

  return (
    // <div style={{
    //   backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   backgroundRepeat: 'no-repeat',
    //   width: '100vw',
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center'
    // }}></div>
    <LinkingLine />
  )
}

export default Callback
