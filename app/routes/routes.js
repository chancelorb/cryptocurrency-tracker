const homeRouter = require('express').Router()
const coinApiF = require('../controllers/coinApiController')
const newsApiF = require('../controllers/newsApiController')
const controlV = require('../controllers/viewController')
const controlF = require('../controllers/controller')

function sendError(err, req, res, next) {
  console.log('I send errors');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

homeRouter.route('/')
  .get(coinApiF.getTop, newsApiF.getTopN,controlV.homePage, sendError);

homeRouter.route('/register')
  .get(controlV.registerPage);

homeRouter.route('/login')
  .get(controlV.loginPage);

homeRouter.route('/:id')
  .get(controlF.getOne, controlV.sendOne, sendError);

module.exports = homeRouter;
