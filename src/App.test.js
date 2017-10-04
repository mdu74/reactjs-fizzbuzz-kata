import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  const notDivisibleBy3and5 = [1,2,4,7,8];
  const divisibleBy3 = [3,6,9,12];

  fit('Given numbers not divisible by both 3 and 5 should return number', () => {
    //---------------Set up test pack-------------------
    var event = {target: {value: 0}};
    var fizzBuzzApp = CreateApp();
    var expected = 0;
    notDivisibleBy3and5.map((fizzBuzzNumber) => {
      event.target.value = fizzBuzzNumber;
      expected = fizzBuzzNumber;
    });
    //---------------Execute Test ----------------------
    debugger; // command: node-inspector --web-port=9999
    console.log("hello");
    fizzBuzzApp.isfizzbuzz(event);
    var fizzOrBuzzComponent = ReactTestUtils.renderIntoDocument(<App />);
    var fizzOrBuzz = ReactTestUtils
                        .findRenderedDOMComponentWithClass(fizzOrBuzzComponent, 'fizz-or-buzz');
    var result = fizzOrBuzz.textContent;
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
});
