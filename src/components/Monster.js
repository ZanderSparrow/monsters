import React from 'react';

const Monster = ({ monster }) => {
  if (!monster) {
    return null;
  }

  return (
    <div>
      <i className="large middle aligned icon user" />
      <div className="content">
        <div className="description">
          <h2>{monster.name}</h2>
          <p>{monster.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Monster;