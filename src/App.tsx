import React from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import StatsPanel from "./components/StatsPanel";
import GenreFilter from "./components/GenreFilter";
import { AppContainer } from "./styles/layout";

const App: React.FC = () => {
  return (
    <AppContainer>
      <h1>Songs Manager</h1>
      <GenreFilter />
      <SongForm />
      <SongList />
      <StatsPanel />
    </AppContainer>
  );
};

export default App;
