const Character = require('./character.js')

class Human extends Character.Character {
  constructor (name, stats = { strength: 2, constitution: 2, dexterity: 4, intelligence: 5, wisdom: 5, utility: 4 }) {
    super(name, stats)
    this.unlocks = { scopeShot: false, mervGrenade: false }
  }

  unlock (skill) {
    switch (skill) {
      case 'scopeShot':
        this.unlocks.scopeShot = true
        break
      case 'mervGrenade':
        this.unlocks.mervGrenade = true
    }
  }

  rocketKick () {
    return Character.getRandomInt(2, 4)
  }

  kineticBlade () {
    if (this.energy > 0) {
      this.energy--
      return Character.getRandomInt(3, 4)
    }
    return 0
  }

  scopeShot () {
    if (this.energy > 0 && this.unlocks.scopeShot) {
      this.energy--
      return Character.getRandomInt(1, 7)
    }
    return 0
  }

  mervGrenade () {
    if (this.energy > 0 && this.unlocks.scopeShot) {
      this.energy--
      return Character.getRandomInt(1, 2) * Character.getRandomInt(1, 2) * Character.getRandomInt(1, 2) * 1.25
    }
    return 0
  }
}

module.exports = Human
