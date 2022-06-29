import React from 'react';
import {Link} from "react-router-dom";
import "./Card.css"

export default function Card(props) {
  return (
            <div className="feed-list__item" key={props.item._id}>
                <Link to={"/" + props.item._id}>
                    <p className="feed-list__item-title">{props.item.title}</p>
                    <a className="owner" href='google.com'>
                        <div className="owner-avatar"></div>
                        <p className="owner-name">Mbuke Prince</p>
                    </a>
                    <p className="feed-list__item-field">{props.item.field}</p>
                </Link>
            </div>
    )
}
