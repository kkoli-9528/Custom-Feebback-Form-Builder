import { useState } from "react";
import ActionButtons from "./ActionButtons";

function EmojiRating() {
  const [selected, setSelected] = useState(0);
  const emojis = ["😖", "😔", "😐", "🙂", "😄"];

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-2">What is your opinion of this page?</div>
      <div className="flex justify-between">
        {emojis.map((emoji, index) => (
          <div
            key={index}
            className={`text-2xl p-2 cursor-pointer rounded-full 
              ${selected === index ? "bg-gray-200" : ""}`}
            onClick={() => setSelected(index)}
          >
            {emoji}
          </div>
        ))}
      </div>
      <ActionButtons />
    </div>
  );
}

export default EmojiRating;
