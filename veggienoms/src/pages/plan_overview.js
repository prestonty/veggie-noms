import '../styles/plan.css';
import Lose from "../assets/buttons/options/lose.png";
import Maintain from "../assets/buttons/options/maintain.png";
import Gain from "../assets/buttons/options/gain.png";

function PlanOverview(){
    return(
        <div>
        <div class="button-container">
            <img class="option clickable" src={Lose}></img>
            <h3 class="orange"><br/>1500<br/>calories<br/><br/>c:206g<br/>f:33g<br/>p:94g</h3>
            <img class="option clickable" src={Maintain}></img>
            <h3 class="orange"><br/>2000<br/>calories<br/><br/>c:250g<br/>f:44g<br/>p:150g</h3>
            <img class="option clickable" src={Gain}></img>
            <h3 class="orange"><br/>2500<br/>calories<br/><br/>c:344g<br/>f:56g<br/>p:156g</h3>
  </div>
  <h2 class="green">select a plan</h2>
  </div>
    );
}

export default PlanOverview