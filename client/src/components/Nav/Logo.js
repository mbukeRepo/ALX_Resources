import "./Logo.css";
import {Link} from "react-router-dom"
const Logo = () => {
    return(
       <div className="logo-container">
           <Link to={"/"} className="logo-container__title">ALX_Resources</Link>
       </div> 
    );
}

export default Logo