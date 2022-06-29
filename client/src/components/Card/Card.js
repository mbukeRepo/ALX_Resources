import React from 'react';
import {Link} from "react-router-dom";
import "./Card.css"

export default function Card(props) {
  return (
            <div className="feed-list__item" key={props.item._id}>
                    <Link to={"/" + props.item._id} className="feed-list__item-title">{props.item.title}</Link>
                    <div className="owner" href='google.com'>
                        <p>by</p>
                        <a target="_blank" className="owner-name" rel="noreferrer" href="https://google.com">Mbuke Prince</a>
                    </div>
                    <div className='likes'>
                        <div className="likes-icon"></div>
                        <p>233 likes</p>
                    </div>
                    <p className="feed-list__item-field">{props.item.field}</p>
            </div>
    )
}
