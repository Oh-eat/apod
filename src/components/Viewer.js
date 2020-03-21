import React from "react";
import styled from "styled-components";
import { centeredFlex } from "../lib/css";

const ViewerBlock = styled.div`
  ${centeredFlex}
  flex-direction: column;
  width: 100%;
  height: 100%;

  .date {
    margin: 1rem;
    padding: 0rem;
    height: 2rem;

    h3 {
      margin: 0;
      padding: 0;
    }
  }

  .content {
    ${centeredFlex}
    width: calc(100% - 4rem);
    height: calc(100% - 8rem);

    img,
    iframe {
      max-height: calc(100%);
      max-width: calc(100%);
      z-index: 30;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    }
  }
`;

const Viewer = ({ date, content, loading }) => {
  return (
    <ViewerBlock>
      <div className="date">
        <h3>{date.toLocaleDateString()}</h3>
      </div>
      <div className="content">
        {loading && <h3>Loading...</h3>}
        {!loading && content}
      </div>
    </ViewerBlock>
  );
};

export default Viewer;
