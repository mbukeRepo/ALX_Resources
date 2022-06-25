import "./NavList.css"
import {Link} from "react-router-dom";

const NavList = props => {
    
    return (
        <ul className="main-nav__list">
            {props.isAuth ?
                <li className="main-nav__list-item add">
                    <Link to="/add">+</Link>
                </li>
                : null
            } 
        </ul>
    );
}
export default NavList;