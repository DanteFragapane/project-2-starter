import Human from './human.js'

//const dante = new Human('Dante')

console.log(dante.mirvGrenade())

// Combat engine
$(document).ready(function () {
  function theFight () {
    $('#skill-01').click(function () {
      console.log('skill-01')
    })

    $("#skill-01").click(function () {
        console.log("skill-01");
     
       $("#battle-log-text").html("You engaged the ROCKET KICK against " + "enemy for" + human.rocketKick() +" damage")

        
    });

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
