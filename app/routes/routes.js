const homeRouter = require('express').Router()
const coinApiF = require('../controllers/coinApiController')

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

homeRouter.route('')
  .get(coinApiF.getTop, sendError);

module.exports = homeRouter;
