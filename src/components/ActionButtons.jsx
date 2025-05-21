import { Pencil, Trash2 } from "lucide-react";

function ActionButtons() {
  return (
    <div className="flex justify-end mt-2 text-gray-500">
      <Pencil
        className="w-5 h-5 cursor-pointer mr-2"
        style={{ marginRight: "15px" }}
      />
      <Trash2
        className="w-5 h-5 cursor-pointer"
        style={{ marginRight: "6px" }}
      />
    </div>
  );
}

export default ActionButtons;
