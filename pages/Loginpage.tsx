import React from 'react';
import jwt from 'jsonwebtoken';

export default function Login() {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');
  const [message, setMessage] = React.useState<string>(
    'Please enter your username and password'
  );

  async function submitForm() {
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const { token } = await res.json();
    const { admin, tamanhoDoPeDoSapato } = jwt.decode(token);
    console.log(admin);
    if (!token) {
      setMessage('Invalid username or password');
      return;
    }
    setMessage(`Logged in successfully ${admin} calça ${tamanhoDoPeDoSapato}`);
  }
  return (
    <>
      <form>
        <input
          type='text'
          name='username'
          placeholder='username'
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <input
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input type='button' value='Login' onClick={e => submitForm()} />
      </form>
      <h2>{message} </h2>
    </>
  );
}
