function registerPage(req, res) {
  res.render('register');
}
function loginPage(req, res) {
  res.render('login');
}
function sendOne (req, res) {
  res.render('show', {
    coin: res.locals.data

  })
}

module.exports = {
  registerPage,
  loginPage,
  sendOne
}
