import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../css/editMarkdown.css';
import assign from 'lodash.assign';
import {
    FormGroup,
    Glyphicon,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Editor from './components/editorES6.js';
import CodeBlock from './components/code-block.js';

class EditMarkdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            markdownSrc:[
                '# 欢迎使用MarkDown\n\n',
                '---\n\n',
                '[感谢react-codemirror](https://github.com/JedWatson/react-codemirror) \n\n',
                '[感谢react-markdown](https://github.com/rexxars/react-markdown)\n\n'
            ].join(''),
            htmlMode: 'raw',
            msg:""
        }
    }

    onControlsChange(mode){
        this.setState({ htmlMode: mode });
    }

    onMarkdownChange(md){
        console.log(md);
        this.setState({
            markdownSrc: md
        });
    }

    handleSaveClick(){
        this.setState({
            msg:this.state.markdownSrc
        })
    }

    render(){

        return(
            <div className={styles.container}>
                <div className={styles.title_container}>
                    <FormGroup>
                     <InputGroup>
                       <InputGroup.Addon>Title</InputGroup.Addon>
                       <FormControl type="text" placeholder="输入标题"/>
                     </InputGroup>
                   </FormGroup>
                </div>
                <div onClick={()=>{this.handleSaveClick()}}>
                    保存
                </div>
                <div className="editor-pane">
                    {/* <MarkdownControls
                        onChange={()=>this.onControlsChange()}
                        mode={this.state.htmlMode}/> */}
                    <Editor
                        code={this.state.markdownSrc}
                        onChange={(md)=>this.onMarkdownChange(md)}/>
                    <div className='result-pane'>
                        <ReactMarkdown
                            className="result"
                            source={this.state.markdownSrc}
                            renderers={assign({},ReactMarkdown.renderers,{
                                CodeBlock:CodeBlock
                            })} />
                    </div>
                </div>

                <div style={{height:'400px',width:"400px"}}>
                    <ReactMarkdown
                            className="result"
                            source={this.state.msg}
                            className={styles.content}>
                 </ReactMarkdown>
                </div>
            </div>
        )
    }
}

// function mapStateToProps(state,props) {
//     return {
//         // : state.get(''),
//     }
// }
//
// function mapActionToProps(){
//     return {
//
//     }
// }

// export default connect(mapStateToProps, mapActionToProps())(EditMarkdown);
export default EditMarkdown;
