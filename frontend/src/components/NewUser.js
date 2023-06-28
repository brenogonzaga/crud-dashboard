import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function UserRow(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    let newUser = { name: name, email: email, status: status };

    fetch('http://127.0.0.1:8080/create-user', {
      method: 'POST',
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        props.deleteUser(props.id);
        props.updateNewUser({
          id: data,
          name: name,
          email: email,
          status: status,
          viewMode: true,
        });
      })
      .catch(() => {
        console.log('Somthing failed');
      });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className='NewUser'>
        <div className='InputBox'>
          <label>Nome:</label>
          <input type='text' name='name' onChange={(event) => setName(event.target.value)} />
        </div>
        <div className='InputBox'>
          <label>Email:</label>
          <input type='email' name='email' onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div className='InputBox'>
          <label>Situação:</label>
          <input type='text' name='status' onChange={(event) => setStatus(event.target.value)} />
        </div>
        <button type='submit'>Submit</button>
        <button onClick={() => props.deleteUser(props.id)}>Deletar</button>
      </div>
    </form>
  );
}
