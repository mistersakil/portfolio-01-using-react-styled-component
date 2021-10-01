import React, { useEffect } from "react";
import styled from "styled-components";
import PageHeading from "../styles/PageHeading";
import Layout from "../styles/Layout";
import imgAbout from "../../images/about.jpg";
import Particle from "../Particle";
import particle_options from "../data/about_particles.json";
const AboutFeatureItemStyle = styled("article")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0.5rem 1rem;
  .title {
    flex: 1 1 15%;
  }
  .info {
    flex: 1 1 70%;
  }
`;
const AboutFeatureItem = ({ title, info }) => {
  return (
    <AboutFeatureItemStyle>
      <span className="title">{title}</span>
      <span className="info">: {info}</span>
    </AboutFeatureItemStyle>
  );
};
const AboutPageStyle = styled("section")`
  position: relative;
  z-index: 12;
  .row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 5rem;
    height: 60rem;
    overflow: hidden;
    .left {
      flex: 1 1 30%;
      .figure {
        width: 100%;
        height: 100%;
        padding: 1rem;
        background-color: var(--bgGrey);
        border-radius: 1rem;
        .img {
          width: 100%;
          height: 100%;
          border-radius: 1rem;
          object-fit: cover;
          object-position: center;
        }
      }
    }
    .right {
      flex: 1 1 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 2.5rem;
      text-transform: capitalize;
      color: var(--colorGreyLight);
      .name {
        font-size: 4rem;
        letter-spacing: 1px;
        span {
          color: var(--colorBrand);
        }
      }
      .designation {
        color: var(--colorGrey);
        opacity: 0.2;
        font-size: 3rem;
      }
      .bio {
        line-height: 2.5rem;
        letter-spacing: 0.5px;
      }
      .features {
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        font-family: "Poppins", sans-serif;
        letter-spacing: 1px;
      }
    }
  }
`;
const AboutPage = () => {
  useEffect(() => {
    document.title = `About Me - ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <Layout>
      <Particle options={particle_options} />
      <AboutPageStyle>
        <PageHeading>about me</PageHeading>
        <div className="row">
          <div className="left">
            <figure className="figure">
              <img src={imgAbout} alt="aboutMe" className="img" />
            </figure>
          </div>
          <div className="right">
            <h2 className="name">
              i'm <span>sakil</span>
            </h2>
            <h3 className="designation">frontend developer</h3>
            <p className="bio">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odio
              laborum quod omnis repudiandae praesentium at deleniti quidem nisi
              amet, iure nihil laudantium cumque error, dicta saepe
              necessitatibus eius eaque.
            </p>
            <div className="features">
              <AboutFeatureItem title="full name" info="sakil jomadder" />
              <AboutFeatureItem title="nationality" info="bangladeshi" />
              <AboutFeatureItem
                title="languages"
                info="bangla, english, hindi, urdu"
              />
              <AboutFeatureItem title="location" info="dhaka, bangladesh" />
              <AboutFeatureItem
                title="services"
                info="freelance web design and development"
              />
              <AboutFeatureItem title="degree" info="CSE" />
            </div>
          </div>
        </div>
      </AboutPageStyle>
    </Layout>
  );
};

export default AboutPage;
