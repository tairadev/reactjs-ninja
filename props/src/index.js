import React, { Component } from "react"
import ReactDOM from "react-dom"

import Title from './title'
import Square from './square'
import Button from './button'
import LikeButton from './like-button'
import SearchButton from './search-button'

class App extends Component {
    render() {
        return (
            <div>
                <Title name="Taira" age={20} />
                {['blue', 'yellow', 'green'].map((square, index) => {
                    return <Square key={index} color={square} />
                })}

                <Button>
                    <span>
                        Texto
                    </span>
                </Button>

                <LikeButton />

                <SearchButton />
                
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)