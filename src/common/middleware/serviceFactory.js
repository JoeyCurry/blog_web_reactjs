// import serviceType from './serviceType';
// import AccountService from './accountService';
// import RelaxService from './relaxService';
// import CaseBookService from './caseBookService';
// import RoomService from './roomService';
// import MyDoctorsService from './myDoctorsService';
// import FeedbackService from './feedbackService';
// import ChatService from './chatService';
// import OrderService from './orderService';
// import MedicationService from './medicationService';
// import DiagnoseService from './diagnoseService';
// import OnLineTestService from './onLineTestService';
// import RecordService from './recordService';
// import NewsService from './newsService';
// import MyCollectService from './myCollectService';

class ServiceFactory{

    // static getService(type, dispatch, loadingFun, successFun, failedFun){
    //     switch (type) {
    //         case serviceType.account:
    //             return new AccountService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.relax:
    //             return new RelaxService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.casebooks:
    //             return new CaseBookService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.room:
    //             return new RoomService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.mydoctors:
    //             return new MyDoctorsService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.feedback:
    //             return new FeedbackService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.chat:
    //             return new ChatService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.order:
    //             return new OrderService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.medication:
    //             return new MedicationService(dispatch, loadingFun, successFun, failedFun);
    //         case serviceType.diagnoses:
    //             return new DiagnoseService(dispatch,loadingFun,successFun,failedFun);
    //         case serviceType.test:
    //             return new OnLineTestService(dispatch,loadingFun,successFun,failedFun);
    //         case serviceType.record:
    //             return new RecordService(dispatch,loadingFun,successFun,failedFun);
    //         case serviceType.news:
    //             return new NewsService(dispatch,loadingFun,successFun,failedFun);
    //         case serviceType.myCollects:
    //             return new MyCollectService(dispatch,loadingFun,successFun,failedFun);
    //         default:
    //             return undefined;
    //     }
    // }
}

export default ServiceFactory;
