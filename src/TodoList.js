import React, { useState } from "react";
import TodoItems from "./TodoItems.js";
import "./TodoList.css";

const TodoList = ({}) => {
  const [items, setItems] = useState([]);
  // use this in the on change of input
  // also use text in the value of input
  // const [text, setText] = useState("");

  const addItem = e => {
    // this. does not exist, neither does _inputElement
    if (this._inputElement.value !== "") {
      var newItem = {
        text: this._inputElement.value,
        key: Date.now()
      };

      // this. and setState do not exist, use a useState var
      this.setState(prevState => {
        return {
          items: prevState.items.concat(newItem)
        };
      });
    }
    
    
    this._inputElement.value = "";
    console.log(this.state.items);
    e.preventDefault();
    
    // reset text state here
  };

  // TodoItems duplicates the delete function, you should use this one and not the one in the other component
  // Extract it like this ({deleteItem})
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
        <form onSubmit={setItems.addItem}>
          <input
            // This should not be here, set it to another state variable
            onChange={e => setItems(e.target.value)}
            placeholder="Enter Task"
          ></input>
          <button type="submit" onClick={addItem}>
            add
          </button>
        </form>
      </div>
      // Spelling Fix 
      <TodoItems entries={setItems.newItem} deleteItem={setItems.deleteItem} />
    </div>
  );
};

export default TodoList;
