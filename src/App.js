import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  isfizzbuzz(input){
    if(input == 3)
      return 'Fizz';
    if(input == 5)
      return 'Buzz';
    return input;
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Fizzbuzz</h2>
        </div>
        <p className="App-intro">
          Is this fizz or buzz or even both?
        </p>
      </div>
    );
  }
}

export default App;
