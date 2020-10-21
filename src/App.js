import React from "react"
import Joke from './excerise/joke'
import jokesData from "./excerise/jokesData"

function App() {
    const jokeComponents = jokesData.map(joke =>
            <Joke key={joke.id} question={joke.question} answer={joke.answer} / >     )
    

    return (
        <div> 
            {jokeComponents}
  
     
     

   
   
</div>
        
    )
}

export default  App