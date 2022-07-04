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
                    onSearch={props.onSearch}
                />
                <div className="list_style"></div>
                <div className="feed-list__items">
                    { props.feed && !props.loading ?  props.feed.map(item => (
                        <Card item={item} loading/>             
                    )) : <p>Loading...</p>}
                </div>
            </div>
        </div>
        
    );
}

const mapDispatchToProps = dispatch => {
    return {
        setFeed: () => dispatch(fetchFeed()),
        onSearch: (search) => dispatch(searchResource(search))
    }
}
const mapStateToProps = state => {
    return {
        feed: state.feed.resources,
        loading: state.feed.loading,
        
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Resources);
