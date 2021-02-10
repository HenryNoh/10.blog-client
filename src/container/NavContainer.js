import React from "react";
import styled from "styled-components";
import Nav from "../component/Nav";

const NavWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff !important;

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 64px;
    margin: 0 16px 0 16px;
    border-radius: 0 0 30px 0;
  }
`;

const NavContainer = () => {
  return (
    <NavWrapper>
      <Nav></Nav>
    </NavWrapper>
  );
};

export default NavContainer;
