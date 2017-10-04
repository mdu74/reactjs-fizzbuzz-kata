import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

const notDivisibleBy3and5 = [1,2,4,7,8];
const divisibleBy3 = [3,6,9,12];
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

it('Given numbers divisible by 3 should return Fizz', () => {
  //---------------Set up test pack-------------------
  var input = 0;
  var fizzBuzz = CreateApp();
  divisibleBy3.map((fizzBuzzNumber) => {
    input = fizzBuzzNumber;
  });
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

function CreateApp(){
  return new App();
}
=======
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

describe('App', ()=>{
  it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<App />, div);
  });

  const notDivisibleBy3and5 = [1,2,4,7,8];
  const divisibleBy3 = [3,6,9,12];
  const divisibleBy5 = [5,10,20];

  fit('Given numbers not divisible by both 3 and 5 should return number', () => {
    //---------------Set up test pack-------------------
    var event = {
      target: 0
    };
    //var input = event.target;

    var fizzBuzzApp = CreateApp();
    var expected = 0;
    var fizzBuzzHeader = ReactTestUtils.renderIntoDocument(<App />);
    //notDivisibleBy3and5.map((fizzBuzzNumber) => {
    //  event.target = fizzBuzzNumber;
    //  expected = fizzBuzzNumber;
    //});
    //---------------Execute Test ----------------------
    fizzBuzzApp.isfizzbuzz(event);
    var fizzOrBuzzClass = ReactTestUtils.findRenderedDOMComponentWithClass(fizzBuzzHeader, 'fizz-or-buzz');
    //---------------Test Result -----------------------
    expect("Through my fizzBuzzApp: ", fizzOrBuzzClass.textContent).toBe(expected);
  });

  it('Given numbers divisible by 3 should return Fizz', () => {
    //---------------Set up test pack-------------------
    var input = 0;
    var fizzBuzz = CreateApp();
    divisibleBy3.map((fizzBuzzNumber) => {
      input = fizzBuzzNumber;
    });
    //---------------Execute Test ----------------------
    var result = fizzBuzz.isfizzbuzz(input);
    //---------------Test Result -----------------------
    expect(result).toBe('Fizz');
  });

  it('Given numbers divisible by 5 should return Buzz', () => {
    //---------------Set up test pack-------------------
    var input = 0;
    var fizzBuzz = CreateApp();
    divisibleBy5.map((fizzBuzzNumber) => {
      input = fizzBuzzNumber;
    });
    //---------------Execute Test ----------------------
    var result = fizzBuzz.isfizzbuzz(input);
    //---------------Test Result -----------------------
    expect(result).toBe('Buzz');
  });

  function CreateApp(){
    return new App();
  }
});
>>>>>>> adding user interaction to my fizzbuzz
