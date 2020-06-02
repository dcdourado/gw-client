import React from 'react';

import Lobby from './components/Lobby';

import './index.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <>
      <h1>Lobbyzada</h1>
      <div className="dashboard__lobbies">
        <Lobby playerNumber={0} maxCap={10} />
        <Lobby playerNumber={1} maxCap={10} />
        <Lobby playerNumber={2} maxCap={10} />
        <Lobby playerNumber={3} maxCap={10} />
        <Lobby playerNumber={3} maxCap={10} />
        <Lobby playerNumber={3} maxCap={10} />
        <Lobby playerNumber={3} maxCap={10} />
      </div>
    </>
  );
};

export default Dashboard;
