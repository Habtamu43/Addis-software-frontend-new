<<<<<<< HEAD
import { useDispatch, useSelector } from "react-redux";
import { fetchSongs } from "../features/songs/songSlice";
import { useEffect } from "react";

export default function SongList() {
  const dispatch = useDispatch();
  const songs = useSelector((s: any) => s.songs.list);

  useEffect(() => { dispatch(fetchSongs()); }, []);

  return (
    <ul>
      {songs.map((s: any) => (
        <li key={s._id}>{s.title} - {s.genre}</li>
      ))}
    </ul>
  );
=======
export interface Song {
  _id?: string;
  title: string;
  artist: string;
  album: string;
  genre: string;
>>>>>>> c0868605ac0fd6591830fbb69c420df6b61a5be7
}
