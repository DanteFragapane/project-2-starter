import Human from './human.js'
import Machine from './machine.js'

const player = new Human('Dante')
const enemy = new Machine('Piece da Resistance')

// Combat engine
$(document).ready(function () {
  function commitStats () {
    $.ajax({
      url: '/api/commitStats',
      method: 'POST',
      data: player
    })
  }

  function updateStats () {
    $('#player-card-health').html(`Health: ${player.health}`)
    $('#player-card-energy').html(`Energy: ${player.energy}`)
    $('#enemy-card-health').html(`Health: ${enemy.health}`)
    $('#enemy-card-energy').html(`Energy: ${enemy.energy}`)
  }

  // Go ahead and immediately update the stats on the page
  updateStats()

  function theFight () {
    $('#skill-01').click(function () {
      console.log('skill-01')
      const damage = player.rocketKick()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the ROCKET KICK against your enemy for ${player.rocketKick()} damage!`)
        enemy.health -= damage
        if (enemy.health <= 0) {
          $('#battle-log-text-03').html('You have defeated your enemy!!')
        }
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })
    $('#skill-02').click(function () {
      console.log('skill-02')
      const damage = player.kineticBlade()
      if (damage !== 0) {
        $('#battle-log-text').html(
          `You engaged the KINETIC BLADE against your enemy for ${player.kineticBlade()} damage!`
        )
        enemy.health -= damage
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })
    $('#skill-03').click(function () {
      console.log('skill-03')
      const damage = player.scopeShot()
      if (damage !== 0) {
        $('#battle-log-text').html(`You engaged the SCOPE SHOT against your enemy for ${player.scopeShot()} damage!`)
        enemy.health -= damage
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })

    $('#skill-04').click(function () {
      console.log('skill-04')
      const damage = player.mirvGrenade()
      if (damage !== 0) {
        $('#battle-log-text').html(
          `You engaged the MIRV GRENADE against your enemy for ${player.mirvGrenade()} damage!`
        )
        enemy.health -= damage
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })

    $('#skill-05').click(function () {
      console.log('skill-05')
      const damage = player.orbitalStrike()
      if (damage !== 0) {
        $('#battle-log-text').html(
          `You engaged the ORBITAL STRIKE against your enemy for ${player.orbitalStrike()} damage!`
        )
        enemy.health -= damage
        if (enemy.health <= 0) {
        }
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })

    $('#skill-06').click(function () {
      console.log('skill-06')
      const heal = player.stimInjection()
      if (heal !== 0) {
        $('#battle-log-text').html(
          `You engaged the STIM INJECTION to recover some health for ${player.stimInjection()} points reovered!`
        )
        player.health += heal
      } else {
        $('#battle-log-text').html("You don't have enough energy for that!")
      }
      enemyMove()
      updateStats()
    })
  }
  function enemyMove () {
    // If enemy health is half or less => prioritize healing!
    if (enemy.health <= enemy.maxHealth / 2) {
      const addHealth = enemy.repairBots()
      enemy.health += addHealth
      $('#battle-log-text-02').html('Your enemy healed for' + addHealth + ' points health!')
    } else {
    }
  }

  theFight()
})
