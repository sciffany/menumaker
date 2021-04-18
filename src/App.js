import React from "react";
import { useSelector } from "react-redux";

import Menu from "./features/menu/Menu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./app/ProtectedRoute";
import { Login } from "./features/login/login";
import { selectIsAuth } from "./features/login/loginSlice";
import Restaurants from "./features/restaurants/Restaurants";
import { Signup } from "./features/signup/Signup";

function App() {
  const isAuth = useSelector(selectIsAuth);

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Login />
            </Route>
            <Route path="/signup" exact>
              <Signup />
            </Route>
            <ProtectedRoute isAuth={isAuth} path="/menu" component={Menu}></ProtectedRoute>
            <ProtectedRoute
              isAuth={isAuth}
              exact
              path="/restaurants"
              component={Restaurants}
            ></ProtectedRoute>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
