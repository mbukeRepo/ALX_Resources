import { useEffect, useState } from "react";
import "./Resources.css";
import { connect } from "react-redux";
import {fetchFeed} from "../actions/feedActionCreators";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";

const Resources = (props) => {
    
    const [page, setPage] = useState(2);
    const [scrollPos, setScrollPos] = useState();
    useEffect(() => {
        setPage(parseInt(sessionStorage.getItem("page")));
        sessionStorage.removeItem("page");
        if (props.feed.length !== 0) {
            // if (props.feed.length !== 0) {
            //     return;
            // } else {
            //     props.setFeed();
            // }
            return ;
        }

        else {
            props.setFeed();
        }
        
    }, []);
    useEffect(() => {
        
        handleScrollPosition();
    }, [scrollPos]);
    const handleScrollPosition = () => {
        const scrollPosition = sessionStorage.getItem("scrollPosition");
        console.log(scrollPosition, "Hello world")
        if(scrollPosition){
            window.scrollTo(0, parseInt(scrollPosition));
            sessionStorage.removeItem("scrollPosition");
        }
    }
    const loadMore = (e) => {
        if (Math.ceil((props.pages) + 0) >= page){
            setPage(_page => _page + 1);
        }
        props.setFeed(null, page);
        handlePosition(e);
        handleScrollPosition();
    }
    const handlePosition = (e) => {
        console.log("hello world");
        sessionStorage.setItem("scrollPosition", window.pageYOffset);
        setScrollPos(window.pageYOffset);
    }
    const handlePage = () => {
        sessionStorage.setItem("page", page);
    }
    
    return (
        <div className="container">

            <div className="feed-list">
                
                <div className="list_style"></div>
                <div className="feed-list__items">
                    {props.feed && !props.loading ? props.feed.map(item => (
                        <Card 
                            item={item} 
                            loading key={item?._id} 
                            handlePosition={handlePosition} 
                            handlePage={handlePage}
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
        setFeed: (search, page) => dispatch(fetchFeed(search, page))
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
