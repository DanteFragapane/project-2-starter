import Human from './human.js'

const dante = new Human('Dante')

console.log(dante.mirvGrenade())

// Combat engine
$(document).ready(function () {
  function theFight () {
    $('#skill-01').click(function () {
      console.log('skill-01')
    })

    $('#skill-02').click(function () {
      console.log('skill-02')
    })

    $('#skill-03').click(function () {
      console.log('skill-03')
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
