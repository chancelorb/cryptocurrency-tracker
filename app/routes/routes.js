const homeRouter = require('express').Router()
const coinApiF = require('../controllers/coinApiController')
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
  .get(coinApiF.getTop, sendError);

// homeRouter.route('/:id')
//   .get(controlF.getOne, controlV.sendOne, sendError);

homeRouter.route('/register')
  .get(controlV.registerPage);

homeRouter.route('/login')
  .get(controlV.loginPage);


module.exports = homeRouter;
