import React from "react";
import styled from "styled-components";

const NavBlock = styled.div`
  @media (max-width: 1080px) {
    .nav {
      margin-top: 20px;
    }
  }
`;

const Nav = () => {
  return (
    <NavBlock>
      <div className="nav">nav test</div>
    </NavBlock>
  );
};

export default Nav;
