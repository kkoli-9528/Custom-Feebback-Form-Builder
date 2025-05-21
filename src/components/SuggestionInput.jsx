import ActionButtons from "./ActionButtons";

function SuggestionInput() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-2">
        Do you have any suggestions to improve our website?
      </div>
      <input
        type="text"
        className="w-full border border-gray-300 rounded p-2"
        placeholder="Type your suggestions here..."
      />
      <ActionButtons />
    </div>
  );
}

export default SuggestionInput;
