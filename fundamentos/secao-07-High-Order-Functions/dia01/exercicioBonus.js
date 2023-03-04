const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const dragonDamage = () => Math.round(Math.random() * (dragon.strength - 15) + 15);
const warriorDamage = () => Math.round(Math.random() * (warrior.weaponDmg * warrior.strength - warrior.strength) + warrior.strength);

const mageDamage = () => {
  let damage = undefined;
  let manaCost = 0;
  if (mage.mana < 15) {
    /* throw new Error('Não possui mana suficiente'); */
    damage = 'Não possui mana suficiente';
    manaCost = 0;
  } else {
    manaCost = -15;
    damage = Math.round(Math.random() * (mage.intelligence * 2 - mage.intelligence) + mage.intelligence);
  }
  
  return {damage, manaCost}
};

const gameActions = {
  warriorTurn: (warriorSkill) => {
    warrior.damage = warriorSkill();
    dragon.healthPoints -= warrior.damage;
  },
  mageTurn: (mageSkill) => {
    const mageNewStats = mageSkill();
    mage.damage = mageNewStats.damage;
    mage.mana += mageNewStats.manaCost;
    if (typeof mage.damage === 'number') {
      dragon.healthPoints -= mage.damage;
    }
  },
  dragonTurn: (dragonSkill) => {
    dragon.damage = dragonSkill();
    mage.healthPoints -= dragon.damage;
    warrior.healthPoints -= dragon.damage;
  },
  battleStatus: () => battleMembers,
}

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamage);
gameActions.dragonTurn(dragonDamage);
console.log(battleMembers);

const array = ['div1', 'div2', 'div3'];
const [element] = array;