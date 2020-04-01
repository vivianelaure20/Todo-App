import React, { useState } from "react";

// This can be declared as a separate components as we pass state to it
const Task = ({ item, onClick}) => {
  return (
    <li onClick={onClick}>
      {item.text}
    </li>
  );
};

const TodoItems = (props) => {
  const [items, setItems] = useState([]);
  
  // we pass the index of the item to be removed
  const deleteItem = index => {
    console.log("Index", index);
    
    // This is called a spread operator, it creates a new array from the old one
    // Look up how it works
    let newItems = [...items];
    
    // Splice can either remove or add items to an array
    // Reference: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
    newItems.splice(index, 1)
   
    // Set the new items
    setItems(newItems)
  };
  
  return <ul className="theList">{items.map((x, i) => <Task key={i} item={x} onClick={() => deleteItem(i)} />)}</ul>;
};

export default TodoItems;
