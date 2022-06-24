import Table from "@editorjs/table";
import List from "@editorjs/list";
import Link from "@editorjs/link";
import Code from "@editorjs/code";
import InlineCode from "@editorjs/inline-code";
import Embed from "@editorjs/embed";
import Header from "@editorjs/header"

const TOOLS = { 
	header: Header,
	table: Table,
	list: List,
	code: Code,
	link: Link,
	inlineCode: InlineCode,
	embed:{
	  class: Embed,
	  inlineToolbar: false,
	  config:{
		  services: {
			  youtube: true,
			  coub: true
			}
	  }
	}};

export default TOOLS;