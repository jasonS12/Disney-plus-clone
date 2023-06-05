import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from "../features/user/userslice";
import movieReducer from "../features/user/userslice";

export default configureStore({
    reducer:{
        user : userReducer,
        movie : movieReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false,
    }),
});
