import logo from '../d20-blank.svg';
import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Role Dice. Battle Evil.
      </p>
      <Link
        className="App-link"
        to="/arena"
      >
        Fight Monsters!
      </Link>
    </header>
  );
};

export default Landing;