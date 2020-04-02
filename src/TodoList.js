import React, { useState } from "react";
import TodoItems from "./TodoItems.js";
import "./TodoList.css";

const TodoList = ({}) => {
  const [texts, setTexts] = useState([]);

  const Note = ({ item, onChange }) => {
    return <li onChange={e => setTexts(e.target.value)}></li>;
  };
  const addItem = e => {
    if (texts.value !== "") {
      var newItem = {
        text: texts.value,
        key: Date.now()
      };

      texts.useState(prevState => {
        return {
          item: prevState.texts.concat(newItem)
        };
      });
    }
    texts.value = "";
    console.log(this.state.texts);
    e.preventDefault();

    // reset text state here
  };

  const deleteItem = key => {
    console.log("Key", key);
    let newItems = [...texts];
    console.log("key", newItems);
    newItems.splice(key, 1);
    setTexts(newItems);
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={setTexts.addItem}>
          <input placeholder="Enter Task"></input>
          <button type="submit" onChange={addItem}>
            add
          </button>
        </form>
      </div>
      <Note entries={setTexts.newItems} deleteItem={setTexts.deleteItem} />
    </div>
  );
};

export default TodoList;
