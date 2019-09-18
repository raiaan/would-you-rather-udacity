import React from "react";
import {Link} from 'react-router-dom'
import {setAuthedUser} from '../actions/authedUser'

export const NavBar = (props) => {
  console.log(props);
  
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item active">
          <Link  to="/" className="nav-link">
            unanswered
          </Link >
        </li>
        <li className="nav-item">
          <Link  to="/answered" className="nav-link">
            answered
          </Link >
        </li>
        <li className="nav-item">
          <Link  to="/leaderboard" className="nav-link">
          Leaderboard
          </Link >
        </li>
        <li className="nav-item">
          <Link  to="/add" className="nav-link">
            add new pool
          </Link >
        </li>
      </ul>
      <div>
        <span className="nav-item">{props.username}</span>
        <button onClick={()=>(props.dispatch(setAuthedUser('')))}>logout</button>
      </div>
      
    </div>
  );
};
