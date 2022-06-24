import TOOLS from "../../utils/tools";
import EditorJS from "@editorjs/editorjs"
import { useEffect} from "react";
const Editor = (props) => {
    useEffect(() => {
        const editor = new EditorJS({
			holder: props.editorHolder,
			logLevel: "ERROR",
			data:  { blocks: props.data},
			autofocus: true,
			tools:TOOLS,
			readOnly: props.readOnly
		  });
        props.setEditor(editor);
    }, []);
    return (
        <div id={props.editorHolder}></div>
    );
}

export default Editor;