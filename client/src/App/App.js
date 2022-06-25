import MainNav from "../components/Nav/MainNav";
import Logo from "../components/Nav/Logo";
import NavList from '../components/Nav/NavList';
import { Switch, Route } from "react-router-dom";
import AddFeed from "../pages/ADD-Page";
import FeedList from "../pages/FEED-LIST";
import SingleFeed from "../pages/SINGLE-FEED";
import Auth from "../components/Auth/Auth"
import "./App.css"
import { useEffect } from "react";
import { connect } from "react-redux";
import {authenticate} from "../actions/authActionCreators"
const App = (props) => {
    useEffect(() => {
        props.authenticate();
    }, []);
    return (
        <div className="app-main__layout">
            {props.isAuth ? null : <Auth/>}
            <MainNav>
                <Logo/>
                <NavList 
                    userName={props.user?.username} 
                    photo= {props.user?.photos[0].value}
                    isAuth = {props.isAuth}
                />
            </MainNav>
            <main >
                <Switch>
                    <Route path="/add" component={AddFeed} exact/>
                    <Route path="/feed" component={FeedList}/>
                    <Route path="/:id" component={SingleFeed} exact/>
                    
                    <Route path="/" component={FeedList} exact/>
                </Switch>
            </main>
        </div>
    );
}
const mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        user: state.auth.user
    }
}
const mapDispatchToProps = dispatch => {
    return {
        authenticate: () => dispatch(authenticate())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
