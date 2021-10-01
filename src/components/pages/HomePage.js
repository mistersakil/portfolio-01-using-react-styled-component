import React, { useEffect } from "react";
import styled from "styled-components";
import Particle from "../Particle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import social_links from "../data/social_links.json";
import particle_options from "../data/home_particles.json";
import {
  faGithub,
  faTwitter,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
const HomeStyle = styled("section")`
  position: relative;
  width: 100%;
  height: 100vh;
  padding: 2rem;
`;
const HomeContentStyle = styled("main")`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  z-index: 11;
  color: var(--colorSecondary);
  padding: 2rem;
  text-align: center;
  .heading {
    font-size: 3.4rem;
    font-weight: 600;
    text-transform: capitalize;
    font-family: "Oswald", sans-serif;
  }
  .heading {
    font-size: 6rem;
    font-weight: 700;
    text-transform: capitalize;
    font-family: "Oswald", sans-serif;
    color: var(--colorBrand);
  }
  .subHeading {
    font-size: 3rem;
    font-weight: 500;
    text-transform: capitalize;
    font-family: "Poppins", sans-serif;
  }
  .info {
    padding: 0 20%;
    line-height: 2.8rem;
    font-weight: 400;
    letter-spacing: 1px;
    color: var(--colorGrey);
  }
  .icons {
    display: flex;
    gap: 0 2rem;
    .link {
      width: 5rem;
      height: 5rem;
      line-height: 5.4rem;
      text-align: center;
      display: inline-block;
      border: 1px solid grey;
      border-radius: 50%;
      transition: all 0.3s linear;
      &:hover {
        box-shadow: 0 0 10px var(--bgBrand);
        border-color: var(--bgBrand);
        .icon {
          color: var(--colorBrand);
        }
      }
      .icon {
        font-size: 2.4rem;
        color: var(--colorSecondary);
        transition: all 0.4s linear;
      }
    }
  }
`;
const HomePage = () => {
  useEffect(() => {
    document.title = `Home - ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <HomeStyle>
      <Particle options={particle_options} />
      <HomeContentStyle>
        <h1 className="subHeading">
          Hi, I'm <span>sakil jomadder</span>
        </h1>
        <h2 className="heading">frontend web developer</h2>
        <p className="info">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum quos
          in repudiandae amet sit eos! Consequatur labore ut aspernatur illo,
          voluptatum ad veritatis libero mollitia eos modi amet repellendus. Ad.
        </p>
        <aside className="icons">
          <Link
            to={{ pathname: social_links.github }}
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faGithub} />
          </Link>
          <Link
            to={{ pathname: social_links.linkedin }}
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faLinkedinIn} />
          </Link>
          <Link
            to={{ pathname: social_links.facebook }}
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faFacebookF} />
          </Link>
          <Link
            to={{ pathname: social_links.twitter }}
            className="link"
            target="_blank"
          >
            <FontAwesomeIcon className="icon" icon={faTwitter} />
          </Link>
        </aside>
      </HomeContentStyle>
    </HomeStyle>
  );
};

export default HomePage;
