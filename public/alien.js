import { Character, getRandomInt } from './character.js'

export default class Alien extends Character {
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
    this.descriptions = {
      forceWave: 'Compresses the very air, projecting out a wave of energy that stuns and damages foes.',
      telekeneticProjectiles:
        'Default skill. Use the power of mind to manipulate physical matter and fire medium-sized objects at high speeds.',
      cognitiveShock:
        'Project beams of mental energy at enemy weak points in an attempt at extra damage. Doesn’t always work.',
      psiScream:
        'Unleash 3 pulses of psycho-keneticpower that attack enemy mental faculties. Scales with Intelligence.',
      orbitalSingularity:
        'Telekenetically generate black holes around your enemy and watch as he gets pulled apart molecule by molecule.',
      psychicRegen: 'Elevate mind over matter and imagine the pain away for continued fighting.'
    }
  }

  forceWave () {
    return getRandomInt(2, 4)
  }

  telekeneticProjectiles () {
    if (this.energy > 0) {
      this.energy--
      return getRandomInt(3, 4)
    }
    return 0
  }

  cognitiveShock () {
    if (this.energy > 1) {
      this.energy -= 2
      return getRandomInt(1, 7)
    }
    return 0
  }

  psiScream () {
    if (this.energy > 2) {
      this.energy -= 3
      return getRandomInt(1, 2) * getRandomInt(1, 2) * getRandomInt(1, 2) * (this.intelligence / 4)
    }
    return 0
  }

  orbitalSingularity () {
    if (this.energy > 5) {
      this.energy -= 6
      return 8 * (this.wisdom / 4)
    }
    return 0
  }

  psychicRegen () {
    if (this.energy > 2) {
      this.energy -= 3
      return -5 * (this.utility / 2)
    }
    return 0
  }
}
