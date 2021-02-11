import React from "react";
import styled from "styled-components";

const AboutBlock = styled.div`
  @media (max-width: 1080px) {
    .item {
      margin-top: 20px;
      height: 400px;
      border: 1px solid black;
      border-radius: 5px;
    }
  }
`;

const About = () => {
  return (
    <AboutBlock>
      <div className="item"></div>
    </AboutBlock>
  );
};

export default About;
