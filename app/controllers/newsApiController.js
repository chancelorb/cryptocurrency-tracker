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


function getOne(req, res, next) {// busy making the id and reddit conection
  servRN.getOneN(req.params.id)
    .then(coinN => {
      res.locals.coinN = coinN
      next();
    })
    .catch(err => {
      next(err)
    })
}


module.exports = {
  getTopN,
  getOne
}
