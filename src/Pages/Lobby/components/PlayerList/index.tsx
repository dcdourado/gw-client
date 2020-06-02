import React from 'react';

import Player from './Player';

import './index.scss';

interface PlayerListProps {}

const PlayerList: React.FC<PlayerListProps> = () => {
  return (
    <div className="player-list__container">
      <Player username="dcdourado" mmr={100} />
      <Player username="Bertdev" mmr={120} />
    </div>
  );
};

export default PlayerList;
