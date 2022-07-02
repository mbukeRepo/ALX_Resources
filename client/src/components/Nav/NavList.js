import "./NavList.css"
import {Link} from "react-router-dom";
import {Fragment} from "react"

const NavList = props => {
    return (
        <ul className="main-nav__list">
            {props.isAuth ?
            <Fragment>
                <li className="main-nav__list-item add">
                    <Link to="/add">+</Link>
                </li>
                <li className="main-nav__list-item avatar">
                    <div className="user-avatar">
                        <img src={props.photo} alt="" srcset="" />
                    </div>
                    <p>{props.userName}</p>
                </li>
            </Fragment>
                : null
            } 
            
                
               
        </ul>
    );
}
export default NavList;