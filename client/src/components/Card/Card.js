import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { saveFeed } from "../../actions/feedActionCreators";

function Card(props) {
    const saveFeed = () => {
        let feed = localStorage.getItem("feed")
        feed = JSON.parse(feed);
        const ids = feed.map(item => item._id);
        if (ids.includes(props.item._id))
            return;
        feed.push(props.item);
        props.saveFeed(props.item._id);
        localStorage.setItem("feed", JSON.stringify(feed));
    }
    return (
        <div className="feed-list__item" key={props.item._id}>
                <Fragment>
                    <Link to={"/" + props.item._id} className="feed-list__item-title">{props.item.title}</Link>
                    <div className="owner" href='google.com'>
                        <p>by</p>
                        <a target="_blank" 
                           className="owner-name" 
                           rel="noreferrer" 
                           href={props.item.owner?.github}
                        >{props.item.owner?.username}</a>
                    </div>
                    <div className='save' onClick={saveFeed}>
                        {props.item.saved ? 
                            <p>Saved</p> :
                            <React.Fragment>
                                <div className="save-icon">
                                    <FontAwesomeIcon icon={faStar} color="white" />
                                </div>
                                <p>save</p>
                            </React.Fragment>
                    }
                        
                    </div>
                    <p className="feed-list__item-field">{props.item.field}</p>
                </Fragment>
        </div>
    )
}
const mapDispatchToProps = dispatch => {
    return {
        saveFeed: (id) => dispatch(saveFeed(id))
    }
}
export default connect(null, mapDispatchToProps)(Card);