import React from 'react';
import { useState } from 'react';
import '../App.css';

export default function UserRow(props) {
  const [id] = useState(props.user.id);
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);
  const [status, setStatus] = useState(props.user.status);

  if (props.user.viewMode) {
    return (
      <div className='User'>
        <p style={{ margin: 20 }}>{id}</p>
        <p style={{ margin: 20 }}>{name}</p>
        <p style={{ margin: 20 }}>{email}</p>
        <p style={{ margin: 20 }}>{status}</p>
        <button onClick={() => props.deleteUser(props.user)}>Deletar</button>
        <button onClick={() => props.editModeChange(props.user.id)}>Editar</button>
      </div>
    );
  } else {
    return (
      <div className='User'>
        <div className='NewUser'>
          <p style={{ margin: 20 }}>{id}</p>
          <div className='InputBox'>
            <label>Nome:</label>
            <input type='text' name='name' value={name} onChange={(event) => setName(event.target.value)} />
          </div>
          <div className='InputBox'>
            <label>Email:</label>
            <input
              type='email'
              name='email'
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className='InputBox'>
            <label>Situação:</label>
            <input
              type='text'
              name='status'
              value={status}
              onChange={(event) => setStatus(event.target.value)}
            />
          </div>
        </div>
        <button onClick={() => props.updateUser(id, name, email, status)}>Atualizar</button>
        <button onClick={() => props.editModeChange(props.user.id)}>Restaurar</button>
      </div>
    );
  }
}
