import React, { useEffect } from "react";
import styled from "styled-components";
import PageHeading from "../styles/PageHeading";
import Layout from "../styles/Layout";
import Particle from "../Particle";
import particle_options from "../data/services_particles.json";

import jsonData from "../data/blogs.js";

const ServicesPageStyle = styled("section")`
  position: relative;
  width: 100%;
  z-index: 11;
  .row {
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    .col {
      flex: 1 1 30%;
      height: 40rem;
      background: var(--bgGrey);
      color: var(--colorSecondary);
      padding: 1rem;
      transition: all 0.4s linear;
      .figure {
        width: 100%;
        height: 70%;
        overflow: hidden;
        .img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: skewX(-30deg) scale(1.5);
          transition: all 0.4s linear;
        }
      }
      .cardTitle {
        text-transform: capitalize;
        font-weight: 700;
        position: relative;
        font-size: 2rem;
        color: var(--colorGreyLight);
        padding-top: 2rem;
        display: block;
      }

      &:hover {
        background: var(--bgGreyDark);

        .figure .img {
          transform: skewX(0deg) scale(1);
        }
      }
    }
  }
`;
const Card = ({ img, title, url }) => {
  return (
    <div className="col">
      <div className="figure">
        <img className="img" src={img} alt={img} />
      </div>
      <a href={url} className="cardTitle" target="_blank" rel="noreferrer">
        {title}
      </a>
    </div>
  );
};
const ServicesPage = () => {
  const PAGE_HEADING = "Latest Blogs";

  useEffect(() => {
    document.title = `${PAGE_HEADING} - ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <Layout>
      <Particle options={particle_options} />
      <ServicesPageStyle>
        <PageHeading>{PAGE_HEADING}</PageHeading>
        <div className="row">
          {jsonData.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </ServicesPageStyle>
    </Layout>
  );
};

export default ServicesPage;
