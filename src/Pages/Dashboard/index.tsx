import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Api } from '../../Services';
import { removeUser } from '../../Store/Ducks/auth';
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

  useEffect(() => {
    api.findLobbies().then((value) => setLobbies(value.data));
  }, [api]);

  const handleExit = () => {
    dispatch(removeUser());
  };

  const handleCreateLobby = () => {
    api.createLobby().then((value) => {
      const createdLobby: LobbyIndex = value.data;
      history.push(`/lobby/${createdLobby.id}`);
    });
  };

  return (
    <>
      <div className="dashboard__header">
        <div className="dashboard__header__item" />
        <div className="dashboard__header__item">
          <h1>
            {username} [MMR:{mmr}]
          </h1>
        </div>
        <div className="dashboard__header__item">
          <button onClick={handleExit}>Exit</button>
        </div>
      </div>
      <div className="dashboard__menu">
        <button onClick={handleCreateLobby}>Create Lobby</button>
      </div>
      <div className="dashboard__lobbies">
        {lobbies.map((lobby) => (
          <LobbyCard id={lobby.id} playerNumber={0} maxCap={lobby.size} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
