import React from 'react'

function TodoItem(props){
    return(
        <div className="todo-item">
            <input type="checkbox"  checked={props.ee.completed}/>      
    <p> {props.ee.text}</p>
             </div>
    )
}

export default TodoItem