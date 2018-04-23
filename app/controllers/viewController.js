function registerPage(req, res) {
  res.render('auth/register');
}
function loginPage(req, res) {
  res.render('auth/login');
}
function sendOne (req, res) {
  res.render('show', {
    coin: res.locals.data,
    coinN: res.locals.coinN
  })
}
function homePage(req, res) {
  res.render('index', {
    news: res.locals.news,
    coins: res.locals.coins
  })
}
module.exports = {
  registerPage,
  loginPage,
  sendOne,
  homePage
}
