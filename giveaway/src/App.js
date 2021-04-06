import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import SignUp from "./components/molecules/SignUp";
import Dashboard from "./components/molecules/Dashboard";
import LoginForm from "./components/organisms/LoginForm";
import React from "react";

function App() {
  return (
      <Router>
          <section className="login__section">
              <Switch>
                  <Route path="/signup">
                      <SignUp />
                  </Route>
                  <Route path="/login">
                      <LoginForm />
                  </Route>
                  <Route path="/dashboard">
                      <Dashboard />
                  </Route>
                  <Route path="/">
                      <Home />
                  </Route>
              </Switch>
          </section>
      </Router>
  );
}

export default App;