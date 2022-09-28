import React, { useCallback, useEffect, useRef, useState } from "react";

import axios from "axios";

import styled from "styled-components";
import Banner from "../components/Banner";
import { useNavigate, useMatch } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Loading } from "../components/Loading";

const ACCESS_KEY = "TghQrx8DkcCsqHWP0ZrCe2xDKjlBu1HEkZnSpcT4qF4";
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
  padding-bottom: 100px;

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

  @media screen and (min-width: 1233px) and (max-width: 1800px) {
    -webkit-column-count: 3;
    -webkit-column-gap: 0px;
    -moz-column-count: 2;
    -moz-column-gap: 0px;
    column-count: 3;
    column-gap: 0px;
  }

  @media screen and (min-width: 1810px) and (max-width: 2600px) {
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
  user?: {
    username?: string;
    name?: string;
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
  const [load, setLoad] = useState(false);

  // useMatch의 인자로 url로 넘기면 해당 url과 일치하는 경우 url 정보 반환
  // 아닐시 null을 반환

  // => 이 특성을 이용해서 modal창 띄우는 toggle로 사용하기?

  // console.log(photoMatch);

  // infinity scroll

  const observerTargetEl = useRef<HTMLDivElement>(null);

  const [posts, setPosts] = useState<IGetRes[]>([]);
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  const page = useRef<number>(1);

  // useRef? page를 state로 관리하지 않는 이유? : state로 관리하면 리렌더링으로 인해 서버측에 요청이 여러번 감

  console.log(observerTargetEl);
  console.log(hasNextPage);
  console.log(page);
  // get random data
  // const [res, setRes] = useState<IGetRes[]>([]);

  const axios = require("axios");

  const fetch = useCallback(async () => {
    setLoad(true); // 로딩 시작
    axios
      .get(RANDOM_PHOTO_URL, {
        params: {
          count: 10,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        page: page,
      })
      .then((res: any) => {
        // setRes(res.data);
        setPosts((prevPosts) => [...prevPosts, ...res.data]);
        setHasNextPage(res.data.length === 10);
        // 다음 페이지 존재하는지 체크하기 위해 hasNextPage 추가
        // 1~10, 11~20 10개를 가져오면 계속 true, 만약에 10이 아니라면 false이므로
        // 더이상 가져올 포스트가 없단느 것으로 여김
        if (res.data.length) {
          page.current += 1;
        }
        // spread 연산자로 data 연속으로 immutable하게 받아오기
      })
      .catch((err: any) => {
        console.log("error");
      });
    setLoad(false); //로딩 종료
  }, [posts]);

  console.log(load);

  // 다 잘되는데 이슈가 UseEffect를 axios를 호출 할때를 dependency에 넣어줘야하는데 axios를 변수에 집어넣어야함

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) return;

    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetch();
      }
    });
    io.observe(observerTargetEl.current);

    return () => {
      io.disconnect();
    };
  }, [fetch, hasNextPage]);

  console.log(posts);

  const onBoxClick = (photoId: string) => {
    navigate(`/photos/${photoId}`);
  };
  // Home 사진 화면 클릭하면 띄워주는 기능
  // 해당 box누르면 클릭 이벤트 발생한 개별 사진의 id를 함수의 파리미터로 받아옴

  const clickedPhoto =
    photoMatch?.params.photoId &&
    posts?.find((photo) => photo.id === photoMatch.params.photoId);

  // usePhotos를 사용하면 해당 id와 일치하면 null을 띄우거나 아니면 true 반환?
  // 그러면 res에 있는 데이터안에 필터를 돌려서 클릭한 photoMatch의 photoId와 일치하는 것을
  // 변수에 담아주는 것으로 마무리함

  // console.log(clickedPhoto);

  return (
    <>
      <HomeContainer>
        <Banner />
        <PictureList>
          {}

          <div>
            {posts.map((data: IGetRes, index: number) => (
              <Picture onClick={() => onBoxClick(data.id)} key={data.id}>
                {/* encounter sameKey 이슈 해결하기 위해 key에 index추가  */}
                <img className="picture" src={data.urls.small} alt="pic img" />
              </Picture>
            ))}
          </div>
          {load && <Loading />}
        </PictureList>
        {photoMatch ? <Modal clickedPhoto={clickedPhoto} /> : null}
        <div ref={observerTargetEl} />
      </HomeContainer>
    </>
  );
}
