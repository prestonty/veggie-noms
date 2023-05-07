import "../styles/profile.css";
import React, { useState } from "react";
import ProfileIcon from "../assets/logos/profile.png";
import Submit from "../assets/buttons/submit.png";
import { calsBurn } from "./localAlgor.js";

function Profile() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState(true);
  var data = "";

  var cal;
  const handleSubmit = (event) => {
    event.preventDefault();
    cal = calsBurn(weight, height, age, sex);
    console.log(
      "Based on your information, you burn " + cal + " calories per day."
    );
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };

  const handleSexChange = (event) => {
    setSex(!sex);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div class="inline left-alignment">
          <img class="splash" src={ProfileIcon} />
        </div>
        <div class="inline">
          <h1 class="inline green top-text right-alignment">about you</h1>
          <div class="inline">
            <h2 class="dark">height (in)</h2>
            <input
              type="text"
              name="height"
              value={height}
              onChange={handleHeightChange}
              min="0"
              max="96"
            />
            <h2 class="dark">weight (lbs)</h2>
            <input
              type="text"
              name="weight"
              value={weight}
              onChange={handleWeightChange}
              min="0"
              max="600"
            />
          </div>
          <div class="inline right-alignment float-right less-top-text">
            <h2 class="dark">age</h2>
            <input
              type="text"
              name="age"
              value={age}
              onChange={handleAgeChange}
              min="0"
              max="120"
            />
            <h2 class="dark">gender</h2>
            <input
              type="checkbox"
              id="genderCheckbox"
              name="sex"
              value={sex}
              onChange={handleSexChange}
            />
            <label for="genderCheckbox"></label>
          </div>
          <input type="submit" class="button" value="Submit"></input>
        </div>
        <h2>{data}</h2>
      </div>
    </form>
  );
}

export default Profile;
