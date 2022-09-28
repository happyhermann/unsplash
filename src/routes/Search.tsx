import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { IGetRes } from "./Home";
import { keyword } from "../atom";
import { useRecoilValue } from "recoil";
import { Loading } from "../components/Loading";
import { useMatch, useNavigate } from "react-router-dom";
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
  const [loading, setLoading] = useState(true);
  const searchMatch = useMatch("/photos/:searchId");
  const searched = useRecoilValue<IGetRes[]>(keyword);

  console.log(searched);

  // 모달 재활용 코드
  const onBoxClick = (searchId: string) => {
    navigate(`/photos/${searchId}`);
  };

  const clickedPhoto =
    searchMatch?.params.searchId &&
    searched?.find((searched) => searched.id === searchMatch.params.searchId);

  // const axios = require("axios");

  console.log(searched.length);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [searched]);

  return (
    <>
      <Wrapper>
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
