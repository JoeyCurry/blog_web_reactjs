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

    updateCode(newCode){
        this.props.onChange(newCode);
        this.setState({
            code:newCode
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
                    className={styles.codemirror}
                    value={this.state.code}
                    options={options}
                    onChange={(md)=>{this.updateCode(md)}}/>
            </form>)

    }
}

export default EditorES6
