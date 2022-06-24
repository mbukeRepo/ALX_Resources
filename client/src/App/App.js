import MainNav from "../components/Nav/MainNav";
import Logo from "../components/Nav/Logo";
import NavList from '../components/Nav/NavList';
import { Switch, Route } from "react-router-dom";
import AddFeed from "../pages/ADD-Page";
import FeedList from "../pages/FEED-LIST";
import SingleFeed from "../pages/SINGLE-FEED";
import Auth from "../components/Auth/Auth"
import "./App.css"
const App = () => {
return (
    <div className="app-main__layout">
        <Auth/>
        <MainNav>
            <Logo/>
            <NavList/>
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

export default App;
