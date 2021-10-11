import React, { useEffect } from "react";
import styled from "styled-components";
import PageHeading from "../styles/PageHeading";
import Layout from "../styles/Layout";
import Particle from "../Particle";
import particle_options from "../data/services_particles.json";
import {
  faGlobe,
  faTools,
  faPaintBrush,
  faBoxOpen,
  faBullhorn,
  faScroll,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        transform: translateY(5px);
      }
    }
  }
`;
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
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faPaintBrush} />
            <h2 className="cardTitle">web design</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Laboriosam officiis harum temporibus commodi
              sunt, ut sed nam itaque ad dolorum quae facere recusandae, laborum
              quam hic quas fugiat voluptatem debitis.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faGlobe} />
            <h2 className="cardTitle">frontend web design</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faTools} />
            <h2 className="cardTitle">web development</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faBoxOpen} />
            <h2 className="cardTitle">logo design</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis.
            </p>
          </div>
          <div className="col">
            <FontAwesomeIcon className="icon" icon={faScroll} />
            <h2 className="cardTitle">banner design</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis.
            </p>
          </div>

          <div className="col">
            <FontAwesomeIcon className="icon" icon={faBullhorn} />
            <h2 className="cardTitle">digital marketing</h2>
            <p className="cardInfo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam officiis harum temporibus commodi sunt, ut sed nam
              itaque ad dolorum quae facere recusandae, laborum quam hic quas
              fugiat voluptatem debitis.
            </p>
          </div>
        </div>
      </ServicesPageStyle>
    </Layout>
  );
};

export default ServicesPage;
