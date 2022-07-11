import { useEffect } from "react";
import "./Resources.css";
import { connect } from "react-redux";
import {fetchFeed} from "../actions/feedActionCreators"
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";

const Resources = (props) => {
    
    
    useEffect(() => {
        if (props.location.search) {
            if (props.feed.length !== 0) {
                return;
            } else {
                props.setFeed();
            }
        }

        else {
            props.setFeed();
        }
    }, []);
    console.log(props.pages);
    
    return (
        <div className="container">

            <div className="feed-list">
                
                <div className="list_style"></div>
                <div className="feed-list__items">
                    {props.feed && !props.loading ? props.feed.map(item => (
                        <Card item={item} loading key={item?._id} />
                    )) : <Loading />}
                </div>
                <div className="loader" onClick={props.loadMore}>
                    <h2>Load More</h2>
                </div>
                
            </div>
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        setFeed: (search, page) => dispatch(fetchFeed(search, page)),
    }
}
const mapStateToProps = state => {
    return {
        feed: state.feed.resources,
        loading: state.feed.loading,
        pages: state.feed.pages,
        search: state.feed.search
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resources);
