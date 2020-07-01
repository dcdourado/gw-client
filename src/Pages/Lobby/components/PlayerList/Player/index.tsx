import React from 'react';

import './index.scss';

interface PlayerProps {
  username: string;
  mmr: number;
}

const Player: React.FC<PlayerProps> = (props) => {
  const { username, mmr } = props;

  return (
    <div className="player__container">
      <div className="player__info">
        <span className="player__text player__text__bold">{username}</span>
        <span className="player__text">Score: {mmr}</span>
      </div>
    </div>
  );
};

export default Player;
