import React from 'react';


function Joke(props){
    // console.log(props);
    return(

        <div>
            <h3 >Question: {props.question}</h3>
    <h3 >Answer: {props.answer}</h3>
        </div>
    )
}

export default Joke;