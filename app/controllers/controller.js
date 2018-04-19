const servR = require('../services/coinService');

function getOne(req, res, next) {
  servR.getOneC(req.params.id)
    .then(data => {
      res.locals.data = data
      next();
    })
    .catch(err => {
      next(err)
    })
}

module.exports = {
  getOne,

}
