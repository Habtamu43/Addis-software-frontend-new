import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import {
  addSongRequest,
  updateSongRequest,
  setEditingSong,
} from "../features/songs/songSlice";
import { FormContainer, Input, Button } from "../styles/layout";
import type { AppDispatch, RootState } from "../app/store";

const SongForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const editingSong = useSelector((state: RootState) => state.songs.editingSong);

  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  // Populate form if editing
  useEffect(() => {
    if (editingSong) {
      setTitle(editingSong.title);
      setArtist(editingSong.artist);
      setAlbum(editingSong.album);
      setGenre(editingSong.genre);
    } else {
      setTitle("");
      setArtist("");
      setAlbum("");
      setGenre("");
    }
  }, [editingSong]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!title || !artist || !album || !genre) {
      alert("Please fill in all fields");
      return;
    }

    const songData = {
      id: editingSong ? editingSong.id : uuidv4(),
      title,
      artist,
      album,
      genre,
    };

    if (editingSong) {
      dispatch(updateSongRequest(songData));
    } else {
      dispatch(addSongRequest(songData));
    }

    dispatch(setEditingSong(null));
  };

  return (
    <FormContainer>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          alignItems: "center",
        }}
      >
        <Input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <Input placeholder="Artist" value={artist} onChange={(e) => setArtist(e.target.value)} />
        <Input placeholder="Album" value={album} onChange={(e) => setAlbum(e.target.value)} />
        <Input placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} />
        <Button type="submit">{editingSong ? "Update Song" : "Add Song"}</Button>
      </form>
    </FormContainer>
  );
};

export default SongForm;
