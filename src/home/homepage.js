import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { Button } from 'react-bootstrap';

class HomePage extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>test</div>
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
