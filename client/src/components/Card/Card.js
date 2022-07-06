import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
export default function Card(props) {
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
                    <div className='likes'>
                        <div className="likes-icon">
                            <FontAwesomeIcon icon={faHeart} color="white" />
                        </div>
                        <p>233 likes</p>
                    </div>
                    <p className="feed-list__item-field">{props.item.field}</p>
                </Fragment>
        </div>
    )
}
