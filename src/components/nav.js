import React from "react";
import {Link} from 'react-router-dom'

export const NavBar = (props) => {
  return (
    <div className="nav-bar">
      <ul className="nav-list">
        <li className="nav-item active">
          <Link  to="/" className="nav-link">
            unanswered
          </Link >
        </li>
        <li className="nav-item">
          <Link  to="answered" className="nav-link">
            answered
          </Link >
        </li>
        <li className="nav-item">
          <Link  to="add" className="nav-link">
            add new pool
          </Link >
        </li>
      </ul>
      <span className="nav-item">{props.username}</span>
    </div>
  );
};
