import React, { Component } from 'react';

class ComponentXYZ extends Component {
  constructor (props, context) {
    super(props, context)
    this.handleIncrement = this.handleIncrement.bind(this)
    this.handleDecrement = this.handleDecrement.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
  }
  handleIncrement () {
    this.props.incrementCount()
  }
  handleDecrement () {
    this.props.decrementCount()
  }
  handleTextChange () {
    const title = this.refs.title.value
    this.props.changeTitle(title)
  }
  render() {
    //console.log(this.props)
    return (
      <div>

        <h1>Current Count = {this.props.count}</h1>

        <button onClick={this.handleIncrement}>
          Increment Count
        </button>
        <button onClick={this.handleDecrement}>
          Decrement Count
        </button>
        <br/>
        <br/>
        <hr/>
        <h1>Change the sidebar title</h1>
        <input value={this.props.title} onChange={this.handleTextChange} ref='title' />
        <br/>
        <br/>
      </div>
    );
  }
}

export default ComponentXYZ;
