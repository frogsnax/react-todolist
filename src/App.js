import React, {useState} from "react";
import {nanoid} from 'nanoid'
import Form from './component/Form'
import Todo from './component/Todo'


let done = []
let notDone = []


function App() {
  // Initialize an empty array to store item objects.
  const [list, setList] = useState([])
  
  // loop through list and create a component for each array item. Stick these components into taskList
  let taskList = list.map((task,index)=> 
    <Todo 
      task={task.name} 
      completed={task.completed}
      id={task.id}
      key={task.id}
      handleDelete={handleDelete}
      handleCheck={handleCheck}
      index={index}
    />
  )

  // make a copy of list. Remove item with index matching i. Run setlist to make list match the value of newArray.
  function handleDelete(i){
    const newArray = [...list]
    newArray.splice(i,1)
    setList(newArray)
  }
  // Make a copy of list. Edit completed property of item with index matching i. Run setList to make list match the value of newArray.
  function handleCheck(i){
    const newArray = [...list]
    newArray[i].completed = !newArray[i].completed
    setList(newArray)
  }

  // Create new obj with infor handed from Form. Stick this new obj onto the end of list.
  function click(name){
    const newTask = {name:name, completed: false, id: `Todo ${nanoid()}`}
    setList(list.concat(newTask))
  }
  
  return (
    <div className="App">
      <Form click = {click}/>
      <div id="todo-container">
        {taskList}
      </div>
    </div>
  );
}

export default App;
