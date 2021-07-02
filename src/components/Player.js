import React from 'react';

const Player = ({ player }) => {
  if (!player) {
    return null;
  }

  return (
    <div>
      <p>{player.name}</p>
      <p>{player.HP}</p>
    </div>
  );
}

export default Player;