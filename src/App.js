import React from "react";
import NavBar from "./components/Navbar";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ExternalApi from "./components/ExternalApi";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;