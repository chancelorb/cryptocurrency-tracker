const servR = require('../services/coinService');

function getTop(req, res, next) {
  servR.getTopF()
    .then(coin => {
      res.render('index', {
        coins: coin
      })
    })
    .catch(err => {
      next(err)
    })
}


// .then (data => {
//   data.forEach((naam) => {
//     console.log(`${naam.id}, ${naam.percent_change_24h}`)
//   })
//
// })


module.exports = {
  getTop,

}
