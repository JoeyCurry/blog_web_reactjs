import React ,{Component} from 'react';
import CodeMirror from 'react-codemirror';
import styles from '../../css/editorES6.css'

class EditorES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            code:this.props.code
        }
    }

    updateCode(){
        this.props.onChange(this.refs["codemirror"].getCodeMirror().getValue());
        this.setState({
            code:this.refs["codemirror"].getCodeMirror().getValue()
        })
    }


    render(){
        let options = {
            lineNumbers:false,
            mode:'markdown'
        }
        return(
            <form className='editor pure-form'>
                <CodeMirror
                    ref="codemirror"
                    className={styles.codemirror}
                    value={this.state.code}
                    options={options}
                    onChange={(md)=>{this.updateCode(md)}}/>
            </form>)

    }
}

export default EditorES6
