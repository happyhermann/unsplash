import React from "react";
import styled from "styled-components";

import "remixicon/fonts/remixicon.css";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 4;
  padding: 10px;
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

const SliderUl = styled.ul``;

const Divider = styled.div`
  background-color: #d1d1d1;
  height: 32px;
  width: 1px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Nav>
        <div className="logo_box">
          <img
            src="https://images.squarespace-cdn.com/content/v1/54a5505fe4b0d132f64e0e9b/1602764573163-4U5NX0PCFMOJCFSZQKFV/Unsplash-logo-4x3.png"
            alt="Logo"
          />
        </div>
        <div className="form_box">
          <Form>
            <div className="form_icon">
              <i className="ri-search-line"></i>
            </div>
            <div className="search_box">
              <SearchBar placeholder="Search photos" />
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
              src="https://assets.stickpng.com/images/585e4bf3cb11b227491c339a.png"
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
