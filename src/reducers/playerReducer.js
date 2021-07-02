const player1 = {
  name: 'Player1',
  HP: 100
}

export const playerReducer = (player=player1, action) => {
  switch (action.type) {
    case 'CREATE_PLAYER':
      return action.payload;
    default:
      return player;
  }
}