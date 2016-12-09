import React, {Component} from 'react';
import styles from '../comCss/loginDialog.css';

// material-ui
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import THEME from '../../common/theme.js';
import validHelper from "../helpers/vaildHelper";

/**
 *  通用登录组件
 *      toggle方法控制开关
 *  props:
 *      submit:function 传递回用户名和密码
 */

 const customContentStyle = {
   width: '20%',
 };
class LoginDialog extends Component{
    constructor(props){
        super(props);
        this.validHelper = new validHelper();  //校验类
        this.state = {
            open:false
        }
    }

    toggle(){
        this.setState({
            open:!this.state.open
        })
    }

    handleCancel(){
        this.toggle();
    }

    handleSubmit(userName,password){
        let ret = this.errShow(
            [
                {
                    value:userName,
                    rules: [{type: 'isNotEmpty', errMsg: '无名之辈岂能登船!'}]
                },
                {
                    value:this.refs["password"].getValue().trim(),
                    rules: [
                        {type: 'isNotEmpty', errMsg: '不说暗号？你想啥呢(╯‵□′)╯︵┻━┻'},
                    ]
                },
            ]
        );
        if (ret) {
            console.log("login");
            // this.props.registeFetch(
            //     this.refs["userName"].getValue().trim(),
            //     this.refs["password"].getValue().trim(),
            //     ()=>{},
            //     (data)=>{
            //         console.log("----111----",this.props.user.toJS());
            //         console.log("----2222---",data.userName);
            //         console.log("----3333---",data.userId);
            //     },
            //     ()=>{}
            // );
        }
    }

    errShow(validList){
        this.validHelper.setValid(validList);
        let ret = this.validHelper.valid();
        if (ret) {
            MySnackbar.show(ret);
            return false;
        }
        return true;
    }

    render(){
        const actions = [
              <FlatButton
                label="取消"
                secondary={true}
                onClick={()=>this.handleCancel()}
              />,
              <FlatButton
                label="登录"
                primary={true}
                onClick={()=>this.handleSubmit(
                    this.refs["userName"].getValue().trim(),
                    this.refs["password"].getValue().trim(),
                )}
                />
        ];
        return(
            <MuiThemeProvider muiTheme={getMuiTheme(THEME)}>
                <div>
                    <Dialog
                        title="登录"
                        actions={actions}
                        modal={true}
                        open={this.state.open}
                        contentStyle={customContentStyle}
                        onRequestClose={()=>this.handleCancel()}
                        >
                        <div className={styles.textfield}>
                            <TextField
                              fullWidth={true}
                              ref="userName"
                              hintText="说出你的名号"
                              floatingLabelText="用户名"
                            />
                            <TextField
                              fullWidth={true}
                              ref="password"
                              hintText="上船暗号"
                              type="password"
                              floatingLabelText="密码"
                            />
                        </div>
                    </Dialog>
                </div>

            </MuiThemeProvider>
        )
    }
}

export default LoginDialog
