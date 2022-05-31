import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';

import counterReducer from './counter';

const reducer = combineReducers({ counter: counterReducer })

export const store = createStore(reducer, applyMiddleware(thunk));

export default store;