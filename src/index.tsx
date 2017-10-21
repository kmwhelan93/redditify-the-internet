import { hello } from "./hello";
import "./main.css";
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

ReactDOM.render(
    <Button className={"pt-intent-primary"}>Click me!</Button>,
    appEl
);
