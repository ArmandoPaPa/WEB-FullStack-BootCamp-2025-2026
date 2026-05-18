import { v4 as uuid } from 'uuid';
import { useState } from 'react';

function randomEmoji() {
    const choices = ["😀", "😂", "😍", "🤔", "😎", "😭", "😡", "👻", "💩", "🙈"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

export default function EmojiClicker() {
    const [emojis, setEmojis] = useState([{id: uuid(), emoji: randomEmoji()}])
    const addEmoji = () => {
        setEmojis(currentEmojis => [...currentEmojis, {id: uuid(), emoji: randomEmoji()}])
    }
    const deleteEmoji = (id) => {
        console.log(id);
        setEmojis(currentEmojis => currentEmojis.filter(e => e.id !== id))
        // emojis.filter(e => e.id !== id);
    }

    return (
        <div>
            {emojis.map((e) => (
                <span
                    onClick={() => deleteEmoji(e.id)}
                    key={e.id}
                    style={{fontSize: "4rem"}}
                >
                    {e.emoji}
                </span>
            ))}
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    );
}