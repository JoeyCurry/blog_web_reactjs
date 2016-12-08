import BaseService from './baseService';
import 'whatwg-fetch';
import {
    register,
} from '../action/accountActions';

import {
    REGISTER_URL
} from './urls';

//关于账号密码操作
class AccountService extends BaseService {

    constructor(dispatch, loadingFun, successFun, failedFun) {
        super(dispatch, loadingFun, successFun, failedFun);
    }


    //注册
    regist(name, password){
        // this.loading();
        fetch(REGISTER_URL,{
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                userName: name,
                password:password
            }),
        }).then( response => {
            return response.json();
        }).then( responseData => {
            if(responseData.code == 200){
                console.log(responseData);
                let data = responseData.data.userMsg;
                this.dispatch(register(data));
                this.success(data);
            }else{
                //this.failed(responseData.msg);
                console.log(responseData.msg);
            }
        }).catch(err=>{
            console.log(err);
            //this.failed(err.toString());
        });
    }

}

export default AccountService;
