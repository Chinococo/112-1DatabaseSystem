import Dialog from "@mui/material/Dialog"
import React, { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

import NFTContext from "../contexts/NFTContext"
import NFTInfoPhoto from "../img/Rectangle4.png"
import "../styles/NFTInfo.scss"

export default function NFTInfo(props) {
  const nav = useNavigate()
  const nftCtx = React.useContext(NFTContext)

  return (
    <div className="nft-container">
      <div className="titlePhoto">
        {/* <img className="titlePhoto-photo" src={props.image} /> */}
        <img className="titlePhoto-photo" src={props.NFTList.pictureUrl} />
        <div onClick={props.onClose} className="cross">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24" height="24" rx="12" fill="white" />
            <path
              d="M18 7.20857L16.7914 6L12 10.7914L7.20857 6L6 7.20857L10.7914 12L6 16.7914L7.20857 18L12 13.2086L16.7914 18L18 16.7914L13.2086 12L18 7.20857Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
      <div className="container-introduce">
        <div className="title">
          <div className="title-comment">{props.NFTList.nftIssuer}</div>
          <div className="title-name">{props.NFTList.nftName}</div>
          <div className="titleExchange">
            {props.NFTList.isCouponExchange && (
              <button
                className={props.NFTList.isNFTExchange ? "titleExchange-button" : "titleExchange-button-gray"}
                onClick={() => {
                  nav("/nftCoupon", { state: { referrer: "/", temp: props.NFTList } })
                  if (props.NFTList.isNFTExchange == true) {
                    // props.onClose()
                  }
                }}
              >
                兌換賦能
              </button>
            )}
          </div>
        </div>
        <div className="line"></div>
        <div className="content">
          {props.NFTList.nftAbout.split(/\r\n/).map(word => (
            <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
          ))}
        </div>
        <div className="line"></div>
        <div className="info">
          <div className="info-content">
            <div className="info-internet-name">網路</div>
            <div className="info-internet-value">{props.NFTList.nftNetwork}</div>
          </div>
          <div className="info-content">
            <div className="info-contract-name">合約地址</div>
            <div className="info-contract-value">0xdC95...dA93</div>
          </div>
          <div className="info-content">
            <div className="info-id-name">Token ID</div>
            <div className="info-id-value">477</div>
          </div>
        </div>
        <div className="line"></div>
        <div className="attribute">
          <div className="attribute-title">屬性</div>
          <div className="attribute-content">
            {props.NFTList?.nftAtt &&
              Object.entries(JSON.parse(props.NFTList?.nftAtt.replace(/'/g, '"'))).map(([key, value]) => {
                return (
                  <div className="attribute-box">
                    <div className="attribute-box-title">{key}</div>
                    <div className="attribute-box-value">{value}</div>
                  </div>
                )
              })}
            {/* <div className="attribute-box">
              <div className="attribute-box-title">Name</div>
              <div className="attribute-name-value">Astroworld_New Version</div>
            </div>
            <div className="attribute-box">
              <div className="attribute-box-title">Type</div>
              <div className="attribute-type-value">Pioneer</div>
            </div>
            <div className="attribute-box">
              <div className="attribute-box-title">Clone X DNA</div>
              <div className="attribute-dna-value">AI Painting</div>
            </div> */}
          </div>
        </div>
        <div className="line"></div>
        <div className="about">
          <div className="about-title">關於Astroworld</div>
          <div className="about-content">
            {props.NFTList.nftIntro.split(/\r\n/).map(word => (
              <p style={{ marginTop: 0, marginBottom: 0, minHeight: "20px" }}>{word.trim()}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
