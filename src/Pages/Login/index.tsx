import React, { useState } from 'react';

import { Api } from '../../Services';

import './index.scss';

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const api = Api.getInstance();
    api.postAuth(username, password);
  };

  return (
    <div className="login__container">
      <form onSubmit={handleSubmit} className="login__form">
        <input type="text" onChange={handleUsernameChange} />
        <input type="password" onChange={handlePasswordChange} />
        <div className="login__buttons">
          <button>Register</button>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
