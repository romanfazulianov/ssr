import React from 'react';
import ReactDOM from 'react-dom';
import './client/index.css';
import App from './client/App';
import Provider from "react-redux/es/components/Provider";
import {Route, BrowserRouter, Switch} from "react-router-dom";
import routes from "./client/router";
import {createState} from "./store";

const store = createState(window.__I_S__);

ReactDOM.hydrate(<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>,
    document.getElementById('root'));