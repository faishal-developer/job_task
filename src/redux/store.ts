import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counter/counterSlice";
import { api } from "./apiSlice/apiSlice";
import userReducer from "./userSlice";
// import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    user: userReducer,
    counter: counterReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type appDispatch = typeof store.dispatch;
export default store;
