import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Given 1 should return 1', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = new App();
  var input = 1;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe(1);
});

it('Given 2 should return 2', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = new App();
  var input = 2;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe(2);
});

it('Given 3 should return Fizz', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = new App();
  var input = 3;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe('Fizz');
});

it('Given 5 should return Buzz', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = new App();
  var input = 5;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe('Buzz');
});
