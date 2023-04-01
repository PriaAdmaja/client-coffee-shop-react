import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import userInfoSlice from "./userInfo";
import cartSlice from "./cart"

const reducers = combineReducers({
    counter: counterSlice,
    userInfo: userInfoSlice,
    cart: cartSlice
   
});

export default reducers;