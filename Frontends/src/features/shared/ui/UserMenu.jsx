import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../auth/hooks/useAuth";
import "./UserMenu.scss";

const UserMenu = () => {
  const [open, setOpen] = useState(false);
  const { user, handleLogout } = useAuth();
  const navigate = useNavigate();

  const avatarLabel = useMemo(() => {
    const source = user?.username || user?.email || "U";
    return source.slice(0, 1).toUpperCase();
  }, [user]);

  const handleLogoutClick = async () => {
    await handleLogout();
    setOpen(false);
    navigate("/login");
  };

  const handlePlaylistClick = () => {
    setOpen(false);
    navigate("/?tab=library");
  };

  return (
    <div className="user-menu">
      <button
        type="button"
        className="user-menu__trigger"
        onClick={() => setOpen((value) => !value)}
        aria-label="Open user menu"
      >
        <span className="user-menu__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path d="M20 21a8 8 0 0 0-16 0" />
            <circle cx="12" cy="8" r="4" />
          </svg>
        </span>
        <span className="user-menu__badge">{avatarLabel}</span>
      </button>

      {open ? (
        <div className="user-menu__panel">
          <div className="user-menu__header">
            <strong>{user?.username || "Guest"}</strong>
            <span>{user?.email || "Moodify account"}</span>
          </div>

          <div className="user-menu__actions">
            {user ? (
              <>
                <button type="button" onClick={handlePlaylistClick}>
                  My Playlist
                </button>
                <button type="button" onClick={() => navigate("/?tab=vibe")}>
                  My Vibe
                </button>
                <button
                  type="button"
                  className="danger"
                  onClick={handleLogoutClick}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" onClick={() => setOpen(false)}>
                  Login
                </Link>
                <Link to="/register" onClick={() => setOpen(false)}>
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default UserMenu;
