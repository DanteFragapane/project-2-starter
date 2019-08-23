const Character = require('./character.js')

class Cyborg extends Character.Character {
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
    this.descriptions = {
      impactHands:
        'Default skill. Reconfigures hands into powerful drivers capable of torquing through just about anything.',
      criticalMassSpear: 'Default skill. Super-human strength and mass combine into a high-speed shoulder charge.',
      lockOnLaser: 'A focused energy beam at enemy weak points for an attempt at extra damage. Doesn’t always work.',
      sonicBlast: 'Sonic weapon released from Cyborg’s mouth in a 3-round pulse. Scales with Constitution.',
      nuclearBattery:
        'Transform your skin into a protective nano-metal then discharge your battery with the power of a low-yield nuke.',
      naniteRepair: 'Activate nano-bots in bloodstream to repair damaged body parts on the fly.'
    }
  }

  impactHands () {
    return Character.getRandomInt(2, 4)
  }

  criticalMassSpear () {
    if (this.energy > 0) {
      this.energy -= 1
      return Character.getRandomInt(3, 4)
    }
    return 0
  }

  lockOnLaser () {
    if (this.energy > 1) {
      this.energy -= 2
      return Character.getRandomInt(1, 7)
    }
    return 0
  }

  sonicBlast () {
    if (this.energy > 2) {
      this.energy -= 3
      return (
        Character.getRandomInt(1, 2) *
        Character.getRandomInt(1, 2) *
        Character.getRandomInt(1, 2) *
        (this.constitution / 4)
      )
    }
    return 0
  }

  nuclearBattery () {
    if (this.energy > 5) {
      this.energy -= 6
      return 8 * (this.dexterity / 4)
    }
    return 0
  }

  naniteRepair () {
    if (this.energy > 2) {
      this.energy -= 3
      return -5
    }
  }
}

module.exports = Cyborg
