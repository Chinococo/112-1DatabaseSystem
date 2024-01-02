import MemberContext from "../contexts/MemberContext"
import React from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Span0 = styled.span`
  color: #fff;
  text-decoration-line: underline;
`

export default function Signup() {
  const background = {
    display: "flex",
    background: " #000",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: "100vh",
  }
  const textbox_welcome = {
    marginTop: "168px",
    color: "#FFF",
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
    color: "#FFF",
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
    background: "#000",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    gap: "16px",
  }
  const textbox_wallet = {
    color: "#fff",
    fontFamily: "PressStart2P",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    textAlign: "center",
    lineHeight: "normal",
    letterSpacing: "-0.96px",
  }
  const btn_context = {
    display: "flex",
    padding: "16px 64px",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    background: "#FFF",
  }
  const btn_img = {
    width: "21.001px",
    height: "20px",
    flexShrink: "0",
  }
  const btn_content = {
    color: "#000",
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

  console.log(ctx.member.line_userId)

  // React.useEffect(() => {
  //     if (ctx.member.line_userId !== "") {
  // 		nav('/');
  // 	}
  // }, [ctx.member.line_userId]);

  function click() {
    nav("/signup")
  }

  function lineLoginBotton() {
    //nav('/bottom-panel-temp');
    window.location.replace(import.meta.env.VITE_LINE_AUTH_WINDOW_LOCATION_PAGE)
  }

  return (
    <div style={background}>
      <div style={textbox_welcome}>Log in</div>
      <div style={textbox_welcome_content}>立即登入，回到您的玩宇宙！</div>
      <div style={btns_context}>
        <button style={btn_context} onClick={lineLoginBotton}>
          <div style={btn_img}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" viewBox="0 0 22 20" fill="none">
              <path
                d="M17.4445 8.12986C17.5871 8.13553 17.7219 8.19614 17.8207 8.29898C17.9195 8.40183 17.9747 8.53893 17.9747 8.68156C17.9747 8.82419 17.9195 8.96129 17.8207 9.06413C17.7219 9.16698 17.5871 9.22758 17.4445 9.23326H15.9089V10.2177H17.4445C17.5187 10.2147 17.5927 10.2268 17.6622 10.2531C17.7316 10.2795 17.7949 10.3196 17.8485 10.371C17.902 10.4224 17.9446 10.4842 17.9737 10.5525C18.0028 10.6208 18.0178 10.6943 18.0178 10.7685C18.0178 10.8427 18.0028 10.9162 17.9737 10.9845C17.9446 11.0528 17.902 11.1145 17.8485 11.166C17.7949 11.2174 17.7316 11.2575 17.6622 11.2839C17.5927 11.3102 17.5187 11.3223 17.4445 11.3193H15.3567C15.2112 11.3184 15.0719 11.2601 14.9692 11.157C14.8665 11.0539 14.8086 10.9145 14.8081 10.7689V6.59419C14.8081 6.2923 15.0549 6.04292 15.3594 6.04292H17.4472C17.5934 6.04327 17.7335 6.10168 17.8366 6.20531C17.9397 6.30894 17.9975 6.44929 17.9971 6.5955C17.9968 6.7417 17.9384 6.88178 17.8347 6.98492C17.7311 7.08805 17.5908 7.1458 17.4445 7.14545H15.9089V8.12986H17.4445ZM14.0713 10.7689C14.0706 10.9148 14.0121 11.0545 13.9086 11.1573C13.8051 11.2602 13.6651 11.3178 13.5192 11.3176C13.4327 11.3194 13.3471 11.3006 13.2694 11.2625C13.1918 11.2244 13.1244 11.1683 13.0729 11.0988L10.9352 8.19636V10.7689C10.9256 10.9082 10.8635 11.0387 10.7614 11.1339C10.6593 11.2292 10.5249 11.2822 10.3853 11.2822C10.2457 11.2822 10.1112 11.2292 10.0092 11.1339C9.90709 11.0387 9.84496 10.9082 9.83533 10.7689V6.59419C9.8351 6.44898 9.89244 6.3096 9.99479 6.2066C10.0971 6.1036 10.2361 6.04537 10.3813 6.04467C10.552 6.04467 10.7095 6.13567 10.8145 6.26693L12.9688 9.18076V6.59419C12.9688 6.2923 13.2156 6.04292 13.5201 6.04292C13.8219 6.04292 14.0713 6.2923 14.0713 6.59419V10.7689ZM9.04781 10.7689C9.04712 10.915 8.98867 11.0548 8.88522 11.158C8.78177 11.2611 8.64173 11.3191 8.49567 11.3193C8.35014 11.3184 8.21087 11.2601 8.10812 11.157C8.00538 11.0539 7.94749 10.9145 7.94703 10.7689V6.59419C7.94703 6.2923 8.19379 6.04292 8.49829 6.04292C8.80105 6.04292 9.04781 6.2923 9.04781 6.59419V10.7689ZM6.89 11.3193H4.80219C4.65642 11.3184 4.51687 11.2601 4.41371 11.1572C4.31055 11.0542 4.25207 10.9147 4.25093 10.7689V6.59419C4.25093 6.2923 4.50031 6.04292 4.80219 6.04292C5.1067 6.04292 5.35346 6.2923 5.35346 6.59419V10.2177H6.89C7.03229 10.2233 7.16686 10.2839 7.26553 10.3865C7.3642 10.4892 7.41931 10.6261 7.41931 10.7685C7.41931 10.9109 7.3642 11.0478 7.26553 11.1505C7.16686 11.2531 7.03229 11.3136 6.89 11.3193ZM21.5003 8.52449C21.5003 3.82473 16.7883 0 11 0C5.2117 0 0.499695 3.82473 0.499695 8.52449C0.499695 12.7342 4.23605 16.2615 9.28057 16.9317C9.6227 17.0035 10.0882 17.1575 10.2063 17.448C10.3113 17.7114 10.2755 18.1183 10.2396 18.393L10.0961 19.2855C10.0567 19.5489 9.88608 20.3233 11.014 19.8499C12.1436 19.3783 17.0657 16.2816 19.2707 13.7466C20.7793 12.0937 21.5003 10.4005 21.5003 8.52449Z"
                fill="black"
              />
            </svg>
          </div>
          <div style={btn_content}>使用Line登入</div>
        </button>
        {/* <button style={btn_context}
                        onClick={() => {
                            window.location.replace(
                                "https://access.line.me/oauth2/v2.1/login?returnUri=%2Foauth2%2Fv2.1%2Fauthorize%2Fconsent%3Fresponse_type%3Dcode%26client_id%3D1657626401%26redirect_uri%3Dhttp%3A%2F%2Flocalhost%3A3000%2Fcallback%26state%3D12345abcde%26scope%3Dprofile%2Bopenid%26nonce%3D09876xyz&loginChannelId=1657626401&loginState=7RiU0cj7JvB9tiTK5d1j3N"
                            );
                        }}>
                    <div style={btn_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                            <path d="M10.7041 8.74575V12.2449H16.4915C16.2577 13.7457 14.7432 16.6446 10.7041 16.6446C7.22194 16.6446 4.3784 13.7628 4.3784 10.2041C4.3784 6.64541 7.22279 3.76361 10.7041 3.76361C12.6854 3.76361 14.0128 4.60459 14.773 5.33588L17.54 2.66752C15.7628 1.0085 13.4583 0 10.7041 0C5.06207 0 0.5 4.56207 0.5 10.2041C0.5 15.8461 5.06207 20.4082 10.7041 20.4082C16.5935 20.4082 20.5 16.2679 20.5 10.4371C20.5 9.76701 20.4277 9.2551 20.3393 8.74575H10.7041Z" fill="black" />
                        </svg>
                    </div>
                    <div style={btn_content}>with Google</div>
                </button>
                <button style={btn_context}>
                    <div style={btn_img}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                            <path d="M19.9992 10.4694C19.9992 4.94586 15.5223 0.469009 9.99958 0.469009C4.47685 0.469009 0 4.94586 0 10.4694C0 15.4596 3.65682 19.5965 8.43702 20.3465V13.3595H5.89858V10.4686H8.43702V8.266C8.43702 5.75923 9.93041 4.37501 12.2138 4.37501C13.3081 4.37501 14.4523 4.57001 14.4523 4.57001V7.03095H13.1922C11.9505 7.03095 11.563 7.80182 11.563 8.59268V10.4694H14.3364L13.8931 13.3604H11.563V20.3473C16.3432 19.5973 20 15.4605 20 10.4694H19.9992Z" fill="black" />
                        </svg>
                    </div>
                    <div style={btn_content}>with Facebook</div>
                </button> */}
        <p style={textbox}>還沒有帳號嗎?</p>
        <a style={textbox} onClick={click}>
          ← <Span0>創建我的錢包</Span0>
        </a>
      </div>
    </div>
  )
}
