import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import Slide from "@mui/material/Slide"
import React from "react"
import { useContext, useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import storage from "store2"

import { apiMemberNFTCouponCreate, apiMemberNFTCouponList, apiNftList } from "../components/API"
import DialogControllContext from "../contexts/DialogControllContext"
import NFTContext from "../contexts/NFTContext"
import shopImg from "../img/IBM2022.png"
import productImg from "../img/IBM2022.png"
import "../styles/NFTCoupon.scss"

export default function NFTCoupon(props) {
  let [exchangeSuccess, setExchangeSuccess] = React.useState(true)
  const dialogControllCtx = React.useContext(DialogControllContext)
  const nav = useNavigate()
  const nftCtx = useContext(NFTContext)
  const [expireTime, setExpireTime] = useState({})
  const [memberNFTCouponList, setMemberNFTCouponList] = useState([])
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />
  })

  const location = useLocation()
  const temp = location.state

  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftCouponExchangeCheck: false })
  }
  const apiConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }
  React.useEffect(() => {
    console.log("nftCtx", nftCtx)

    setExpireTime({
      year: nftCtx.selectedNFTList.nftCouponDueDate?.substring(0, 4),
      month: nftCtx.selectedNFTList.nftCouponDueDate?.substring(5, 7),
      day: nftCtx.selectedNFTList.nftCouponDueDate?.substring(8, 10),
      time: nftCtx.selectedNFTList.nftCouponDueDate?.substring(11, 16),
    })

    let data = {
      memberId: storage.get("line_userId"),
    }
    console.log("data", data)
    async function getMemberNFTCouponList() {
      await apiMemberNFTCouponList().then(res => {
        let isexChange = false
        console.log("res", res)
        if (res.data.length > 0) {
          res.data.forEach(item => {
            console.log("item", item)
            if (
              item.memberId === storage.get("line_userId") &&
              parseInt(item.nftsId) === parseInt(nftCtx.selectedNFTList.id)
            ) {
              isexChange = true
              console.log("already exchange")
            }
          })
        }
        if (!isexChange) {
          console.log("no exchange")
          setExchangeSuccess(false)
        }
      })
    }
    getMemberNFTCouponList()
  }, [])

  return (
    <>
      <Dialog
        open={dialogControllCtx.dialogControll.nftCouponExchangeCheck}
        // TransitionComponent={Transition}
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        sx={{
          "& .MuiDialog-container": {
            "& .MuiPaper-root": {
              width: "100%",
              borderRadius: "32px",
              alignItems: "center",
              paddingBottom: "10px",
            },
          },
        }}
      >
        <NFTCouponExchangeSuccess setExchangeSuccess={setExchangeSuccess} />
      </Dialog>
      <div className="nftCoupon-container">
        <div className="nftCoupon-topTitle">
          <div style={{ marginLeft: "5px" }}>兌換賦能</div>
          {/* <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="arrow-left">
        <path
          id="Vector"
          d="M19.9999 11.0001V13.0001H7.99991L13.4999 18.5001L12.0799 19.9201L4.15991 12.0001L12.0799 4.08008L13.4999 5.50008L7.99991 11.0001H19.9999Z"
          fill="none"
        />
      </g>
    </svg> */}
        </div>
        <svg
          onClick={() => {
            nav(location.state.referrer, { state: location.state.temp })
            console.log("location.state.temp", location.state.temp)
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", left: 0, top: 0, margin: "2rem" }}
        >
          <g id="arrow-left">
            <path
              id="Vector"
              d="M19.9999 11.0001V13.0001H7.99991L13.4999 18.5001L12.0799 19.9201L4.15991 12.0001L12.0799 4.08008L13.4999 5.50008L7.99991 11.0001H19.9999Z"
              fill="black"
            />
          </g>
        </svg>
        <div style={{ marginBottom: "6.8rem", padding: "6%" }}>
          <div className="title">
            <div className="nftCoupon-allTag">
              <NFTCouponTag
                text={"贈品"}
                bgColor={exchangeSuccess ? "#B9B9B9" : "#e2ffdd"}
                textColor={exchangeSuccess ? "#757575" : "#7ad84e"}
              />
              <NFTCouponTag
                text={"限單次使用"}
                bgColor={exchangeSuccess ? "#B9B9B9" : "#e2ffdd"}
                textColor={exchangeSuccess ? "#757575" : "#7ad84e"}
              />
            </div>
            <div className="nftCoupon-title">大杯飲料 兌換券</div>
            {/* <p className="nftCoupon-ValidityPeriod">有效期限至 {props.time} 止</p> */}
            <div className="nftCoupon-ValidityPeriod">
              有效期限：{expireTime.year}/{expireTime.month}/{expireTime.day} {expireTime.time}
            </div>
          </div>

          <div className="nftCoupon-shopBlock">
            <div className="nftCoupon-shopImageBox">
              <img className="nftCoupon-shopImage" src={nftCtx.selectedNFTList.pictureUrl} />
            </div>

            <div className="nftCoupon-shopName">
              <p className="nftCoupon-shopNameTitle">{nftCtx.selectedNFTList?.nftCouponName}</p>
              <p style={{ margin: "0" }}>@ididid</p>
            </div>
          </div>
          <div className="nftCoupon-productBlock">
            {/* <img src={props.productImage} /> */}
            <img src={nftCtx.selectedNFTList.nftCouponPicUrl} style={{ aspectRatio: "16/9" }} />
          </div>
          <div className="nftCoupon-productInfo">
            {/* {props.info} */}
            {nftCtx.selectedNFTList?.nftCouponInfo.split(/\r\n/).map(word => (
              <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
            ))}
          </div>
        </div>
        <div className="nftCoupon-exchange">
          {exchangeSuccess ? (
            <div className="nftCoupon-exchangeSuccess">已兌換</div>
          ) : (
            <button
              className="nftCoupon-exchangeNotYet"
              style={{ border: 0 }}
              onClick={() => {
                dialogControllCtx.setDialogControll({
                  ...dialogControllCtx.dialogControll,
                  nftCouponExchangeCheck: true,
                  activityLoading: false,
                })
                console.log(dialogControllCtx.dialogControll.nftCouponExchangeCheck)
              }}
            >
              點擊兌換
            </button>
          )}
        </div>
      </div>
    </>
  )
}

function NFTCouponTag({ text, bgColor, textColor }) {
  return (
    <div className="nftCouponTag" style={{ backgroundColor: bgColor, color: textColor }}>
      <p className="nftCouponTag-text">{text}</p>
    </div>
  )
}

function NFTCouponExchangeSuccess({ setExchangeSuccess }) {
  const dialogControllCtx = React.useContext(DialogControllContext)
  const [exchangeCode, setExchangeCode] = React.useState("")
  const nftCtx = useContext(NFTContext)
  const handleClose = () => {
    dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftCouponExchangeCheck: false })
  }
  const apiConfig = {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }

  function checkExchangeCode() {
    if (nftCtx.selectedNFTList.nftCouponCode === exchangeCode) {
      console.log("member", storage.get("line_userId"))
      console.log("nft", nftCtx.selectedNFTList.id)
      let data = {
        memberId: storage.get("line_userId"),
        nftsId: nftCtx.selectedNFTList.id,
      }
      apiMemberNFTCouponCreate(data, apiConfig).then(res => {
        console.log("res", res)
        handleClose()
        setExchangeSuccess(true)
      })
    }
  }
  return (
    <>
      <p style={{ fontSize: "1.2rem", fontWeight: "900" }}>請輸入兌換代碼</p>
      <input
        className="nftCoupon-exchangeInput"
        onChange={e => {
          setExchangeCode(e.target.value)
        }}
        type="text"
      />
      <div className="nftCoupon-exchangeButtonBlock">
        <Button
          variant="outlined"
          onClick={() => {
            dialogControllCtx.setDialogControll({ ...dialogControllCtx.dialogControll, nftCouponExchangeCheck: false })
          }}
          style={{
            display: "flex",
            padding: "12px 40px",
            justifyContent: "center",
            color: "var(--green, #90CE5F)",
            borderWidth: 2,
            borderColor: "var(--green, #90CE5F)",
            borderRadius: "12px",
            background: "#fffff00",
            marginRight: "4%",
          }}
        >
          <div className="nftCoupon-exchangeCheckFalse">返回</div>
        </Button>

        <Button
          onClick={() => {
            checkExchangeCode()
            // setExchangeSuccess(true)
          }}
          style={{
            display: "flex",
            padding: "12px 40px",
            justifyContent: "center",
            borderRadius: "12px",
            background: "var(--green, #90CE5F)",
            marginLeft: "4%",
          }}
        >
          <div className="nftCoupon-exchangeCheckTrue">送出</div>
        </Button>
      </div>
    </>
  )
}
