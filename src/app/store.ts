import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import songReducer from "../features/songs/songSlice";
import rootSaga from "./rootSaga";

<<<<<<< HEAD
const saga = createSagaMiddleware();

export const store = configureStore({
  reducer: { songs: songReducer },
  middleware: g => g({ thunk: false }).concat(saga)
});

saga.run(rootSaga);
=======
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: { songs: songReducer },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
>>>>>>> c0868605ac0fd6591830fbb69c420df6b61a5be7
