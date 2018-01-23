var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('/')
});

router.get('/homepage', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('/homepage')
});

router.get('/users', function (req, res, next) {
  // res.render('index', { title: 'Express' });
  res.send('/users dentro de index')
});

module.exports = router;
