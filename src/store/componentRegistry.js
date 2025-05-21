// componentRegistry.js
import React from "react"; // Still needed
import CategorySelector from "../components/CategorySelector";
import CommentBox from "../components/CommentBox";
import EmojiRating from "../components/EmojiRating";
import MultipleChoice from "../components/MultipleChoice";
import NpsScale from "../components/NpsScale";
import StarRating from "../components/StarRating";
import SuggestionInput from "../components/SuggestionInput";

// Create component registry without JSX in the module scope
const componentRegistry = {
  textarea: CommentBox,
  numerical_rating: NpsScale,
  star_rating: StarRating,
  smiley_rating: EmojiRating,
  single_line_input: SuggestionInput,
  radio_button: MultipleChoice,
  categories: CategorySelector,
};

export default componentRegistry;
