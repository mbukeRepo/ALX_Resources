import { useEffect } from "react";
import "./Resources.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {fetchFeed, searchResource} from '../actions/feedActionCreators'
const Resources = (props) => {
    useEffect(() => {
       props.setFeed();
    }, []);
    return (
        <div className="container">
            
            <div className="feed-list">
                <div className="feed-list__items">
                    { props.feed ?  props.feed.map(item => (
                        <div className="feed-list__item" key={item._id}>
                            <Link to={"/" + item._id}>
                                <p className="feed-list__item-title">{item.title}</p>
                                <p className="feed-list__item-field">{item.field}</p>
                            </Link>
                        </div>
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
