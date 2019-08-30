$('form').on('submit', (event) => {
  event.preventDefault()

  const username = $('#username').val().trim()
  const userpword = $('#userpword').val().trim()
  console.log(username, userpword)
})
