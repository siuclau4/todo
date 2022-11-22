import axios from "axios";
import React, { useEffect, useState } from "react";
import { ITodoItem } from "./interfaces";
import TodoItem from "./TodoItem";

const BASE_URL = "https://637853f85c477765122f1ffa.mockapi.io/api";

const TodoList = () => {
  const [inputText, setInputText] = useState<string>("");
  const [todoList, setTodoList] = useState<ITodoItem[]>([]);

  const refreshTodoList = async () => {
    try {
      const res = await axios.get(BASE_URL + "/todo", {});
      setTodoList(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const addItem = async () => {
    try {
      const postBody = {
        name: inputText,
      };

      await axios.post(BASE_URL + "/todo", postBody);
      await refreshTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(BASE_URL + "/todo/" + id);
      await refreshTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  const editItem = async (id: string, done: boolean) => {
    try {
      console.log({ done });
      await axios.put(BASE_URL + "/todo/" + id, { done: !done });
      await refreshTodoList();
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    refreshTodoList();
  }, []);

  return (
    <div>
      <h1>Todo list</h1>
      {/* input */}
      <div className="w-full flex space-x-3">
        <input
          className="w-1/3 bg-gray-400"
          maxLength={40}
          onChange={(e) => setInputText(e.target.value)}
        ></input>

        <button
          className="bg-gray-900 text-white rounded-sm p-4"
          onClick={addItem}
        >
          Add
        </button>
      </div>

      {/* list */}
      <div className="space-y-4">
        {!todoList.length ? (
          <div>Loading...</div>
        ) : (
          <>
            {todoList.map((todoItem, todoItemIndex) => (
              <TodoItem
                {...todoItem}
                deleteItem={deleteItem}
                editItem={editItem}
                key={todoItemIndex}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TodoList;
