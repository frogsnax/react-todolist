import React, {useState} from "react";

function Todo(props){

    function handleClick(){
        props.handleDelete(props.index)
    }

    return(
        <div id={props.id} className="todo">
            <h1 className="todo-text">{props.task}</h1>
            <div className="todo-button-container">
                <input type="checkbox" checked={props.completed} className="todo-buttons"/>
                <button onClick={handleClick} className="todo-buttons">X</button>
            </div>
            
        </div>
        
        
    )
}

export default Todo