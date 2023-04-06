import React from "react";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/hmtl";
import "ace-builds/src-noconflict/ext-language_tools";

function HtmlEditor() {
  return (
    <AceEditor
      placeholder="write your HTML code"
      mode="html"
      theme="monokai"
      name="editor_html"
    />
  );
}

export default HtmlEditor;
