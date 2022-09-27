import React from "react";
import styled from "styled-components";

const Spinner = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #ffffffb7;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const LoadingText = styled.div`
  text-align: center;
`;

export const Loading = () => {
  return (
    <Spinner>
      <LoadingText>Now Loading...</LoadingText>
      <img
        className="loading"
        src="https://thumbs.gfycat.com/ConventionalOblongFairybluebird-size_restricted.gif"
        alt="loading"
        width="45"
      />
    </Spinner>
  );
};
