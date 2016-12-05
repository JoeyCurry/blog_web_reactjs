import React, {Component} from 'react';
import {connect} from 'react-redux';
import Footer from '../../common/components/footer.js';
import styles from '../css/register.css';
import {
    imgRegBack1,
    imgRegBack2,
    imgRegBack3,
    imgRegBack4,
    imgRegBack5,
} from '../../common/imageUrls';
import validHelper from "../../common/helpers/vaildHelper.js";
import {
    registeFetch
} from '../../common/action/accountActions.js'

// material-ui
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import TextField from 'material-ui/TextField';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import Snackbar from 'material-ui/Snackbar';

const REGISTER_URL = "http://192.168.1.188:8000/register/"
class Register extends Component{
    constructor(props){
        super(props);
        this.state = {
            open:false,
            snackbarMsg:""
        };
        this.validHelper = new validHelper();  //校验类
    }

    handleClick(){
        let ret = this.errShow(
            [
                {
                    value:this.refs["userName"].getValue().trim(),
                    rules: [{type: 'isNotEmpty', errMsg: '白胡子不收无名之辈!'}]
                },
                {
                    value:this.refs["password"].getValue().trim(),
                    rules: [
                        {type: 'isNotEmpty', errMsg: '说出你的暗号'},
                        {type: 'isMoreThenNunLength:6', errMsg: '你太短了 ,,Ծ‸Ծ,,  '}

                    ]
                },
                {
                    value:this.refs["password"].getValue().trim(),
                    rules: [{type: 'isUnSame:' + this.refs["userName"].getValue().trim(), errMsg: '暗号怎么能和名字一样呢'}]
                },
            ]
        );
        if (ret) {
            this.props.registeFetch(
                this.refs["userName"].getValue().trim(),
                this.refs["password"].getValue().trim(),
                ()=>{},
                (data)=>{
                    console.log("----111----",this.props.user.toJS());
                    console.log("----2222---",data.userName);
                    console.log("----3333---",data.userId);
                },
                ()=>{}
            );
        }
    }

    handleRequestClose(){
        this.setState({
            open:!this.state.open
        })
    }

    errShow(validList){
        this.validHelper.setValid(validList);
        let ret = this.validHelper.valid();
        if (ret) {
            this.setState({
                open:!this.state.open,
                snackbarMsg:ret
            })
            return false;
        }
        return true;
    }

    render(){
        return(
            <div>
                    <div className={styles.container} style={{backgroundImage:"url(" + imgRegBack2 + ")"}}>
                        <div className={styles.backblur}></div>
                        <div className={styles.content}>
                                <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
                                    <div>
                                        <div className={styles.testfield}>
                                            <TextField
                                              ref="userName"
                                              hintText="来做我的伙伴吧"
                                              floatingLabelText="用户名"
                                            />
                                            <TextField
                                                ref="password"
                                              hintText="上船暗号"
                                              type="password"
                                              floatingLabelText="密码"
                                            />
                                        </div>
                                        <div className={styles.button}>
                                            <FlatButton
                                                onClick={()=>{this.handleClick()}}
                                                style={{width:"100%"}}
                                                label="上  船"
                                                primary={true} />
                                        </div>
                                        <Snackbar
                                          open={this.state.open}
                                        //   className={styles.snackbar}
                                          message={this.state.snackbarMsg}
                                          autoHideDuration={2000}
                                          onRequestClose={()=>{this.handleRequestClose()}}
                                        />
                                    </div>
                                </MuiThemeProvider>
                        </div>
                    </div>
            </div>
        )
    }
}

function funcStateToProps(state, props){
    return {
        user: state.get('user'),
    }
}

const funcActions = ()=>{
    return {
        registeFetch,
    }
}

export default connect(funcStateToProps, funcActions())(Register);
