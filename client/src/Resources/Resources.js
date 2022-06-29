import { useEffect } from "react";
import "./Resources.css";
import {connect} from "react-redux";
import {fetchFeed, searchResource} from '../actions/feedActionCreators';
import Search from "../Search/Search";
import Card from "../components/Card/Card";
const Resources = (props) => {
    useEffect(() => {
       props.setFeed();
    }, []);
    return (
        <div className="container">
            
            <div className="feed-list">
                <Search
                    search={props.search}
                />
                <div className="list_style"></div>
                <div className="feed-list__items">
                    { props.feed ?  props.feed.map(item => (
                        <Card item={item}/>             
                    )) : null}
                </div>
            </div>
        </div>
        
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setFeed: () => dispatch(fetchFeed()),
        search: (text) => dispatch(searchResource(text))
    }
}
const mapStateToProps = state => {
    return {
        feed: state.feed.resources
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Resources);
