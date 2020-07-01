import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { useStateSelector } from './Utils/Hooks';

import Dashboard from './Pages/Dashboard';
import Lobby from './Pages/Lobby';
import Login from './Pages/Login';
import Match from './Pages/Match';

import BackgroundImg from './Assets/background.jpg';
import './App.scss';

const App: React.FC = () => {
  const { auth, lobby } = useStateSelector();

  const isUserLoggedIn = auth.id !== -1;

  return (
    <div className="app__container" style={{ backgroundImage: `url(${BackgroundImg})` }}>
      <BrowserRouter>
        <Switch>
          {isUserLoggedIn ? (
            <>
              <Route exact path="/">
                <Redirect push to="/dashboard" />
              </Route>
              <Route path="/dashboard">
                {lobby.id === -1 ? <Dashboard /> : <Redirect push to={`/lobby/${lobby.id}`} />}
              </Route>
              <Route exact path="/lobby/:id" component={Lobby} />
              <Route exact path="/lobby/:id/play" component={Match} />
            </>
          ) : (
            <Login />
          )}
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
