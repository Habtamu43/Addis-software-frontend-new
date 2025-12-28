import React from "react";

const GenreFilter: React.FC = () => {
  // This is a placeholder; connect to Redux later
  return (
    <div>
      <label>Filter by Genre: </label>
      <select>
        <option value="">All</option>
        <option value="Rock">Rock</option>
        <option value="Pop">Pop</option>
        <option value="Jazz">Jazz</option>
      </select>
    </div>
  );
};

export default GenreFilter;
