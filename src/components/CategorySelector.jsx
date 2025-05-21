import { useState } from "react";
import ActionButtons from "./ActionButtons";

function CategorySelector() {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-2">Pick a subject and provide your feedback:</div>
      <div className="flex space-x-3">
        {["Bug", "Content", "Other"].map((option) => (
          <button
            key={option}
            className={`border rounded px-6 py-2 ${
              selected === option
                ? "border-blue-500 bg-blue-50"
                : "border-gray-300"
            }`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <ActionButtons />
    </div>
  );
}

export default CategorySelector;
