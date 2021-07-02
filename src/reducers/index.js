import { combineReducers } from 'redux';

import monsterList from '../utilities/monsters';

const monstersReducer = (monsters=monsterList, action) => {
  return monsters;
};

const selectMonsterReducer = (selectedMonster=null, action) => {
  switch (action.type) {
    case 'SELECT_MONSTER': 
      return action.payload;
    case 'SELECT_RANDOM_MONSTER':
      return action.payload;
    default:
      return selectedMonster;
  }
};

export default combineReducers({
  monsters: monstersReducer,
  currentMonster: selectMonsterReducer
});