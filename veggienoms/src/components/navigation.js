import '../styles/navigation.css';
import TitleLogo from "../assets/logos/title.png";
import About from "../assets/logos/about.png";

function Navigation(){
return(
    <div class="bar">
        <div class="leftheader">
            <img src={TitleLogo} />
        </div>
        <div class="rightheader">
        <img class="button" src={About} />
        </div>
    </div>
);
}

export default Navigation;