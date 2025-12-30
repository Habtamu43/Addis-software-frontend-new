import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Song } from "./songTypes";

interface SongState {
  songs: Song[];
  loading: boolean;
  error: string | null;
  genreFilter: string;
  editingSong: Song | null; // <-- add editingSong
}

const initialState: SongState = {
  songs: [],
  loading: false,
  error: null,
  genreFilter: "",
  editingSong: null, // default = not editing
};

const songSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    // Saga triggers
    fetchSongsStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    addSongRequest: (state, action: PayloadAction<Omit<Song, "_id">>) => {},
    updateSongRequest: (state, action: PayloadAction<Song>) => {},
    deleteSongRequest: (state, action: PayloadAction<string>) => {},

    // Reducers for updating state after API success
    fetchSongsSuccess: (state, action: PayloadAction<Song[]>) => {
      state.songs = action.payload;
      state.loading = false;
    },
    addSong: (state, action: PayloadAction<Song>) => {
      state.songs.push(action.payload);
    },
    updateSong: (state, action: PayloadAction<Song>) => {
      const index = state.songs.findIndex(s => s.id === action.payload.id);
      if (index !== -1) state.songs[index] = action.payload;
      state.editingSong = null; // clear editing after update
    },
    removeSong: (state, action: PayloadAction<string>) => {
      state.songs = state.songs.filter(s => s.id !== action.payload);
    },
    fetchSongsError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },

    // Genre filter
    setGenreFilter: (state, action: PayloadAction<string>) => {
      state.genreFilter = action.payload;
    },

    // New reducer to set which song is being edited
    setEditingSong: (state, action: PayloadAction<Song | null>) => {
      state.editingSong = action.payload;
    },
    
  },
});

export const {
  fetchSongsStart,
  fetchSongsSuccess,
  fetchSongsError,
  addSongRequest,
  updateSongRequest,
  deleteSongRequest,
  addSong,
  updateSong,
  removeSong,
  setGenreFilter,
  setEditingSong, // <-- export this for SongForm
} = songSlice.actions;

export default songSlice.reducer;
