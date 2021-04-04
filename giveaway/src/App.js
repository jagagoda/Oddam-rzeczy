import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/templates/Login";

function App() {
  return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
      </Router>
  );
}

export default App;