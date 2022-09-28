import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import "remixicon/fonts/remixicon.css";
import axios from "axios";

import { useRecoilState } from "recoil";
import { Loading } from "./Loading";
import { IGetRes } from "../routes/Home";
import { keyword } from "../atom";

const ACCESS_KEY = "72mNv8vQDppYRP3EML1kkf2vNKhoQVdn8DY-9ozvW1E";
const SEARCH = "https://api.unsplash.com/search/photos?";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
  padding: 10px;
  background-color: white;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 20px;

  img {
    width: 50px;
    margin-right: 10px;
    cursor: pointer;
  }

  .form_box {
    flex-grow: 1;
  }
`;

const Form = styled.form`
  background-color: #eee;
  border: 1px solid #0000;
  border-radius: 24px;
  padding: 10px 45px;
  display: flex;
  align-items: center;

  i {
    font-size: 15px;
    color: #767676;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  padding-left: 20px;
  padding-right: 20px;

  a {
    align-items: center;
    display: flex;
    flex-direction: column;
    font-size: 15px;
    text-decoration: none;
    color: #767676;
    text-decoration-skip-ink: auto;
    transition: color 0.1s ease-in-out, opacity 0.1s ease-in-out;
  }

  a:first-child {
    margin-right: 18px;
  }
`;

const SearchBar = styled.input`
  appearance: none;
  box-shadow: none;
  padding-bottom: 2px;
  padding-left: 10px;
  background: none;
  border: none;
  color: #111;
  flex-grow: 1;
  width: 100%;
  overflow: visible;
`;

const Submit = styled.div`
  background-color: #eee;
  border-color: #0000;
  color: #767676;
  cursor: not-allowed;
  font-size: 14px;
  height: 32px;
  line-height: 30px;
  padding: 0 11px;
  fill: currentColor;
  border: 1px solid #0000;
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  transition: all 0.1s ease-in-out;
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;

  margin-right: 15px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;

  .profile_box {
    width: 25px;
    margin-right: 10px;
  }

  .profile_img {
    width: 100%;
    cursor: pointer;
  }

  i {
    font-size: 20px;
    cursor: pointer;
  }
`;

// Bottom Header

const Category = styled.section``;

const CategoryNav = styled.nav`
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;

  a {
    /* box-shadow: inset 0 -2px #111; */
    color: #111;
    pointer-events: none;
    align-items: center;
    display: flex;
    font-size: 14px;
    height: 56px;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .left_ul {
    display: flex;
  }

  /* 공통적인 a 통합  */
  .left_li {
    align-items: center;
    display: flex;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

// const SliderUl = styled.ul``;

const Divider = styled.div`
  background-color: #d1d1d1;
  height: 32px;
  width: 1px;
`;

export default function Header() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [searched, setSearch] = useRecoilState(keyword);

  useEffect(() => {
    setLoading(true);
    axios
      .get(SEARCH, {
        params: {
          page: 1,
          query: input,
        },
        headers: {
          Authorization: `Client-ID ${ACCESS_KEY}`,
        },
        timeout: 2000,
      })
      .then((res: any) => {
        setSearch(res.data.results);
        setLoading(false);
        if (loading === false) {
          navigate(`/search/${input}`);
        }
      })
      .catch((err: any) => {
        console.log("error");
      });
  }, [input]);

  // console.log(searched);

  const onChange = (e: any) => {
    e.preventDefault();

    setText(e.target.value);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    setInput(text);
  };

  return (
    <Wrapper>
      <Nav>
        <div className="logo_box">
          <img
            onClick={() => {
              navigate("/");
            }}
            src="https://images.squarespace-cdn.com/content/v1/54a5505fe4b0d132f64e0e9b/1602764573163-4U5NX0PCFMOJCFSZQKFV/Unsplash-logo-4x3.png"
            alt="Logo"
          />
        </div>
        <div className="form_box">
          <Form onSubmit={onSubmit}>
            <div className="form_icon">
              <i className="ri-search-line"></i>
            </div>
            <div className="search_box">
              <SearchBar
                onChange={onChange}
                name="search"
                type="text"
                placeholder="Search photos"
              />
            </div>
          </Form>
        </div>
        <Ul>
          <li>
            <a href="#">Advertise</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </Ul>
        <Submit>Submit a photo</Submit>
        <Profile>
          <div className="profile_box">
            <img
              className="profile_img"
              src="https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
              alt="user profile"
            />
          </div>
          <div className="menu">
            <i className="ri-menu-line"></i>
          </div>
        </Profile>
      </Nav>
      <Category>
        <CategoryNav>
          <ul className="left_ul">
            <li className="left_li editorial">
              <a href="#">Editorial</a>
            </li>
            <li className="left_li following">
              <a href="#">Following</a>
            </li>
          </ul>
          <Divider />
        </CategoryNav>
      </Category>
    </Wrapper>
  );
}
