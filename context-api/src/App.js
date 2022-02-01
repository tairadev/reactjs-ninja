import React, { PureComponent } from 'react';
import MessageList from './components/message-list';
import PropTypes from 'prop-types';

export default class App extends PureComponent {
  constructor() {
    super();

    this.setColor = (color, update) => {
      this.store.color = color;
      update();
    };

    this.store = {
      color: 'purple',
      setColor: this.setColor
    };
  }

  getChildContext() {
    return {
      store: this.store
    };
  }

  render() {
    return (
      <MessageList
        messages={[
          { text: 'hey', color: 'purple' },
          { text: 'ho', color: 'blue' },
          { text: 'let', color: 'red' }
        ]}
      />
    );
  }
}

App.childContextTypes = {
  store: PropTypes.object
};
