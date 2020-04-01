import React, { useState } from "react";

const TodoItems = ({}) => {
  const [items, setItems] = useState([]);
  this.createTasks = this.createTasks.bind(this);

  const createTasks = item => {
    return (
      <li onClick={() => setItems.delete(item.key)} key={item.key}>
        {item.text}
      </li>
    );
  };

  const deleteItems = key => {
    console.log("key is:" + key);
    setItems.delete(key);
  };

  var todoEntries = this.state.entries;
  var listItems = todoEntries.map(this.createTasks);

  return <ul className="theList">{listItems}</ul>;
};

export default TodoItems;
