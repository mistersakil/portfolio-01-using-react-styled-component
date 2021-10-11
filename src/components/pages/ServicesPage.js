import React, { useEffect } from "react";
import styled from "styled-components";
import PageHeading from "../styles/PageHeading";
import Layout from "../styles/Layout";
import Particle from "../Particle";
import particle_options from "../data/services_particles.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import cards from "../data/card_services.json";

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
      height: 30rem;
      text-align: center;
      background: var(--bgGreyDark);
      padding: 2rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-evenly;
      color: var(--colorSecondary);
      border-top: 0.5rem solid var(--bgGrey);
      transition: all 0.4s linear;
      .icon {
        color: var(--colorBrand);
        font-size: 5rem;
      }
      .cardTitle {
        font-size: 2.4rem;
        text-transform: capitalize;
        font-weight: 700;
        position: relative;
        &::after {
          content: "";
          position: absolute;
          left: 50%;
          top: 115%;
          transform: translateX(-50%);
          width: 50px;
          height: 2px;
          background-color: var(--bgBrand);
        }
      }
      .cardInfo {
        color: var(--colorGreyLight);
        height: 10rem;
        overflow: hidden;
        line-height: 2rem;
      }
      &:hover {
        border-color: var(--colorBrand);
        transform: translateY(3px);
      }
    }
  }
`;
const Card = ({ icon, title, info }) => {
  return (
    <div className="col">
      <FontAwesomeIcon className="icon" icon={icon} />
      <h2 className="cardTitle">{title}</h2>
      <p className="cardInfo">{info}</p>
    </div>
  );
};
const ServicesPage = () => {
  const PAGE_HEADING = "Our Services";

  useEffect(() => {
    document.title = `${PAGE_HEADING} - ${process.env.REACT_APP_PROJECT_NAME}`;
  }, []);
  return (
    <Layout>
      <Particle options={particle_options} />
      <ServicesPageStyle>
        <PageHeading>{PAGE_HEADING}</PageHeading>
        <div className="row">
          {cards.map((card, index) => (
            <Card key={index} {...card} />
          ))}
        </div>
      </ServicesPageStyle>
    </Layout>
  );
};

export default ServicesPage;
