import React, {Component} from 'react';
import {connect} from 'react-redux';

let CodeMirror;

let IS_MOBILE = typeof navigator === 'undefined' || (
  navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
);

class CodeMirrorEditor extends Component{
    constructor(props){
        super(props);
        this.state = {
            isControlled:this.props.value != null
        }
    }

    static propTypes = {
        value: React.PropTypes.string,
        defaultValue: React.PropTypes.string,
        style: React.PropTypes.object,
        className: React.PropTypes.string,
        onChange: React.PropTypes.func
      }

    componentDidMount(){
        var isTextArea = this.props.forceTextArea || IS_MOBILE;
        if (!isTextArea) {
          this.editor = CodeMirror.fromTextArea(this.refs.editor, this.props);
          this.editor.on('change', this.handleChange);
        }
    }


    render(){
        return(

        )
    }
}

export default CodeMirrorEditor;
