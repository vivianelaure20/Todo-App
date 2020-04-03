import React, { useState } from "react";

import TodoItems from "./TodoItems.js";

import "./TodoList.css";

const TodoList = props => {
  const [items, setItems] = useState([]);
  const [taskValue, setTaskValue] = useState("");

  const addItem = () => {
    // These 2 statements do the same thing...
    // const newItems = items.concat(taskValue);
    const newItems = [...items, taskValue];

    // This sets the array with the new item , it is correct :)
    setItems(newItems);

    // Set Task Value to blank
    setTaskValue("");
  };

  const deleteItem = index => {
    console.log("Key", index);
    let newItems = [...items];
    console.log("key", newItems);
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form>
          <input
            placeholder="Enter Task"
            value={taskValue}
            onChange={e => {
              // Sets task value to e.target.value which is the value of the input
              setTaskValue(e.target.value);
            }}
          />
          <button type="button" onClick={addItem}>
            add
          </button>
        </form>
      </div>

      <TodoItems entries={items} deleteItem={deleteItem} />
    </div>
  );
};

export default TodoList;
