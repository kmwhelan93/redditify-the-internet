import "@blueprintjs/core/dist/blueprint.css"
import "./app.scss";
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {ContentContainer} from "./ContentContainer";
import {applyMiddleware, createStore} from "redux";
import {reducers} from "./state/reducers";
import {Provider} from "react-redux";
import { createLogger } from 'redux-logger'

const appId = process.env.ID_NAME as string;
let appEl = document.getElementById(appId);
if (!appEl) {
    appEl = document.createElement("div");
    document.body.appendChild(appEl);
    appEl.setAttribute("id", appId);
}

const inProductionMode = () => process.env.NODE_ENV == "production";

const logger = createLogger({
    predicate: () => !inProductionMode(),
});

const store = createStore(reducers, applyMiddleware(logger));

ReactDOM.render(
    (
        <Provider store={store}>
            <ContentContainer />
        </Provider>
    ),
    appEl
);
