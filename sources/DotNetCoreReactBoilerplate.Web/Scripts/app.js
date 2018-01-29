// Polyfills
import "babel-polyfill";
import 'whatwg-fetch'

// React
import React from "react";
import ReactDOM from "react-dom";

// Components
import Hello from './hello';

let first = document.getElementById('first').value;
let last = document.getElementById('last').value;
let name = { first, last };

ReactDOM.render(
    <Hello {...name} />,
    document.getElementById('root')
);