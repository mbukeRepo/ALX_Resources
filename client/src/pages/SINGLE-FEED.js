import React from "react";
import Editor from "../components/Editor/editor";
import "./SINGLE-FEED.css";
import axios from "../utils/axios";

class SingleFeed extends React.Component{
    state = {
        content: null,
        editor:null
    }
    
    componentDidMount = async () => {
           const feed = (await axios.get("/resources/" + this.props.match.params.id))["data"];
           this.setState({content: feed.content});
           console.log(this.state)
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


export default SingleFeed;
