import React, {useState} from "react";

function Todo(props){

    // Call handleDelete with props.index
    function handleClick(){
        props.handleDelete(props.index)
    }

    function check(){
        props.handleCheck(props.index)
    }

    return(
        <div id={props.id} className={props.completed ? 'complete-todo':'incomplete-todo'}>
            <p className="todo-text">{props.task}</p>
            
            <input type="checkbox" checked={props.completed} id="checkbox" onClick={check}/>
            <button onClick={handleClick} id='delete'>X</button>
            
            
        </div>
        
        
    )
}

export default Todo