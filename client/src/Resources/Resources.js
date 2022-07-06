import { useEffect, useState } from "react";
import "./Resources.css";
import {connect} from "react-redux";
import {fetchFeed} from '../actions/feedActionCreators';
import Search from "../Search/Search";
import Card from "../components/Card/Card";

const Resources = (props) => {
    const [page, setPage] = useState(2);
    const [search, setSearch] = useState(false);
    useEffect(() => {
        props.setFeed();
    }, []);
    const loadMore = () => {
        if (Math.ceil((props.pages) + 0) >= page)
            setPage(_page => _page + 1);

        props.setFeed(null,page);
    }
    const onSearch = (search) => {
        props.setFeed(search, page);
        setSearch(true);
    } 
    return (
        <div className="container">
            
            <div className="feed-list">
                <Search
                    onSearch={onSearch}
                />
                <div className="list_style"></div>
                <div className="feed-list__items">
                    { props.feed && !props.loading ?  props.feed.map(item => (
                        <Card item={item} loading key={item._id}/>
                    )) : <p>Loading...</p>}
                </div>
                {
                   ((Math.ceil(props.pages+0) >= page)) ?
                    !search ? (
                        <div className="loader" onClick={loadMore}>
                            <h2>Load More</h2>
                        </div>
                    ): null
                    : null
                }
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

export default connect(mapStateToProps,mapDispatchToProps)(Resources);
