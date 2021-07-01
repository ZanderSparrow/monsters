import { combineReducers } from 'redux';

import monsters from '../utilities/monsters';

const monstersReducer = () => {
  return monsters;
};

const selectMonsterReducer = (selectedMonster=null, action) => {
  if (action.payload === 'SELECT_MONSTER') {
    return action.payload;
  }

  return selectedMonster;
};

export default combineReducers({
  monstersReducer,
  selectMonsterReducer
});