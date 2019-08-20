class Character {
  constructor (name, stats) {
    this.name = name
    this.strength = stats.strength
    this.constitution = stats.constitution
    this.dexterity = stats.dexterity
    this.intelligence = stats.intelligence
    this.wisdom = stats.wisdom
    this.charisma = stats.charisma
    this.experience = 0
  }

  speak () {
    console.log('Hello!')
  }
}
class Human extends Character {
  constructor (name, stats = { strength: 2, constitution: 2, dexterity: 4, intelligence: 5, charisma: 4, wisdom: 7 }) {
    super(name, stats)
  }
}

class Bionic extends Character {
  constructor (
    name,
    stats = {
      strength: 6,
      constitution: 6,
      dexterity: 5,
      intelligence: 7,
      widom: 3,
      charisma: 2
    }
  ) {
    super(name, stats)
  }

  laser () {
    return Math.floor(Math.random() * 10) + 1
  }

  speak () {
    console.log('World!')
  }
}

class Alien extends Character {
  constructor (
    name,
    stats = {
      strength: 2,
      constitution: 2,
      dexterity: 3,
      intelligence: 8,
      widom: 8,
      charisma: 3
    }
  ) {
    super(name, stats)
  }
}

class Machine extends Character {
  constructor (
    name,
    stats = {
      strength: 8,
      constitution: 9,
      dexterity: 6,
      intelligence: 4,
      widom: 2,
      charisma: 3
    }
  ) {
    super(name, stats)
  }
}

module.exports = { Character, Human, Bionic, Alien, Machine }
