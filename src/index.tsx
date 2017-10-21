import "@blueprintjs/core/dist/blueprint.css"
import "./extra.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from "@blueprintjs/core";

const appId = "app";
let appEl = document.getElementById(appId);
if (!appEl) {
    appEl = document.createElement("div");
    document.body.appendChild(appEl);
    appEl.setAttribute("id", appId);
}

const onClick = () => console.log(wefwefewf);
ReactDOM.render(
    <Button onClick={onClick} className={"pt-intent-primary"}>Click me!</Button>,
    appEl
);
