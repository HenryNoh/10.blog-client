import React from "react";
import styled from "styled-components";
const MoreWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 16px 0 16px;
  }
`;

const MoreContainer = () => {
  return (
    <MoreWrapper>
      <div>This is More Page</div>
    </MoreWrapper>
  );
};

export default MoreContainer;
