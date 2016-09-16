import React, { Component } from 'react';

class ComponentFour extends Component {
  render() {
    //console.log('four', this.props)
    return (
      <div className='sidebar-count'>
        <h2>{this.props.title}</h2>
       {this.props.count}
      </div>
    );
  }
}

export default ComponentFour;
