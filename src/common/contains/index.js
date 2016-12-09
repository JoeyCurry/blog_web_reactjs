import React, {Component} from 'react';
import {connect} from 'react-redux';
import MySnackbar from '../components/snackbar.js'
//主模板
class RootIndex extends Component{

    constructor(props){
        super(props);
    }



    render(){
        console.log(this.props.children);
        return (
            <div ref='content'>
                <MySnackbar />
                {/* <Loading /> */}
                { this.props.children }
            </div>
        );
    }
}

// function mapStateToProps(state, props) {
//     // urlDecorator.setData(state.toJS());
//     // return {
//     //     user : state.get('user'),
//     //     relaxMusics : state.get('relaxMusics'),
//     //     recordTPL: state.get('recordTPL'),
//     // }
// }
//
// function mapActionToProps(){
//     // return {
//     //     chatLogin,
//     // }
// }

// export default connect(mapStateToProps)(RootIndex);
export default RootIndex;
