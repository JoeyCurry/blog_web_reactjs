import React, {Component} from 'react';
import {connect} from 'react-redux';
// import styles from '../../css/blogListItem.css';
import assign from 'lodash.assign';
import {
    FormGroup,
    Glyphicon,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import Editor from './components/editor.js';
import CodeBlock from './components/code-block.js';
import MarkdownControls from './components/markdown-controls.js';

class EditMarkdown extends Component{
    constructor(props){
        super(props);
        this.state = {
            markdownSrc:[
                '# Live demo\n\nChanges are automatically rendered as you type.\n\n* Follows the ',
                '[CommonMark](http://commonmark.org/) spec\n* Renders actual, "native" React DOM ',
                'elements\n* Allows you to escape or skip HTML (try toggling the checkboxes above)',
                '\n* If you escape or skip the HTML, no `dangerouslySetInnerHTML` is used! Yay!\n',
                '\n## HTML block below\n\n<blockquote>\n    This blockquote will change based ',
                'on the HTML settings above.\n</blockquote>\n\n## How about some code?\n',
                '```js\nvar React = require(\'react\');\nvar Markdown = require(\'react-markdown\');',
                '\n\nReact.render(\n    <Markdown source="# Your markdown here" />,\n    document.',
                'getElementById(\'content\')\n);\n```\n\nPretty neat, eh?\n\n', '## More info?\n\n',
                'Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)\n\n',
                '---------------\n\n',
                'A component by [VaffelNinja](http://vaffel.ninja) / Espen Hovlandsdal'
            ].join(''),
            htmlMode: 'raw'
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

    render(){

        return(
            <div className="demo">
                <div className="editor-pane">
                    {/* <MarkdownControls
                        onChange={()=>this.onControlsChange()}
                        mode={this.state.htmlMode}/> */}
                    <Editor
                        value={this.state.markdownSrc}
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
