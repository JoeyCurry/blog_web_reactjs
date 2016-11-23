import * as immutablejs from 'redux-immutablejs';
import Immutable from 'immutable';

import {
    user,
} from './homeReducer';


const rootReducer = immutablejs.combineReducers({
    user,
});

export default rootReducer;
