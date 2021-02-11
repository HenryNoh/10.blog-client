import React from "react";
import styled from "styled-components";

const ListBlock = styled.div`
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

const List = ({ lists }) => {
  return (
    <ListBlock>
      {lists.map((list) => (
        <div className="item" key={list.id}>
          <div className="image"></div>
          <div className="content">
            <div className="title">{list.title}</div>
            <div className="text">{list.text}</div>
            <div className="date">date test</div>
          </div>
          <div className="etc">etc test</div>
        </div>
      ))}
    </ListBlock>
  );
};

export default List;
