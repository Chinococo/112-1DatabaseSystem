import CustomAppBar from "../components/CustomAppBar"
import ActivityContext from "../contexts/ActivityContext"
import topImg from "../img/c4e035e3cd6b035076317eef39cf7cc6.jpg"
import Button from "@mui/material/Button"
import React from "react"
import styled from "styled-components"

const Div0 = styled.div`
  width: 100%;
  display: flex;
  padding: 4px 0px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`

const Div1 = styled.div`
  display: flex;
  width: 390px;
  padding: 0px 24px;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

const Div3 = styled.div`
  color: #dadada;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  text-decoration-line: underline;
`

const Div4 = styled.div`
  width: 390px;
  padding: 0px 24px 0px 24px;
  display: flex;
  gap: 8px;
  overflow: auto;
  scroll-snap-type: x mandatory;
  scroll-padding: 27px;
`

const Div5 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`

const Div6 = styled.div`
  width: 224px;
  height: 96px;
  border-radius: 12px;
  background: green;
`

const Div7 = styled.div`
  color: #fff;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Div9 = styled.div`
  align-self: stretch;
  color: #c4c4c4;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const Div10 = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const Div11 = styled.div`
  margin: 0 10px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Div12 = styled.div`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`

const Div14 = styled.div`
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 160%;
`

const Div15 = styled.div`
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  gap: 4px;
`

const Div16 = styled.div`
  background: var(--black, #292929);
  padding-bottom: 80px;
  position: relative;
  top: 65px;
  flex-grow: 1;
`

const Div17 = styled.div`
  aspect-ratio: 1;
  flex-shrink: 0;
  width: 100%;
  height: 168px;
  background-color: green;
`

const Img0 = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Div18 = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  margin: -20px 35px;
  gap: 12px;
`

const Div19 = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 1;
  flex: 0 0 80px;
`

const Img1 = styled.img`
  flex-shrink: 1;
  border-radius: 40px;
  width: 100%;
  height: 100%;
`

const Div20 = styled.div`
  display: flex;
  align-items: center;
`

const Div21 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
`

const Div22 = styled.div`
  padding: 27px 28px;
  gap: 32px;
  display: flex;
  flex-direction: column;
`

const Div23 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`

const Div24 = styled.div`
  color: #fff;
  text-align: center;
  font-family: Noto Sans TC;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
`

const Div25 = styled.div`
  color: var(--white, #fff);
  font-family: Montserrat;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
`

const Div26 = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2px;
  border-radius: 8.91px;
  background: rgba(118, 118, 128, 0.24);
`

const Div27 = styled.div`
  font-family: Montserrat;
  font-size: 15px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: -0.24px;
  padding: 6px 8px;
  text-align: center;
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

function Product() {
  return (
    <Div0>
      <Div1>
        <Div2>近期活動</Div2>
        <Div3>查看所有</Div3>
      </Div1>
      <Div4>
        {/* {activities.map((obj) => ( */}
        <Div5>
          <Div6>
            {/* {import.meta.env.VITE_BACKEND.includes("localhost") ? <></> :
              <img
                style={{ borderRadius: "12px", width: "100%", height: "100%", objectFit: "cover" }}
                src={obj.picture}
              />
            } */}
          </Div6>
          <Div8>
            {/* {obj.name}
            <br />
            {obj.start_at}~{obj.end_at} */}
            Arcade Classics <br /> 2023/04/05
          </Div8>
          <Div9>
            {/* {obj.creator} */}
            Retro Gamer
          </Div9>
        </Div5>
        {/* ))} */}
      </Div4>
    </Div0>
  )
}

function About() {
  return (
    <Div10>
      <Div11>
        <Div12>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M12.5 2C8.63 2 5.5 5.13 5.5 9C5.5 13.17 9.92 18.92 11.74 21.11C12.14 21.59 12.87 21.59 13.27 21.11C15.08 18.92 19.5 13.17 19.5 9C19.5 5.13 16.37 2 12.5 2ZM12.5 11.5C11.12 11.5 10 10.38 10 9C10 7.62 11.12 6.5 12.5 6.5C13.88 6.5 15 7.62 15 9C15 10.38 13.88 11.5 12.5 11.5Z"
              fill="white"
            />
          </svg>
        </Div12>
        <Div13>106335 臺北市大安區基隆路 4 段 43 號 (第四教學大樓 T4-832室)</Div13>
      </Div11>
      <Div11>
        <Div12>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M19.73 15.26L17.19 14.97C16.58 14.9 15.98 15.11 15.55 15.54L13.71 17.38C10.88 15.94 8.56004 13.63 7.12004 10.79L8.97004 8.94001C9.40004 8.51001 9.61004 7.91001 9.54004 7.30001L9.25004 4.78001C9.13004 3.77001 8.28004 3.01001 7.26004 3.01001H5.53004C4.40004 3.01001 3.46004 3.95001 3.53004 5.08001C4.06004 13.62 10.89 20.44 19.42 20.97C20.55 21.04 21.49 20.1 21.49 18.97V17.24C21.5 16.23 20.74 15.38 19.73 15.26Z"
              fill="white"
            />
          </svg>
        </Div12>
        <Div14>02-27376509</Div14>
      </Div11>
      <Div11>
        <Div12>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M12.49 2C6.97 2 2.5 6.48 2.5 12C2.5 17.52 6.97 22 12.49 22C18.02 22 22.5 17.52 22.5 12C22.5 6.48 18.02 2 12.49 2ZM12.5 20C8.08 20 4.5 16.42 4.5 12C4.5 7.58 8.08 4 12.5 4C16.92 4 20.5 7.58 20.5 12C20.5 16.42 16.92 20 12.5 20ZM12.28 7H12.22C11.82 7 11.5 7.32 11.5 7.72V12.44C11.5 12.79 11.68 13.12 11.99 13.3L16.14 15.79C16.48 15.99 16.92 15.89 17.12 15.55C17.33 15.21 17.22 14.76 16.87 14.56L13 12.26V7.72C13 7.32 12.68 7 12.28 7Z"
              fill="white"
            />
          </svg>
        </Div12>
        <Div14>平日 9:00~18:00</Div14>
      </Div11>
      <Div11>
        <Div12>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
            <path
              d="M10.9744 13.5256C11.418 13.9475 11.418 14.64 10.9744 15.0619C10.5525 15.4839 9.86002 15.4839 9.43806 15.0619C7.32824 12.9521 7.32824 9.52232 9.43806 7.4125L13.2682 3.58236C15.378 1.47255 18.8078 1.47255 20.9176 3.58236C23.0275 5.69218 23.0275 9.12199 20.9176 11.2318L19.3055 12.8439C19.3163 11.9567 19.1757 11.0695 18.8727 10.2256L19.3813 9.70625C20.658 8.44036 20.658 6.38464 19.3813 5.11874C18.1154 3.84203 16.0596 3.84203 14.7938 5.11874L10.9744 8.93806C9.69773 10.2039 9.69773 12.2597 10.9744 13.5256ZM14.0256 8.93806C14.4475 8.51609 15.14 8.51609 15.5619 8.93806C17.6718 11.0479 17.6718 14.4777 15.5619 16.5875L11.7318 20.4176C9.62199 22.5275 6.19218 22.5275 4.08236 20.4176C1.97255 18.3078 1.97255 14.878 4.08236 12.7682L5.69448 11.1561C5.68366 12.0433 5.82432 12.9305 6.12727 13.7852L5.61874 14.2938C4.34203 15.5596 4.34203 17.6154 5.61874 18.8813C6.88464 20.158 8.94036 20.158 10.2062 18.8813L14.0256 15.0619C15.3023 13.7961 15.3023 11.7403 14.0256 10.4744C13.582 10.0525 13.582 9.36002 14.0256 8.93806Z"
              fill="white"
            />
          </svg>
        </Div12>
        <Div14>更多資訊</Div14>
      </Div11>
      <div>
        <Div15>
          <Div12>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M14.1332 11.6667C14.1998 11.1167 14.2498 10.5667 14.2498 10.0001C14.2498 9.43341 14.1998 8.88341 14.1332 8.33341H16.9498C17.0832 8.86675 17.1665 9.42508 17.1665 10.0001C17.1665 10.5751 17.0832 11.1334 16.9498 11.6667M12.6582 16.3001C13.1582 15.3751 13.5415 14.3751 13.8082 13.3334H16.2665C15.4591 14.7236 14.1783 15.7767 12.6582 16.3001ZM12.4498 11.6667H8.54984C8.4665 11.1167 8.4165 10.5667 8.4165 10.0001C8.4165 9.43341 8.4665 8.87508 8.54984 8.33341H12.4498C12.5248 8.87508 12.5832 9.43341 12.5832 10.0001C12.5832 10.5667 12.5248 11.1167 12.4498 11.6667ZM10.4998 16.6334C9.80817 15.6334 9.24984 14.5251 8.90817 13.3334H12.0915C11.7498 14.5251 11.1915 15.6334 10.4998 16.6334ZM7.1665 6.66675H4.73317C5.53222 5.27276 6.81217 4.21799 8.33317 3.70008C7.83317 4.62508 7.45817 5.62508 7.1665 6.66675ZM4.73317 13.3334H7.1665C7.45817 14.3751 7.83317 15.3751 8.33317 16.3001C6.81536 15.7765 5.53721 14.7232 4.73317 13.3334ZM4.04984 11.6667C3.9165 11.1334 3.83317 10.5751 3.83317 10.0001C3.83317 9.42508 3.9165 8.86675 4.04984 8.33341H6.8665C6.79984 8.88341 6.74984 9.43341 6.74984 10.0001C6.74984 10.5667 6.79984 11.1167 6.8665 11.6667M10.4998 3.35841C11.1915 4.35841 11.7498 5.47508 12.0915 6.66675H8.90817C9.24984 5.47508 9.80817 4.35841 10.4998 3.35841ZM16.2665 6.66675H13.8082C13.5474 5.63463 13.1611 4.63833 12.6582 3.70008C14.1915 4.22508 15.4665 5.28341 16.2665 6.66675ZM10.4998 1.66675C5.8915 1.66675 2.1665 5.41675 2.1665 10.0001C2.1665 12.2102 3.04448 14.3298 4.60728 15.8926C5.3811 16.6665 6.29976 17.2803 7.31081 17.6991C8.32185 18.1179 9.40549 18.3334 10.4998 18.3334C12.71 18.3334 14.8296 17.4554 16.3924 15.8926C17.9552 14.3298 18.8332 12.2102 18.8332 10.0001C18.8332 8.90573 18.6176 7.8221 18.1988 6.81105C17.78 5.80001 17.1662 4.88135 16.3924 4.10752C15.6186 3.3337 14.6999 2.71987 13.6889 2.30109C12.6778 1.8823 11.5942 1.66675 10.4998 1.66675Z"
                fill="white"
              />
            </svg>
          </Div12>
          <Div14>https://cla.ntust.edu.tw/</Div14>
        </Div15>
        <Div15>
          <Div12>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
              <path
                d="M18.8332 10.0001C18.8332 5.40008 15.0998 1.66675 10.4998 1.66675C5.89984 1.66675 2.1665 5.40008 2.1665 10.0001C2.1665 14.0334 5.03317 17.3917 8.83317 18.1667V12.5001H7.1665V10.0001H8.83317V7.91675C8.83317 6.30841 10.1415 5.00008 11.7498 5.00008H13.8332V7.50008H12.1665C11.7082 7.50008 11.3332 7.87508 11.3332 8.33341V10.0001H13.8332V12.5001H11.3332V18.2917C15.5415 17.8751 18.8332 14.3251 18.8332 10.0001Z"
                fill="white"
              />
            </svg>
          </Div12>
          <Div14>https://www.facebook.coNTUSTCGE</Div14>
        </Div15>
      </div>
    </Div10>
  )
}

const Div2 = styled(Div7)`
  width: 278px;
  font-size: 18px;
`

const Div8 = styled(Div7)`
  align-self: stretch;
  font-size: 14px;
`

const Div13 = styled(Div14)`
  text-decoration-line: underline;
`

export default function DiscoverMerchant() {
  const [activeTab, setActiveTab] = React.useState(/** @type {"product" | "about"} */ ("product"))

  const activityCtx = React.useContext(ActivityContext)

  return (
    <>
      <Div16>
        <CustomAppBar />

        <Div17>
          <Img0 src={topImg} />
        </Div17>

        <Div18>
          <Div19>
            <Img1 src={activityCtx.activityList[0].picture} />
          </Div19>
          <Div20>
            <Div21>{activityCtx.activityList[0].name}</Div21>
          </Div20>
        </Div18>

        <Div22>
          <Div23>
            <Div24>
              12
              <br />
              個活動
            </Div24>
            <Div24>
              3k
              <br />
              次參加
            </Div24>
            <Div24>
              406
              <br />
              名會員
            </Div24>
            <Button
              style={{
                padding: "10px 25px",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "12px",
                background: "var(--green, #90CE5F)",
                boxShadow: "0px 4px 20px 0px rgba(0, 0, 0, 0.25)",
                bottom: "0px",
              }}
              onClick={buttonClick}
            >
              <Div25>加入會員</Div25>
            </Button>
          </Div23>

          <Div26>
            <Div27
              style={{
                ...(activeTab === "product" ? activeTabStyle : inActiveTabStyle),
              }}
              onClick={() => setActiveTab("product")}
            >
              活動/產品
            </Div27>
            <Div27
              style={{
                ...(activeTab === "about" ? activeTabStyle : inActiveTabStyle),
              }}
              onClick={() => setActiveTab("about")}
            >
              關於
            </Div27>
          </Div26>

          <div>
            {activeTab === "product" && <Product></Product>}
            {activeTab === "about" && <About></About>}
          </div>
        </Div22>
      </Div16>
    </>
  )
}
