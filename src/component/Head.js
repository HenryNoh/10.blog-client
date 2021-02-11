import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Icon.png";

const HeadBlock = styled.div`
  @media (max-width: 1080px) {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .left {
      display: flex;
      height: 32px;
      .menu {
        margin-left: 10px;
        .material-icons {
          font-size: 32px;
          width: 32px;
          height: 32px;
        }
      }
      .logo {
        margin-left: 10px;
        line-height: 32px;
        img {
          width: 32px;
          height: 32px;
        }
      }
    }
    .right {
      display: flex;
      height: 32px;
      margin-right: 20px;
      .search {
        margin-right: 10px;
        .material-icons {
          font-size: 32px;
          width: 32px;
          height: 32px;
        }
      }
      .login {
        height: 32px;
        width: 64px;
        line-height: 32px;
        font-size: 15px;
        font-weight: bold;
        text-align: center;
        background-color: #04beb8;
        color: white;
        border-radius: 24px;
      }
    }
  }
`;

const Head = () => {
  return (
    <HeadBlock>
      <div className="left">
        <div className="menu">
          <span className="material-icons">menu</span>
        </div>
        <Link to="/" className="logo">
          <img src={logo} alt="냄비" />
        </Link>
      </div>
      <div className="right">
        <div className="search">
          <span className="material-icons">search</span>
        </div>
        <div className="login">로그인</div>
      </div>
    </HeadBlock>
  );
};

export default Head;
