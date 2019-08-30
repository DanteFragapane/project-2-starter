import Human from './human.js'

const player = new Human('Dante')

// Combat engine
$(document).ready(function () {
  updateStats()
  function updateStats () {
    $('#player-card-health').html(`Health: ${player.health}`)
    $('#player-card-energy').html(`Energy: ${player.energy}`)
  }

  function theFight () {
    $('#skill-01').click(function () {
      //console.log('skill-01')
      const damage = player.rocketKick()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the ROCKET KICK against your enemy for ${player.rocketKick()} damage!`)
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })
    $('#skill-02').click(function () {
     // console.log('skill-02')
      const damage = player.kineticBlade()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the KINETIC BLADE against your enemy for ${player.kineticBlade()} damage!`)
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })
    $('#skill-03').click(function () {
      //console.log('skill-03')
      const damage = player.scopeShot()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the SCOPE SHOT against your enemy for ${player.scopeShot()} damage!`)
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })


    $('#skill-04').click(function () {
      //console.log('skill-04')
      const damage = player.mirvGrenade()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the MIRV GRENADE against your enemy for ${player.mirvGrenade()} damage!`)
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })

    $('#skill-05').click(function () {
      //console.log('skill-05')
      const damage = player.orbitalStrike()
      if (damage !==0) {
        $('#battle-log-text').html('You engaged the ORBITAL STRIKE against your enemy for ${player.orbitalStrike()} damage!')
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })

    $('#skill-06').click(function () {
      //console.log('skill-06')
      const damage = player.stimInjection()
      if (damage !==0) {
        $('#battle-log-text').html('You engaged the STIM INJECTION to recover some health for ${player.stimInjection()} points reovered!')
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      updateStats()
    })
  }

  theFight()
})
