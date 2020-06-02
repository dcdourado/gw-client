import React from 'react';

import PlayerList from './components/PlayerList';

import './index.scss';

interface LobbyProps {}

const Lobby: React.FC<LobbyProps> = () => {
  return (
    <div className="lobby__container">
      <div className="lobby__sidebar">
        <PlayerList />
      </div>
      <div className="lobby__chat">
        <h1>Oi</h1>
      </div>
    </div>
  );
};

export default Lobby;
