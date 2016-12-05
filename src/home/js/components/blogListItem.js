import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../css/blogListItem.css';

import {
    FormGroup,
    Glyphicon,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import {
    imgHeader,
    imgBlogPic
} from "../../../common/imageUrls.js";
import ReactMarkdown from 'react-markdown';

// material-ui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import {Card, CardActions,CardMedia,CardTitle, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';



class BlogListItem extends Component{
    constructor(props){
        super(props);
        console.log(this.props.data);
    }

    render(){
        return(
            <div style={{paddingBottom:"20px"}}>
                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                    <Card>
                       <CardHeader
                         title={this.props.data.author}
                         avatar={imgHeader}
                       />
                       <CardMedia
                         overlay={<CardTitle title={this.props.data.title} subtitle={this.props.data.publish_time} />}
                       >
                         <img src={imgBlogPic} />
                       </CardMedia>
                       <CardText>
                           <ReactMarkdown
                                   source={this.props.data.content}
                                   className={styles.content}>
                        </ReactMarkdown>
                       </CardText>
                       <CardActions>
                         <FlatButton label="喜欢" />
                         <FlatButton label="不喜欢" />
                       </CardActions>
                     </Card>
                </MuiThemeProvider>
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

// export default connect(mapStateToProps, mapActionToProps())(BlogListItem);
export default BlogListItem;
