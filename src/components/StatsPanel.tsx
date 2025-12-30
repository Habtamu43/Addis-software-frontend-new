import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import styled from "@emotion/styled";

const Panel = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  margin-top: 20px;
`;

const Card = styled.div`
  flex: 1 1 150px;
  background-color: #f4f4f4;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  text-align: center;
`;

const StatsPanel: React.FC = () => {
  const songs = useSelector((state: RootState) => state.songs.songs);

  const totalSongs = songs.length;
  const totalArtists = new Set(songs.map(s => s.artist)).size;
  const totalAlbums = new Set(songs.map(s => s.album)).size;
  const genres = Array.from(new Set(songs.map(s => s.genre))).map(genre => ({
    genre,
    count: songs.filter(s => s.genre === genre).length,
  }));

  return (
    <Panel>
      <Card>
        <h4>Total Songs</h4>
        <p>{totalSongs}</p>
      </Card>
      <Card>
        <h4>Total Artists</h4>
        <p>{totalArtists}</p>
      </Card>
      <Card>
        <h4>Total Albums</h4>
        <p>{totalAlbums}</p>
      </Card>
      {genres.map(g => (
        <Card key={g.genre}>
          <h4>{g.genre}</h4>
          <p>{g.count}</p>
        </Card>
      ))}
    </Panel>
  );
};

export default StatsPanel;
