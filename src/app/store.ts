import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "../features/songs/songSlice";
import rootSaga from "./rootSaga";

// 1️⃣ Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// 2️⃣ Configure the store
export const store = configureStore({
  reducer: { songs: songReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// 3️⃣ Run the root saga
sagaMiddleware.run(rootSaga);

// 4️⃣ Export types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
