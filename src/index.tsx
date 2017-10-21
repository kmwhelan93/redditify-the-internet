import { hello } from "./hello";
import "./main.css";
import "./extra.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';

const name: string = `Mr. Mike`;
console.log(hello(name));

const div = document.createElement("div")
document.body.appendChild(div);

ReactDOM.render(
    <div>HIIII</div>,
  div
);
