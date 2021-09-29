import React, { Component } from "react";
import Particles from "react-tsparticles";
import particles_config from "./data/particles_config.json";

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
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={particles_config}
      />
    );
  }
}

export default Particle;
