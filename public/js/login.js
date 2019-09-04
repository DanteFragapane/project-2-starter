$('form').on('submit', (event) => {
  event.preventDefault()

  const username = $('#username').val().trim()
  const userpword = $('#userpword').val().trim()
  console.log(username, userpword)

  $.ajax({
    url: '/user/login',
    method: 'POST',
    data: { username, userpword }
  }).then((res) => {
    if (res) {
      window.location.replace('/game')
    }
  })
})
