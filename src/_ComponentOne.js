import React, { Component } from 'react';
import ComponentTwo from './_ComponentTwo'

class ComponentOne extends Component {
  render() {
    return (
      <div>
        <ComponentTwo />
      </div>
    );
  }
}

export default ComponentOne;
