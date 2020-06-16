import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { Api } from '../../Services';
import { leaveLobby, playLobby } from '../../Store/Ducks/lobby';
import { Lobby as LobbyInterface } from '../../Utils/Interfaces';
import PlayerList from './components/PlayerList';

import './index.scss';

interface LobbyProps {}

const Lobby: React.FC<LobbyProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams<{ id: string }>();
  const lobbyId = +params.id;

  const [lobby, setLobby] = useState<LobbyInterface>();

  const api = Api.getInstance();

  useEffect(() => {
    api.findLobby(lobbyId).then((value) => setLobby(value.data));
  }, [api, lobbyId]);

  const handleLeave = () => {
    if (lobby && lobby.players.length > 1) {
      api.leaveLobby(lobbyId).then(() => {
        dispatch(leaveLobby());
        history.push('/dashboard');
      });
      return;
    }

    api.deleteLobby(lobbyId).then(() => {
      dispatch(leaveLobby());
      history.push('/dashboard');
    });
  };

  const handlePlay = () => {
    dispatch(playLobby());
    history.push(`/lobby/${lobbyId}/play`);
  };

  return (
    <div className="lobby__container">
      <div className="lobby__sidebar">
        <PlayerList players={lobby?.players} />
      </div>
      <div className="lobby__chat">
        <h1>id {lobbyId}</h1>
        <button onClick={handleLeave}>Leave</button>
        <button onClick={handlePlay}>Play</button>
      </div>
    </div>
  );
};

export default Lobby;
