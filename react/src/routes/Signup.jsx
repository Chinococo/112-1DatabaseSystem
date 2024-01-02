import MemberContext from "../contexts/MemberContext"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Span0 = styled.span`
  color: #000;
  text-decoration-line: underline;
`

export default function Signup() {
  const background = {
    display: "flex",
    background: " #E7E7E7",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  }
  const textbox_welcome = {
    marginTop: "168px",
    color: "var(--light-backgrond, #000)",
    textAlign: "center",
    textShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.60)",
    fontFamily: "PressStart2P",
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
  }
  const textbox_welcome_content = {
    marginTop: "21px",
    width: "341px",
    height: "83px",
    color: "var(--light-backgrond, #000)",
    textAlign: "center",
    textAhadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.60)",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "bold",
    lineHeight: "normal",
  }
  const btns_context = {
    marginTop: "21px",
    width: "320px",
    alignItems: "stretch",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  }
  const textbox_wallet = {
    color: "#000",
    textAlign: "center",
    fontFamily: "PressStart2P",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "normal",
    letterSpacing: "-0.96px",
  }
  const btn_context = {
    display: "flex",
    padding: "16px 64px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background: "#000",
  }
  const btn_img = {
    width: "21.001px",
    height: "20px",
    flexShrink: "0",
  }
  const btn_content = {
    color: "#FFF",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "normal",
  }
  const textbox = {
    color: "#979797",
    textAlign: "center",
    fontFamily: "Montserrat",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "normal",
  }

  const ctx = React.useContext(MemberContext)
  const nav = useNavigate()

  // React.useEffect(() => {
  //   console.log("login useEffect");
  //   if (ctx.member.line_userId !== "") {
  //     nav('/');
  //   }
  //   console.log("login useEffect end");
  // }, [ctx.member.line_userId]);

  function Click() {
    nav("/login")
  }

  function lineLoginBotton() {
    //nav('/bottom-panel-temp');
    window.location.replace(import.meta.env.VITE_LINE_AUTH_WINDOW_LOCATION_PAGE)
  }

  return (
    <div style={background}>
      <div style={textbox_welcome}>
        Welcome<br></br>In!
      </div>
      <div style={textbox_welcome_content}>
        在現實與虛擬之間探索一切web3世界的樂趣！創建你的玩宇宙錢包，現在就開始！
      </div>
      <div style={btns_context}>
        <div style={textbox_wallet}>創建錢包</div>
        <div style={btn_context} onClick={lineLoginBotton}>
          <div style={btn_img}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M16.9446 8.12986C17.0871 8.13553 17.2219 8.19614 17.3207 8.29898C17.4196 8.40183 17.4748 8.53893 17.4748 8.68156C17.4748 8.82419 17.4196 8.96129 17.3207 9.06413C17.2219 9.16698 17.0871 9.22758 16.9446 9.23326H15.4089V10.2177H16.9446C17.0188 10.2147 17.0928 10.2268 17.1622 10.2531C17.2316 10.2795 17.295 10.3196 17.3485 10.371C17.4021 10.4224 17.4447 10.4842 17.4737 10.5525C17.5028 10.6208 17.5178 10.6943 17.5178 10.7685C17.5178 10.8427 17.5028 10.9162 17.4737 10.9845C17.4447 11.0528 17.4021 11.1145 17.3485 11.166C17.295 11.2174 17.2316 11.2575 17.1622 11.2839C17.0928 11.3102 17.0188 11.3223 16.9446 11.3193H14.8568C14.7113 11.3184 14.572 11.2601 14.4693 11.157C14.3665 11.0539 14.3086 10.9145 14.3082 10.7689V6.59419C14.3082 6.2923 14.5549 6.04292 14.8594 6.04292H16.9472C17.0934 6.04327 17.2335 6.10168 17.3367 6.20531C17.4398 6.30894 17.4975 6.44929 17.4972 6.5955C17.4968 6.7417 17.4384 6.88178 17.3348 6.98492C17.2312 7.08805 17.0908 7.1458 16.9446 7.14545H15.4089V8.12986H16.9446ZM13.5714 10.7689C13.5707 10.9148 13.5122 11.0545 13.4087 11.1573C13.3052 11.2602 13.1651 11.3178 13.0192 11.3176C12.9328 11.3194 12.8471 11.3006 12.7695 11.2625C12.6918 11.2244 12.6245 11.1683 12.573 11.0988L10.4353 8.19636V10.7689C10.4257 10.9082 10.3635 11.0387 10.2615 11.1339C10.1594 11.2292 10.025 11.2822 9.88535 11.2822C9.74572 11.2822 9.6113 11.2292 9.50922 11.1339C9.40715 11.0387 9.34502 10.9082 9.33539 10.7689V6.59419C9.33516 6.44898 9.3925 6.3096 9.49485 6.2066C9.5972 6.1036 9.7362 6.04537 9.88141 6.04467C10.052 6.04467 10.2095 6.13567 10.3145 6.26693L12.4689 9.18076V6.59419C12.4689 6.2923 12.7156 6.04292 13.0201 6.04292C13.322 6.04292 13.5714 6.2923 13.5714 6.59419V10.7689ZM8.54787 10.7689C8.54718 10.915 8.48873 11.0548 8.38528 11.158C8.28184 11.2611 8.14179 11.3191 7.99573 11.3193C7.8502 11.3184 7.71093 11.2601 7.60818 11.157C7.50544 11.0539 7.44755 10.9145 7.44709 10.7689V6.59419C7.44709 6.2923 7.69385 6.04292 7.99836 6.04292C8.30111 6.04292 8.54787 6.2923 8.54787 6.59419V10.7689ZM6.39006 11.3193H4.30225C4.15648 11.3184 4.01693 11.2601 3.91377 11.1572C3.81061 11.0542 3.75213 10.9147 3.75099 10.7689V6.59419C3.75099 6.2923 4.00037 6.04292 4.30225 6.04292C4.60676 6.04292 4.85352 6.2923 4.85352 6.59419V10.2177H6.39006C6.53235 10.2233 6.66693 10.2839 6.76559 10.3865C6.86426 10.4892 6.91937 10.6261 6.91937 10.7685C6.91937 10.9109 6.86426 11.0478 6.76559 11.1505C6.66693 11.2531 6.53235 11.3136 6.39006 11.3193ZM21.0003 8.52449C21.0003 3.82473 16.2883 0 10.5001 0C4.71176 0 -0.000244141 3.82473 -0.000244141 8.52449C-0.000244141 12.7342 3.73611 16.2615 8.78063 16.9317C9.12276 17.0035 9.58828 17.1575 9.7064 17.448C9.81141 17.7114 9.77553 18.1183 9.73965 18.393L9.59615 19.2855C9.55678 19.5489 9.38614 20.3233 10.5141 19.8499C11.6437 19.3783 16.5657 16.2816 18.7708 13.7466C20.2793 12.0937 21.0003 10.4005 21.0003 8.52449Z"
                fill="white"
              />
            </svg>
          </div>
          <div style={btn_content}>使用Line創建</div>
        </div>
        {/* <div style={btn_context}>
                    <div style={btn_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M10.2041 8.74575V12.2449H15.9915C15.7577 13.7457 14.2432 16.6446 10.2041 16.6446C6.72194 16.6446 3.8784 13.7628 3.8784 10.2041C3.8784 6.64541 6.72279 3.76361 10.2041 3.76361C12.1854 3.76361 13.5128 4.60459 14.273 5.33588L17.04 2.66752C15.2628 1.0085 12.9583 0 10.2041 0C4.56207 0 0 4.56207 0 10.2041C0 15.8461 4.56207 20.4082 10.2041 20.4082C16.0935 20.4082 20 16.2679 20 10.4371C20 9.76701 19.9277 9.2551 19.8393 8.74575H10.2041Z" fill="white" />
                        </svg>
                    </div>
                    <div style={btn_content}>with Google</div>
                </div>
                <div style={btn_context}>
                    <div style={btn_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M20.4992 10.4694C20.4992 4.94585 16.0223 0.468994 10.4996 0.468994C4.97685 0.468994 0.5 4.94585 0.5 10.4694C0.5 15.4596 4.15682 19.5965 8.93702 20.3465V13.3595H6.39858V10.4686H8.93702V8.26599C8.93702 5.75921 10.4304 4.37499 12.7138 4.37499C13.8081 4.37499 14.9523 4.57 14.9523 4.57V7.03093H13.6922C12.4505 7.03093 12.063 7.8018 12.063 8.59267V10.4694H14.8364L14.3931 13.3604H12.063V20.3473C16.8432 19.5973 20.5 15.4605 20.5 10.4694H20.4992Z" fill="white" />
                        </svg>
                    </div>
                    <div style={btn_content}>with Facebook</div>
                </div> */}
        <p style={textbox}>已經有帳號了嗎?</p>
        <a style={textbox} onClick={Click}>
          → <Span0>直接登入</Span0>
        </a>
      </div>
    </div>
  )
}
