import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import { toDataURL } from "qrcode"
import { useContext, useEffect, useState } from "react"
import React from "react"
import { Link, useLocation } from "react-router-dom"
import styled from "styled-components"

import { apiNftList } from "../../components/API"
import CopySuccessToast from "../../components/CopySuccessToast.jsx"
import DialogControllContext from "../../contexts/DialogControllContext"
import NFTContext from "../../contexts/NFTContext"
import WalletContext from "../../contexts/WalletContext"
import NFTInfo from "../NFTInfo"

const Div3 = styled.div`
  background-color: black;
  flex-grow: 1;
`

const Div4 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  margin-top: 90px;
`

const Div5 = styled.div`
  display: flex;
  height: 48px;
  justify-content: center;
  gap: 8px;
`

const Div6 = styled.div`
  padding: 12px;
  border-radius: 8.91px;
  background-color: rgba(58, 58, 58, 0.6);
  display: flex;
`

const Div7 = styled.div`
  padding: 6px 24px;
  border-radius: 8.91px;
  background-color: rgba(58, 58, 58, 0.6);
  color: #fff;
  font-size: 14px;
  font-family: Noto Sans TC;
  font-weight: 350;
  display: flex;
  align-items: center;
`

const Div8 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 8px 32px;
  border-radius: 8px;
  background: #3a3a3a;
`

const Div9 = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const Div10 = styled.div`
  color: #fff;
  font-size: 15px;
  font-family: Montserrat;
  font-weight: 700;
  letter-spacing: -0.24px;
`

const Div11 = styled.div`
  color: #fff;
  font-size: 16px;
  font-family: Montserrat;
  font-weight: 500;
`

const Div12 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 32px 27px 16px;
  padding: 2px;
  border-radius: 8.91px;
  background: rgba(118, 118, 128, 0.24);
  margin-bottom: 16px;
`

const Div13 = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding: 6px 8px;
  text-align: center;
`

const Div14 = styled.div`
  padding: 0 27px;
  display: flex;
  gap: 8px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 27px;
`

const Div15 = styled.div`
  width: calc(100vw - 27px * 2);
  aspect-ratio: 1;
  border-radius: 12px;
  flex-shrink: 0;
  scroll-snap-align: start;
`

const Img0 = styled.img`
  border-radius: 12px;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Scrim = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.75);
  z-index: 1200;
`

const Qrcode_Dialog = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  z-index: 100000;
  background: white;
  width: 100%;
  flex-direction: column;
  align-items: center;
  border-radius: 12px 12px 0px 0px;
  transition: ease-out 300ms;
`

const DialogAppBar = styled.div`
  padding: 14px 17px;
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
`

const CloseButton = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
`

const DialogAppBarTitle = styled.div`
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`

const QRCodeImage = styled.img`
  width: 55%;
  border-radius: 32px;
  padding: 48px;
  background: var(--black-80, #3a3a3a);
`

const PublicKey = styled.div`
  margin: 33px 0;
  width: 70%;
  color: var(--icon, #808080);
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  overflow-wrap: break-word;
  text-align: center;
`

const Actions = styled.div`
  display: flex;
  gap: 25px;
  padding: 0 25px;
  width: 100%;
  margin-bottom: 46px;
`

const ActionButton = styled.div`
  background-color: white;
  border: 1px solid #90ce5f;
  flex: 1;
  border-radius: 6px;
  padding: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
`

const ActionButtonText = styled.span`
  color: white;
  text-align: center;
  color: #90ce5f;
  font-family: Montserrat;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 20px;
`
const activeTabStyle = {
  color: "#000",
  background: "#fff",
  borderRadius: "6.93px",
  border: "0.5px solid rgba(0, 0, 0, 0.04)",
}

const inActiveTabStyle = {
  color: "#fff",
}

function WalletPanel({ publicKey, open, setOpen, setOpenToast }) {
  const [qrCodeSrc, setQrCodeSrc] = useState("")

  useEffect(() => {
    toDataURL(publicKey, { margin: 0 }).then(setQrCodeSrc)
  }, [])

  return (
    <>
      {open && <Scrim onClick={() => setOpen(false)} />}
      <Qrcode_Dialog style={{ transform: open ? "" : "translateY(100%)" }}>
        <DialogAppBar>
          <CloseButton onClick={() => setOpen(false)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="24" height="24" rx="12" fill="white" />
              <path
                d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
                fill="black"
              />
            </svg>
          </CloseButton>
          <DialogAppBarTitle>錢包QR code</DialogAppBarTitle>
        </DialogAppBar>
        <QRCodeImage src={qrCodeSrc} />
        <PublicKey>{publicKey}</PublicKey>
        <Actions>
          <ActionButton onClick={() => navigator.share({ text: publicKey })}>
            <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector"
                d="M15 6.06667L9.16667 0V3.46667C3.33333 4.33333 0.833333 8.66667 0 13C2.08333 9.96667 5 8.58 9.16667 8.58V12.1333L15 6.06667Z"
                fill="#90CE5F"
              />
            </svg>
            <ActionButtonText>分享</ActionButtonText>
          </ActionButton>
          <ActionButton
            onClick={() => {
              navigator.clipboard.writeText(publicKey)
              setOpenToast(true)
            }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                id="Vector"
                d="M13.4211 13.6364H4.73684V4.09091H13.4211M13.4211 2.72727H4.73684C4.31808 2.72727 3.91647 2.87094 3.62036 3.12667C3.32425 3.3824 3.15789 3.72925 3.15789 4.09091V13.6364C3.15789 13.998 3.32425 14.3449 3.62036 14.6006C3.91647 14.8563 4.31808 15 4.73684 15H13.4211C13.8398 15 14.2414 14.8563 14.5375 14.6006C14.8336 14.3449 15 13.998 15 13.6364V4.09091C15 3.72925 14.8336 3.3824 14.5375 3.12667C14.2414 2.87094 13.8398 2.72727 13.4211 2.72727ZM11.0526 0H1.57895C1.16018 0 0.758573 0.143668 0.462463 0.3994C0.166353 0.655131 0 1.00198 0 1.36364V10.9091H1.57895V1.36364H11.0526V0Z"
                fill="#90CE5F"
              />
            </svg>
            <ActionButtonText>複製</ActionButtonText>
          </ActionButton>
        </Actions>
      </Qrcode_Dialog>
    </>
  )
}

const Div16 = styled(Div15)`
  background-color: gray;
`
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
export default function Wallet({ temp }) {
  const [activeTab, setActiveTab] = useState(/** @type {"collections" | "passport"} */ ("collections"))
  const [openPanel, setOpenPanel] = useState(false)
  const [openToast, setOpenToast] = useState(false)
  const walletContext = useContext(WalletContext)
  const [_nftInfo, setNftInfo] = useState([])
  const [nftList, setNftList] = useState([]) // [nft1, nft2, ...
  const dialogControllCtx = useContext(DialogControllContext)
  const nftCtx = useContext(NFTContext)

  React.useEffect(() => {
    async function fetchNFTList() {
      await apiNftList().then(res => {
        let _nfts = res.data
        setNftList(_nfts)
        console.log("_nfts", nftList)
      })
    }
    fetchNFTList()
  }, [])

  return (
    <>
      <CopySuccessToast open={openToast} setOpen={setOpenToast} />

      <WalletPanel
        open={openPanel}
        setOpen={setOpenPanel}
        publicKey={walletContext.wallet.solAccount_pubkey}
        setOpenToast={setOpenToast}
      />

      <Div3>
        <Div4>
          <Div5>
            <Div6 onClick={() => setOpenPanel(true)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  id="Vector"
                  d="M0 10.6667H2.66667V13.3333H0V10.6667ZM10.6667 2.66667H13.3333V8H10.6667V2.66667ZM8 10.6667H13.3333V16H10.6667V13.3333H8V10.6667ZM16 10.6667H18.6667V13.3333H21.3333V10.6667H24V13.3333H21.3333V16H24V21.3333H21.3333V24H18.6667V21.3333H13.3333V24H10.6667V18.6667H16V16H18.6667V13.3333H16V10.6667ZM21.3333 21.3333V16H18.6667V21.3333H21.3333ZM16 0H24V8H16V0ZM18.6667 2.66667V5.33333H21.3333V2.66667H18.6667ZM0 0H8V8H0V0ZM2.66667 2.66667V5.33333H5.33333V2.66667H2.66667ZM0 16H8V24H0V16ZM2.66667 18.6667V21.3333H5.33333V18.6667H2.66667Z"
                  fill="white"
                />
              </svg>
            </Div6>
            <Div7
              onClick={() => {
                navigator.clipboard.writeText(walletContext.wallet.solAccount_pubkey)
                setOpenToast(true)
              }}
            >
              我的錢包地址｜0x{walletContext.wallet.solAccount_pubkey.substring(0, 4)}...
              {walletContext.wallet.solAccount_pubkey.substring(
                walletContext.wallet.solAccount_pubkey.length - 4,
                walletContext.wallet.solAccount_pubkey.length,
              )}
            </Div7>
            <Div6
              onClick={() => {
                window.open("https://explorer.solana.com/address/" + `${walletContext.wallet.solAccount_pubkey}`)
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  id="Vector"
                  d="M6.77955 9.22045C7.13443 9.55802 7.13443 10.112 6.77955 10.4496C6.44198 10.7871 5.88802 10.7871 5.55045 10.4496C3.86259 8.7617 3.86259 6.01785 5.55045 4.33L8.61455 1.26589C10.3024 -0.421964 13.0463 -0.421964 14.7341 1.26589C16.422 2.95375 16.422 5.69759 14.7341 7.38545L13.4444 8.67514C13.4531 7.96538 13.3405 7.25561 13.0982 6.58047L13.505 6.165C14.5264 5.15229 14.5264 3.50771 13.505 2.495C12.4923 1.47363 10.8477 1.47363 9.835 2.495L6.77955 5.55045C5.75818 6.56316 5.75818 8.20774 6.77955 9.22045ZM9.22045 5.55045C9.55802 5.21288 10.112 5.21288 10.4496 5.55045C12.1374 7.2383 12.1374 9.98215 10.4496 11.67L7.38545 14.7341C5.69759 16.422 2.95375 16.422 1.26589 14.7341C-0.421964 13.0463 -0.421964 10.3024 1.26589 8.61455L2.55559 7.32486C2.54693 8.03462 2.65945 8.74439 2.90181 9.42818L2.495 9.835C1.47363 10.8477 1.47363 12.4923 2.495 13.505C3.50771 14.5264 5.15229 14.5264 6.165 13.505L9.22045 10.4496C10.2418 9.43684 10.2418 7.79226 9.22045 6.77955C8.86557 6.44198 8.86557 5.88802 9.22045 5.55045Z"
                  fill="white"
                />
              </svg>
            </Div6>
          </Div5>

          {/* <Div8>
            <Div9>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                <g id="plus-circle-multiple" clipPath="url(#clip0_416_7770)">
                  <path
                    id="Vector"
                    d="M2.5 12.5C2.5 9.7 4.1 7.3 6.5 6.2V4C3 5.3 0.5 8.6 0.5 12.5C0.5 16.4 3 19.7 6.5 21V18.8C4.1 17.7 2.5 15.3 2.5 12.5ZM15.5 3.5C10.5 3.5 6.5 7.5 6.5 12.5C6.5 17.5 10.5 21.5 15.5 21.5C20.5 21.5 24.5 17.5 24.5 12.5C24.5 7.5 20.5 3.5 15.5 3.5ZM20.5 13.5H16.5V17.5H14.5V13.5H10.5V11.5H14.5V7.5H16.5V11.5H20.5V13.5Z"
                    fill="white"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_416_7770">
                    <rect width="24" height="24" fill="white" transform="translate(0.5 0.5)"></rect>
                  </clipPath>
                </defs>
              </svg>
              <Div10>代幣</Div10>
            </Div9>
            <Div11>1000.00</Div11>
          </Div8> */}
        </Div4>
        <Div12>
          <Div13
            style={{
              ...(activeTab === "collections" ? activeTabStyle : inActiveTabStyle),
            }}
            onClick={() => setActiveTab("collections")}
          >
            NFT 收藏
          </Div13>
          <Div13
            style={{
              ...(activeTab === "passport" ? activeTabStyle : inActiveTabStyle),
            }}
            onClick={() => setActiveTab("passport")}
          >
            NFT 護照
          </Div13>
        </Div12>
        <Dialog
          open={dialogControllCtx.dialogControll.nftInfo}
          onClose={() => {
            dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftInfo: false })
          }}
          TransitionComponent={Transition}
          sx={{
            "& .MuiDialog-container": {
              height: "auto",
              "& .MuiPaper-root": {
                margin: "0px",
                borderRadius: "12px",
              },
            },
          }}
        >
          {dialogControllCtx.dialogControll.nftInfo ? (
            <NFTInfo
              image={_nftInfo.pictureUrl}
              NFTList={temp == null ? _nftInfo : temp}
              onClose={() => {
                dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftInfo: false })
              }}
            />
          ) : (
            ""
          )}
        </Dialog>
        {activeTab === "collections" && (
          <Div14>
            {nftCtx.NFTList?.map((nft, index) => (
              // <Link to={`activity/${id}`} key={id} style={{ color: "black", textDecoration: "none" }}>
              <>
                <Link key={index} style={{ color: "black", textDecoration: "none" }}>
                  <Div15>
                    {import.meta.env.VITE_BACKEND.includes("localhost") ? (
                      <></>
                    ) : (
                      <Img0
                        src={nft.nftUrl}
                        onClick={() => {
                          dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftInfo: true })
                          console.log("nftCtx.NFTList:", nftCtx.NFTList)
                          console.log("nftList:", nftList)
                          nftList.map(_nft => {
                            if (_nft.id === nft.nftId) {
                              console.log("_nft.id", _nft.id)
                              console.log("nft.nftId", nft.nftId)
                              console.log("_nft", _nft)
                              setNftInfo({ ..._nft, pictureUrl: nft.nftUrl })
                              nftCtx.setSelectedNFTList({ ..._nft, nftUrl: nft.nftUrl })
                            }
                          })
                          console.log("nft", _nftInfo)
                        }}
                      />
                    )}
                  </Div15>
                </Link>
              </>
            ))}
          </Div14>
        )}
        {activeTab === "passoirt" && (
          <Div14>
            <Div16></Div16>
            <Div16></Div16>
            <Div16></Div16>
          </Div14>
        )}
      </Div3>
    </>
  )
}
