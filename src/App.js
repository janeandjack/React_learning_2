import React from 'react'
import TodoItem from "./excerise/todo phase 3/TodoItem"
import todosData from "./excerise/todo phase 3/tpdosData"

function App(){
    const appp = todosData.map(toood =>
        <TodoItem key={toood.id} ee={toood}  />)
        
    return(
        <div className="todo-list">
           {appp}

        </div>
    )
}

export default App