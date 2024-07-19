import React, { useState } from "react";
import Track1 from "../mp3/track1.mp3";
import Track2 from "../mp3/track2.mp3";
import Track3 from "../mp3/track3.mp3";
import Track4 from "../mp3/track4.mp3";
import Track5 from "../mp3/track5.mp3";

const MusicPlayerContext = React.createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Better Day",
      file: Track1,
    },
    {
      name: "For Her Chill Upbeat Summel Travel Vlog",
      file: Track2,
    },
    {
      name: "In Slow Motion Inspiring Ambient Lounge",
      file: Track3,
    },
    {
      name: "Perfect Beauty",
      file: Track4,
    },
    {
      name: "Sad Soul Chasing A Feeling",
      file: Track5,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };
