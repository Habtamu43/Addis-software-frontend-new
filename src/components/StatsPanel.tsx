import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

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
    <div>
      <h3>Statistics</h3>
      <p>Total Songs: {totalSongs}</p>
      <p>Total Artists: {totalArtists}</p>
      <p>Total Albums: {totalAlbums}</p>
      <h4>Songs by Genre:</h4>
      <ul>
        {genres.map(g => (
          <li key={g.genre}>{g.genre}: {g.count}</li>
        ))}
      </ul>
    </div>
  );
};

export default StatsPanel;
