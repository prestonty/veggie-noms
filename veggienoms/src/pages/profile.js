import '../styles/profile.css';
import React from "react";
import ProfileIcon from "../assets/logos/profile.png";
import Submit from "../assets/buttons/submit.png";

function Profile() {
  return (
    <div>
    <div class="inline left-alignment">
        <img class="splash" src={ProfileIcon} />
    </div>
    <div class="inline">
    <h1 class="inline green top-text right-alignment">about you</h1>
    <div class="inline">
    <h2 class="dark">height (in)</h2>
    <input type="text" min="0" max="96"/>
    <h2 class="dark">weight (lbs)</h2>
    <input type="text" min="0" max="600"/>
    </div>
    <div class="inline right-alignment float-right less-top-text">
    <h2 class="dark">age</h2>
    <input type="text" min="0" max="120"/>
    <h2 class="dark">gender</h2>
    <input type="checkbox" id="genderCheckbox"></input>
    <label for="genderCheckbox"></label>
    </div>
    <img class="button" src={Submit}></img>
    </div>
    </div>
  );
}

export default Profile;