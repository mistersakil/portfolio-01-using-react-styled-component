import React from "react";
import styled from "styled-components";
import PageHeading from "../styles/PageHeading";
import Layout from "../styles/Layout";
const AboutPageStyle = styled("section")`
  position: relative;
`;
const AboutPage = () => {
  return (
    <Layout>
      <AboutPageStyle>
        <PageHeading>about me</PageHeading>
      </AboutPageStyle>
    </Layout>
  );
};

export default AboutPage;
