const bcrypt = require('bcrypt');
const User   = require('./model/user');


module.exports = {
  index(req, res, next) {
    return res.json({
      data:    { user: req.user },
      message: 'Put a user profile page on this route',
    });
  },

  create(req, res, next) {
    console.log(req.body.password)
    bcrypt.hash(req.body.password, 11)
      .then(pwdHash => User.save({
        username:        req.body.username,
        email:           req.body.email,
        password_digest: pwdHash,
      }))
      .then(() => next())
      .catch(err => next(err));
  },
};
