import React, { useState } from 'react';
import './App.css';
import LandingPage from './Pages/LandingPage';
import LoginPage from './Pages/LoginPage';
import DashboardPage from './Pages/DashboardPage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import { createContext } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ServiceList from './Components/DashboardComponents/ClientDashboard/ServiceList/ServiceList';

export const userContext = createContext()

function App() {

  const [loggedInUser, setLoggedInUser] = useState({})

  return (
    <>
      <userContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <LandingPage></LandingPage>
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
            <Route exact path="/">
              <LandingPage></LandingPage>
            </Route>
            <PrivateRoute path="/dashboard">
              <DashboardPage />
            </PrivateRoute>
            <PrivateRoute path='/orderNowFor/:title'>
              <DashboardPage/>
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
        </userContext.Provider>
    </>
  );
}

export default App;
