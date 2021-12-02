import React, { Component } from "react"
import ReactDOM from "react-dom"

class App extends Component {
    constructor (props) {
        super()
        this.state = {
            text: 'Guilherme'
        }
    }
    
    render() {
        return (
            <div 
                className="container" 
                onClick={
                    () => this.setState({
                        text: 'Outro texto'
                    })
                }
            >
                {this.state.text}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)