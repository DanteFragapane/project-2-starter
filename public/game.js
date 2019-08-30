import Human from './human.js'

const player = new Human('Dante')

// Combat engine
$(document).ready(function () {
  function updateStats () {
    $('#player-card-text').html(`Energy: ${player.energy}`)
  }

  function theFight () {
    $('#skill-01').click(function () {
      console.log('skill-01')
      const damage = player.kineticBlade()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the ROCKET KICK against your enemy for ${player.rocketKick()} damage!`)
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })

    $('#skill-04').click(function () {
      console.log('skill-04')
    })

    $('#skill-05').click(function () {
      console.log('skill-05')
    })

    $('#skill-06').click(function () {
      console.log('skill-06')
    })
  }

  theFight()
})
