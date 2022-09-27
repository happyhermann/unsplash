import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { IGetRes } from "../routes/Home";

const ModalBackGround = styled.div`
  background-color: #0009;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
  backface-visibility: hidden;
  overflow: auto;
`;

const ModalBox = styled.section`
  padding: 20px;
  align-items: center;
  width: 85%;
  margin: 0 auto;
  margin-top: 20px;

  background-color: white;

  min-height: 100%;
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  .uploader {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      margin-right: 10px;
      border-radius: 50%;
    }
  }
  .uploader_details {
    text-align: left;

    h3 {
      font-size: 16px;
      font-weight: 700;
    }
    p {
      font-size: 12px;
      color: #007fff;
    }
  }

  .exit_button {
    cursor: pointer;
  }
`;

const Body = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;

const Detail = styled.div``;

// 재활용 가능하게 하려면?
export const Modal = ({ clickedPhoto }: any) => {
  const navigate = useNavigate();

  return (
    <>
      <ModalBackGround>
        <ModalBox>
          <Header>
            <div className="uploader">
              <img
                className="uploader_image"
                src={clickedPhoto.user.profile_image.medium}
                alt="modal_images"
                width="25"
              />{" "}
              <div className="uploader_details">
                <h3 className="uploader_name">{clickedPhoto.user.name}</h3>
                <p className="hire">Available for hire</p>
              </div>
            </div>
            <div
              onClick={() => {
                navigate("/");
              }}
              className="exit_button"
            >
              Close
            </div>
          </Header>
          <Body>
            <div className="modal_image">
              <img
                src={clickedPhoto.urls.regular}
                alt="modal_images"
                width="450"
              />
            </div>
          </Body>
          <Detail></Detail>
        </ModalBox>
      </ModalBackGround>
    </>
  );
};
