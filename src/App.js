import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Gallery from './gallery';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Material UI + React</h2>
        </div>
        <div>
          <Gallery/>
        </div>
      </div>
    );
  }
}
