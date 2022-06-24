import "./MainNav.css";
const MainNav = props => {
    return (
        <div className="main-nav__container">
            {props.children}
        </div>
    );
}
export default MainNav;