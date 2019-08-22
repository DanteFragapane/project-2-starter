const Character = require('./character.js')

class Alien extends Character.Character {
  constructor (
    name,
    stats = {
      strength: 2,
      constitution: 2,
      dexterity: 3,
      intelligence: 8,
      widom: 8,
      utility: 3
    }
  ) {
    super(name, stats)
  }
}

module.exports = Alien
