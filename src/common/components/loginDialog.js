import React, {Component} from 'react';
import styles from '../comCss/loginDialog.css';

// material-ui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class LoginDialog extends Component{
    constructor(props){
        super(props);
    }

    handleClose(){
        
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                <Dialog
                    title="登录"
                    actions={actions}
                    modal={true}
                    open={this.state.open}
                    onRequestClose={()=>this.handleClose()}
                    >

                </Dialog>
            </MuiThemeProvider>
        )
    }
}

export default LoginDialog
