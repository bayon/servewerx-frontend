import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
//redux
import { Provider } from "react-redux";
import store from "./store";
//layout:
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import MainNavigationTabs from "./components/mainNavigationTabs";

function App(props) {
  const [authTokens, setAuthTokens] = useState();

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };

  return (
    <Provider store={store}>
      <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
        <MuiThemeProvider>
          <React.Fragment>
            <CssBaseline />
            <Container>
            <MainNavigationTabs></MainNavigationTabs>

              <Router>
                <div>
                  <ul>
                    <li>
                      <Link to="/">Home Page</Link>
                    </li>
                    <li>
                      <Link to="/admin">Admin Page</Link>
                    </li>
                  </ul>
                  <Route exact path="/" component={Home} />
                  <Route path="/login" component={Login} />
                  <Route path="/signup" component={Signup} />
                  <PrivateRoute path="/admin" component={Admin} />
                </div>
              </Router>
            </Container>
          </React.Fragment>
        </MuiThemeProvider>
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
