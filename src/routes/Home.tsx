import React, { useEffect, useState } from "react";

import axios from "axios";

import styled from "styled-components";
import Banner from "../components/Banner";
import { useNavigate, useMatch } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Loading } from "../components/Loading";

const ACCESS_KEY = "CbuSOiu8nhicErzCuY4IkeqzuaxkT4RUSMCXhLKsiFo";
const RANDOM_PHOTO_URL = "https://api.unsplash.com/photos/random";

const HomeContainer = styled.section`
  min-width: 1100px;
  margin: 0 auto;
`;

const PictureList = styled.ul`
  margin-top: 1rem;
  /* Prevent vertical gaps */
  line-height: 0;
  padding: 30px 60px;
  margin: 0 auto;

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

  @media screen and (min-width: 1233px) {
    -webkit-column-count: 3;
    -webkit-column-gap: 0px;
    -moz-column-count: 2;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: 0px;
  }
`;

const Picture = styled.li`
  img {
    cursor: zoom-in;
  }
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  row-gap: var(--row-gutter);
  margin-bottom: 15px;
`;

export interface IGetRes {
  id: string;
  width: number;
  height: number;
  urls: { large: string; regular: string; raw: string; small: string };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
  links: {
    self: "https://api.unsplash.com/photos/eOLpJytrbsQ";
    html: "http://unsplash.com/photos/eOLpJytrbsQ";
    download: "http://unsplash.com/photos/eOLpJytrbsQ/download";
  };
}

// to Do

// 1. 인피니티 스크롤
// 2. 3줄로 사진 뜨게 하기
// 3. Loading
// 4. Search 페이지

// 상세

export default function Home() {
  // random image Interface
  const navigate = useNavigate();
  const photoMatch = useMatch("/photos/:photoId");
  // useMatch의 인자로 url로 넘기면 해당 url과 일치하는 경우 url 정보 반환
  // 아닐시 null을 반환

  // => 이 특성을 이용해서 modal창 띄우는 toggle로 사용하기?

  // console.log(photoMatch);
  const [load, setLoad] = useState(true);
  const [res, setRes] = useState<IGetRes[]>([]);

  const axios = require("axios");

  useEffect(() => {
    axios
      .get(RANDOM_PHOTO_URL, {
        params: {
          count: 30,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
      })
      .then((res: any) => {
        setRes(res.data);
      })
      .catch((err: any) => {
        console.log("error");
      });
  }, []);

  const onBoxClick = (photoId: string) => {
    navigate(`/photos/${photoId}`);
  };
  // Home 사진 화면 클릭하면 띄워주는 기능
  // 해당 box누르면 클릭 이벤트 발생한 개별 사진의 id를 함수의 파리미터로 받아옴

  const clickedPhoto =
    photoMatch?.params.photoId &&
    res?.find((photo) => photo.id === photoMatch.params.photoId);

  // usePhotos를 사용하면 해당 id와 일치하면 null을 띄우거나 아니면 true 반환?
  // 그러면 res에 있는 데이터안에 필터를 돌려서 클릭한 photoMatch의 photoId와 일치하는 것을
  // 변수에 담아주는 것으로 마무리함

  // console.log(clickedPhoto);

  return (
    <>
      <HomeContainer>
        <Banner />
        <PictureList>
          <div>
            {res.map((data: IGetRes) => (
              <Picture onClick={() => onBoxClick(data.id)} key={data.id}>
                <img className="picture" src={data.urls.small} alt="pic img" />
              </Picture>
            ))}
          </div>
        </PictureList>
        {photoMatch ? <Modal clickedPhoto={clickedPhoto} /> : null}
      </HomeContainer>
    </>
  );
}
