import React, {useState} from "react";
import {nanoid} from 'nanoid'
import Form from './component/Form'
import Todo from './component/Todo'



// let DATA = ['Good Morning.','Good evening.','Good night.']



function App() {

  const [list, setList] = useState([])

  

  let taskList = list.map((task,index)=> 
    <Todo 
      task={task.name} 
      completed={task.completed}
      id={task.id}
      key={task.id}
      handleDelete={handleDelete}
      index={index}
    />
  )
  
  function handleDelete(i){
    const newArray = [...list]
    console.log(list)
    console.log(newArray)
    newArray.splice(i,1)
    setList(newArray)
    
    
  }
    
  function click(name,completed){
    const newTask = {name:name, completed: completed, id: `Todo ${nanoid()}`}
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


//       form
//         title
//         textbox
//         add 
//       sort tasks
//         all
//         active
//         completed
//       item list
//         name
//         delete
//         mark complete