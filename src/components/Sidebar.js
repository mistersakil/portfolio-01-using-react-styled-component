import React from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import imgAvatar from "../images/avatar.jpeg";
const SidebarStyle = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  top: 0;
  width: 30rem;
  height: 100vh;
  overflow: hidden;
  background-color: var(--bgGreyDark);
`;
const Avatar = styled.figure`
  position: relative;
  width: 20rem;
  height: 20rem;

  top: 2rem;

  border-radius: 50%;
  background-color: var(--bgSecondary);
  border: 1px solid var(--bgGrey);
  overflow: hidden;
`;
const Image = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
`;
const Sidebar = () => {
  return (
    <SidebarStyle>
      <Avatar>
        <Image src={imgAvatar} />
      </Avatar>
      <Navbar></Navbar>
    </SidebarStyle>
  );
};

export default Sidebar;
