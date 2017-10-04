import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fizzOrBuzz: ''
    };
  }

  _setState = (state) => {
    this.setState(state, () => {});
  }

  _divisibleBy = (input, divisableBy) => {
    return input % divisableBy === 0;
  }

  isfizzbuzz = (event) => {
    const input = event.target.value;

    if(this._divisibleBy(input, 3)){
      this._setState({ fizzOrBuzz: 'Fizz' });
      return ;
    }

    if(this._divisibleBy(input, 5)){
      this._setState({ fizzOrBuzz: 'Buzz' });
      return;
    }

    this._setState({ fizzOrBuzz: input });
}
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Fizzbuzz</h1>
        </header>
        <p className="App-intro">
          Is this <b>Fizz</b> or <b>Buzz</b> or even <b>FizzBuzz</b>?
        </p>

        <input type="text" id="name" onChange={this.isfizzbuzz} />
         <h3 className="fizz-or-buzz">{ this.state.fizzOrBuzz }</h3>
      </div>
    );
  }
}
