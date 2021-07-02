import monsterList from '../utilities/monsters';

export const monstersReducer = (monsters=monsterList, action) => {
  return monsters;
};

export const selectMonsterReducer = (selectedMonster=null, action) => {
  switch (action.type) {
    case 'SELECT_MONSTER': 
      return action.payload;
    default:
      return selectedMonster;
  }
};