import React, { Component } from 'react';
import ComponentThree from './_ComponentThree'

class ComponentTwo extends Component {
  render() {
    return (
      <div>
        <ComponentThree />
      </div>
    );
  }
}

export default ComponentTwo;
