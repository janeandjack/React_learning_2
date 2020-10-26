import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.dd = this.dd.bind(this)
    }

    dd(){
        this.setState(ddd =>{
            return{
                count: ddd.count + 1
            }
        })
    }
render(){
    return(
        <div>
            <h1>{this.state.count}</h1>
            <button onClick={this.dd}>click</button>
        </div>
    )
}
}

export default App