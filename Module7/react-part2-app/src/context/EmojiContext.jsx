import React from "react";
import { useState, useContext } from "react";

// 1. Create the context
const EmojiContext = React.createContext();
// Custom provider component for this context.
// Use it in App.jsx like <UserProvider>...</UserProvider>
export const EmojiProvider = (props) => {
  // store the current user in state at the top level
  const [mood, setMood] = useState("sad");
  // sets user object in state, shared via context
  const handleUpdateMood = (mood) => {
    setMood(mood);
  };

  // 2. Provide the context.
  // The Provider component of any context (EmojiContext.Provider)
  // sends data via its value prop to all children at every level.
  // We are sending both the current user and an update function
  return (
    <EmojiContext.Provider value={{ mood, handleUpdateMood }}>
      {props.children}
    </EmojiContext.Provider>
  );
};
// 3. Use the context. This custom hook allows easy access
// of this particular context from any child component
export const useEmojiContext = () => {
  return useContext(EmojiContext);
};
// Save as EmojiContext.jsx in a separate 'context' folder
