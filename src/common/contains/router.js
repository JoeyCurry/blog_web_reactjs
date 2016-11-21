import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from '../stores/Store';
import Index from './index';
import '../helpers/urlHelper';
import '../helpers/recordMsgHelper';
import {

} from '../routerNav';

global.Navigator = hashHistory;
ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
          <Route path="/" component={Index}>
                <IndexRoute component={HOMEPAGEINDEX_COMPONENT} /> {/*首页*/}
                <Route path="relax" component={RELAXINDEX_COMPONENT}></Route> {/*放松*/}
                <Route path=comm"assistant" component={ASSISTANTINDEX_COMPONENT}></Route> {/*问医生*/}
                <Route path="room/"> {/* 诊室 */}
                    <IndexRoute component={ROOMINDEX_COMPONENT} />
                    <Route path="orderRemoteAdvice" component={ ORDERREMOTEADVICE_COMPONENT } />
                    <Route path="orderRemoteMedicine" component={ MEDICINELIST_COMPONENT } />
                    <Route path="medicineLib" component={ MEDICINELIB_COMPONENT } />
                    <Route path="buymedicineuserinfo" component={ BUYMEDICINEUSERINFO_COMPONENT } />
                    <Route path="paysuccess" component={ PAYSUCCESS_COMPONENT } />
                </Route>
                <Route path="aboutMe/"> {/* 我的 */}
                    <IndexRoute component={ABOUTMEINDEX_COMPONENT} />
                    <Route path="myInfo" component={ MYINFO_COMPONENT } />
                    <Route path="changeTel" component={ CHANGETEL_COMPONENT } />
                    <Route path="register" component={ REGISTER_COMPONENT } />
                    <Route path="feedback" component={ FEEDBACK_COMPONENT } />
                    <Route path="order" component={ ORDERLIST_COMPONENT } />
                    <Route path="caseBook" component={ CASEBOOKS_COMPONENT } />
                    <Route path="addCase" component={ ADDCASE } />
                    <Route path="addCaseInfo" component={ ADDCASEINFO } />
                    <Route path="reminder" component={ MEDICATION_COMPONENT } />
                    <Route path="doctors" component={ MYDOCTORS_COMPONENT } />
                    <Route path="doctorInfo" component={ MYDOCTORINFO_COMPONENT } />
                    <Route path="collect" component={ MYCOLLECTS_COMPONENT } />
                    <Route path="medicine_box" component={ MYMEDICINEBOX_COMPONENT } />
                    <Route path="medicine_info" component={ MYMEDICINEINFO_COMPONENT } />
                    <Route path="myOrder" component={ MYORDER_COMPONENT } />
                    <Route path="buyMedication" component={ BUYMEDICATION_COMPONENT } />
                    <Route path="record" component={ RECORD_COMPONENT } />
                    <Route path="mySysptom" component={ MYSYSPTOM_COMPONENT } />
                    <Route path="myMedications" component={ MYMEDICATIONS_COMPONENT } />
                    <Route path="myRecordMood" component={ MYRECORDMOOD_COMPONENT } />
                    <Route path="myRecordWithMood" component={ MYRECORDWITHMOOD_COMPONENT } />
                    <Route path="task" component={ ONLINETESTLIST_COMPONENT } />
                    <Route path="taskStart" component={ ONLINETESTART_COMPONENT } />
                    <Route path="taskTest" component={ ONLINETEST_COMPONENT } />
                    <Route path="taskTestResult" component={ ONLINETESTRESULT_COMPONENT } />
                    <Route path="topic" component={ RECORDTOPIC_COMPONENT } />
                    <Route path="presentation" component={ RECORDPRESENTATION_COMPONENT } />
                    <Route path="assess" component={ ASSESS_COMPONENT } />
                    <Route path="myCoupon" component={ MYCOUPON_COMPONENT } />
                </Route>
          </Route>
        </Router>
    </Provider>,
    document.getElementById('body')
);
