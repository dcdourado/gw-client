import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Api } from '../../Services';
import { removeUser } from '../../Store/Ducks/auth';
import { joinLobby } from '../../Store/Ducks/lobby';
import { useStateSelector } from '../../Utils/Hooks';
import { LobbyIndex } from '../../Utils/Interfaces';

import LobbyCard from './components/LobbyCard';

import './index.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { auth } = useStateSelector();
  const { username, mmr } = auth;

  const [lobbies, setLobbies] = useState<LobbyIndex[]>([]);

  const api = Api.getInstance();

  const refreshLobbies = useCallback(() => {
    api.findLobbies().then((value) => setLobbies(value.data));
  }, [api]);

  useEffect(() => {
    refreshLobbies();
  }, [refreshLobbies]);

  const handleExit = () => {
    dispatch(removeUser());
  };

  const handleCreateLobby = () => {
    api.createLobby().then((value) => {
      const createdLobby: LobbyIndex = value.data;
      history.push(`/lobby/${createdLobby.id}`);
      dispatch(joinLobby(createdLobby.id));
    });
  };

  const handleRefreshLobbies = () => {
    refreshLobbies();
  }

  return (
    <>
      <div className="dashboard__header">
        <div className="dashboard__header__item" />
        <div className="dashboard__header__item">
          <h1>{username} Score:{mmr}</h1>
        </div>
        <div className="dashboard__header__item">
          <button onClick={handleExit}>Exit</button>
        </div>
      </div>
      <div className="dashboard__menu">
        <button onClick={handleCreateLobby}>Create Lobby</button>
        <button onClick={handleRefreshLobbies}>Refresh</button>
      </div>
      <div className="dashboard__lobbies">
        {lobbies.map((lobby) => (
          <LobbyCard id={lobby.id} playerNumber={0} maxCap={lobby.size} key={`lb-card-${lobby.id}`} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
