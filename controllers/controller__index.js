const User = require('../models').User

module.exports = {

  get (req, res, next) {
    User.findAll()
      .then(users => {
        res.render('index', {title: 'Express', users});
      })
  }

}