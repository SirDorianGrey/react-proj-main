import React, { useState } from 'react';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login here
  };

  return (
    <section className="Login">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">
            Username:
            <input type="text" id="username" value={username} onChange={e => setUsername(e.target.value)} />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
          </label>
        </div>
        <input type="submit" value="Login" />
      </form>
    </section>
  );
}

export default Login;