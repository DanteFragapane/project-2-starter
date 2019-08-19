class Player {
  constructor (name, stats = { health: 50, strength: 5, defense: 5 }) {
    this.name = name
    this.health = stats.health
    this.strength = stats.strength
    this.defense = stats.defense
  }

  takeDamage (amt) {
    this.health -= amt
  }
}

module.exports = Player
