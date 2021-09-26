import React from "react";
import styled from "styled-components";
const MainContentStyle = styled("main")`
  width: calc(100% - 300px);
  min-height: 100vh;
  transform: translateX(300px);
  position: relative;
`;
const Lines = styled("section")`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 100%;
  display: flex;
  justify-content: space-evenly;
`;
const Line = styled("div")`
  width: 1px;
  min-height: 100%;
  background-color: var(--bgGrey);
  opacity: 0.2;
`;
const MainContent = () => {
  return (
    <MainContentStyle>
      <Lines>
        <Line />
        <Line />
        <Line />
        <Line />
      </Lines>
    </MainContentStyle>
  );
};

export default MainContent;
