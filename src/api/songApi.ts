import axios from "axios";
import { Song } from "../features/songs/songTypes";

// Fallback prevents crash if env is missing
const BASE_URL =
  `${import.meta.env.VITE_API_BASE_URL ?? "https://addis-software-backend-new.onrender.com"}/api/songs`;

export const fetchSongs = async () => {
  const res = await axios.get<Song[]>(BASE_URL);
  return res.data;
};

export const createSong = async (song: Omit<Song, "id">) => {
  const res = await axios.post(BASE_URL, song);
  return res.data;
};

export const updateSong = async (song: Song) => {
  const res = await axios.put(`${BASE_URL}/${song.id}`, song);
  return res.data;
};

export const deleteSong = async (id: string) => {
  const res = await axios.delete(`${BASE_URL}/${id}`);
  return res.data;
};
