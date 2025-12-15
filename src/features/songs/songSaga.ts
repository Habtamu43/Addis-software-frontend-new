import { call, put, takeEvery } from "redux-saga/effects";
import * as api from "../../api/songApi";
import {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsError,
  addSongRequest,
  updateSongRequest,
  deleteSongRequest,
  addSong,
  updateSong,
  removeSong,
} from "./songSlice";
import { Song } from "./songTypes";

// Fetch songs
function* fetchSongsSaga() {
  try {
    const songs: Song[] = yield call(api.fetchSongs);
    yield put(fetchSongsSuccess(songs));
  } catch (error: any) {
    yield put(fetchSongsError(error.message));
  }
}

// Add song
function* addSongSaga(action: ReturnType<typeof addSongRequest>) {
  try {
    const song: Song = yield call(api.createSong, action.payload);
    yield put(addSong(song));
  } catch (error: any) {
    yield put(fetchSongsError(error.message));
  }
}

// Update song
function* updateSongSaga(action: ReturnType<typeof updateSongRequest>) {
  try {
    const song: Song = yield call(api.updateSong, action.payload);
    yield put(updateSong(song));
  } catch (error: any) {
    yield put(fetchSongsError(error.message));
  }
}

// Delete song
function* deleteSongSaga(action: ReturnType<typeof deleteSongRequest>) {
  try {
    yield call(api.deleteSong, action.payload);
    yield put(removeSong(action.payload));
  } catch (error: any) {
    yield put(fetchSongsError(error.message));
  }
}

// Watch request actions — pass action creators directly, NOT .type
export default function* songSaga() {
  yield takeEvery(fetchSongsStart, fetchSongsSaga);
  yield takeEvery(addSongRequest, addSongSaga);
  yield takeEvery(updateSongRequest, updateSongSaga);
  yield takeEvery(deleteSongRequest, deleteSongSaga);
}
