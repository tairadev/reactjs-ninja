import React, { PureComponent } from 'react';

export default class App extends PureComponent {

  constructor() {
    super()
    this.state = {
      color: { otherColor: 'purple' }
    }
  }

  render() {
    return (
      <div>
        <span>Color name: {this.state.color.otherColor}</span>
        <br />
        <button onClick={() => this.setState({ color: 'black' })} >
          Change color to black
        </button>
      </div>
    )
  }
}

