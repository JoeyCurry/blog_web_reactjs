import React, {Component} from 'react';
import {connect} from 'react-redux';
//主模板
class RootIndex extends Component{

    constructor(props){
        super(props);
    }



    render(){
        // console.log(this.props.dispatch);
        return (
            <div ref='content'>
                
                { this.props.children }
            </div>
        );
    }
}

function mapStateToProps(state, props) {
    // urlDecorator.setData(state.toJS());
    // return {
    //     user : state.get('user'),
    //     relaxMusics : state.get('relaxMusics'),
    //     recordTPL: state.get('recordTPL'),
    // }
}

function mapActionToProps(){
    // return {
    //     chatLogin,
    // }
}

export default connect(mapStateToProps)(RootIndex);
