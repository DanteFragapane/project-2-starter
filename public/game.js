import Human from './human.js'
import Machine from './machine.js'

const player = new Human("Stalker")
const enemy = new Machine("Fer-de-Lance")

// Combat engine
$(document).ready(function () {
  updateStats()
  player.energy +=2
  enemy.energy +=2
  function commitStats () {
    $.ajax({
      url: '/api/commitStats',
      method: 'POST',
      data: player
    })
  }

  function updateStats () {

  commitStats()
    $('#player-card-health').html(`Health: ${player.health}`)
    $('#player-card-energy').html(`Energy: ${player.energy}`)
    $('#enemy-card-health').html(`Health: ${enemy.health}`)
    $('#enemy-card-energy').html(`Energy: ${enemy.energy}`)
  }

  function theFight() {
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
          enemyDies()
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

  function enemyMove() {
    // If enemy health is half or less => prioritize healing!
    if (enemy.health <= enemy.maxHealth / 2 && enemy.energy >= 3) {
      const addHealth = enemy.repairBots();
      enemy.health += addHealth;
      console.log("+health " + addHealth)
      $('#battle-log-text-02').html("Your enemy healed for" + addHealth + " points health!")
    } else

      // If enemy.energy >=6 then deathbringer
      if (enemy.energy >= 6) {
        const damage = enemy.deathbringer()
        $('#battle-log-text-02').html("Your Enemy slashed your for " + damage + " of damage")
        console.log("death " + damage)
        player.health -= damage
      }
    else
      // If enemy.energy >=3 then pistonjab
      if (enemy.energy >= 3) {
        const damage = enemy.pistonJab()

        $('#battle-log-text-02').html("Your Enemy pummelled you for " + damage + " of damage")
        player.health -= damage
        console.log("piston " + damage)
      }
    else
      // If enemy.energy >= 2 then railgun
      if (enemy.energy >= 2) {
        const damage = enemy.railGun()
        $('#battle-log-text-02').html("Your Enemy blasted you for " + damage + " of damage")
        console.log("RG " + damage)
        player.health -= damage
      }
  }



  function enemyDies() {
    $('#battle-log-text-03').html("Congratulations!! You have vanquished your foe!!")
    console.log(progression.json)
  }
  theFight()
})