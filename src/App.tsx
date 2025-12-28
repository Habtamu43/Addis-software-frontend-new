<<<<<<< HEAD
import SongList from "./components/SongList";

export default function App() {
  return (
    <>
      <h1>Songs</h1>
      <SongList />
    </>
  );
}
=======
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
>>>>>>> c0868605ac0fd6591830fbb69c420df6b61a5be7
