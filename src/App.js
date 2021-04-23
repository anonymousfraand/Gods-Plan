import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Login from "./pages/Login";
import "./App.css";
export default function App() {
  return(
    <Router>
      <Switch>
        <Route exact path='/' component={Login} />
      </Switch>
    </Router>
  );
}