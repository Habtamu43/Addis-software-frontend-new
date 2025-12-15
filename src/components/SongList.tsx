import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSongsStart, removeSong } from "../features/songs/songSlice";
import { RootState } from "../app/store";
import { Table, Button } from "../styles/layout";

const SongList: React.FC = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state: RootState) => state.songs.songs);

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  const handleDelete = (id?: string) => {
    if (id) dispatch(removeSong(id));
  };

  return (
    <Table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>Genre</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {songs.map(song => (
          <tr key={song._id}>
            <td>{song.title}</td>
            <td>{song.artist}</td>
            <td>{song.album}</td>
            <td>{song.genre}</td>
            <td>
              <Button onClick={() => handleDelete(song._id)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default SongList;
