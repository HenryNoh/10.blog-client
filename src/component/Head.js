import React from "react";
import styled from "styled-components";

const HeadBlock = styled.div`
  @media (max-width: 1080px) {
    display: flex;
    justify-content: space-between;
  }
`;

const Head = () => {
  return (
    <HeadBlock>
      <div className="left">
        <div className="logo">logo</div>
        <div className="title">title</div>
      </div>
      <div className="right">
        <div className="search">search</div>
        <div className="login">login</div>
      </div>
    </HeadBlock>
  );
};

export default Head;
