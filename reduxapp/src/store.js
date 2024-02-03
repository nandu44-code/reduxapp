import { legacy_createStore,applyMiddleware } from "redux";
// import {configureStore} from "redux-toolkit";
import { thunk } from "redux-thunk";

import taskReducer from './reducers/taskReducer';

const store = legacy_createStore(
    taskReducer,
    applyMiddleware(thunk)
)

export default store