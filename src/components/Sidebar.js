import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
const SidebarStyle = styled.section`
  position: fixed;
  top: 0;
  width: 300px;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bgGreyDark);
`;
const Sidebar = () => {
  return (
    <SidebarStyle>
      <Navbar />
    </SidebarStyle>
  );
};

export default Sidebar;
