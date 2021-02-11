import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBlock = styled.div`
  @media (max-width: 1080px) {
    .nav {
      height: 64px;
      width: calc(100% - 20px);
      margin: 20px 10px 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 15px;
      font-weight: bold;
      .item {
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        color: black;
      }
      .underline {
        color: #04beb8;
        border-bottom: 2px solid #04beb8;
      }
    }
  }
`;

const Nav = () => {
  const test = useRef();
  return (
    <NavBlock>
      <div className="nav">
        <NavLink to="/" className="item" exact activeClassName="underline">
          Home
        </NavLink>
        <NavLink to="/tech" className="item" activeClassName="underline">
          Tech
        </NavLink>
        <NavLink to="/life" className="item" activeClassName="underline">
          Life
        </NavLink>
        <NavLink to="/about" className="item" activeClassName="underline">
          About
        </NavLink>
        <NavLink to="/more" className="item" activeClassName="underline">
          More
        </NavLink>
      </div>
    </NavBlock>
  );
};

export default Nav;
