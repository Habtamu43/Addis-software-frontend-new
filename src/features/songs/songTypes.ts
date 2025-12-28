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
}
