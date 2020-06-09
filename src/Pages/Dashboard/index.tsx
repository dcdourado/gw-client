import React, { useState, useEffect } from 'react';

import { useStateSelector } from '../../Utils/Hooks';
import { Api } from '../../Services';
import { LobbyIndex } from '../../Utils/Interfaces';

import LobbyCard from './components/LobbyCard';

import './index.scss';

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  const { auth } = useStateSelector();
  const { username, mmr } = auth;

  const [lobbies, setLobbies] = useState<LobbyIndex[]>([]);

  const api = Api.getInstance();

  useEffect(() => {
    api.getLobbies().then((value) => setLobbies(value.data));
  }, [api]);

  return (
    <>
      <h1>
        {username} [MMR:{mmr}]
      </h1>
      <div className="dashboard__lobbies">
        {lobbies.map((lobby) => (
          <LobbyCard id={lobby.id} playerNumber={0} maxCap={lobby.size} key={`lb-card-${lobby.id}`} />
        ))}
      </div>
    </>
  );
};

export default Dashboard;
