import React from "react";

// This can be declared as a separate components as we pass state to it
const Task = props => {
  return <li onClick={props.onClick}>{props.item}</li>;
};

const TodoItems = props => {
  return (
    <ul className="theList">
      {props.entries.map((item, index) => (
        <Task key={index} item={item} onClick={() => props.deleteItem(index)} />
      ))}
    </ul>
  );
};

export default TodoItems;

// These are all the same
/*
function doThing() {
  return "thing";
}

const doThing = () => {
  return "thing";
};

const doThing = () => "thing";
*/
