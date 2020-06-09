import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.scss';

interface LobbyCardProps {
  id: number;
  playerNumber: number;
  maxCap: number;
}

const LobbyCard: React.FC<LobbyCardProps> = (props) => {
  const { id, playerNumber, maxCap } = props;

  const history = useHistory();

  const handleLobbyClick = () => {
    history.push(`/lobby/${id}`);
  };

  return (
    <div className="lobby-card__container" onClick={handleLobbyClick}>
      {playerNumber}/{maxCap}
    </div>
  );
};

export default LobbyCard;
