import '../styles/home.css';
import Logo from "../assets/logos/logo.png";
import Splash from "../assets/logos/splash.png";
import Generate from "../assets/buttons/generate.png";
import Grass from "../assets/backgrounds/grass.png";

import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div class="home-alignment">
      <h1 class="green typewriter"> nom <br />nutritiously.</h1>
      <img class="splash" src={Splash} />
      <img class="button" src={Generate} />
    </div>
    </div>
  );
}

export default Home;