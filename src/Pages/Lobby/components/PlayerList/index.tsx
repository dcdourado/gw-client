import React from 'react';

import { User } from '../../../../Utils/Interfaces';
import Player from './Player';

import './index.scss';

interface PlayerListProps {
  players?: User[];
}

const PlayerList: React.FC<PlayerListProps> = (props) => {
  const { players } = props;

  return (
    <div className="player-list__container">
      {players?.map((player) => (
        <Player username={player.username} mmr={player.mmr} />
      ))}
    </div>
  );
};

export default PlayerList;
