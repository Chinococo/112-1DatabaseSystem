import React, { Component } from "react"
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch"
import styled from "styled-components"

const ImageViewer_Area = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
  top: 0;
  left: 0;
  background-color: black;
  color: white;
  z-index: 20;
`

const ImageViewer_Toolbar = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 4%;
  background-color: #585858;
  z-index: 20;
`

const ImageViewer_LeaveButton = styled.button`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: end;
  margin-right: 1%;
  /* padding: 5%; */
  background-color: transparent;
  border-color: transparent;
  z-index: 20;
`

const ImageViewer_ImageBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: hidden;
`

const ImageViewer_Image = styled.img`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function ImageViewer({ src, setIsZoomed }) {
  return (
    <ImageViewer_Area>
      <ImageViewer_Toolbar>
        <ImageViewer_LeaveButton
          onClick={() => setIsZoomed(false)}
          style={{ backgroundColor: "transparent", borderColor: "transparent" }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="black">
            <g id="x">
              <path
                id="x"
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="white"
              />
            </g>
          </svg>
        </ImageViewer_LeaveButton>
      </ImageViewer_Toolbar>

      <ImageViewer_ImageBox>
        <TransformWrapper>
          <TransformComponent>
            <ImageViewer_Image src={src} alt={src} />
          </TransformComponent>
        </TransformWrapper>
      </ImageViewer_ImageBox>
    </ImageViewer_Area>
  )
}
