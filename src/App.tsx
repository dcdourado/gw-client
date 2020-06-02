import React from 'react';

import Lobby from './Components/Lobby';

import './App.scss';

const App: React.FC = () => {
  return (
    <div>
      <h1>Lobbyzada</h1>
      <div className="app__lobbies">
        <Lobby playerNumber={0} maxCap={10} />
        <Lobby playerNumber={1} maxCap={10} />
        <Lobby playerNumber={2} maxCap={10} />
        <Lobby playerNumber={3} maxCap={10} />
      </div>
    </div>
  );
};

export default App;
