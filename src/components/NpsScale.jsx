import { useState } from "react";
import ActionButtons from "./ActionButtons";

function NpsScale() {
  const [rating, setRating] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-3">
        How likely is it that you will recommend us to your family and friends?
      </div>
      <div className="flex">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
          <button
            key={num}
            className={`flex-1 border-t border-b border-r first:border-l border-gray-300 py-2 
              ${rating === num ? "bg-blue-500 text-white" : "bg-white"}`}
            onClick={() => setRating(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <ActionButtons />
    </div>
  );
}

export default NpsScale;
