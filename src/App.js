import React from "react";
import { useSelector } from "react-redux";

import Menu from "./features/menu/Menu";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ProtectedRoute from "./app/ProtectedRoute";
import { Login } from "./features/login/login";
import { selectIsAuth } from "./features/login/loginSlice";
import Restaurant from "./features/restaurants/Restaurant";

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
            <ProtectedRoute
              isAuth={isAuth}
              path="/menu"
              component={Menu}
            ></ProtectedRoute>
            <ProtectedRoute
              isAuth={isAuth}
              path="/restaurants"
              component={Restaurant}
            ></ProtectedRoute>
          </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
