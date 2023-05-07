/* eslint-disable import/first */

import "./App.css";
// require("./App.css");
import PlanOverview from "../pages/plan_overview.js";
import About from "../pages/about.js";
import Home from "../pages/home.js";
import Profile from "../pages/profile.js";
import Navigation from "./navigation.js";
import { meal } from "../pages/meal.js";
// const { MongoClient } = require("mongodb");

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <About></About>
      <Profile></Profile>
      {/* {(user = meal())}
      <h2>
        {user.name}: a {user.age} years old {user.sex}.
      </h2>
      <h2>
        Weighs {user.weight} kg and has a height of {user.height}.
      </h2> */}
    </div>
  );
}

export default App;
