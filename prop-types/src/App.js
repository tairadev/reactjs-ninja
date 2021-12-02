
import React, { Component } from 'react';
import Button from './button';

class App extends Component {
  render() {
    return (
      <div>
        <Button handleClick={() => alert('teste')} >
          Clica em mim
        </Button>
      </div>
    )
  }
}

export default App;
