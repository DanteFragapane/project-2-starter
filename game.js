const Ship = require('./public/classes/ship')

const ship = new Ship('Dante', { health: 50, strength: 10, defense: 10 })

console.log(ship.getHealth)
