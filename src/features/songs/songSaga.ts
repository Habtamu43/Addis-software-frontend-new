import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import { fetchSongs, setSongs } from "./songSlice";

function* getSongs() {
  const res = yield call(() => axios.get("http://localhost:5000/api/songs"));
  yield put(setSongs(res.data));
}

export default function* saga() {
  yield takeEvery(fetchSongs.type, getSongs);
}
