import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 594px;
`;

const BackGround = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("/assets/cityhall.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TextArea = styled.div`
  color: white;
  display: block;
  margin-bottom: auto;
  margin-top: auto;
  display: flex;

  width: 100%;

  .text_title {
    font-size: 46px;
    font-weight: 800;
  }
  .text_p {
    margin-bottom: 0;
    margin-top: 16px;
    font-size: 18px;
    font-weight: 500;
    line-height: 20px;
  }
`;

const InnerText = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: left;
`;

export default function Banner() {
  return (
    <Wrapper>
      <BackGround>
        <TextArea>
          <InnerText>
            <h3 className="text_title">Unsplash</h3>
            <p className="text_p">
              The internet’s source for visuals.
              <br />
              Powered by creators everywhere.
            </p>
          </InnerText>
        </TextArea>
      </BackGround>
    </Wrapper>
  );
}
