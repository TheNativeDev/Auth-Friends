import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Login</Link>
          </li>
          <li>
            <Link to="/friendlist">FriendList</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute path="/friendlist" component={FriendList} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;