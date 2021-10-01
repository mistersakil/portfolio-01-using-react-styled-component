import React from "react";
import styled from "styled-components";
const LayoutStyle = styled("div")`
  position: relative;
  padding: 5rem;
`;
const Layout = ({ children }) => {
  return <LayoutStyle>{children}</LayoutStyle>;
};

export default Layout;
