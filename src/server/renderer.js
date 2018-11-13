import ReactDOMServer from 'react-dom/server'
import { createServerState } from '../store';
import {getUser} from "../store/actions";
import React from 'react'
import { StaticRouter } from "react-router-dom";
import App from '../client/App';
import { Provider } from 'react-redux';
const path = require("path");
const fs = require("fs");

export default (req, res, next) => {

    // point to the html file created by CRA's build tool
    const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

    fs.readFile(filePath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('err', err);
            return res.sendStatus(404);
        }
        const store = createServerState();

        store.dispatch(getUser(req.cookies.uuid))
            .then(() => {
                // render the app as a string
                const context = {};
                const html = ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <StaticRouter location={req.url} context={context}>
                            <App/>
                        </StaticRouter>
                    </Provider>);
                if (context.url) {

                    return res.redirect(301, context.url);
                }
                // inject the rendered app into our html and send it
                return res.send(
                    htmlData.replace(
                        '<div id="root"></div>',
                        `<div id="root">${html}</div>`
                    ).replace(
                        'window.__I_S__ = {};',
                        `window.__I_S__ = ${JSON.stringify(store.getState())};`
                    )
                );
            })
            .catch(err => next(err))

    });
}