import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSong } from "../features/songs/songSlice";
import { FormContainer, Input, Button } from "../styles/layout";

const SongForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [album, setAlbum] = useState("");
  const [genre, setGenre] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !artist || !album || !genre) return;
    dispatch(addSong({ title, artist, album, genre }));
    setTitle(""); setArtist(""); setAlbum(""); setGenre("");
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <Input placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <Input placeholder="Artist" value={artist} onChange={e => setArtist(e.target.value)} />
        <Input placeholder="Album" value={album} onChange={e => setAlbum(e.target.value)} />
        <Input placeholder="Genre" value={genre} onChange={e => setGenre(e.target.value)} />
        <Button type="submit">Add Song</Button>
      </form>
    </FormContainer>
  );
};

export default SongForm;
