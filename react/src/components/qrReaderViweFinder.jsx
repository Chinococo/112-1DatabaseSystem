import styled from "styled-components"

const Svg1 = styled.svg`
  top: 0;
  left: 0;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  height: 100%;
`
export default function ScanOverlay() {
  return (
    // <svg viewBox="0 0 100 100" fill="none">
    //   <path fill="none" d="M18,5 L5,5 L5,18" stroke="rgba(0, 0, 200, 0.8)" stroke-width="3"></path>
    //   <path fill="none" d="M5,82 L5,95 L18,95" stroke="rgba(0, 0, 200, 0.8)" stroke-width="3"></path>
    //   <path fill="none" d="M82,95 L95,95 L95,82" stroke="rgba(0, 0, 200, 0.8)" stroke-width="3"></path>
    //   <path fill="none" d="M95,18 L95,5 82,5" stroke="rgba(0, 0, 200, 0.8)" stroke-width="3"></path>
    // </svg>
    <>
      <Svg0
        //width="50px"
        //width="auto"
        objectFit="cover"
        viewBox="0 0 100 100"
      ></Svg0>
      <Svg2 viewBox="0 0 100 100">
        <animateTransform
          id="first"
          begin="0s;second.end"
          dur="0.5s"
          attributeName="transform"
          //repeatCount="indefinite"
          type="scale"
          from="1"
          to="0.9"
        />
        <animateTransform
          id="second"
          begin="first.end"
          dur="0.5s"
          attributeName="transform"
          //repeatCount="indefinite"
          type="scale"
          from="0.9"
          to="1"
        />
        <path fill="none" d="M13,0 L0,0 L0,13" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
        <path fill="none" d="M0,87 L0,100 L13,100" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
        <path fill="none" d="M87,100 L100,100 L100,87" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
        <path fill="none" d="M100,13 L100,0 87,0" stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" />
      </Svg2>
    </>
  )
  const Svg0 = styled(Svg1)`
    z-index: 1;
    border: 50px solid rgba(0, 0, 0, 0.3);
  `

  const Svg2 = styled(Svg1)`
    z-index: 2;
    border: 50px solid rgba(0, 0, 0, 0);
  `
}
