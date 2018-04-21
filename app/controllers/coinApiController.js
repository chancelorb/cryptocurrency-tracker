const servR = require('../services/coinService');

function getTop(req, res, next) {
  servR.getTopF()
    .then(coin => {
      res.locals.coins = coin
      next()
    })
    .catch(err => {
      next(err)
    })
}





module.exports = {
  getTop,

}
