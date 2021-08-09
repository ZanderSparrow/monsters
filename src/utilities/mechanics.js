const _roll = (sides) => Math.floor((Math.random()*sides) + 1);

const _simpleHit = (mod) => {
  const d20 = _roll(20);
  return d20 + mod;
}

const _sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

class BattleEntity {
  constructor(name, strength, armor, hp) {
    this.name = name;
    this.strength = strength;
    this.armor = armor;
    this.hp = hp;
  }

  attack(entity) {
    // base damage calculation
    const base = _simpleHit(this.strength);

    let damage = entity.receive(base)
    
    return damage;
  }

  receive(baseDamage) {
    let damage = Math.max(0, baseDamage - this.armor);
    this.hp -= damage;
    this.hp = Math.max(0, this.hp);
    return damage;
  }
}

// const player = new Player('Butterboy', 11, 16, 50);
export class Player extends BattleEntity {
  constructor () {
    super(...arguments);
  }
}

// const golem = new Monster('Heck Golem', 12, 15, 42, 'A wad of animate clay that is mean');
export class Monster extends BattleEntity {
  constructor(name, strength, armor, hp, description) {
    super(...arguments);
    this.description = description;
  }
}

export const battle = async (monster, player) => {
  let playerTurn = true;

  while (monster.hp > 0 && player.hp > 0) {

    let currentFighter = playerTurn ? player : monster;
    let currentDefender = playerTurn ? monster : player;

    let damageDone = currentFighter.attack(currentDefender);

    console.log(`${currentFighter.name} dealt ${damageDone} damage to ${currentDefender.name}!`);
    console.log(`${player.name}  HP: ${player.hp}, ${monster.name} HP: ${monster.hp}`);
    console.log('----------------------------------------------------------------')

    playerTurn = !playerTurn;

    await _sleep(2000);
  }

  return player.hp ? player : monster;
}

// async IIFE - immediately invoked function expression
// (async () => {
//   let winner = await battle(golem, player);

//   console.log(`The winner is ${winner.name}!`);
// })()
