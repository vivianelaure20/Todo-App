
import React, {useState} from 'react';

const TodoItems = ({}) => {

  const [items, setItems] = useState([]);
  

const createTasks =(item)=>{
  
  return <li onClick ={()=> this.delete(item.key)}
  key={item.key}>{item.text}</li>

}

delete(key){
  console.log("key is:" +key);
  this.props.delete(key);
}

 
   var todoEntries = this.state.entries;
   var listItems =todoEntries.map(this.createTasks);

   return(
     <ul className="theList">{listItems}</ul>
   );
 

}

export default TodoItems;