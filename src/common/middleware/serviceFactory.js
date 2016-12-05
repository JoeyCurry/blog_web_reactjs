import serviceType from './serviceType';
import AccountService from './accountService';
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

    static getService(type, dispatch, loadingFun, successFun, failedFun){
        switch (type) {
            case serviceType.account:
                return new AccountService(dispatch, loadingFun, successFun, failedFun);
            default:
                return undefined;
        }
    }
}

export default ServiceFactory;
