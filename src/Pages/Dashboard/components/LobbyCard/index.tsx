import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Api } from '../../../../Services';
import { joinLobby } from '../../../../Store/Ducks/lobby';

import './index.scss';

interface LobbyCardProps {
  id: number;
  playerNumber: number;
  maxCap: number;
}

const LobbyCard: React.FC<LobbyCardProps> = (props) => {
  const dispatch = useDispatch();

  const { id, playerNumber, maxCap } = props;

  const api = Api.getInstance();
  const history = useHistory();

  const handleLobbyClick = () => {
    api.joinLobby(id).then(() => {
      history.push(`/lobby/${id}`);
      dispatch(joinLobby(id));
    });
  };

  return (
    <div className="lobby-card__container" onClick={handleLobbyClick}>
      {playerNumber}/{maxCap}
    </div>
  );
};

export default LobbyCard;
