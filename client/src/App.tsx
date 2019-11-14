import React from "react";
import Dashboard from "./components/dashboard.component";
import Overview from "./components/overview.component";
import CreatePromo from "./components/create_promo.component";
import Login from "./components/login.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route
            path="/dashboard"
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
