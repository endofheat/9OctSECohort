import { useState } from "react";

function EmojiChanger() {
    const [current, updating] = useState("😊");

    return (
        <div className="EmojiChanger componentBox">
            Current emoji:{current}
            <button onClick={() => updating("🐈")}>Change Mood</button>
            <button onClick={() => updating("😊")}>Default Emoji</button>
        </div>
    )
}

export default EmojiChanger;