import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import StatsPanel from "./components/StatsPanel";
import GenreFilter from "./components/GenreFilter";
import { AppContainer, Title, Section } from "./styles/layout";
import { fetchSongsStart } from "./features/songs/songSlice";
import type { AppDispatch } from "./app/store";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchSongsStart());
  }, [dispatch]);

  return (
    <AppContainer>
      <div>
        <Title>🎵 Songs Manager</Title>

        <Section>
          <GenreFilter />
        </Section>

        <Section>
          <SongForm />
        </Section>

        <Section>
          <SongList />
        </Section>

        <Section>
          <StatsPanel />
        </Section>
      </div>
    </AppContainer>
  );
};

export default App;
