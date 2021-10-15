import React, { useEffect } from "react";
import styled from "styled-components";
import Button from "../Button";
import Layout from "../styles/Layout";

const NotFoundStyle = styled("section")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  color: var(--colorBrand);
  font-size: 5rem;
  position: absolute;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  p {
    font-size: 2rem;
    color: var(--colorGrey);
  }
`;
const NotFound = () => {
  const PAGE_HEADING = "404 : Not Found";
  useEffect(() => {
    document.title = `${PAGE_HEADING}- ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <Layout>
      <NotFoundStyle>
        <h1>404 : Not Found</h1>
        <p>Sorry, the page you are looking for, not found. Please go back</p>
        <Button
          value="Home"
          as="a"
          href="/"
          textTransform="capitalize"
          bg="bgGreyDark"
          color="colorSecondary"
        />
      </NotFoundStyle>
    </Layout>
  );
};

export default NotFound;
