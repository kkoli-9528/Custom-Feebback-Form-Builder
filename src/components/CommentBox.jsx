import ActionButtons from "./ActionButtons";

function CommentBox() {
  return (
    <div className="w-full bg-white rounded-lg shadow p-3 text-start">
      <div className="mb-2">Would you like to add a comment?</div>
      <textarea
        className="w-full border border-gray-300 rounded p-2 h-24"
        placeholder="Type your comment here..."
      />
      <ActionButtons />
    </div>
  );
}

export default CommentBox;
