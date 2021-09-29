import React from "react";
import styled from "styled-components";
import Particle from "../Particle";
const HomeStyled = styled("section")`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  return (
    <HomeStyled>
      <Particle></Particle>
    </HomeStyled>
  );
};

export default Home;
