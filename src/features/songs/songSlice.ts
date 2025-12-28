<<<<<<< HEAD
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "songs",
  initialState: { list: [] as any[] },
  reducers: {
    fetchSongs: () => {},
    setSongs: (s, a) => { s.list = a.payload; }
  }
});

export const { fetchSongs, setSongs } = slice.actions;
export default slice.reducer;
=======
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "./songTypes";

interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Async request actions for Saga
    fetchSongsStart(state) {
      state.loading = true;
      state.error = null;
    },
    addSongRequest(state, action: PayloadAction<Omit<Song, "_id">>) {},
    updateSongRequest(state, action: PayloadAction<Song>) {},
    deleteSongRequest(state, action: PayloadAction<string>) {},

    // Success / error reducers to update state
    fetchSongsSuccess(state, action: PayloadAction<Song[]>) {
      state.songs = action.payload;
      state.loading = false;
    },
    fetchSongsError(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addSong(state, action: PayloadAction<Song>) {
      state.songs.push(action.payload);
    },
    updateSong(state, action: PayloadAction<Song>) {
      state.songs = state.songs.map(s =>
        s._id === action.payload._id ? action.payload : s
      );
    },
    removeSong(state, action: PayloadAction<string>) {
      state.songs = state.songs.filter(s => s._id !== action.payload);
    },
  },
});

export const {
  fetchSongsStart,
  addSongRequest,
  updateSongRequest,
  deleteSongRequest,
  fetchSongsSuccess,
  fetchSongsError,
  addSong,
  updateSong,
  removeSong,
} = songSlice.actions;

export default songSlice.reducer;
>>>>>>> c0868605ac0fd6591830fbb69c420df6b61a5be7
