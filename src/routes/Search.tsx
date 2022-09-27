import React, { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { IGetRes } from "./Home";
import { keyword } from "../atom";
import { useRecoilState, useRecoilValue } from "recoil";
import { Loading } from "../components/Loading";

const ACCESS_KEY = "CbuSOiu8nhicErzCuY4IkeqzuaxkT4RUSMCXhLKsiFo";
const SEARCH = "https://api.unsplash.com/search/photos?";

// to Do

const Wrapper = styled.section``;

const Keyword = styled.h3`
  font-size: 28px;
  font-weight: 800;
  padding: 0 30px;
`;

const List = styled.ul``;

const Photos = styled.li``;

const Img = styled.img``;

export default function Search() {
  // random image Interface
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState<IGetRes[]>([]);
  const searched = useRecoilValue<string>(keyword);

  // const axios = require("axios");

  useEffect(() => {
    setLoading(true);
    axios
      .get(SEARCH, {
        params: {
          page: 1,
          query: searched,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        timeout: 2000,
      })
      .then((res: any) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((err: any) => {
        console.log("error");
      });

    console.log(data);
  }, [searched]);

  return (
    <>
      {" "}
      {loading ? (
        <Loading />
      ) : (
        <Wrapper>
          <Keyword>{searched.toUpperCase()}</Keyword>
          <List>
            {/* {data.map((datas: IGetRes) => (
              <Photos key={datas.id}>
                <Img src={datas.urls.small} alt="searched img" />
              </Photos>
            ))} */}
          </List>
        </Wrapper>
      )}
    </>
  );
}
