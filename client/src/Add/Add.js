import axios from "axios";
import {  useState } from "react";
import Editor from "../components/Editor/editor";
import "./Add.css"

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
        console.log(e.target, e.target.name);
    }
    const createFeed = async(e) => {
        e.preventDefault();
        const delta = await editor.save();
        console.log(item)
        const data = {
            ...item,
            content: [...delta.blocks]
        }
        // console.log(data);
        await axios.post("http://localhost:5000/resources", data);
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

export default AddFeed;
