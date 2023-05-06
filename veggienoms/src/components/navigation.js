import '../styles/navigation.css';
import TitleLogo from "../assets/logos/title.png";
import Profile from "../assets/logos/profile.png";

function Navigation(){
return(
    <div class="bar">
        <div class="leftheader">
            <img src={TitleLogo} />
        </div>
        <div class="rightheader">
        <img class="button" src={Profile} />
        </div>
    </div>
);
}

export default Navigation;