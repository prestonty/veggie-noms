/* eslint-disable import/first */

import './App.css';
import PlanOverview from '../pages/plan_overview.js';
import About from '../pages/about.js';;
import Home from '../pages/home.js';
import Profile from '../pages/profile.js';
import Navigation from './navigation.js';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Profile></Profile>
    </div>
  );
}

export default App;
