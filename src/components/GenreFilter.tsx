import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { setGenreFilter } from "../features/songs/songSlice";
import { Input } from "../styles/layout";
import type { AppDispatch } from "../app/store";

const GenreFilter: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const genreFilter = useSelector((state: RootState) => state.songs.genreFilter); // need to add genreFilter in slice

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenreFilter(e.target.value));
  };

  // Get unique genres from the songs state
  const songs = useSelector((state: RootState) => state.songs.songs);
  const genres = Array.from(new Set(songs.map(s => s.genre)));

  return (
    <div style={{ marginBottom: "20px" }}>
      <label>
        Filter by Genre:{" "}
        <select value={genreFilter} onChange={handleChange}>
          <option value="">All</option>
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default GenreFilter;
