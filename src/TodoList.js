import React, { useState } from "react";
import TodoItems from "./TodoItems.js";
import "./TodoList.css";

const TodoList = ({}) => {
  const [items, setItems] = useState([]);

  const addItem = e => {
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
  };

  const deleteItem = key => {
    var filteredItems = this.state.items.filter(function(item) {
      return item.key !== key;
    });

    this.setState({
      items: filteredItems
    });
  };

  return (
    <div className="todoListMain">
      <div className="header">
        <form onSubmit={setItems({ addItem })}>
          <input
            items={items}
            onChange={e => setItems(e.target.value)}
            placeholder="Enter Task"
          ></input>
          <button type="submit">add</button>
        </form>
        S
      </div>
      <TodoItems entries={setItems(items)} delete={setItems.deleteItem} />
    </div>
  );
};

export default TodoList;
