import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useStateSelector } from './Utils/Hooks';

import Dashboard from './Pages/Dashboard';
import Lobby from './Pages/Lobby';
import Login from './Pages/Login';

import './App.scss';

const App: React.FC = () => {
  const { auth } = useStateSelector();

  const isUserLoggedIn = auth.id !== -1;

  return (
    <div className="app__container">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            {!isUserLoggedIn ? <Login /> : <Redirect push to="/dashboard" />}
          </Route>
          <Route path="/dashboard">{isUserLoggedIn ? <Dashboard /> : <Redirect push to="/" />}</Route>
          <Route path="/lobby/:id">{isUserLoggedIn ? <Lobby /> : <Redirect push to="/" />}</Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
