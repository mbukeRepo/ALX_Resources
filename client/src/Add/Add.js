import axios from "../utils/axios";
import {  useState } from "react";
import Editor from "../components/Editor/editor";
import "./Add.css";
import {connect} from "react-redux";

const AddFeed = (props) => {
    const [item, setItem] = useState({title:"", field: ""});
    const [editor, setEditor] = useState();
    
    const onChange = (e) => {
        const new_form = {
            ...item,
             [e.target.name]:e.target.value
        }
        setItem(
            new_form
        );
    }
    
    const createFeed = async(e) => {
        e.preventDefault();
        const delta = await editor.save();
        const data = {
            ...item,
            content: [...delta.blocks],
            owner: {
                username: props.user.username,
                github: props.user.profileUrl   
            }
        }
        await axios.post("/resources", data);
        props.history.push("/feed");
    }
    return (
        <div className="container">
            <div className="add-feed__container">
            <div className="toolbar">
                <div className="input-feed__title">
                    <input 
                        type="text"
                        name="title"
                        value={item.title} 
                        onChange={onChange} 
                        placeholder="Title of the Resource"
                    />
                </div>
                <div className="input-feed__field">
                    <input 
                        type="text" 
                        name="field"
                        value={item.field} 
                        onChange={onChange} 
                        placeholder="The field of the Resource" 
                    />
                </div>
                <div className="input-feed__field">
                    <button onClick={createFeed}>Publish</button>
                </div>    
            </div>
            <Editor
                editorHolder="editor"
                readOnly={false}
                setEditor = {(editor) => setEditor(editor)}
                
            />
        </div>
        </div>
        
    );
}
const mapStateToProps = state => {
    return {
        user: state.auth.user
    }
}
export default connect(mapStateToProps)(AddFeed);
