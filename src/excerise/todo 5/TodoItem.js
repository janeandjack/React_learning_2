import React from "react"

function dd (){
    console.log("changed");
}
function TodoItem(props) {
    return (
        <div className="todo-item">
            <input 
            type="checkbox" 
            checked={props.item.completed} 
            onChange={dd}/>
            <p>{props.item.text}</p>
        </div>
    )
}

export default TodoItem