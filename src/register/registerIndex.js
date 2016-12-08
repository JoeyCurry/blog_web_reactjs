import React, {Component} from 'react';
import {connect} from 'react-redux';
import NavLeader from "../common/components/navLeader.js";
import Register from "./js/register.js"

class RegisterIndex extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <NavLeader
                    style={{position: "fixed",top:"0"}}
                    activeKey={0}
                    isLogin={false}
                     />
                 <Register />
            </div>
        )
    }
}

export default RegisterIndex
