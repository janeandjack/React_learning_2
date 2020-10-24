import React from "react"

class App extends React.Component {

    constructor(){
        super()
        this.state = { 
            answer: "Yes",
            uu: "no"
         }

    }
    render() {
        return (
            <div>
                <h1>Is state important to know? <br/>{this.state.answer}{this.state.uu}</h1>
                {/* <ChildComponent answer={this.state.answer}/> */}
            </div>
        )
    }
}

export default App