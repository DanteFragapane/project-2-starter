const Character = require('./character.js')

class Bionic extends Character.Character {
  constructor (
    name,
    stats = {
      strength: 6,
      constitution: 6,
      dexterity: 5,
      intelligence: 7,
      widom: 3,
      utility: 2
    }
  ) {
    super(name, stats)
  }

  laser () {
    return 2 * (0.25 * this.dexterity)
  }

  speak () {
    console.log('World!')
  }
}

module.exports = Bionic
