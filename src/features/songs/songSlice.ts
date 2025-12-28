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
