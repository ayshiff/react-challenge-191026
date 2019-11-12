import React from "react";
import Dashboard from "./components/dashboard.component";
import Overview from "./components/overview.component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/promo">
            <Overview />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
