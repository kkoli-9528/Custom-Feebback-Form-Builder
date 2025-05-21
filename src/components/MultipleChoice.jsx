import { useState } from "react";
import ActionButtons from "./ActionButtons";

function MultipleChoice() {
  const [selected, setSelected] = useState("");

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-2">Multiple choice - 1 answer</div>
      <div className="space-y-2">
        {["Radio 1", "Radio 2", "Radio 3"].map((option) => (
          <div key={option} className="flex items-center">
            <div
              className={`w-4 h-4 rounded-full border border-gray-300 mr-2 flex items-center justify-center ${
                selected === option ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setSelected(option)}
            >
              {selected === option && (
                <div className="w-2 h-2 rounded-full bg-blue-500"></div>
              )}
            </div>
            <div>{option}</div>
          </div>
        ))}
      </div>
      <ActionButtons />
    </div>
  );
}

export default MultipleChoice;
