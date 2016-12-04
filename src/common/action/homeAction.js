import {

} from './actionType';
import serviceFactory from '../middleware/serviceFactory';
import serviceType from '../middleware/serviceType';


//获取个人信息
// export const getInfoFetch = (loadingFun, successFun, failedFun)=>{
//     return (dispatch)=>{
//         let service = serviceFactory.getService(serviceType.account, dispatch, loadingFun, successFun, failedFun);
//         service.getInfo();
//     }
// }

//注册
// export const register = (userMsg)=>{
//     return {type: REGISTER, userMsg};
// }
//
// export const registerDispatch = (userMsg)=>{
//     return (dispatch)=>{
//         dispatch({type: REGISTER, userMsg});
//     }
// }
//
// export const registeFetch = (name, tel, verificationCode, loadingFun, successFun, failedFun)=>{
//     return (dispatch)=>{
//         let service = serviceFactory.getService(serviceType.account, dispatch, loadingFun, successFun, failedFun);
//         service.regist(name, tel, verificationCode);
//     }
// }
