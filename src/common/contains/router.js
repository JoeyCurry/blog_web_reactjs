import ReactDOM from 'react-dom';
import React from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import Store from '../stores/Store';
import Index from './index';
import {
    HOMEPAGEINDEX_COMPONENT,
    EDITMARKDOWN_COMPONENT,
    REGISTER_COMPONENT
} from '../routerNav';

global.Navigator = hashHistory;
ReactDOM.render(
    <Provider store={Store}>
        <Router history={hashHistory}>
          <Route path="/" component={Index}>
                <IndexRoute component={HOMEPAGEINDEX_COMPONENT} /> {/*首页*/}
                <Route path="register" component={REGISTER_COMPONENT}></Route> {/*注册*/}

          </Route>
        </Router>
    </Provider>,
    document.getElementById('body')
);
