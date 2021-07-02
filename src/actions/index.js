// Monster actions
export const selectRandomMonster = (monsters) => {
  return {
    type: 'SELECT_RANDOM_MONSTER',
    payload: monsters[Math.floor(Math.random()*monsters.length)]
  }
}

export const updateMonsterHP = (monster, change) => {
  return {
    type: 'UPDATE_MONSTER_HP',
    payload: {monster, change}
  }
}

// Player actions

export const updatePlayerHP = (player, change) => {
  return {
    type: 'UPDATE_MONSTER_HP',
    payload: {player, change}
  }
}

export const updateScore = (player, score) => {
  return {
    type: 'UPDATE_SCORE',
    payload: {player, score}
  }
}

export const createPlayer = (player) => {
  return {
    type: 'CREATE_PLAYER',
    payload: player
  }
}