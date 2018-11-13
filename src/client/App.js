import React, { Component } from 'react';
import './App.css';
import {Route, Switch, withRouter} from 'react-router-dom';
import routes from "./router";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <Switch>
                {routes.map(r => <Route {...r} />)}
            </Switch>
          <img src={'media/logo.svg'} className="App-logo" alt="logo" />
        </header>
      </div>
    );
  }
}

export default withRouter(App);
