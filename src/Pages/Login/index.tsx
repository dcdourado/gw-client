import React, { useState } from 'react';

import { Api } from '../../Services';

import './index.scss';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const api = Api.getInstance();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    api.doAuth(username, password);
  };

  const handleRegister = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();

    console.log(username, password);
    api.createUser(username, password).then(() => {
      setUsername('');
      setPassword('');
    });
  };

  return (
    <div className="login__container">
      <form onSubmit={handleFormSubmit} className="login__form">
        <input type="text" value={username} onChange={handleUsernameChange} />
        <input type="password" value={password} onChange={handlePasswordChange} />
        <div className="login__buttons">
          <button onClick={handleRegister}>Register</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
