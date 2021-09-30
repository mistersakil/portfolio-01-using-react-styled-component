import React, { Component } from "react";
import Particles from "react-tsparticles";
import particles_config from "./data/particles_config.json";
import styled from "styled-components";

const ParticlesStyle = styled("div")`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  .particleHome {
    width: 100%;
    height: 100%;
`;

class Particle extends Component {
  constructor(props) {
    super(props);

    this.particlesInit = this.particlesInit.bind(this);
    this.particlesLoaded = this.particlesLoaded.bind(this);
  }

  particlesInit(main) {}

  particlesLoaded(container) {}

  render() {
    return (
      <ParticlesStyle>
        <Particles
          className="particleHome"
          id="tsparticles"
          init={this.particlesInit}
          loaded={this.particlesLoaded}
          options={particles_config}
        />
      </ParticlesStyle>
    );
  }
}

export default Particle;
