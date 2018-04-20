const servRN = require('../services/redditService');

function getTopN(req, res, next) {
  servRN.getTopFN()
    .then(data => {
      res.locals.news = data
      next()
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
  getTopN,

}
