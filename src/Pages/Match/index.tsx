import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import Iframe from 'react-iframe';

import { Match as MatchAPI, Api } from '../../Services';
import { setScore } from '../../Store/Ducks/auth';
import { useStateSelector } from '../../Utils/Hooks';

import './index.scss';

interface MatchProps {}

const Match: React.FC<MatchProps> = () => {
  const dispatch = useDispatch();

  const { auth } = useStateSelector();
  const api = Api.getInstance();

  const history = useHistory();
  const params = useParams<{ id: string }>();
  const lobbyId = +params.id;

  const [loaded, setLoaded] = useState(false);
  const [started, setStarted] = useState(false);
  const [leader, setLeader] = useState(false);

  useEffect(() => {
    api.findLobby(lobbyId).then((response) => {
      const { leaderId } = response.data;

      console.log(response.data);

      if (auth.id === leaderId) {
        setLeader(true);
      }
      setLoaded(true);
    });

    return () => {
      api.findUserById(auth.id).then((response) => {
        dispatch(setScore(response.data.mmr));
      })
      MatchAPI.leaveMatch(auth.id);

    };
  }, [api, auth.id, lobbyId]);

  const handleStart = () => {
    MatchAPI.startMatch().then(() => setStarted(true));
  };

  const handleEnd = () => {
    MatchAPI.endMatch().then(() => setStarted(false));
  }

  const handleLeave = () => {
    history.push(`/lobby/${lobbyId}`);
  }

  const match = (
    <div>
      <Iframe url={`http://localhost:4000/?id=${auth.id}`} width="550px" height="550px" id="match" />
      <div className="match__menu">
        <button onClick={handleStart} disabled={!leader || started}>
          Start
        </button>
        {leader && <button onClick={handleEnd} disabled={!started}>End match</button>}
        <button onClick={handleLeave}>
          Leave
        </button>
      </div>
    </div>
  );

  return loaded ? match : <span>Joining match...</span>;
};

export default Match;
