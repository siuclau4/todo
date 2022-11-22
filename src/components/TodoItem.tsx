import React, { FC } from "react";
import { ITodoItem } from "./interfaces";

const TodoItem: FC<ITodoItem> = ({
  createdAt,
  done,
  id,
  name,
  deleteItem,
  editItem,
}) => {
  return (
    <div className="flex space-x-4">
      <div>{`${id} - ${name}`}</div>
      <div>{done ? "done" : "pending"}</div>
      <button
        className="bg-gray-900 text-white rounded-sm p-4"
        onClick={() => deleteItem(id)}
      >
        Delete
      </button>
      <button
        className=" bg-green-500 text-white rounded-sm p-4"
        onClick={() => editItem(id, done)}
      >
        {done ? "Undone" : "Done"}
      </button>
    </div>
  );
};

export default TodoItem;
