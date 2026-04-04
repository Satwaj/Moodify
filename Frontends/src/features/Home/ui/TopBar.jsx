import React from "react";
import UserMenu from "../../shared/ui/UserMenu";

const TopBar = () => {
  return (
    <header className="home-navbar">
      <div className="home-navbar__left">
        <div className="home-navbar__hamburger" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div>
          <h1>Tune Into Your Vibe</h1>
          <p>Detect your mood and jump into the perfect soundtrack.</p>
        </div>
      </div>

      <div className="home-navbar__actions">
        <div className="home-navbar__status" aria-label="Live mood session">
          <span className="home-navbar__dot" />
          Live Session
        </div>
        <UserMenu />
      </div>
    </header>
  );
};

export default TopBar;
