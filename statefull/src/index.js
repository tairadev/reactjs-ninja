import React, { Component } from "react"
import ReactDOM from "react-dom"

import Button from "./button"
import Square from "./square"

class App extends Component {
    constructor () {
        super()
        this.state = {
            color: 'green'
        }
    }
    
    render() {
        return (
            <div>
                <Square color={this.state.color} />

                {['red', 'green', 'blue'].map((color) => (
                    <Button 
                        key={color} 
                        handleClick={() => this.setState({ color: color })} 
                    >
                        {color}
                    </Button>
                ))}
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)