import "./NavList.css"
import {Link} from "react-router-dom";
import {Fragment} from "react"

const NavList = props => {
    return (
        <ul className="main-nav__list">
            {props.isAuth ?
                <li className="main-nav__list-item add">
                    <Link to="/add">+</Link>
                </li>
                
                : null
            } 
            <li className="main-nav__list-item avatar">
                {props.isAuth ? 
                    <Fragment>
                        <div className="user-avatar">
                            <img src={props.photo} alt="" srcset="" />
                        </div>
                        <p>{props.userName}</p>
                    </Fragment>
                    
                    : null
                }
                    
                    
            </li>
        </ul>
    );
}
export default NavList;