import React from "react";
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"

import App from "./components/App"

import runServer from "./api";
runServer();

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>, 
    document.getElementById('root')
);