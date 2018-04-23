const authRouter     = require('express').Router();
const AuthService    = require('./AuthService');
const ViewController = require('../UserViewController');
const UserController = require('../UserController');
const controlV = require('../../controllers/viewController')

authRouter.route('/login')
  .get(controlV.loginPage);
  // .get(ViewController.showLoginForm)
  // .post(AuthService.login, ViewController.handleCreateUser);

authRouter.route('/register')
  .get(controlV.registerPage);
  // .post(usercontroller.create, AuthService.login, controlV.handleCreateUser)
  // .get(ViewController.showRegisterForm)
  // .post(UserController.create, AuthService.login, ViewController.handleCreateUser);

authRouter.get('/logout', AuthService.logout, ViewController.handleLogout);

authRouter.use((err, req, res, next) => {
  console.error(err);
  res.json({ error: err });
});
module.exports = authRouter;
