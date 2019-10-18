import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import {
  getFile, 
  saveFile, 
} from '@/utils/dataStore/project';

export default class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: props.fileId?getFile(props.fileId):"",
    }
    this._monacoeditor = {};
  }
  shouldComponentUpdate(nextProps){
    if(this.props.fileId!=nextProps.fileId){
      return true;
    }else{
      return false;
    }
  }
  componentDidUpdate(prevProps) {
    if(prevProps.fileId!=this.props.fileId&&this._monacoeditor){
      this._monacoeditor.getModel().setValue(getFile(this.props.fileId));
    }
  }
  editorDidMount(editor, monaco) {
    this._monacoeditor = editor;
    editor.focus();
  }
  onChange(newValue, e) {
    if(!this||!this.props||!this.props.fileId||!this.props.fileId.length){
      return;
    }
    saveFile(this.props.fileId, newValue);
  }
  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true
    };
    console.log(this.props.fileId)
    return (
      <MonacoEditor
        width="100%"
        height="100%"
        language="cpp"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange.bind(this)}
        editorDidMount={this.editorDidMount.bind(this)}
      />
    );
  }
}