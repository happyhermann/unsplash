import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { IGetRes } from "./Home";
import { keyword } from "../atom";
import { useRecoilValue } from "recoil";
import { Loading } from "../components/Loading";
import { useLocation, useMatch, useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";

// to Do

const Wrapper = styled.section``;

const Keyword = styled.h3`
  font-size: 28px;
  font-weight: 800;
  padding: 0 30px;
`;

const List = styled.ul`
  margin-top: 1rem;
  /* Prevent vertical gaps */
  line-height: 0;
  padding: 30px 60px;

  @media screen and (max-width: 832px) {
    -webkit-column-count: 1;
    -webkit-column-gap: 0px;
    -moz-column-count: 1;
    -moz-column-gap: 0px;
    column-count: 1;
    column-gap: 0px;
  }

  @media screen and (min-width: 833px) and (max-width: 1232px) {
    --column-gutter: 24px;
    --columns: 3;
    -webkit-column-count: 2;
    -webkit-column-gap: 0px;
    -moz-column-count: 2;
    -moz-column-gap: 0px;
    column-count: 2;
    column-gap: 0px;
  }

  @media screen and (min-width: 1233px) and (max-width: 1632px) {
    -webkit-column-count: 3;
    -webkit-column-gap: 0px;
    -moz-column-count: 2;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: 0px;
  }
`;

const Photos = styled.li`
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: var(--row-gutter);
  margin-bottom: 15px;
`;

const Img = styled.img``;

export default function Search() {
  // random image Interface
  const navigate = useNavigate();
  const location = useLocation();
  // useLocation으로 현재 페이지의 정보를 가져옴
  // key랑 pathname 가져오기 가능

  // new URLSearchParams를 가지고  쿼리 파라미터 가져와서 유저가 서치한 키워드  h3에 painting하기

  const [userInput, setUserInput] = useState("dd");
  const [loading, setLoading] = useState(true);
  const searchMatch = useMatch("/pictures/:photoId");
  const searched = useRecoilValue<IGetRes[]>(keyword);

  useEffect(() => {
    setUserInput(
      location.pathname.substring(8, location.pathname.length).toUpperCase()
    );
  });

  console.log(userInput);

  // 모달 재활용 코드
  const onBoxClick = (photoId: string) => {
    navigate(`/pictures/${photoId}`);
  };

  const clickedPhoto =
    searchMatch?.params.photoId &&
    searched?.find((searched) => searched.id === searchMatch.params.photoId);

  // const axios = require("axios");

  console.log(`search match 콘솔찍자 ${searchMatch}`);
  console.log(searched.length);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [searched]);

  console.log(clickedPhoto);

  return (
    <>
      <Wrapper>
        <div style={{ padding: "30px" }} className="userSearched">
          <h3 style={{ fontSize: "35px", fontWeight: "600" }}>{userInput}</h3>
        </div>
        {/* <Keyword>{searched.toUpperCase()}</Keyword> */}

        {loading ? (
          <Loading />
        ) : (
          <List>
            {searched.length === 0 ? (
              <div
                className="error_box"
                style={{ margin: "0 auto", width: "100%" }}
              >
                <h3 style={{ fontSize: "30px", fontWeight: 600 }}>
                  Any photos can't be found
                </h3>
                <img
                  className="error_img"
                  src="https://unsplash.com/a/img/empty-states/photos.png"
                  alt="empty"
                />
              </div>
            ) : (
              <>
                {searched.map((photo: IGetRes) => (
                  <Photos
                    onClick={() => {
                      onBoxClick(photo.id);
                    }}
                    key={photo.id}
                  >
                    <Img src={photo.urls.small} alt="searched photo" />
                  </Photos>
                ))}
              </>
            )}

            {/* {searched.map((photo: IGetRes) => (
          <Photos
            onClick={() => {
              onBoxClick(photo.id);
            }}
            key={photo.id}
          >
            <Img src={photo.urls.small} alt="searched photo" />
          </Photos>
        ))} */}
          </List>
        )}

        {searchMatch ? <Modal clickedPhoto={clickedPhoto} /> : null}
      </Wrapper>
    </>
  );
}
