import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Navbar,
    NavItem,
    Nav,
} from 'react-bootstrap';
import NavLeader from "../../common/components/navLeader.js"
import Footer from "../../common/components/footer.js"
import BlogList from "./components/blogList.js"
import styles from "../css/leader.css"

class HomePage extends Component{

    constructor(props){
        super(props)
    }


    render(){
        return (

            <div >
                <NavLeader
                    style={styles.leader}
                    activeKey={1}
                    isLogin={false}
                    userName="江军"
                     />
                     <BlogList
                         style={styles.blogList}/>


        </div>
        )
    }
}



export default HomePage;
