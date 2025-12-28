import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "../features/songs/songSlice";
import rootSaga from "./rootSaga";

const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { songs: songReducer },
  middleware: g => g({ thunk: false }).concat(saga)
});

saga.run(rootSaga);
