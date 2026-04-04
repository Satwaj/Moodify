import React from "react";

const tabs = [
  { key: "home", label: "Home" },
  { key: "vibe", label: "Your Vibe" },
  { key: "library", label: "Library" },
];

const SidebarNav = ({ activeTab, onTabChange }) => {
  return (
    <aside className="home-sidebar">
      <div className="home-brand">
        <img
          src="/moodify-icon.svg"
          alt="Moodify"
          className="home-brand__icon"
        />
        <h2 className="home-logo">Moodify</h2>
      </div>
      <p className="home-tagline">Feel it. Detect it. Play it.</p>
      <nav>
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`home-nav-item ${activeTab === tab.key ? "active" : ""}`}
            onClick={() => onTabChange(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default SidebarNav;
