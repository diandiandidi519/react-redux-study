import counterReducer from '../features/counter/counterSlice';
import { combineReducers } from 'redux';


export default combineReducers({ counter: counterReducer })