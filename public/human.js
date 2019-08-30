import { Character, getRandomInt } from './character.js'

export default class Human extends Character {
  constructor (name, stats = { strength: 2, constitution: 2, dexterity: 4, intelligence: 5, wisdom: 5, utility: 4 }) {
    super(name, stats)
    this.descriptions = {
      rocketKick: 'Default skill. Activates boot thrusters to kick the enemies.',
      kineticBlade:
        'Default skill. Drawing this sword from its sheath charges it with elemental energy before attacking foes.',
      scopeShot:
        "Uses sniper pistol to target enemy's weak points for a chance to do massive damage. Doesn’t always work.",
      mirvGrenade: 'Grenade that separates into a cluster of 3 smaller grenades upon impact. Scales with Utility.',
      orbitalStrike:
        'Paint your target with a beacon and watch as Command rains down hellfire from an orbital satellite.',
      stimInjection: 'Amphetamine injection delivery system capable of healing Human character for continued fighting. '
    }
  }

  rocketKick () {
    return getRandomInt(2, 4)
  }

  kineticBlade () {
    if (this.energy > 0) {
      this.energy--
      return getRandomInt(3, 4)
    }
    return 0
  }

  scopeShot () {
    if (this.energy >= 1) {
      this.energy -= 2
      return getRandomInt(1, 7)
    }
    return 0
  }

  mirvGrenade () {
    if (this.energy >= 2) {
      this.energy -= 3
      return getRandomInt(1, 2) * getRandomInt(1, 2) * getRandomInt(1, 2) * (this.utility / 4)
    }
    return 0
  }

  orbitalStrike () {
    if (this.energy >= 5) {
      this.energy -= 6
      return 8 * (this.intelligence / 4)
    }
    return 0
  }

  stimInjection () {
    if (this.energy >= 2) {
      this.energy -= 3
      return 5 * (this.intelligence / 2)
    }
    return 0
  }
}
