import { useState } from "react";
import Pin from "../assets/images/pin.png";
import Delete from "../assets/images/delete.png";

function Todo({
  id,
  title,
  completed,
  toggleCompleted,
  removeTodo,
  togglePin,
  updateDescription,
  pinned,
  description = "",
}) {
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [tempDescription, setTempDescription] = useState(description);

  const handleDescriptionSave = () => {
    updateDescription(id, tempDescription);
    setIsEditingDescription(false);
  };

  return (
    <div className="p-4 mt-4 border-2 rounded-xl text-white bg-purple-600 relative">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={completed}
            onChange={() => toggleCompleted(id)}
          />
          <p className={`${completed ? "line-through text-gray-300" : ""}`}>
            {title}
          </p>
        </div>
        <div className="flex flex-col items-end gap-1">
          <button
            onClick={() => removeTodo(id)}
            className=" bg-purple-600 text-sm rounded-xl px-1 py-1 leading-none block absolute -right-4 -top-4"
          >
            <div className="w-2 ">
              <img src={Delete} className="w-full h-full block" />
            </div>
          </button>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setIsEditingDescription(!isEditingDescription)}
              className="bg-white text-purple-600 text-sm rounded-xl px-3 py-1 leading-none block"
            >
              {isEditingDescription ? "Cancel" : "Description"}
            </button>
            <button
              onClick={() => togglePin(id)}
              className={`${
                pinned
                  ? " text-white bg-white"
                  : "bg-purple-600 text-purple-600"
              } text-sm rounded-xl px-1 py-1 leading-none block`}
            >
              <div className="w-3">
                <img src={Pin} className="w-full block h-full" />
              </div>
            </button>
          </div>
        </div>
      </div>
      {isEditingDescription ? (
        <div className="mt-4">
          <textarea
            value={tempDescription}
            onChange={(e) => setTempDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            onClick={handleDescriptionSave}
            className="bg-white text-purple-600 mt-2 px-3 py-1 rounded"
          >
            Save Description
          </button>
        </div>
      ) : (
        description && <p className="mt-2 text-gray-200">{description}</p>
      )}
    </div>
  );
}

export default Todo;
