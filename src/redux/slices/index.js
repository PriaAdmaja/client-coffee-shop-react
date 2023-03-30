import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import userInfoSlice from "./userInfo";

const reducers = combineReducers({
    counter: counterSlice,
    userInfo: userInfoSlice,
   
});

export default reducers;