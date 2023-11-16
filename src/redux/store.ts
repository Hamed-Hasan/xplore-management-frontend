import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./dispatch/reducers";
import api from "./api/api";

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
