import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from 'components/Hello';
import Test from './components/Test.js';
import test from './test';
console.log(test);

// const unused = function (ads){
//     var r = "nope"
//  }

const arrow_fnc = (abc) => abc.splice(0, 1);

console.log(arrow_fnc);

ReactDOM.render(
  <Hello compiler="love it typescript!" framework="React" />,
  document.getElementById('root')
);
