import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import { createStore, applyMiddleware, combineReducers } from 'redux';

const createStoreWithThunk = applyMiddleware(thunk)(createStore);
const store = createStoreWithThunk(rootReducer);

export default store;
