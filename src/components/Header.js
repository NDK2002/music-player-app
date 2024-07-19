import React from "react";
import useMusicPlayer from "../hook/usePlayerProvider";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div>
      <p className="title">{currentTrackName}</p>
    </div>
  );
}

export default Header;
