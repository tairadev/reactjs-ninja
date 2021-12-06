import React, { Component } from 'react';

class Plugin extends Component {

    constructor() {
        super();
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick () {
        this.myInput.focus()
    }

    render() {
        return (
            <div>
                {/* Só pode usar o nó em class components */}
                <input type='text' ref={(node) => (this.myInput = node) } />
                <button onClick={ this.handleClick }>Focus</button>
            </div>
        )
    }
}

export default Plugin