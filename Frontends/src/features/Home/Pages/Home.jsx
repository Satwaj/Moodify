import React, { useEffect, useMemo, useState } from "react";
import FaceExpression from "../../Expressions/components/FaceExpression";
import Player from "../../Home/Components/Player";
import { useSong } from "../Hooks/useSongs";
import SidebarNav from "../ui/SidebarNav";
import TopBar from "../ui/TopBar";
import SectionCard from "../ui/SectionCard";
import { useLocation, useNavigate } from "react-router";
import "./home.scss";

const moodPicks = ["happy", "sad", "surprised", "calm"];

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("home");
  const { handleGetSong, song, library, handleGetLibrary, handlePlaySong } =
    useSong();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const tab = searchParams.get("tab");

    if (tab === "home" || tab === "vibe" || tab === "library") {
      setActiveTab(tab);
    }
  }, [location.search]);

  useEffect(() => {
    handleGetLibrary();
  }, [handleGetLibrary]);

  const vibeSongs = useMemo(() => {
    if (!library.length) return [];
    if (!song?.mood) return library;
    return library.filter((item) => item.mood === song.mood);
  }, [library, song]);

  const renderSongList = (songs) => {
    if (!songs.length) {
      return <p>No songs available yet.</p>;
    }

    return (
      <div className="home-library-list">
        {songs.map((item) => (
          <button
            key={item._id || item.url}
            className="home-library-item"
            onClick={() => handlePlaySong(item)}
          >
            <img src={item.posterUrl} alt={item.title} />
            <span>
              {item.title} ({item.mood})
            </span>
          </button>
        ))}
      </div>
    );
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    navigate(`/?tab=${tab}`, { replace: true });
  };

  return (
    <main className="home-page">
      <SidebarNav activeTab={activeTab} onTabChange={handleTabChange} />

      <section className="home-main">
        <TopBar />

        {activeTab === "home" ? (
          <div className="home-content">
            <SectionCard title="Face Camera">
              <FaceExpression onDetected={handleGetSong} />
            </SectionCard>

            <SectionCard title="Now Ready">
              {song?.posterUrl ? (
                <div className="home-now-ready-media">
                  <img src={song.posterUrl} alt={song.title} />
                </div>
              ) : null}
              <p>
                {song
                  ? `Selected: ${song.title} (${song.mood})`
                  : "Detect your expression to load a song."}
              </p>
              {song?.mood ? (
                <button
                  className="home-primary-btn"
                  onClick={() => handleGetSong({ mood: song.mood })}
                >
                  Change Music
                </button>
              ) : null}
            </SectionCard>

            <SectionCard title="Quick Mood Picks">
              <p>Tap a mood to instantly switch to matching songs.</p>
              <div className="home-mood-pills">
                {moodPicks.map((mood) => (
                  <button
                    key={mood}
                    className={`home-mood-pill ${song?.mood === mood ? "active" : ""}`}
                    onClick={() => handleGetSong({ mood })}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </SectionCard>
          </div>
        ) : null}

        {activeTab === "vibe" ? (
          <SectionCard
            title={`Your Vibe Songs ${song?.mood ? `(${song.mood})` : ""}`}
            className="home-full-card"
          >
            {renderSongList(vibeSongs)}
          </SectionCard>
        ) : null}

        {activeTab === "library" ? (
          <SectionCard title="All Library Songs" className="home-full-card">
            <button className="home-secondary-btn" onClick={handleGetLibrary}>
              Refresh Library
            </button>
            {renderSongList(library)}
          </SectionCard>
        ) : null}
      </section>

      <Player />
    </main>
  );
};

export default Home;
