import React, { Component } from "react"
import ReactDOM from "react-dom"

// import Button from "./button"
// import Square from "./square"
import Timer from "./timer"

class App extends Component {
    constructor () {
        console.log('constructor')
        super()
        this.state = {
            time: 0,
            showTimer: true
        }
    }

    componentDidMount() {
        console.log('did mount')
    }

    componentWillUnmount() {
        console.log('will unmount')
    }
    
    render() {
        console.log('render')
        return (
            <div>
                {this.state.showTimer && <Timer time={this.state.time} />}
                <button onClick={ () => {
                        this.setState({
                            showTimer: !this.state.showTimer
                        })
                    }}
                >
                    Show / Hide timer
                </button>

                <button 
                    onClick={ () => {
                        this.setState({
                            time: this.state.time + 15
                        })
                    }}
                >
                    Change props
                </button>
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)