import React, { Component } from 'react';

class ComponentFour extends Component {
  render() {
    //console.log('four', this.props)
    return (
      <div>
       {this.props.count}
      </div>
    );
  }
}

export default ComponentFour;
