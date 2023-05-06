import '../styles/navigation.css';
import TitleLogo from "../assets/logos/title.png";

function Navigation(){
return(
    <div class="bar">
        <div class="leftheader">
            <img src={TitleLogo} />
        </div>
    </div>
);
}

export default Navigation;