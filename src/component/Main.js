import React from "react";
import styled from "styled-components";

const MainBlock = styled.div`
  @media (max-width: 1080px) {
    .item {
      margin-top: 20px;
      height: 400px;
      border: 1px solid black;
      border-radius: 5px;
      .image {
        width: 100%;
        height: 50%;
        border-bottom: 1px solid #ccc;
      }
      .content {
        width: calc(100% - 32px);
        height: calc(40% - 32px);
        padding: 16px;
        border-bottom: 1px solid #ccc;
        .title {
          width: 100%;
          line-height: 24px;
          font-size: 24px;
          margin-bottom: 4px;
          font-weight: 700;
        }
        .text {
          display: -webkit-box;
          width: 100%;
          height: calc(100% - 68px);
          margin-bottom: 24px;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          //   word-break: break-word;
          //   overflow-wrap: break-word;
          //   white-space: nowrap;
        }
        .date {
          width: 100%;
          height: calc(100% - 112px);
          margin-bottom: 4px;
          font-size: 12px;
        }
      }
      .etc {
        width: calc(100% - 32px);
        height: calc(10% - 20px);
        padding: 10px 16px;
      }
    }
  }
`;

const Main = () => {
  return (
    <MainBlock>
      <div className="item">
        <div className="image"></div>
        <div className="content">
          <div className="title">title test</div>
          <div className="text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
          <div className="date">date test</div>
        </div>
        <div className="etc">etc test</div>
      </div>
      <div className="item">
        <div className="image"></div>
        <div className="content">
          <div className="title">title test</div>
          <div className="text">
            Praesent eget egestas sapien. Ut maximus magna enim, eget accumsan
            nulla sollicitudin id. Nam mi eros, fermentum non bibendum eu,
            tristique et tortor. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Donec tristique eros eget venenatis aliquet. Nulla
            ac faucibus arcu. Nulla sit amet pellentesque diam. Fusce ligula
            massa, placerat vel nibh vel, hendrerit laoreet augue. Cras volutpat
            urna et lorem blandit, a vulputate leo euismod. Aenean lobortis,
            nisl efficitur vehicula auctor, sapien ante accumsan turpis, quis
            viverra mauris sem nec libero. Fusce quis pellentesque dui. Morbi
            nisi orci, molestie vitae sapien nec, lacinia rutrum lectus.
          </div>
          <div className="date">date test</div>
        </div>
        <div className="etc">etc test</div>
      </div>
    </MainBlock>
  );
};

export default Main;
