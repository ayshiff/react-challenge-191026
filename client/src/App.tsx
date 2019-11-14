import React from "react";
import Dashboard from "./components/dashboard/dashboard.component";
import Overview from "./components/overview/overview.component";
import CreatePromo from "./components/create_promo/create_promo.component";
import Login from "./components/login/login.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/dashboard/:id"
            render={(props: any) => <Dashboard {...props} />}
          />
          <Route path="/login" render={(props: any) => <Login {...props} />} />
          <Route
            path="/promo"
            render={(props: any) => <Overview {...props} />}
          />
          <Route
            path="/create_promo"
            render={(props: any) => <CreatePromo {...props} />}
          />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
