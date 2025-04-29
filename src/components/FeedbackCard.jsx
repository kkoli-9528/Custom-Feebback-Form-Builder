const FeedbackCard = ({ label, children }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <label className="block text-gray-700 font-semibold mb-2">{label}</label>
      <div className="mb-4">
        {children}
      </div>
      <div className="flex justify-end space-x-2 text-gray-500">
        <button aria-label="Edit">✏️</button>
        <button aria-label="Delete">🗑️</button>
      </div>
    </div>
  );
};

export default FeedbackCard;