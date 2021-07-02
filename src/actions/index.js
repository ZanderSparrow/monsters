// Monster actions
export const selectMonster = (monster) => {
  return {
    type: 'SELECT_MONSTER',
    payload: monster
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