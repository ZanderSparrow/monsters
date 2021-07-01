import logo from '../d20-blank.svg';
import React from 'react';

const Landing = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Role Dice. Battle Evil.
      </p>
      <a
        className="App-link"
        href="/arena"
        rel="noopener noreferrer"
      >
        Fight Monsters!
      </a>
    </header>
  );
};

export default Landing;