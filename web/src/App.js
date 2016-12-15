import React, { Component } from 'react';
import fetch from 'isomorphic-fetch'

const url = process.env.REACT_APP_API

const App = React.createClass({
  getInitialState() {
    return {
      message: 'loading'
    }
  },
  componentDidMount() {
    fetch(url)
      .then(res => res.json())
      .then(data => this.setState(data))
  },
  render() {
    return (
      <div className="App">
        <h1>{this.state.message}</h1>
      </div>
    );
  }
})

export default App
