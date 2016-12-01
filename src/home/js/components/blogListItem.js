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
    imgSearch
} from "../../../common/imageUrls.js"
import ReactMarkdown from 'react-markdown'

class BlogListItem extends Component{
    constructor(props){
        super(props);
        console.log(this.props.data);
    }

    render(){

        return(
            <div className={styles.container}>
                <div className={styles.title_content}>
                    <div className={styles.title}>
                        {this.props.data.title}
                    </div>
                    <div className={styles.secondTitle}>
                        {this.props.data.publish_time}&nbsp;By&nbsp;<a href="#">{this.props.data.author}</a>
                    </div>
                </div>
                <ReactMarkdown
                    source={this.props.data.content}
                    className={styles.content}>
                </ReactMarkdown>
                <div className={styles.foot_content}>
                    <div className={styles.read}>
                        阅读量:{this.props.data.read_num}
                    </div>
                    <div className={styles.collect}>
                        收藏:{this.props.data.collect_num}
                    </div>
                    <div className={styles.comment}>
                        评论：{this.props.data.comment_num}
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

// export default connect(mapStateToProps, mapActionToProps())(BlogListItem);
export default BlogListItem;
