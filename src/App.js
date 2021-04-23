import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home"; 
import "./App.css";

import PrivateRoute from "./PrivateRoute"


export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path="/home" component={Home}/>
      </Switch>
    </Router>
  );
}