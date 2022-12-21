import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Navbar extends Component {
 
 constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }
  render() {
    return (
      <div>
        <button onClick={() => this.setState({ value: this.state.value + 1 })}>
          click me
        </button>
        <br />
        <label>{this.state.value}</label>
      </div>
    );
  }
}
