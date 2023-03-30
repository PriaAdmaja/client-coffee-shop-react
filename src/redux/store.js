import { configureStore } from "@reduxjs/toolkit";
import {persistStore, persistReducer, PERSIST, FLUSH, REHYDRATE, REGISTER, PAUSE, PURGE} from "redux-persist";
import storage from "redux-persist/lib/storage";

import reducer from "./slices";

const persistConfig = {
    key: "coffee-shop",
    storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (defaultMiddleware) => {
        return defaultMiddleware({
            serializableCheck: {
                ignoreActions: [PAUSE, PERSIST, PURGE, FLUSH, REHYDRATE, REGISTER]
            },
            thunk: false,
        })
    }
})

export const persistore = persistStore(store);
export default store;