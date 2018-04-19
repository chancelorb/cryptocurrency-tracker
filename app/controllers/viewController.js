function registerPage(req, res) {
  res.render('register');
}
function loginPage(req, res) {
  res.render('login');
}

module.exports = {
  registerPage,
  loginPage
}
