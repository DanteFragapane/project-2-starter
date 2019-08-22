// Main Class
class Character {
  constructor (name, stats) {
    this.name = name
    this.strength = stats.strength
    this.constitution = stats.constitution
    this.dexterity = stats.dexterity
    this.intelligence = stats.intelligence
    this.wisdom = stats.wisdom
    this.utility = stats.utility
    this.energy = 10
    this.health = 50
    this.experience = 0
    this.level = 1
  }

  increaseStat (stat, amt) {
    switch (stat) {
      case 'strength':
        this.strength += amt
        break
      case 'constitution':
        this.constitution += amt
        break
      case 'dexterity':
        this.dexterity += amt
        break
      case 'intelligence':
        this.intelligence += amt
        break
      case 'wisdom':
        this.wisdom += amt
        break
      case 'charisma':
        this.utility += amt
        break
      default:
        break
    }
  }

  levelUp () {
    this.level++
  }

  speak () {
    console.log('Hello!')
  }
}

// Helper function for random integers
function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = { Character, getRandomInt }
