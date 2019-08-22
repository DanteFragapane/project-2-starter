const Alien = require('./public/classes/alien')
const Bionic = require('./public/classes/bionic')
const Human = require('./public/classes/human')
const Machine = require('./public/classes/machine')

const dante = new Human('Dante')

dante.unlock('scopeShot')
console.log(dante.mervGrenade())
