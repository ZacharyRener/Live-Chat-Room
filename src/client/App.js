import React, { Component } from 'react';
import './app.css';
import Messenger from './messenger.js';

export default class App extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {


  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        <Messenger />
      </div>
    );
  }
}
