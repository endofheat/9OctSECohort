import { useContext, useState } from "react";
import { useEmojiContext } from "../context/EmojiContext";

function EmojiChanger() {
    //const [current, updating] = useState("😊");
    const { mood, handleUpdateMood } =useEmojiContext();
    console.log(mood)
    return (
        <div className="EmojiChanger componentBox">
            Current emoji:{mood}
            {/* <button onClick={() => handleUpdateMood("🐈")}>Change Mood</button>
            <button onClick={() => handleUpdateMood("😊")}>Default Emoji</button> */}
            <button onClick={() => handleUpdateMood("sad")}>Change Mood</button>
            <button onClick={() => handleUpdateMood("cat")}>Default Emoji</button>
        </div>
    )
}

export default EmojiChanger;