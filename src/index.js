import React from "react";
// el import debe ser cambiado a una variable tal como esta abajo
//import * as ReactDOM from "react";
import App from "./components/App";
var ReactDOM = require('react-dom');
import './styles/global.scss';

ReactDOM.render(
    <App />,
    document.getElementById('app')
)