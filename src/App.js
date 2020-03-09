import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import Users from "./Users/containers/Users";
import SignUp from "./Users/containers/SignUp";
import Frame from "./UIElements/Frame";
import Dashboard from "./Chat/Dashboard";
import Profile from "./Users/containers/Profile";
import MainNavigation from "./Navigation/MainNavigation";
import { AuthContext } from "./context/auth-context";
import Modal from "./UIElements/Modal";
import Dash from "./Dashboard/Dashboard";
import Location from "./Map/Location";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (
      <Switch>
        <Modal styleProp="modal_v3">
          {isLoggedIn && <MainNavigation />}
          <Route path="/home">
            <Dash />
          </Route>
          <Route path="/buddies" exact>
            <Users />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/studi_spots" exact>
            <Location />
          </Route>
          <Redirect to="/home" />
        </Modal>
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        {isLoggedIn && <MainNavigation />}
        <Route path="/" exact>
          <SignUp />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        {/* {isLoggedIn && <MainNavigation />} */}
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
