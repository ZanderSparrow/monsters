const _roll = (sides) => Math.floor((Math.random()*sides) + 1)

export const simpleHit = (mod) => {
  const d20 = _roll(20);
  return d20 + mod;
}