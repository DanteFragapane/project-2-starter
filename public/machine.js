import { Character, getRandomInt } from './character.js'

export default class Machine extends Character.Character {
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
    this.descriptions = {
      heavyMetalPileDriver:
        'Default skill. Turn enemy upside-down and drive his head into the ground under the full weight of your metal exoskeleton.',
      grappleArmDropkick:
        'Default skill. Grapple hook into enemy and launch yourself into him in a feet-first flying dropkick.',
      railGun:
        'Fires a mass of depleted uranium at hypersonic speeds with a chance to hit enemy weak points. Doesn’t always work.',
      pistonJab: 'Piston-powered metal fist jabs enemy 3 times in rapic succession. Scales with strength.',
      deathbringer:
        'A blade forged out of pure antimatter that detonates on impact, capable of turning any enemy into a pile of scrap.',
      repairBots:
        'Deploy an army of miniature robots that locate and repair damage caused to your exoskeleton during combat.'
    }
  }

  heavyMetalPileDriver () {
    return getRandomInt(2, 4)
  }

  grappleArmDropkick () {
    if (this.energy > 0) {
      this.energy--
      return getRandomInt(3, 4)
    }
    return 0
  }

  railGun () {
    if (this.energy > 1) {
      this.energy -= 2
      return getRandomInt(2, 7)
    }
    return 0
  }

  pistonJab () {
    if (this.energy > 2) {
      this.energy -= 3
      return getRandomInt(1, 2) * getRandomInt(1, 2) * getRandomInt(1, 2) * (this.strength / 4)
    }
    return 0
  }

  deathbringer () {
    if (this.energy > 5) {
      this.energy -= 6
      return 8 * (this.dexterity / 4)
    }
  }

  repairBots () {
    if (this.energy > 2) {
      this.energy -= 3
      return 5 * (this.constitution / 2)
    }
  }
}
