const Character = require('./character.js')

class Machine extends Character.Character {
  constructor (
    name,
    stats = {
      strength: 8,
      constitution: 9,
      dexterity: 6,
      intelligence: 4,
      widom: 2,
      utility: 3
    }
  ) {
    super(name, stats)
  }
}

module.exports = Machine
