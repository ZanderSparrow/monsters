import { combineReducers } from 'redux';

import { monstersReducer, selectMonsterReducer } from './monstersReducer';
import { playerReducer } from './playerReducer';

export default combineReducers({
  monsters: monstersReducer,
  currentMonster: selectMonsterReducer,
  player: playerReducer
});