import {  useState } from "react";
import "./Resources.css";
import { connect } from "react-redux";
import {fetchFeed, clearFeed} from "../actions/feedActionCreators";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";
import { useEffect } from "react";


const Resources = (props) => {
    
    const [page, setPage] = useState(2);
    const {setFeed, clearFeed, feed} = props;
    const initialFetch = () => {
        if (feed.length !== 0) {
            return ;
        }
        else {
            setFeed(undefined, 1);
        }
        return () => {
            console.log("hello world");
            clearFeed();
        }
    }
    useEffect(() => {
        initialFetch();
        return () => {
            clearFeed();
        }
    }, [])

    const loadMore = (e) => {
        if (Math.ceil((props.pages) + 0) >= page){
            console.log("Firing");
            setPage(_page => _page + 1);
        }
        props.setFeed(null, page);
        console.log(page);
    }
    
    return (
        <div className="container">

            <div className="feed-list">
                
                <div className="list_style"></div>
                <div className="feed-list__items">
                    {props.feed && !props.loading ? props.feed.map(item => (
                        <Card 
                            item={item} 
                            loading 
                            key={item?._id} 
                        />
                    )) : <Loading />}
                </div>
                {
                    !(Math.ceil((props.pages) + 0) <= page) ?
                        <div className="loader" onClick={loadMore}>
                            <h2>Load More</h2>
                        </div>
                    : null
                }
                
                
            </div>
        </div>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        setFeed: (search, page) => dispatch(fetchFeed(search, page)),
        clearFeed: () => dispatch(clearFeed())
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
