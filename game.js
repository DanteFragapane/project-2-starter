const Alien = require('./public/classes/alien')
const Bionic = require('./public/classes/bionic')
const Human = require('./public/classes/human')
const Machine = require('./public/classes/machine')

const dante = new Human('Dante')

console.log(dante)
console.log(dante.scopeShot())
dante.unlock('scopeShot')
console.log(dante.scopeShot())
