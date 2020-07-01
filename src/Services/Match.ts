import axios from 'axios';

const baseURL = 'http://localhost:4000';

const instance = axios.create({
  baseURL,
});

function startMatch() {
  return instance.post('/start');
}

function endMatch() {
  return instance.post('/end');
}

function leaveMatch(playerId: number) {
  return instance.delete(`/${playerId}`);
}

export default  { startMatch, endMatch, leaveMatch };
