import { useState } from "react";
import ActionButtons from "./ActionButtons";

function StarRating() {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="mb-2">Give a star rating for the website.</div>
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <div
            key={star}
            className="cursor-pointer text-3xl"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => setRating(star)}
          >
            {star <= (hoverRating || rating) ? "★" : "☆"}
          </div>
        ))}
      </div>
      <ActionButtons />
    </div>
  );
}

export default StarRating;
