import React from 'react';

import Dashboard from './Pages/Dashboard';
import Lobby from './Pages/Lobby';

import './App.scss';

const App: React.FC = () => {
  return (
    <div className="app__container">
      {/* <Dashboard /> */}
      <Lobby />
    </div>
  );
};

export default App;
