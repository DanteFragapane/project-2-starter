$('form').on('submit', (event) => {
  event.preventDefault()

  const username = $('#username').val().trim()
  const userpword = $('#userpword').val().trim()
  const charactername = $('#charactername').val().trim()
  const charactertype = $('#charactertype').val().trim()
  console.log(username, userpword, charactername, charactertype)

  $.ajax({
    url: '/user/create',
    method: 'POST',
    data: { username, userpword, charactername, charactertype }
  }).then((res) => {
    if (res) {
      window.location.replace('/game')
    }
  })
})
