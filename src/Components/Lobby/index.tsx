import React from 'react';

import './index.scss';

interface LobbyProps {
  playerNumber: number;
  maxCap: number;
}

const Lobby: React.FC<LobbyProps> = (props) => {
  const { playerNumber, maxCap } = props;

  const handleLobbyClick = () => {
    console.log(playerNumber);
  };

  return (
    <div className="lobby__container" onClick={handleLobbyClick}>
      {playerNumber}/{maxCap}
    </div>
  );
};

export default Lobby;
