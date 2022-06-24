import "./NavList.css"
import {Link} from "react-router-dom"
const NavList = props => {
    return (
        <ul className="main-nav__list">
            <li className="main-nav__list-item" style={{marginRight: '25px'}}>
                <Link to="/feed">Resources</Link>
            </li>
            <li className="main-nav__list-item add">
                <Link to="/add">+</Link>
            </li>
        </ul>
    );
}
export default NavList;