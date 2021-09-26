import React from "react";
import styled from "styled-components";
const ApplicationStyle = styled("main")`
  position: relative;
`;
const Application = ({ children }) => {
  return <ApplicationStyle>{children}</ApplicationStyle>;
};

export default Application;
