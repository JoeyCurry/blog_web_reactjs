import React, {Component} from 'react';
import {connect} from 'react-redux';
import styles from '../comCss/loading.css';
// material-ui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CircularProgress from 'material-ui/CircularProgress';

class Loading extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className={styles.load}>
                <MuiThemeProvider>
                    <CircularProgress size={80} thickness={5}/>
                </MuiThemeProvider>
            </div>
        )
    }
}
