import { useEffect, useState } from "react";
import "./FEED-LIST.css"
import Search from "../components/SearchBox/Search";
import {Link} from "react-router-dom";
import axios from "../utils/axios"

const FeedList = () => {
    const [feed, setFeed] = useState([]);
    useEffect( async () => {
        const feed = await axios.get("/resources", {
            withCredentials: true
        });
        setFeed(feed["data"]);
    }, [feed]);
    return (
        <div className="container">
            <div className="feed-list">
                <div className="feed-list__items">
                    { feed ?  feed.map(item => (
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

export default FeedList;
