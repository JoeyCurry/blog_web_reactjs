import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../../css/blogList.css';

class BlogList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className={styles.container}>
                



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

export default connect(mapStateToProps, mapActionToProps())(BlogList);
