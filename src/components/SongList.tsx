import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../app/store";
import { setEditingSong, deleteSongRequest } from "../features/songs/songSlice";
import { Table, Button } from "../styles/layout";

const SongList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const songs = useSelector((state: RootState) => state.songs.songs);
  const genreFilter = useSelector((state: RootState) => state.songs.genreFilter);

  const filteredSongs = genreFilter
    ? songs.filter((song) => song.genre === genreFilter)
    : songs;

  if (filteredSongs.length === 0)
    return <p style={{ textAlign: "center", fontStyle: "italic" }}>No songs available.</p>;

  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th style={{ textAlign: "center" }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {filteredSongs.map((song) => (
          <tr key={song.id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
              <Button
                style={{ backgroundColor: "#fbbf24" }}
                onClick={() => dispatch(setEditingSong(song))}
              >
                Edit
              </Button>
              <Button
                style={{ backgroundColor: "#ef4444" }}
                onClick={() => dispatch(deleteSongRequest(song.id))}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SongList;
