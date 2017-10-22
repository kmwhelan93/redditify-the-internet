import "@blueprintjs/core/dist/blueprint.css"
import "./extra.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "@blueprintjs/core";

const appId = process.env.ID_NAME as string;
let appEl = document.getElementById(appId);
if (!appEl) {
    appEl = document.createElement("div");
    document.body.appendChild(appEl);
    appEl.setAttribute("id", appId);
}

console.log("loaded");
const onClick = () => console.log("HI!");
ReactDOM.render(
    <Button onClick={onClick} className={"pt-intent-primary"}>Click me!</Button>,
    appEl
);
