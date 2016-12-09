import Snackbar from 'material-ui/Snackbar';
import THEME from '../../common/theme.js'
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import React, {Component} from 'react';

class MySnackbar extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            snackbarMsg:""
        }
    }

    componentDidMount(){
        global.MySnackbar = this;
    }

    toggle(){
        this.setState({
            open:!this.state.open
        })
    }

    handleRequestClose(){
        this.toggle()
    }

    show(msg){
        this.setState({
            open:!this.state.open,
            snackbarMsg:msg
        })
    }

    render(){
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(THEME)}>
                <Snackbar
                  open={this.state.open}
                //   className={styles.snackbar}
                  message={this.state.snackbarMsg}
                  autoHideDuration={2000}
                  onRequestClose={()=>{this.handleRequestClose()}}
                />
            </MuiThemeProvider>
        )
    }
}

export default MySnackbar
