import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const notDivisibleBy3and5 = [1,2,4,7,8];
/*
const divisibleBy3 = [3,6,9];
const divisibleBy3 = [5,10,15];
*/

it('Given numbers not divisible by both 3 and 5 should return number', () => {
  //---------------Set up test pack-------------------
  var input = 0;
  var fizzBuzz = CreateApp();
  var expected = 0;
  notDivisibleBy3and5.map((fizzBuzzNumber) => {
    input = fizzBuzzNumber;
    expected = fizzBuzzNumber;
  });
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe(expected);
});

it('Given 3 should return Fizz', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = CreateApp();
  var input = 3;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe('Fizz');
});

it('Given 5 should return Buzz', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = CreateApp();
  var input = 5;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe('Buzz');
});

it('Given 5 should return Buzz', () => {
  //---------------Set up test pack-------------------
  var fizzBuzz = CreateApp();
  var input = 6;
  //---------------Execute Test ----------------------
  var result = fizzBuzz.isfizzbuzz(input);
  //---------------Test Result -----------------------
  expect(result).toBe('Fizz');
});

function CreateApp(){
  return new App();
}
