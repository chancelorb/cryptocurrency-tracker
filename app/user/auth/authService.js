const bcrypt = require('bcrypt');
const User   = require('../model/user');

module.exports = {
  /**
   * @func login
   * @desc compares the cleartext password with the hashed version in the DB
   */
  login(req, res, next) {
    const { username, password } = req.body;

    // find a user by username
    User.findOne(username)
      /* we'll need the user in the next call,
      so we'll return it in an array with the password verification */
      .then(user => [user, bcrypt.compare(password, user.password_digest)])
      .then(([user, validPass]) => {
        // bcrypt, for some reason, doesn't reject
        // we have to manually throw an error which will reject the promise
        if (!validPass) {
          throw { message: 'Incorrect password.' };
        }

        // we should have a good password, set the user into the session
        req.session.user = user;
        console.log(req.session.user)
        // call the next handler
        next();
      })
      .catch(err => next(err));
  },

  /**
   * @func logout
   * @description destroys a user's session; logs a user out;
   */
  logout(req, res, next) {
    // destroy session
    // next will be called with either an error or undefined.
    // (negative or positive path)
    req.session.destroy(err => next(err));
  },

  /**
   * @hint: this is an array of middleware functions
   */

  loginRequired(req, res, next) {


    if (!req.session.user) {

      res.redirect('/');
    } else {
      next();
    }
  },

  loginRequired2: [
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ],
};
