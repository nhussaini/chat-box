import React, { useState} from 'react'
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, SetRoom] = useState('');
  return (
    <div className="joinOUterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div><input placeholder="Name" className="joinInput mt-20" type="text" onChange={(event) =>setName(event.target.value)} ></input></div>
        <div><input placeholder="Room" className="joinInput" type="text" onChange={(event) =>setRoom(event.target.value)} ></input></div>
        <Link to={`/chat?name=${name}&room=${room}`}>
         <button onClick={event => (!name || !room ) ? event.preventDefault : null} className="button" type="submit">Sign In</button>
        </Link>
      </div>
    </div>
  )
}

export default Join;
