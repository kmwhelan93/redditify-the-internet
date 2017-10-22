import "@blueprintjs/core/dist/blueprint.css"
import "./app.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ContentContainer} from "./ContentContainer";

const appId = process.env.ID_NAME as string;
let appEl = document.getElementById(appId);
if (!appEl) {
    appEl = document.createElement("div");
    document.body.appendChild(appEl);
    appEl.setAttribute("id", appId);
}

ReactDOM.render(
    <ContentContainer />,
    appEl
);
