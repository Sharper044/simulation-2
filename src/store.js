import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer1 from './ducks/reducer';

const reducer = combineReducers({
  reducer1: reducer1
});

export default createStore( reducer, composeWithDevTools(applyMiddleware(reduxPromiseMiddleware())));