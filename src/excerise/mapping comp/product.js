import React from 'react'

function prode (props){
    // console.log(props);
    return(
        
        <div>
            <h2>{props.prod.name}</h2>
            <h3>{props.prod.price.toLocaleString("en-Us", { style: "currency", currency: "USD"})} 
            - <br/>{props.prod.description} </h3>

          
        </div>
    )
}

export default prode