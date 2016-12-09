import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../css/blogList.css';
import BlogListItem from './blogListItem.js';
import Footer from '../../../common/components/footer.js';
import {
    FormGroup,
    Glyphicon,
    InputGroup,
    FormControl,
} from 'react-bootstrap';
import {
    imgSearch
} from "../../../common/imageUrls.js"


let monthData = [
    "2016年2月",
    "2016年3月",
    "2016年4月",
    "2016年5月",
    "2016年6月",
    "2016年7月",
    "2016年7月",
    "2016年7月",
    "2016年7月",
    "2016年7月",
];
let blogList = [
    {
        blog_id:"BLOG0000001",
        author_id:"AUTH0000001",
        title:"webpack如何使用1",
        author:"江军1",
        publish_time:"2016-11-29 12:34 1",
        content:"webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。\n\n我们可以直接使用 require(XXX) 的形式来引入各模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情，这块我们后续会提到。",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000002",
        author_id:"AUTH0000002",
        title:"webpack如何使用2",
        author:"江军2",
        publish_time:"webpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理。\n\n我们可以直接使用 require(XXX) 的形式来引入各模块，即使它们可能需要经过编译（比如JSX和sass），但我们无须在上面花费太多心思，因为 webpack 有着各种健全的加载器（loader）在默默处理这些事情，这块我们后续会提到。",
        content:"这是内容，这是内容2",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000003",
        author_id:"AUTH0000003",
        title:"webpack如何使用3",
        author:"江军3",
        publish_time:"2016-11-29 12:34 3",
        content:"这是内容，这是内容3",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000004",
        author_id:"AUTH0000004",
        title:"webpack如何使用4",
        author:"江军4",
        publish_time:"2016-11-29 12:34 4",
        content:"这是内容，这是内容4",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000005",
        author_id:"AUTH0000005",
        title:"webpack如何使用5",
        author:"江军5",
        publish_time:"2016-11-29 12:34 5",
        content:"这是内容，这是内容5",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000006",
        author_id:"AUTH0000006",
        title:"webpack如何使用6",
        author:"江军6",
        publish_time:"2016-11-29 12:34 6",
        content:"这是内容，这是内容6",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000007",
        author_id:"AUTH0000007",
        title:"webpack如何使用7",
        author:"江军7",
        publish_time:"2016-11-29 12:34 7",
        content:"这是内容，这是内容7",
        comment_num:10,
        collect_num:190,
        read_num:300
    },
    {
        blog_id:"BLOG0000008",
        author_id:"AUTH0000008",
        title:"webpack如何使用8",
        author:"江军8",
        publish_time:"2016-11-29 12:34 8",
        content:"这是内容，这是内容8",
        comment_num:10,
        collect_num:190,
        read_num:300
    },

]
class BlogList extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchValue:"",
        }
    }

    handleSearchClick(){
        console.log(this.state.searchValue);
        this.setState({
            searchValue:""
        })
    }

    handleSearchChange(e){
         this.setState({ searchValue: e.target.value });
    }


    _renderMonthList(){
        let listView = monthData.map((value,index)=>{
            return <li
                key={index}
                style={{padding:"5px"}}><a href="#">{value}</a></li>
        })
        return listView;
    }

    _renderBlogList(){
        let listView = blogList.map((value,index)=>{
            return <BlogListItem
                    data={value}
                    key={index}
                    />
        })
        return listView;
    }


    render(){
        return(
            <div className={styles.main}>
                <div>
                    <div className={styles.container}>

                        <div className={styles.bloglist_container}>
                            {this._renderBlogList()}
                        </div>

                        <div className={styles.bloglist_left}>


                            <div className={styles.left_border}>
                                <div className={styles.left_border_text} style={{marginTop:"10px"}}>
                                        说点话
                                </div>
                                <div className={styles.left_border_text} style={{paddingBottom:"20px"}}>
                                        webpack是一个用来打包web文件的东西
                                </div>
                            </div>

                            <div className={styles.search}>
                                <FormGroup>
                                  <InputGroup>
                                    <FormControl
                                        value={this.state.searchValue}
                                        placeholder="搜索标题"
                                        onChange={(e)=>{this.handleSearchChange(e)}}
                                        type="text" />
                                    <InputGroup.Addon
                                        onClick={()=>{this.handleSearchClick()}}
                                        >
                                      <img src={imgSearch} className={styles.img_search}/>
                                    </InputGroup.Addon>
                                  </InputGroup>
                                </FormGroup>
                            </div>

                            <div className={styles.left_month_list}>
                                <ol className="list-unstyled" style={{marginLeft:"20px",marginTop:"10px"}}>
                                    {this._renderMonthList()}
                                </ol>
                            </div>
                        </div>
                </div>
                </div>
                <Footer />
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

// export default connect(mapStateToProps, mapActionToProps())(BlogList);
export default BlogList;
