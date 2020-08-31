import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from "./components/Hello";

// const unused = function (ads){
//     var r = "nope"
//  }

type ArrowFnc = any;

const arrow_fnc: ArrowFnc = (abc: any) => abc.splice(0, 1);

console.log(arrow_fnc);

ReactDOM.render(
    <Hello compiler="love it typescript!" framework="React" />,
    document.getElementById("root")
);