import MainNav from "../components/Nav/MainNav";
import Logo from "../components/Nav/Logo";
import NavList from '../components/Nav/NavList';
import { Switch, Route } from "react-router-dom";
import Auth from "../components/Auth/Auth"
import "./App.css"
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import {authenticate} from "../actions/authActionCreators";
import {fetchFeed} from "../actions/feedActionCreators"
import Resource from "../Resource/Resource";
import Resources from "../Resources/Resources";
import Add from "../Add/Add";
import Search from "../Search/Search";

const App = (props) => {
    const [show, setShow] = useState(true);
    const [search, setSearch] = useState(false);
    const [page, setPage] = useState(2);
    useEffect(() => {
        props.authenticate();
    }, []);
    const onSearch = (search) => {
        props.setFeed(search, page);
        setSearch(true);
    }
    const loadMore = () => {
        console.log("loading more");
        if (Math.ceil((props.pages) + 0) >= page)
            setPage(_page => _page + 1);

        props.setFeed(null, page);
    }
    return (
        <div className="app-main__layout">
            {props.isAuth || !show ? null : <Auth setShow={() => setShow(false)}/>}
            <MainNav>
                <Logo/>
                <Search
                    onSearch={onSearch}
                    search={search}
                    loadMore = {loadMore}
                    page={page}
                />
                <NavList 
                    userName={props.user?.username} 
                    photo= {props.user?.photos[0].value}
                    isAuth = {props.isAuth}
                />
            </MainNav>
            <main >
                <Switch>
                    <Route path="/add" component={Add} exact/>
                    <Route path="/feed" component={Resources}/>
                    <Route path="/:id" component={Resource} exact/>
                    
                    <Route path="/" component={Resources} exact/>
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
        authenticate: () => dispatch(authenticate()),
        setFeed: (search, page) => dispatch(fetchFeed(search, page)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
