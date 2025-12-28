import axios from "axios";
import { Song } from "../features/songs/songTypes";

const BASE_URL = "http://localhost:5000/api/songs";

export const fetchSongs = async () => {
  const res = await axios.get<Song[]>(BASE_URL);
  return res.data;
};

export const createSong = async (song: Omit<Song, "_id">) => {
  const res = await axios.post(BASE_URL, song);
  return res.data;
};

export const updateSong = async (song: Song) => {
  const res = await axios.put(`${BASE_URL}/${song._id}`, song);
  return res.data;
};

export const deleteSong = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
