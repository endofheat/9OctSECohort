// useState is a React hook
import { useState } from "react";

// save in MoodChanger.jsx
function MoodChanger() {
  // two variables :
  // mood stores current mood, default happy
  // setMood is a function for updating mood
  const [mood, setMood] = useState("happy");

  return (
    <div className="MoodChanger componentBox">
      Current Mood: {mood}
      {/* Change the mood state by calling setMood
when a button is clicked */}
      <button onClick={() => setMood("tired")}>Stay Up Late</button>
      <button onClick={() => setMood("hungry")}>Skip Lunch</button>
      <button onClick={() => setMood("relaxed")}>Watch Movies</button>
      <button onClick={() => setMood("nervous")}>Public Speaking</button>

    </div>
  );
}

export default MoodChanger;
