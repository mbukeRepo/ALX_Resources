import React from "react";
import Editor from "../components/Editor/editor";
import "./Resource.css";
import axios from "../utils/axios";
import {connect} from "react-redux";
import {toggleSearch} from "../actions/feedActionCreators"


class Resource extends React.Component{
    state = {
        content: null,
        editor:null
    }
    
    componentDidMount = async () => {
           const feed = (await axios.get("/resources/" + this.props.match.params.id))["data"];
           this.setState({content: feed.content});
           this.props.toggleSearch(false);
    }
    componentWillUnmount = () => {
        this.props.toggleSearch(true);
    }
    

    
    render () {
        let editor = null;
        if (this.state.content){
            editor = (
                <Editor
                editorHolder="editor"
                readOnly={true}
                setEditor = {(editor) => this.setState({editor})}
                data = {this.state.content}
                />
            );
        }
        return (
            <div className="container">
                <div className="single-feed__container">
                    {editor}
                </div>
            </div>
        
    );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleSearch: (toggle) => dispatch(toggleSearch(toggle))
    }
}

export default connect(null ,mapDispatchToProps )(Resource);
