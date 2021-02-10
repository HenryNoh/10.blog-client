import React from "react";
import styled from "styled-components";
import Main from "../component/Main";
const MainWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff !important;

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 16px 0 16px;
  }
`;

const MainContainer = () => {
  return (
    <MainWrapper>
      <Main />
    </MainWrapper>
  );
};

export default MainContainer;
