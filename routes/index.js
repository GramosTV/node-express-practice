var express = require('express');
var router = express.Router();
const login = 'admin'
const password = '123'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Main Page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in' });
});
router.post('/login', function(req, res, next) {
  const body = req.body;
  if(body.login === login && body.password === password) {
    req.session.admin = 1;
    
    res.redirect('/admin')
  } else {
    res.redirect('/login');
  }

});

module.exports = router;
