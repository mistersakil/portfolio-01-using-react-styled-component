import React from "react";
import styled from "styled-components";
const PageHeadingStyle = styled("h1")`
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  position: relative;
  color: var(--colorSecondary);
  padding-bottom: 1.2rem;
  margin-bottom: 7rem;
  font-family: "Oswald", sans-serif;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 10rem;
    height: 0.7rem;
    background-color: var(--bgBrand);
    border-radius: 1rem;
    z-index: 2;
    opacity: 0.3;
  }
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 100%;
    width: 6rem;
    height: 0.7rem;
    background-color: var(--bgBrand);
    border-radius: 1rem;
    z-index: 1;
  }
`;
const ShadowStyle = styled("span")`
  position: absolute;
  left: 0;
  top: 30%;
  font-weight: 400;
  font-size: 8rem;
  color: var(--colorGrey);
  opacity: 0.1;
`;

const PageHeading = ({ children }) => {
  return (
    <PageHeadingStyle>
      {children}
      <ShadowStyle>{children}</ShadowStyle>
    </PageHeadingStyle>
  );
};

export default PageHeading;
