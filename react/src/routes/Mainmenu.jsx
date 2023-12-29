import * as React from "react";
import styled from "styled-components";

export default function Mainmenu() {
  return (
    <Div>
      <Div2>主選單</Div2>
      <Div3>
        <Div4>
          <Div5>index.html</Div5>
          <Div6>X</Div6>
        </Div4>
        <Img
          loading="lazy"
          srcSet="..."
        />
        <Div7>
          <Div8>自動撥放選單</Div8>
          <Div9>
            <Div10 />
            <Img2
              loading="lazy"
              srcSet="..."
            />
            <Div11>⇨</Div11>
          </Div9>
          <Div12>
            <Div13 />
            <Div14 />
            <Div15 />
            <Div16 />
            <Div17 />
            <Div18 />
          </Div12>
        </Div7>
        <Div19>
          <Div20>
            <Column>
              <Img3
                loading="lazy"
                srcSet="..."
              />
            </Column>
            <Column2>
              <Div21>
                最新公告/More
                <br />
                2023/10/02 訊息1
                <br />
                2023/03/28 訊息2
                <br />
                2023/03/27 訊息3
                <br />
                2020/12/25 訊息4
                <br />
                2020/07/01 訊息5
                <br />
                2018/04/30 訊息6
                <br />
                2016/09/01 訊息7
              </Div21>
            </Column2>
          </Div20>
        </Div19>
        <Div22>
          注 意 事 項<br />- 不要在影廳吸大麻
          <br />- 不要在影廳罵蔡英文
          <br />- 可以在上課時大聲講話聊天
          <br />- 可以在上課時大音樂遊戲
        </Div22>
      </Div3>
    </Div>
  );
}

const Div = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
`;

const Div2 = styled.div`
  color: #000;
  width: 100%;
  font: 400 40px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div3 = styled.div`
  background-color: #d9d9d9;
  display: flex;
  margin-top: 27px;
  width: 100%;
  flex-direction: column;
  padding: 0 10px 32px 0;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div4 = styled.div`
  border-radius: 4px;
  background-color: #8b8b8b;
  align-self: start;
  display: flex;
  justify-content: space-between;
  gap: 20px;
  padding: 11px 8px 11px 21px;
  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

const Div5 = styled.div`
  justify-content: center;
  color: #000;
  width: 100%;
  font: 400 40px Inter, sans-serif;
`;

const Div6 = styled.div`
  justify-content: center;
  color: #000;
  align-self: start;
  font: 400 40px Irish Grover, sans-serif;
`;

const Img = styled.img`
  aspect-ratio: 11.52;
  object-fit: contain;
  object-position: center;
  width: 1117px;
  overflow: hidden;
  align-self: center;
  max-width: 1117px;
  margin: 12px 0 0 148px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div7 = styled.div`
  background-color: #a9a9a9;
  align-self: stretch;
  display: flex;
  margin-top: 7px;
  padding-right: 12px;
  flex-direction: column;
  align-items: center;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div8 = styled.div`
  color: #000;
  align-self: stretch;
  z-index: 1;
  font: 400 40px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div9 = styled.div`
  align-self: stretch;
  display: flex;
  margin-top: 6px;
  justify-content: space-between;
  gap: 13px;
  @media (max-width: 991px) {
    max-width: 100%;
    flex-wrap: wrap;
  }
`;

const Div10 = styled.div`
  border-radius: 50%;
  align-self: center;
  display: flex;
  width: 98px;
  height: 105px;
  flex-direction: column;
  margin: auto 0;
`;

const Img2 = styled.img`
  aspect-ratio: 4.4;
  object-fit: contain;
  object-position: center;
  width: 100%;
  overflow: hidden;
  flex-grow: 1;
  flex-basis: 0%;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div11 = styled.div`
  color: #000;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 1;
  white-space: nowrap;
  border-radius: 50%;
  align-self: center;
  justify-content: center;
  margin: auto 0;
  padding: -11px 10px 0;
  font: 400 96px Inter, sans-serif;
  @media (max-width: 991px) {
    font-size: 40px;
    white-space: initial;
  }
`;

const Div12 = styled.div`
  display: flex;
  margin-top: 19px;
  width: 384px;
  max-width: 100%;
  justify-content: space-between;
  gap: 14px;
  padding: 0 2px;
`;

const Div13 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div14 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div15 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div16 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div17 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div18 = styled.div`
  border-radius: 50%;
  display: flex;
  height: 39px;
  flex-direction: column;
  flex: 1;
`;

const Div19 = styled.div`
  align-self: center;
  margin-top: 21px;
  width: 100%;
  max-width: 1242px;
  @media (max-width: 991px) {
    max-width: 100%;
  }
`;

const Div20 = styled.div`
  gap: 20px;
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    align-items: stretch;
    gap: 0px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 0px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Img3 = styled.img`
  aspect-ratio: 1.3;
  object-fit: contain;
  object-position: center;
  width: 100%;
  fill: #a3a3a3;
  overflow: hidden;
  flex-grow: 1;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
  }
`;

const Column2 = styled.div`
  display: flex;
  flex-direction: column;
  line-height: normal;
  width: 50%;
  margin-left: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;

const Div21 = styled.div`
  color: #000;
  max-width: 431px;
  background-color: rgba(
    162.94281095266342,
    162.88496285676956,
    162.88496285676956,
    1
  );
  margin-top: 4px;
  flex-grow: 1;
  justify-content: center;
  align-items: end;
  width: 100%;
  padding: 42px 72px 42px 60px;
  font: 400 40px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    margin-top: 40px;
    padding: 0 30px 0 20px;
  }
`;

const Div22 = styled.div`
  justify-content: center;
  color: #000;
  z-index: 1;
  max-width: 100%;
  background-color: rgba(
    162.94281095266342,
    162.88496285676956,
    162.88496285676956,
    1
  );
  align-self: center;
  margin-top: 39px;
  width: 1220px;
  align-items: start;
  padding: 3px 60px 3px 33px;
  font: 400 40px Inter, sans-serif;
  @media (max-width: 991px) {
    max-width: 100%;
    padding: 0 20px;
  }
`;