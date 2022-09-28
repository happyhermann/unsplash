import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import "remixicon/fonts/remixicon.css";

import { IGetRes } from "../routes/Home";

const ModalBackGround = styled.div`
  background-color: #0009;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 5;
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
  margin-bottom: 30px;
`;

const Detail = styled.div`
  display: grid;
  gap: 24px;
  padding: 30px;

  grid-template:
    "stats featuredIn actions" auto
    "details description description" 1fr / fit-content(400px) 1fr auto;

  h3 {
    color: #767676;
    font-size: 20px;
    margin-bottom: 20px;
  }
  font-size: 23px;

  .Buttons {
    display: flex;

    span {
      margin-right: 15px;
      background-color: #fff;
    }
  }

  .Photo_details_box {
    display: flex;
    margin-bottom: 10px;

    i {
      font-size: 16px;
    }

    span {
      font-size: 20px;
      opacity: 0.5;
      margin-left: 10px;
      font-weight: 400;
    }
  }
`;

// 재활용 가능하게 하려면?
export const Modal = ({ clickedPhoto }: any) => {
  const navigate = useNavigate();

  const updated = clickedPhoto.user.updated_at.slice(0, 10);
  // 업로드 날짜 데이터

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

                {clickedPhoto.user.for_hire === true ? (
                  <p className="hire">Available for hire</p>
                ) : (
                  <div className="hire">hired</div>
                )}
                {/* 고용여부에 따른 문구 달리 띄우기  */}
              </div>
            </div>
            <div
              onClick={() => {
                navigate(-1);
                // 닫기 누를 시 뒤로가기
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
          <Detail>
            <div className="views">
              <div>
                <h3>Views</h3>
                <span>{clickedPhoto.height}</span>
              </div>
            </div>
            <div className="Likes">
              <div>
                <h3>Download</h3>
                <span>{clickedPhoto.user.total_photos}</span>
              </div>
            </div>
            <div className="Likes">
              <div>
                <h3>Likes</h3>
                <span>{clickedPhoto.user.total_likes}</span>
              </div>
            </div>
            <div className="Photo_details">
              <span className="Photo_details_box">
                <i className="ri-calendar-line"></i>
                <span>Uploaded {updated}</span>
              </span>
              <span className="Photo_details_box">
                <i className="ri-camera-2-line"></i>
                <span>Canon, EOS 100D</span>
              </span>
              <span className="Photo_details_box">
                <i className="ri-shield-cross-line"></i>
                <span>Free to use under the Unsplash License</span>
              </span>
            </div>
          </Detail>
        </ModalBox>
      </ModalBackGround>
    </>
  );
};
