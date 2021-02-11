import React from "react";
import styled from "styled-components";
import List from "../component/List";
const TechWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: #fff;

  @media (max-width: 1080px) {
    width: calc(100% - 32px);
    height: 100%;
    margin: 0 16px 0 16px;
  }
`;
const lists = [
  {
    id: 1,
    title: "tech title1",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  reListing essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages,  and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum",
    section: "tech",
  },
  {
    id: 2,
    title: "tech title2",
    text:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of typeand scrambled it to make a type specimen book. It has survived not  only five centuries, but also the leap into electronic typesetting,  reListing essentially unchanged. It was popularised in the 1960s  with the release of Letraset sheets containing Lorem Ipsum passages,  and more recently with desktop publishing software like AldusPageMaker including versions of Lorem Ipsum",
    section: "tech",
  },
];
const TechContainer = () => {
  return (
    <TechWrapper>
      <List lists={lists} />
    </TechWrapper>
  );
};

export default TechContainer;
