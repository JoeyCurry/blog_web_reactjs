import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    Button,
    Navbar,
    NavItem,
    Nav,
} from 'react-bootstrap';
import NavLeader from "../common/components/navLeader"

class HomePage extends Component{

    constructor(props){
        super(props)
    }

    handleClick(item){

    }

    render(){
        return (
            <div>
                <NavLeader
                    activeKey={1}
                    handleMainNavItemOne={()=>{console.log("11111");}}
                    handleMainNavItemTwo={()=>{console.log("222222");}}
                    isLogin={false}
                    handleUserInfo={()=>{console.log("3333");}}
                    handleUserMsg={()=>{console.log("4444");}}
                    handleUserCollect={()=>{console.log("55555");}}
                    handleQuit={()=>{console.log("66666");}}
                    handleAboutMe={()=>{console.log("77777");}}
                    userName="江军"
                     />
        </div>
        )
    }
}

function mapStateToProps(state,props) {
    return {
        // : state.get(''),
    }
}

function mapActionToProps(){
    return {

    }
}

export default connect(mapStateToProps, mapActionToProps())(HomePage);
